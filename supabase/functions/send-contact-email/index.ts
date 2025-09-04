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
  selectedService?: string;
  // Garage specific fields
  garageSize?: string;
  location?: string;
  foundationType?: string;
  roofType?: string;
  doorType?: string;
  additionalFeatures?: string;
  // Bungalow specific fields
  bungalowSize?: string;
  floorPlan?: string;
  utilities?: string;
  exteriorFinish?: string;
  // Hall specific fields
  hallSize?: string;
  usage?: string;
  buildingHeight?: string;
  hallFoundationType?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ContactEmailRequest = await req.json();
    const { 
      firstName, lastName, email, phone, description, contactPreference, selectedService,
      garageSize, location, foundationType, roofType, doorType, additionalFeatures,
      bungalowSize, floorPlan, utilities, exteriorFinish,
      hallSize, usage, buildingHeight, hallFoundationType
    } = requestData;

    console.log("Sending contact email:", { firstName, lastName, email, contactPreference, selectedService });

    // Create service-specific details
    let serviceDetails = '';
    if (selectedService) {
      serviceDetails += `<p><strong>Usluga:</strong> ${selectedService}</p>`;
      
      if (selectedService === 'Montažne garaže' && (garageSize || location || foundationType || roofType || doorType || additionalFeatures)) {
        serviceDetails += '<h3>Detalji garaže:</h3>';
        if (garageSize) serviceDetails += `<p><strong>Veličina:</strong> ${garageSize}</p>`;
        if (location) serviceDetails += `<p><strong>Lokacija:</strong> ${location}</p>`;
        if (foundationType) serviceDetails += `<p><strong>Tip temelja:</strong> ${foundationType}</p>`;
        if (roofType) serviceDetails += `<p><strong>Tip krova:</strong> ${roofType}</p>`;
        if (doorType) serviceDetails += `<p><strong>Tip vrata:</strong> ${doorType}</p>`;
        if (additionalFeatures) serviceDetails += `<p><strong>Dodatne opcije:</strong> ${additionalFeatures}</p>`;
      }
      
      if (selectedService === 'Bungalovi ili vikendice' && (bungalowSize || floorPlan || utilities || exteriorFinish)) {
        serviceDetails += '<h3>Detalji bungalova/vikendice:</h3>';
        if (bungalowSize) serviceDetails += `<p><strong>Veličina:</strong> ${bungalowSize}</p>`;
        if (floorPlan) serviceDetails += `<p><strong>Osnova:</strong> ${floorPlan}</p>`;
        if (utilities) serviceDetails += `<p><strong>Instalacije:</strong> ${utilities}</p>`;
        if (exteriorFinish) serviceDetails += `<p><strong>Spoljašnja završnica:</strong> ${exteriorFinish}</p>`;
      }
      
      if (selectedService === 'Hale' && (hallSize || usage || buildingHeight || hallFoundationType)) {
        serviceDetails += '<h3>Detalji hale:</h3>';
        if (hallSize) serviceDetails += `<p><strong>Veličina:</strong> ${hallSize}</p>`;
        if (usage) serviceDetails += `<p><strong>Namena:</strong> ${usage}</p>`;
        if (buildingHeight) serviceDetails += `<p><strong>Visina objekta:</strong> ${buildingHeight}</p>`;
        if (hallFoundationType) serviceDetails += `<p><strong>Tip temelja:</strong> ${hallFoundationType}</p>`;
      }
    }

    // Send email to your business address
    const emailResponse = await resend.emails.send({
      from: "Beriko Montage <onboarding@resend.dev>",
      to: ["marko.srnec5@gmail.com", "beriko@beriko.com"],
      subject: `Novi upit - ${firstName} ${lastName}${selectedService ? ` (${selectedService})` : ''}`,
      html: `
        <h2>Novi upit sa web stranice</h2>
        <p><strong>Ime:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Preferirani kontakt:</strong> ${contactPreference}</p>
        ${serviceDetails}
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
      subject: `Hvala na upitu - Beriko Montage${selectedService ? ` (${selectedService})` : ''}`,
      html: `
        <h2>Hvala ${firstName}!</h2>
        <p>Primili smo vaš upit${selectedService ? ` za ${selectedService.toLowerCase()}` : ''} i kontaktiraćemo vas u najkraćem mogućem roku.</p>
        ${selectedService ? `<p><strong>Usluga:</strong> ${selectedService}</p>` : ''}
        <p><strong>Vaš upit:</strong></p>
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