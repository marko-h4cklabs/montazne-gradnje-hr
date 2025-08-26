import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  contactPreference: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, description, contactPreference }: ContactEmailRequest = await req.json();

    console.log("Sending contact email:", { firstName, lastName, email, contactPreference });

    // Send email to your business address
    const emailResponse = await resend.emails.send({
      from: "Beriko Montage <onboarding@resend.dev>",
      to: ["marko.srnec5@gmail.com"],
      subject: `Nova upit - ${firstName} ${lastName}`,
      html: `
        <h2>Novi upit sa web stranice</h2>
        <p><strong>Ime:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Preferirani kontakt:</strong> ${contactPreference}</p>
        <h3>Opis posla:</h3>
        <p>${description}</p>
        <hr>
        <p><em>Ovaj email je poslat sa web stranice Beriko Montage</em></p>
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "Beriko Montage <onboarding@resend.dev>",
      to: [email],
      subject: "Hvala na upitu - Beriko Montage",
      html: `
        <h2>Hvala ${firstName}!</h2>
        <p>Primili smo vaš upit i kontaktiraćemo vas u najkraćem mogućem roku.</p>
        <p>Vaš upit:</p>
        <blockquote style="background: #f5f5f5; padding: 10px; border-left: 4px solid #007bff;">
          ${description}
        </blockquote>
        <p>Srdačan pozdrav,<br>Beriko Montage tim</p>
      `,
    });

    console.log("Emails sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);