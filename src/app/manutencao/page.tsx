import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle, Wrench } from "lucide-react";

import { site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Site em manutenção",
  description:
    "O site da Longhini Desenvolvimento Industrial está temporariamente em manutenção.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0f] text-slate-50">
      <section className="relative flex min-h-screen items-center px-6 py-10 sm:px-8">
        <div className="absolute inset-0">
          <Image
            src="/Sections/Section1/longhiniPicture.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,15,0.96)_0%,rgba(11,11,15,0.86)_45%,rgba(11,11,15,0.72)_100%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/35 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase text-orange-200">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              Pausa temporária
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              O site da Longhini está em manutenção.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Estamos realizando uma atualização breve. A página volta ao ar
              em poucos dias, com a mesma atenção aos projetos industriais,
              engenharia e desenvolvimento de soluções sob medida.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.links.whatsapp}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#0b0b0f]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Falar pelo WhatsApp
              </a>

              <a
                href={site.links.email}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-500/70 px-5 py-3 text-sm font-bold text-white transition hover:border-sky-300 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-[#0b0b0f]"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Enviar e-mail
              </a>
            </div>
          </div>

          <aside
            className="border-l border-slate-700/80 pl-6 text-sm leading-7 text-slate-300 lg:pl-10"
            aria-label="Informações de contato"
          >
            <p className="text-xs font-semibold uppercase text-sky-200">
              {site.brandName}
            </p>
            <p className="mt-3 text-2xl font-bold text-white">
              Desenvolvimento Industrial
            </p>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="font-semibold text-slate-100">Atendimento</dt>
                <dd>{site.contact.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">E-mail</dt>
                <dd>{site.contact.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Localização</dt>
                <dd>{site.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
