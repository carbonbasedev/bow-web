import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support – Bow App",
  description:
    "Get help with Bow. Contact support for account issues, celebrations, payments, or any questions about the app.",
};

export default function SupportPage() {
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
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-bow-purple mb-3">
            Help Center
          </p>
          <h1 className="font-serif text-4xl font-black text-gray-900 md:text-5xl leading-tight mb-4">
            Support
          </h1>
          <p className="text-lg text-gray-600">Get help with Bow</p>
        </div>

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed mb-12 text-base">
          Need assistance with Bow? We&apos;re here to help with account issues,
          celebrations, payments, or any questions about the app.
        </p>

        {/* Contact support */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
            Contact support
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            For general support, feature questions, or technical issues:
          </p>
          <a
            href="mailto:support@joinbow.app"
            className="inline-flex items-center gap-2 text-bow-purple font-medium hover:underline text-base"
          >
            support@joinbow.app
          </a>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-100 my-10" />

        {/* Other contacts */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
            Other contacts
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <span className="text-gray-500">Privacy: </span>
              <a
                href="mailto:privacy@joinbow.app"
                className="text-bow-purple hover:underline"
              >
                privacy@joinbow.app
              </a>
            </li>
            <li>
              <span className="text-gray-500">Legal / content: </span>
              <a
                href="mailto:legal@joinbow.app"
                className="text-bow-purple hover:underline"
              >
                legal@joinbow.app
              </a>
            </li>
          </ul>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-100 my-10" />

        {/* Related links */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
            Related
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-bow-purple hover:underline font-medium"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/content-rights"
                className="text-bow-purple hover:underline font-medium"
              >
                Content Rights
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
