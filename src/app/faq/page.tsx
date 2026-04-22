import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preguntas frecuentes – Bow App",
  description:
    "Todo lo que necesitás saber sobre cómo funciona Bow, los pagos, el regalo, el envío y más.",
};

interface QAItem {
  question: string;
  answer: React.ReactNode;
}

interface Section {
  title: string;
  items: QAItem[];
}

const sections: Section[] = [
  {
    title: "Sobre cómo funciona",
    items: [
      {
        question: "¿Qué es Bow exactamente?",
        answer: (
          <p>
            Bow es una app para que una vez al año, el día de tu cumpleaños,
            recibas un regalo que de verdad querés — comprado entre todas las
            personas que te quieren. Vos elegís el regalo de Mercado Libre, tus
            amigos aportan lo que puedan, y el día de tu cumple te llega a casa
            junto con un muro de mensajes de todos.
          </p>
        ),
      },
      {
        question: "¿Por qué una vez al año?",
        answer: (
          <p>
            Porque la idea es que cada cumpleaños sea especial y concentrado,
            no un flujo constante de pedidos. Bow no es una wishlist permanente
            ni una plataforma de donaciones: es una celebración anual. Un solo
            regalo, bien elegido, entre todos.
          </p>
        ),
      },
      {
        question: "¿Tengo que elegir un regalo caro?",
        answer: (
          <p>
            Te sugerimos que sea algo significativo — algo que de verdad quieras
            pero que no te comprarías vos solo. Ese es el punto de Bow. Si el
            monto es muy bajo, pierde sentido tener un grupo de personas
            aportando. Si es muy alto, es difícil que se junte. En general,
            regalos entre $50.000 y $300.000 ARS funcionan bien, pero vos
            decidís.
          </p>
        ),
      },
      {
        question: "¿Puedo cambiar el regalo después de elegirlo?",
        answer: (
          <p>
            Sí, hasta que empiecen los aportes. Una vez que alguien aportó,
            para ser justos con quienes ya pusieron plata, el regalo queda fijo.
            Si querés cambiar algo, contactanos por soporte.
          </p>
        ),
      },
      {
        question: "¿Puedo elegir un regalo que no sea de Mercado Libre?",
        answer: (
          <p>
            Por ahora solo aceptamos links de Mercado Libre, porque nos permite
            garantizar que el producto existe, tiene precio claro y llega a tu
            casa. Más adelante sumaremos otras tiendas.
          </p>
        ),
      },
    ],
  },
  {
    title: "Sobre la plata",
    items: [
      {
        question: "¿Dónde va el dinero que aportan mis amigos?",
        answer: (
          <p>
            Los aportes se acumulan en una cuenta segura dedicada exclusivamente
            a tu regalo. Nadie — ni vos, ni tus amigos, ni el equipo de Bow —
            puede usar ese dinero para otra cosa. Cuando se alcanza el total,
            Bow compra el regalo directamente en Mercado Libre y lo envía a tu
            dirección el día de tu cumpleaños.
          </p>
        ),
      },
      {
        question: "¿Qué pasa si no se junta el monto total?",
        answer: (
          <p>
            Si al llegar tu cumpleaños no se alcanzó el objetivo, cada amigo
            recibe su aporte de vuelta automáticamente. Nadie pierde plata.
            También podés elegir extender el plazo unos días o cambiar por un
            regalo de menor valor si preferís.
          </p>
        ),
      },
      {
        question: "¿Cuándo se cobra el aporte?",
        answer: (
          <p>
            El aporte se cobra en el momento en que tu amigo confirma que quiere
            sumarse. Recibe confirmación inmediata y el aporte queda reflejado
            en el progreso del regalo.
          </p>
        ),
      },
      {
        question: "¿Bow cobra alguna comisión?",
        answer: (
          <p>
            Hoy Bow es totalmente gratis, tanto para el cumpleañero como para
            quienes aportan. Queremos que la experiencia sea redonda antes de
            pensar en monetización. Si en el futuro necesitamos cobrar algo para
            sostener el servicio, te vamos a avisar con tiempo y de forma clara
            — nunca vamos a cobrar sin aviso previo.
          </p>
        ),
      },
      {
        question: "¿Cómo se procesan los pagos?",
        answer: (
          <p>
            Los pagos se procesan a través de Mercado Pago, que es quien maneja
            toda la operación con tarjetas, dinero en cuenta y demás medios de
            pago. Bow no guarda ni ve los datos de tu tarjeta en ningún momento:
            toda la transacción ocurre dentro del entorno seguro de Mercado
            Pago.
          </p>
        ),
      },
      {
        question: "¿Con qué medios de pago puedo aportar?",
        answer: (
          <p>
            Los aportes se hacen a través de Mercado Pago, así que podés usar
            cualquier medio que esté disponible ahí: tarjeta de crédito, tarjeta
            de débito, dinero en tu cuenta de Mercado Pago, transferencia desde
            tu banco, o pago en efectivo por Pago Fácil / Rapipago. Elegís el
            que te quede más cómodo al momento de aportar.
          </p>
        ),
      },
      {
        question: "¿Necesito tener cuenta en Mercado Pago para aportar?",
        answer: (
          <p>
            No es obligatorio. Si ya tenés cuenta, podés usar tu saldo o los
            medios que tengas configurados. Si no tenés cuenta, podés pagar
            igual como invitado ingresando los datos de tu tarjeta, o elegir
            pagar en efectivo en Pago Fácil / Rapipago.
          </p>
        ),
      },
      {
        question: "¿Puedo aportar en cuotas?",
        answer: (
          <p>
            Sí, Mercado Pago te muestra las opciones de cuotas disponibles según
            tu tarjeta y banco al momento de aportar. Bow no interviene en eso
            — vos elegís cómo preferís pagar.
          </p>
        ),
      },
      {
        question: "¿Es seguro pagar con Mercado Pago?",
        answer: (
          <p>
            Sí. Mercado Pago es la plataforma de pagos más usada en Argentina y
            cumple con todos los estándares de seguridad de la industria. Tus
            datos de tarjeta nunca pasan por Bow: se manejan directamente entre
            vos y Mercado Pago.
          </p>
        ),
      },
      {
        question:
          "Aporté pero no veo reflejado mi aporte en el regalo, ¿qué hago?",
        answer: (
          <p>
            Los aportes suelen impactar en pocos segundos, pero en algunos casos
            (sobre todo con pagos en efectivo por Pago Fácil o Rapipago) pueden
            tardar unas horas hasta que Mercado Pago los confirma. Si pasaron
            más de 24 horas y seguís sin verlo reflejado, escribinos por soporte
            con el comprobante y lo resolvemos.
          </p>
        ),
      },
      {
        question: "¿Hay un monto mínimo o máximo por aporte?",
        answer: (
          <p>
            El mínimo es el que establece Mercado Pago para sus operaciones. No
            hay máximo — cada uno aporta lo que puede y quiere.
          </p>
        ),
      },
      {
        question: "¿Puedo aportar más de una vez?",
        answer: (
          <p>
            Sí, podés aportar cuantas veces quieras hasta que se complete el
            regalo o llegue el cumpleaños.
          </p>
        ),
      },
      {
        question:
          "¿Y si mi regalo ya no está disponible en Mercado Libre el día de mi cumpleaños?",
        answer: (
          <p>
            Si el producto exacto ya no está, compramos la alternativa más
            parecida del mismo vendedor o uno equivalente. Si no es posible
            encontrar algo similar, te entregamos el monto reunido junto con los
            mensajes del muro para que lo uses como quieras.
          </p>
        ),
      },
      {
        question:
          "¿Qué pasa si el precio del producto sube o baja antes de mi cumpleaños?",
        answer: (
          <p>
            Si baja, el excedente te queda a vos junto con el regalo. Si sube,
            intentamos cubrirlo con los aportes disponibles; si no alcanza, te
            avisamos y decidimos juntos (esperar más aportes, cambiar de
            producto o recibir el monto).
          </p>
        ),
      },
    ],
  },
  {
    title: "Sobre el regalo y el envío",
    items: [
      {
        question: "¿Cómo llega el regalo a mi casa?",
        answer: (
          <p>
            Lo compramos en Mercado Libre usando tu dirección y se envía como
            cualquier compra normal de ML. Coordinamos para que llegue el día
            exacto de tu cumpleaños o lo más cerca posible.
          </p>
        ),
      },
      {
        question: "¿Puedo ver quién aportó y cuánto?",
        answer: (
          <p>
            Vas a ver quiénes aportaron (los nombres de tus amigos), pero no
            los montos individuales. Queremos que el foco esté en el gesto, no
            en la cifra. Un mensaje lindo de alguien que aportó poco vale tanto
            como uno de alguien que aportó más.
          </p>
        ),
      },
      {
        question: "¿Cuándo veo el regalo y los mensajes?",
        answer: (
          <p>
            Todo se revela el día exacto de tu cumpleaños. Hasta ese momento
            ves cómo va el progreso (cuánto se juntó, cuánta gente aportó),
            pero el muro con mensajes y fotos queda oculto hasta el día.
          </p>
        ),
      },
      {
        question: "¿Qué pasa con el muro después del cumpleaños?",
        answer: (
          <p>
            Queda guardado en tu app para siempre. Podés volver a verlo cuando
            quieras. Cada cumpleaños genera su propio muro, así que con el
            tiempo vas armando un archivo de todos tus cumpleaños con Bow.
          </p>
        ),
      },
    ],
  },
  {
    title: "Sobre mis amigos",
    items: [
      {
        question: "¿Cómo se enteran mis amigos de mi regalo?",
        answer: (
          <p>
            Podés invitarlos directamente desde la app compartiendo un link por
            WhatsApp, Instagram o donde quieras. No necesitan tener la app
            instalada para ver tu regalo — entran por el link y deciden si
            quieren aportar o sumarse.
          </p>
        ),
      },
      {
        question: "¿Mis amigos tienen que bajar la app para aportar?",
        answer: (
          <p>
            Para aportar, sí. Es la forma en la que garantizamos seguridad en
            los pagos y que puedan escribir en el muro. Pero ver tu regalo y el
            progreso lo pueden hacer desde el navegador sin instalar nada.
          </p>
        ),
      },
      {
        question: "¿Puedo invitar a alguien que no está en mi agenda?",
        answer: (
          <p>
            Sí, simplemente compartís el link de tu regalo por el medio que
            prefieras.
          </p>
        ),
      },
      {
        question:
          "¿Mis amigos ven los regalos de otros cumpleañeros en su app?",
        answer: (
          <p>
            Solo ven los regalos de las personas que los invitaron
            específicamente. Bow no es una red social pública — es un espacio
            íntimo entre vos y tu gente cercana.
          </p>
        ),
      },
    ],
  },
  {
    title: "Sobre privacidad y seguridad",
    items: [
      {
        question: "¿Qué datos guarda Bow sobre mí?",
        answer: (
          <p>
            Guardamos tu nombre, fecha de cumpleaños, mail, dirección de envío
            (solo si elegís un regalo) y los contactos que vos decidas sumar.
            Los datos de pago los maneja Mercado Pago, no Bow. No vendemos datos
            a nadie ni hacemos publicidad dirigida con tu información.{" "}
            <Link
              href="/privacy-policy"
              className="text-bow-purple hover:underline"
            >
              Podés leer la política completa acá.
            </Link>
          </p>
        ),
      },
      {
        question: "¿Puedo borrar mi cuenta?",
        answer: (
          <p>
            Sí, en cualquier momento desde la app. Si hay un regalo activo con
            aportes en curso, primero resolvemos eso (devolvemos los aportes a
            tus amigos) y después borramos tu cuenta.
          </p>
        ),
      },
      {
        question:
          "¿Bow puede ver mis conversaciones o los mensajes del muro?",
        answer: (
          <p>
            Técnicamente los mensajes pasan por nuestros servidores como en
            cualquier app, pero no los leemos ni los usamos para nada. Son parte
            de tu regalo, no nuestro contenido.
          </p>
        ),
      },
    ],
  },
  {
    title: "Sobre la app",
    items: [
      {
        question: "¿En qué teléfonos funciona?",
        answer: (
          <p>
            Hoy está disponible en iPhone (App Store). Para Android estamos
            terminando los últimos detalles y llega muy pronto — dejanos tu mail
            y te avisamos el día que salga.
          </p>
        ),
      },
      {
        question: "¿Funciona fuera de Argentina?",
        answer: (
          <p>
            Por ahora solo en Argentina, porque la compra del regalo depende de
            Mercado Libre Argentina. Estamos pensando cómo expandirlo a otros
            países de la región más adelante.
          </p>
        ),
      },
      {
        question: "Encontré un error / tengo una sugerencia, ¿cómo los contacto?",
        answer: (
          <p>
            Escribinos a{" "}
            <a
              href="mailto:soporte@joinbow.app"
              className="text-bow-purple hover:underline"
            >
              soporte@joinbow.app
            </a>{" "}
            o desde la sección de soporte dentro de la app. Bow está recién
            lanzada y leemos todo lo que nos mandan — las mejores ideas vienen
            de los primeros usuarios.
          </p>
        ),
      },
    ],
  },
];

export default function FAQPage() {
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
        <p className="text-xs font-semibold uppercase tracking-widest text-bow-purple mb-4">
          Ayuda
        </p>
        <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">
          Preguntas frecuentes
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Todo lo que necesitás saber sobre Bow.
        </p>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100">
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {item.question}
                    </h3>
                    <div className="text-gray-600">{item.answer}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Related */}
        <div className="border-t border-gray-100 mt-16 pt-10">
          <p className="text-sm text-gray-500 mb-3 font-medium">Relacionado</p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-bow-purple hover:underline font-medium text-sm"
              >
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="text-bow-purple hover:underline font-medium text-sm"
              >
                Soporte
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
