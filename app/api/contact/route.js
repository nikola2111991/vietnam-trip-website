import { Resend } from 'resend'

export async function POST(request) {
  try {
    const { name, email, phone, message, travelers } = await request.json()

    // Validate required fields
    if (!name || !email) {
      return Response.json(
        { error: 'Ime i email su obavezni' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return Response.json(
        { error: 'Email servis nije konfigurisan. Kontaktirajte nas direktno na hello@queenofcompass.com' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Email content for Queen of Compass
    const adminHtmlContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4a5240;">Nova poruka sa sajta Queen of Compass</h2>

  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 150px;">Ime i prezime:</td>
      <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
      <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}">${email}</a></td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Telefon:</td>
      <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${phone || 'Nije naveden'}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Broj putnika:</td>
      <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${travelers}</td>
    </tr>
  </table>

  <div style="background-color: #f5f5f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #4a5240;">Poruka:</h3>
    <p style="white-space: pre-wrap;">${message || 'Bez poruke'}</p>
  </div>

  <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
  <p style="color: #888; font-size: 12px;">
    Ova poruka je automatski poslata sa vietnam-trip-website.vercel.app
  </p>
</div>
`

    // Confirmation email for customer
    const customerHtmlContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="text-align: center; padding: 20px 0;">
    <h1 style="color: #4a5240; margin: 0;">Queen of Compass</h1>
    <p style="color: #b8860b; margin: 5px 0;">Autentični Vijetnam</p>
  </div>

  <h2 style="color: #4a5240;">Poštovani/a ${name},</h2>

  <p>Hvala vam što ste nas kontaktirali!</p>

  <p>Primili smo vašu poruku i javićemo vam se u roku od 24 sata sa svim detaljima o putovanju i uslovima rezervacije.</p>

  <div style="background-color: #f5f5f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #4a5240;">Vaši podaci:</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="padding: 5px 0;"><strong>Email:</strong> ${email}</li>
      <li style="padding: 5px 0;"><strong>Telefon:</strong> ${phone || 'Nije naveden'}</li>
      <li style="padding: 5px 0;"><strong>Broj putnika:</strong> ${travelers}</li>
    </ul>

    ${message ? `
    <h4 style="color: #4a5240;">Vaša poruka:</h4>
    <p style="white-space: pre-wrap;">${message}</p>
    ` : ''}
  </div>

  <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;" />

  <div style="text-align: center;">
    <p style="color: #4a5240; font-weight: bold; margin-bottom: 5px;">Srdačan pozdrav,</p>
    <p style="color: #b8860b; font-weight: bold; font-size: 18px; margin: 5px 0;">Bojan & Irena</p>
    <p style="color: #4a5240; margin: 5px 0;">Queen of Compass</p>
    <p style="color: #888; font-size: 14px;">Da Nang, Vijetnam</p>
    <p style="margin-top: 15px;">
      <a href="https://instagram.com/queen.of.compass" style="color: #b8860b; text-decoration: none;">@queen.of.compass</a>
    </p>
  </div>
</div>
`

    // Send email to Queen of Compass (hello@queenofcompass.com)
    const { error: adminError } = await resend.emails.send({
      from: 'Queen of Compass <onboarding@resend.dev>',
      to: ['hello@queenofcompass.com'],
      subject: `Nova rezervacija - ${name}`,
      html: adminHtmlContent,
      replyTo: email,
    })

    if (adminError) {
      console.error('Admin email error:', adminError)
      return Response.json(
        { error: 'Greška pri slanju emaila. Molimo pokušajte ponovo.' },
        { status: 500 }
      )
    }

    // Send confirmation email to customer
    const { error: customerError } = await resend.emails.send({
      from: 'Queen of Compass <onboarding@resend.dev>',
      to: [email],
      subject: 'Hvala na interesovanju - Queen of Compass',
      html: customerHtmlContent,
    })

    if (customerError) {
      console.error('Customer email error:', customerError)
      // Don't fail if only customer email fails - admin already received it
    }

    return Response.json({ success: true, message: 'Email uspešno poslat' })
  } catch (error) {
    console.error('Email error:', error)
    return Response.json(
      { error: 'Greška pri slanju emaila. Molimo pokušajte ponovo.' },
      { status: 500 }
    )
  }
}
