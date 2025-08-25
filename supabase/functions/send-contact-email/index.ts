import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, phone, email, description, contactPreference } = await req.json()

    // Create email content
    const contactPreferenceText = {
      'phone': 'Telefon',
      'email': 'Email',
      'both': 'I telefon i email'
    }[contactPreference] || 'Email'

    const emailContent = `
      <h2>Novi upit sa web stranice</h2>
      <p><strong>Ime:</strong> ${firstName}</p>
      <p><strong>Prezime:</strong> ${lastName}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Preferirani način kontakta:</strong> ${contactPreferenceText}</p>
      
      <h3>Opis usluge:</h3>
      <p>${description}</p>
      
      <hr>
      <p><em>Ovaj email je automatski poslan sa vaše web stranice.</em></p>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Web stranica <noreply@beriko-montage.com>',
        to: ['marko.srnec5@gmail.com'],
        subject: `Novi upit od ${firstName} ${lastName}`,
        html: emailContent,
        reply_to: email,
      }),
    })

    if (res.ok) {
      const data = await res.json()
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    } else {
      const error = await res.text()
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})