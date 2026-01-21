'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  varying vec2 vUv;
  varying vec3 vPosition;

  #define PI 3.14159265359

  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    for (int i = 0; i < 5; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }

    return value;
  }

  void main() {
    vec2 uv = vUv;
    vec2 mouse = uMouse * 0.5 + 0.5;

    // Create flowing noise
    float noise1 = fbm(vec3(uv * 3.0, uTime * 0.15));
    float noise2 = fbm(vec3(uv * 2.0 + noise1 * 0.5, uTime * 0.1));

    // Mouse influence
    float dist = length(uv - mouse);
    float mouseInfluence = smoothstep(0.5, 0.0, dist) * 0.3;

    // Combine noises
    float finalNoise = noise1 * 0.5 + noise2 * 0.5 + mouseInfluence;

    // Color palette - deep purples and blues
    vec3 color1 = vec3(0.012, 0.012, 0.02); // Deep void
    vec3 color2 = vec3(0.05, 0.02, 0.1);    // Dark purple
    vec3 color3 = vec3(0.1, 0.15, 0.3);     // Midnight blue
    vec3 color4 = vec3(0.23, 0.36, 0.96);   // Electric blue
    vec3 color5 = vec3(0.55, 0.36, 0.96);   // Cyber purple

    // Create gradient based on noise
    vec3 color = color1;
    color = mix(color, color2, smoothstep(-0.5, 0.0, finalNoise));
    color = mix(color, color3, smoothstep(0.0, 0.3, finalNoise));
    color = mix(color, color4, smoothstep(0.3, 0.6, finalNoise) * 0.15);
    color = mix(color, color5, smoothstep(0.5, 0.8, finalNoise) * 0.1);

    // Add subtle glow at mouse position
    color += vec3(0.1, 0.05, 0.2) * mouseInfluence * 2.0;

    // Vignette
    vec2 vignetteUv = uv * (1.0 - uv.yx);
    float vignette = vignetteUv.x * vignetteUv.y * 15.0;
    vignette = pow(vignette, 0.25);
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`

function ShaderPlane() {
  const meshRef = useRef()
  const { viewport, mouse } = useThree()

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  }), [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime
      meshRef.current.material.uniforms.uMouse.value.lerp(
        new THREE.Vector2(mouse.x, mouse.y),
        0.05
      )
    }
  })

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

function ShaderCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: false }}
    >
      <ShaderPlane />
    </Canvas>
  )
}

// Fallback for non-WebGL devices
function FallbackBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(15, 15, 26, 1) 0%, rgba(3, 3, 5, 1) 100%)
        `
      }}
    />
  )
}

export default function ShaderBackground() {
  const [hasWebGL, setHasWebGL] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setHasWebGL(!!gl)
    } catch (e) {
      setHasWebGL(false)
    }

    // Check for mobile
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Use simpler background on mobile for performance
  if (!hasWebGL || isMobile) {
    return <FallbackBackground />
  }

  return (
    <div className="absolute inset-0">
      <ShaderCanvas />
    </div>
  )
}
