import type { Metadata } from "next";
import Link from "next/link";
import LangTabs from "../components/LangTabs";

export const metadata: Metadata = {
  title: "Privacy Policy – Bow App",
  description:
    "Learn how Bow collects, uses, stores, and shares information when you use the Bow mobile or web application.",
};

function PrivacyEN() {
  return (
    <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">
      <p className="text-sm text-gray-400">Last updated: February 2026</p>

      <p>
        Bow (&quot;we&quot;, &quot;our&quot;, or &quot;the App&quot;) respects your privacy and is
        committed to protecting it. This Privacy Policy explains how we collect,
        use, store, and share information when you use the Bow mobile or web
        application.
      </p>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-3">
          We may collect the following types of information:
        </p>

        <h3 className="font-semibold text-gray-800 mb-2">
          a) Personal Information
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>Name or nickname</li>
          <li>Email address</li>
          <li>Date of birth</li>
          <li>Profile photo (optional)</li>
          <li>Time zone and locale</li>
        </ul>

        <h3 className="font-semibold text-gray-800 mb-2">
          b) User-Generated Content
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>Messages written on celebration walls</li>
          <li>Photos or media uploaded by users</li>
          <li>Comments, reactions, and related interactions</li>
        </ul>

        <h3 className="font-semibold text-gray-800 mb-2">
          c) Financial &amp; Transactional Data
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>Contribution amounts</li>
          <li>Payment confirmations and transaction metadata</li>
        </ul>
        <p className="text-sm text-gray-500 italic">
          Note: Bow does not store full credit card or bank details; payments
          are processed by third-party payment providers.
        </p>

        <h3 className="font-semibold text-gray-800 mb-2 mt-4">
          d) Usage &amp; Technical Data
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Device type, operating system, and app version</li>
          <li>IP address (for security and fraud prevention)</li>
          <li>App usage statistics and interaction logs</li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Provide and operate the Bow service</li>
          <li>Enable gift pooling and birthday celebrations</li>
          <li>Deliver reminders and notifications</li>
          <li>Display celebration walls and archives</li>
          <li>Improve app functionality and user experience</li>
          <li>Prevent fraud and ensure platform security</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          3. Sharing of Information
        </h2>
        <p className="mb-3">We may share information:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>
            With other users, as part of celebration walls (messages, photos,
            names)
          </li>
          <li>
            With payment processors, solely to complete transactions
          </li>
          <li>
            With service providers that help operate the app (hosting,
            analytics, notifications)
          </li>
          <li>When required by law or legal process</li>
        </ul>
        <p className="font-medium text-gray-800">We do not sell personal data.</p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          4. Public &amp; Social Features
        </h2>
        <p>
          Some features of Bow are social by nature. Celebration walls may be
          visible to invited users or, if enabled, publicly. You are responsible
          for the content you choose to share.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          5. Data Retention
        </h2>
        <p>
          We retain personal data as long as your account is active or as needed
          to provide the service. Celebration content may be stored as part of a
          user&apos;s birthday archive unless deleted by the user.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          6. User Rights
        </h2>
        <p className="mb-3">
          Depending on your location, you may have rights to:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your account and data</li>
          <li>Withdraw consent where applicable</li>
        </ul>
        <p>
          Requests can be made through in-app settings or by contacting support.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          7. Children&apos;s Privacy
        </h2>
        <p>
          Bow is not intended for children under the age of 13 (or the minimum
          age required by local law). We do not knowingly collect data from
          children.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          8. Security
        </h2>
        <p>
          We use reasonable technical and organizational measures to protect your
          data, but no system is 100% secure.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          9. International Use
        </h2>
        <p>
          Your data may be processed in countries other than your own, subject
          to applicable data protection laws.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          10. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Continued use of
          Bow after changes means acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          11. Contact
        </h2>
        <p>
          For questions about privacy, contact:{" "}
          <a
            href="mailto:privacy@joinbow.app"
            className="text-bow-purple hover:underline"
          >
            privacy@joinbow.app
          </a>
        </p>
      </section>
    </div>
  );
}

