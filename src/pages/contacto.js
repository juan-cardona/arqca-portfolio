import React from "react";

import Layout from '../containers/layout'
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <form className="p-8"  method="POST" data-netlify="true">
          <h2 className="mb-8 leading-loose">
            Contáctanos y te ayudaremos a escoger el mejor plan para tus necesidades{` `}
            <a
              className="font-bold text-gray-700 no-underline"
            >
              No se te cobrara nada en este momento 
            </a>
            .
          </h2>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            Nombre
          </label>

          <input
            className="w-full mb-6 rounded-md border-gray-800"
            id="first-name"
            placeholder="Mario"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Apellido
          </label>

          <input
            className="w-full mb-6 rounded-md border-gray-800"
            id="last-name"
            placeholder="Martínez"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Cuentanos sobre tu producto
          </label>

          <textarea
            className="w-full mb-6 rounded-md border-gray-800"
            id="message"
            placeholder="Di algo sobre tu producto..."
            rows="8"
          />

          <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
