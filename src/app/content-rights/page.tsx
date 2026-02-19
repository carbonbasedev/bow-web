import type { Metadata } from "next";
import Link from "next/link";
import LangTabs from "../components/LangTabs";

export const metadata: Metadata = {
  title: "Content Rights – Bow App",
  description:
    "Understand how user-generated content is handled in Bow, including ownership, licensing, visibility, and removal.",
};

function ContentRightsEN() {
  return (
    <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">
      <p className="text-sm text-gray-400">Last updated: February 2026</p>

      <p>
        This document explains how user-generated content is handled in Bow.
      </p>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Ownership
        </h2>
        <p>
          You keep ownership of all content you create or upload, including
          messages, photos, and media.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          License to Bow
        </h2>
        <p>
          By posting content, you allow Bow to host and display it only to
          operate the app and its features.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Visibility
        </h2>
        <p>
          Content may be visible to invited participants or publicly if enabled
          by the celebration owner.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          User Responsibility
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>No illegal or offensive content</li>
          <li>No copyright or privacy violations</li>
          <li>No malicious software</li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Removal
        </h2>
        <p>
          You may delete your content or account at any time, subject to legal
          requirements.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Contact
        </h2>
        <p>
          Email:{" "}
          <a
            href="mailto:legal@joinbow.app"
            className="text-bow-purple hover:underline"
          >
            legal@joinbow.app
          </a>
        </p>
      </section>
    </div>
  );
}

function ContentRightsES() {
  return (
    <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">
      <p className="text-sm text-gray-400">Última actualización: febrero de 2026</p>

      <p>
        Este documento explica cómo se gestiona el contenido generado por los
        usuarios en Bow.
      </p>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Propiedad
        </h2>
        <p>
          Conservás la propiedad de todo el contenido que creás o subís,
          incluidos mensajes, fotos y archivos multimedia.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Licencia a Bow
        </h2>
        <p>
          Al publicar contenido, le permitís a Bow alojarlo y mostrarlo
          únicamente para operar la app y sus funciones.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Visibilidad
        </h2>
        <p>
          El contenido puede ser visible para los participantes invitados o
          públicamente si el organizador de la celebración lo habilita.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Responsabilidad del usuario
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Sin contenido ilegal u ofensivo</li>
          <li>Sin violaciones de derechos de autor o privacidad</li>
          <li>Sin software malicioso</li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Eliminación
        </h2>
        <p>
          Podés eliminar tu contenido o cuenta en cualquier momento, sujeto a
          los requisitos legales.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          Contacto
        </h2>
        <p>
          Email:{" "}
          <a
            href="mailto:legal@joinbow.app"
            className="text-bow-purple hover:underline"
          >
            legal@joinbow.app
          </a>
        </p>
      </section>
    </div>
  );
}

export default function ContentRightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-gray-100 px-6 py-4 md:px-12">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/bow_logo.svg" alt="Bow" className="h-7 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            ← Volver
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-12">
        {/* Tabbed content */}
        <LangTabs
          enContent={<ContentRightsEN />}
          esContent={<ContentRightsES />}
          enTitle="Content Rights"
          esTitle="Derechos de Contenido"
          label="Legal"
        />

        {/* Related */}
        <div className="border-t border-gray-100 mt-16 pt-10">
          <p className="text-sm text-gray-500 mb-3 font-medium">Related</p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-bow-purple hover:underline font-medium text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-bow-purple hover:underline font-medium text-sm"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