function PrivacyES() {
  return (
    <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">
      <p className="text-sm text-gray-400">Última actualización: febrero de 2026</p>

      <p>
        Bow (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la App&quot;) respeta tu privacidad y
        se compromete a protegerla. Esta Política de Privacidad explica cómo
        recopilamos, usamos, almacenamos y compartimos información cuando usas
        la aplicación móvil o web de Bow.
      </p>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          1. Información que recopilamos
        </h2>
        <p className="mb-3">
          Es posible que recopilemos los siguientes tipos de información:
        </p>

        <h3 className="font-semibold text-gray-800 mb-2">
          a) Información personal
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>Nombre o apodo</li>
          <li>Correo electrónico</li>
          <li>Fecha de nacimiento</li>
          <li>Foto de perfil (opcional)</li>
          <li>Zona horaria e idioma</li>
        </ul>

        <h3 className="font-semibold text-gray-800 mb-2">
          b) Contenido generado por el usuario
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>Mensajes escritos en muros de celebración</li>
          <li>Fotos o archivos multimedia subidos por usuarios</li>
          <li>Comentarios, reacciones e interacciones relacionadas</li>
        </ul>

        <h3 className="font-semibold text-gray-800 mb-2">
          c) Datos financieros y transaccionales
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>Montos de contribución</li>
          <li>Confirmaciones de pago y metadatos de transacciones</li>
        </ul>
        <p className="text-sm text-gray-500 italic">
          Nota: Bow no almacena datos completos de tarjetas de crédito ni
          cuentas bancarias; los pagos son procesados por proveedores de pago
          externos.
        </p>

        <h3 className="font-semibold text-gray-800 mb-2 mt-4">
          d) Datos de uso y técnicos
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Tipo de dispositivo, sistema operativo y versión de la app</li>
          <li>Dirección IP (para seguridad y prevención de fraude)</li>
          <li>Estadísticas de uso e historial de interacciones</li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          2. Cómo usamos tu información
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Proveer y operar el servicio de Bow</li>
          <li>Permitir colectas de regalos y celebraciones de cumpleaños</li>
          <li>Enviar recordatorios y notificaciones</li>
          <li>Mostrar muros de celebración y archivos</li>
          <li>Mejorar la funcionalidad y experiencia de usuario de la app</li>
          <li>Prevenir fraudes y garantizar la seguridad de la plataforma</li>
          <li>Cumplir con requisitos legales y normativos</li>
        </ul>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          3. Compartir información
        </h2>
        <p className="mb-3">Podemos compartir información:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>
            Con otros usuarios, como parte de los muros de celebración
            (mensajes, fotos, nombres)
          </li>
          <li>
            Con procesadores de pago, exclusivamente para completar
            transacciones
          </li>
          <li>
            Con proveedores de servicios que ayudan a operar la app (hosting,
            análisis, notificaciones)
          </li>
          <li>Cuando sea requerido por la ley o proceso legal</li>
        </ul>
        <p className="font-medium text-gray-800">No vendemos datos personales.</p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          4. Funciones públicas y sociales
        </h2>
        <p>
          Algunas funciones de Bow son de naturaleza social. Los muros de
          celebración pueden ser visibles para los usuarios invitados o, si se
          activa, públicamente. Eres responsable del contenido que eliges
          compartir.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          5. Retención de datos
        </h2>
        <p>
          Conservamos los datos personales mientras tu cuenta esté activa o
          según sea necesario para brindar el servicio. El contenido de las
          celebraciones puede almacenarse como parte del archivo de cumpleaños
          de un usuario, a menos que sea eliminado por el mismo.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          6. Derechos del usuario
        </h2>
        <p className="mb-3">
          Dependiendo de tu ubicación, puedes tener derecho a:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
          <li>Acceder a tus datos personales</li>
          <li>Corregir información incorrecta</li>
          <li>Solicitar la eliminación de tu cuenta y datos</li>
          <li>Retirar el consentimiento cuando corresponda</li>
        </ul>
        <p>
          Las solicitudes se pueden realizar a través de la configuración de la
          app o contactando a soporte.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          7. Privacidad de menores
        </h2>
        <p>
          Bow no está destinada a menores de 13 años (o la edad mínima exigida
          por la ley local). No recopilamos datos de menores de forma
          intencionada.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          8. Seguridad
        </h2>
        <p>
          Aplicamos medidas técnicas y organizativas razonables para proteger
          tus datos, pero ningún sistema es 100% seguro.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          9. Uso internacional
        </h2>
        <p>
          Tus datos pueden ser procesados en países distintos al tuyo, sujetos
          a las leyes de protección de datos aplicables.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          10. Cambios en esta política
        </h2>
        <p>
          Podemos actualizar esta Política de Privacidad de vez en cuando. El
          uso continuado de Bow después de los cambios implica la aceptación de
          la política actualizada.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">
          11. Contacto
        </h2>
        <p>
          Para preguntas sobre privacidad, contactá:{" "}
          <a
            href="mailto:privacy@joinbow.app"
            className="text-bow-purple hover:underline"
          >
            privacy@joinbow.app
          </a>
        </p>
      </section>
    </div>
  );
}

export default function PrivacyPolicyPage() {
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
          enContent={<PrivacyEN />}
          esContent={<PrivacyES />}
          enTitle="Privacy Policy"
          esTitle="Política de Privacidad"
          label="Legal"
        />

        {/* Related */}
        <div className="border-t border-gray-100 mt-16 pt-10">
          <p className="text-sm text-gray-500 mb-3 font-medium">Related</p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/content-rights"
                className="text-bow-purple hover:underline font-medium text-sm"
              >
                Content Rights
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
