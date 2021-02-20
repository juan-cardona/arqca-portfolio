import React from "react";

import Layout from '../containers/layout'
import SEO from "../components/seo";


function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
            <div className="mx-auto container">
                <div className="px-6 lg:px-12 py-6 lg:py-12 relative rounded-3xl overflow-hidden">
 
                    <div className="relative z-10">
                        <h1 className="text-2xl lg:text-4xl text-black font-bold f-f-l pb-12">¿Quiénes somos?</h1>

                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Misión</h2>
                        <p className="text-sm pb-7"> Visit our Start your order page and fill out the form. When submitted, you’ll receive a reply with a unique reference number and detailed shipping instructions. If you would like a quote before you ship you can send us the details of your project and we’ll email you back a quote.</p>

                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Visión</h2>
                        <p className="text-sm pb-7"> Pack up your products and ship them to our Las Vegas studio. It’s a good idea to try and select the best products if you can, trying to avoid dings, dents, and scratches. Of course, pack each item securely so they don’t get damaged in transit. Enclose your reference number inside the box so we can let you know when your products arrive.</p>

                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Valores</h2>
                        <p className="text-sm pb-7"> When your products arrive in our studio we’ll contact you to let you know. Now that we have your products on-hand, we will go over the details of your order and discuss with you any questions or concerns you may have before we start. Once payment is processed the fun begins and we’ll start shooting your photos! </p>
                    </div>
                </div>
            </div>
      </section>

      <section className="flex flex-col items-center md:flex-row">
            <div className="mx-auto container">
                <div className="px-6 lg:px-12 py-6 lg:py-12 relative rounded-3xl overflow-hidden">
 
                    <div className="relative z-10">
                        <h1 className="text-2xl lg:text-4xl text-black font-bold f-f-l pb-12">Preguntas frecuentes</h1>
                        
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Precio</h2>
                        <p className="text-sm pb-7"> Visit our Start your order page and fill out the form. When submitted, you’ll receive a reply with a unique reference number and detailed shipping instructions. If you would like a quote before you ship you can send us the details of your project and we’ll email you back a quote.</p>
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Envío</h2>
                        <p className="text-sm pb-7"> Pack up your products and ship them to our Las Vegas studio. It’s a good idea to try and select the best products if you can, trying to avoid dings, dents, and scratches. Of course, pack each item securely so they don’t get damaged in transit. Enclose your reference number inside the box so we can let you know when your products arrive.</p>
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Proceso</h2>
                        <p className="text-sm pb-7"> When your products arrive in our studio we’ll contact you to let you know. Now that we have your products on-hand, we will go over the details of your order and discuss with you any questions or concerns you may have before we start. Once payment is processed the fun begins and we’ll start shooting your photos! </p>
                        <h2 className="text-xl font-semibold f-f-r  text-black pb-3 ">Entrega</h2>
                        <p className="text-sm pb-7"> Once your photos are ready and meet our standards for delivery we’ll post them in a private online gallery where you can view and download them immediately. We keep your photos available online so you can come back and download them any time. If you’d like to make any changes or additions (additional charge may apply) let us know and we’ll make them before shipping your products back.
When the project is complete, we’ll carefully pack up and ship your products back to you. Shipping fees can be included on your invoice or charged to your UPS or FedEx account.</p>
                    </div>
                </div>
            </div>
      </section>

      
    </Layout>
  );
}

export default AboutPage;


