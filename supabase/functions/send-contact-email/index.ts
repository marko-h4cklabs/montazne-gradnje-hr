import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

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
  selectedService?: string;
  mjestoPrebivalidta?: string;
  // Object dimensions
  width?: string;
  depth?: string;
  height?: string;
  // Material and color selections
  roofType?: string;
  roofMaterial?: string;
  roofColor?: string;
  wallMaterial?: string;
  wallColor?: string;
  drainage?: string;
  garageDoorColor?: string;
  garageDoorSize?: string;
  pvcDoorType?: string;
  pvcDoorColor?: string;
  pvcWindowSize?: string;
  pvcWindowColor?: string;
  additionalInfo?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ContactEmailRequest = await req.json();
    const { 
      firstName, lastName, email, phone, selectedService,
      mjestoPrebivalidta, width, depth, height,
      roofType, roofMaterial, roofColor, wallMaterial, wallColor,
      drainage, garageDoorColor, garageDoorSize, pvcDoorType,
      pvcDoorColor, pvcWindowSize, pvcWindowColor, additionalInfo
    } = requestData;

    console.log("Sending contact email:", { firstName, lastName, email, selectedService });

    // Create detailed information section
    let detailsSection = '';
    
    // Basic information
    if (mjestoPrebivalidta) {
      detailsSection += `<p><strong>Mjesto Prebivališta:</strong> ${mjestoPrebivalidta}</p>`;
    }
    
    // Object dimensions
    if (width || depth || height) {
      detailsSection += '<h3>Podaci I mjere objekta:</h3>';
      if (width) detailsSection += `<p><strong>Širina:</strong> ${width} cm</p>`;
      if (depth) detailsSection += `<p><strong>Dubina:</strong> ${depth} cm</p>`;
      if (height) detailsSection += `<p><strong>Visina:</strong> ${height} cm</p>`;
    }
    
    // Technical specifications
    const hasSpecs = roofType || roofMaterial || roofColor || wallMaterial || wallColor || 
                    drainage || garageDoorColor || garageDoorSize || pvcDoorType || 
                    pvcDoorColor || pvcWindowSize || pvcWindowColor;
    
    if (hasSpecs) {
      detailsSection += '<h3>Tehnički podaci:</h3>';
      if (roofType) detailsSection += `<p><strong>Vrsta krovova i padina:</strong> ${roofType}</p>`;
      if (roofMaterial) detailsSection += `<p><strong>Krov:</strong> ${roofMaterial}</p>`;
      if (roofColor) detailsSection += `<p><strong>Boja Krova:</strong> ${roofColor}</p>`;
      if (wallMaterial) detailsSection += `<p><strong>Zid:</strong> ${wallMaterial}</p>`;
      if (wallColor) detailsSection += `<p><strong>Boja Zida:</strong> ${wallColor}</p>`;
      if (drainage) detailsSection += `<p><strong>Odvodnja krovne vode:</strong> ${drainage}</p>`;
      if (garageDoorColor) detailsSection += `<p><strong>Garažna sekcijska vrata:</strong> ${garageDoorColor}</p>`;
      if (garageDoorSize) detailsSection += `<p><strong>Garažna vrata dimenzije:</strong> ${garageDoorSize}</p>`;
      if (pvcDoorType) detailsSection += `<p><strong>PVC vrata vrsta:</strong> ${pvcDoorType}</p>`;
      if (pvcDoorColor) detailsSection += `<p><strong>PVC vrata boja:</strong> ${pvcDoorColor}</p>`;
      if (pvcWindowSize) detailsSection += `<p><strong>PVC prozor dimenzije:</strong> ${pvcWindowSize}</p>`;
      if (pvcWindowColor) detailsSection += `<p><strong>PVC prozor boja:</strong> ${pvcWindowColor}</p>`;
    }
    
    if (additionalInfo) {
      detailsSection += `<h3>Dodatne informacije:</h3><p>${additionalInfo}</p>`;
    }

    // Send email to your business addresses (individually for better tracking)
    const businessEmails = ["marko.srnec5@gmail.com", "beriko@beriko.com"];
    const emailContent = {
      from: "Beriko Montage <noreply@mail.beriko.com>",
      subject: `Novi upit - ${firstName} ${lastName}${selectedService ? ` (${selectedService})` : ''}`,
      html: `
        <h2>Novi upit sa web stranice</h2>
        <p><strong>Ime:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        ${selectedService ? `<p><strong>Usluga:</strong> ${selectedService}</p>` : ''}
        ${detailsSection}
        <hr>
        <p><em>Ovaj email je poslat sa web stranice Beriko Montage</em></p>
      `,
    };

    // Send individual emails to each business address with rate limiting
    const emailResponses = [];
    for (let i = 0; i < businessEmails.length; i++) {
      const email = businessEmails[i];
      try {
        const response = await resend.emails.send({
          ...emailContent,
          to: [email],
        });
        emailResponses.push(response);
        
        // Add delay between emails to respect rate limit (2 requests per second max)
        if (i < businessEmails.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 600)); // 600ms delay
        }
      } catch (error) {
        console.error(`Failed to send email to ${email}:`, error);
        emailResponses.push({ error });
      }
    }
    
    const emailResponse = emailResponses;

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "Beriko Montage <noreply@mail.beriko.com>",
      to: [email],
      subject: `Hvala na upitu - Beriko Montage${selectedService ? ` (${selectedService})` : ''}`,
      html: `
        <h2>Hvala ${firstName}!</h2>
        <p>Primili smo vaš upit${selectedService ? ` za ${selectedService.toLowerCase()}` : ''} i kontaktiraćemo vas u najkraćem mogućem roku.</p>
        ${selectedService ? `<p><strong>Usluga:</strong> ${selectedService}</p>` : ''}
        ${detailsSection ? `<div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 15px 0;">${detailsSection}</div>` : ''}
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