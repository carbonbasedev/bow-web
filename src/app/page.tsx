import Image from "next/image";
import AnimationObserver from "./components/AnimationObserver";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <AnimationObserver />

      {/* ── Navbar ── */}
      <nav className="absolute top-0 right-0 z-50 p-6 md:p-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 animate-fade-in delay-500">
          <span>Disponible en</span>
          <span className="text-xl" role="img" aria-label="Argentina">🇦🇷</span>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative px-6 pt-16 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32 xl:px-28 lg:min-h-[600px]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Left column */}
            <div className="relative z-10 pt-8 md:pt-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bow_logo.svg"
                alt="Bow"
                className="mb-6 w-[320px] md:w-[440px] lg:w-[500px] animate-fade-in"
              />

              <h1 className="font-serif text-5xl leading-tight font-black text-gray-900 md:text-6xl lg:text-7xl animate-fade-up delay-200">
                Por un Feliz
                <br />
                Cumpleaños.
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-gray-600 md:text-lg animate-fade-up delay-400">
                Bienvenidos a Bow, una app creada sobre la idea que cada año de
                tu vida es especial y merece ser celebrado
              </p>

              <div className="mt-8 flex items-center gap-4 animate-fade-up delay-600">
                <a href="#" aria-label="Download on the App Store">
                  <Image
                    src="/images/apple_store.svg"
                    alt="Download on the App Store"
                    width={140}
                    height={46}
                    className="h-[46px] w-auto"
                  />
                </a>
                <a href="#" aria-label="Get it on Google Play">
                  <Image
                    src="/images/google_play.svg"
                    alt="Get it on Google Play"
                    width={155}
                    height={46}
                    className="h-[46px] w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Right column – hero screens: shown in flow on mobile only */}
            <div className="relative flex justify-center lg:hidden animate-slide-in-right delay-300">
              <Image
                src="/images/hero_screens.png"
                alt="Bow app screenshots"
                width={600}
                height={640}
                className="w-full max-w-[540px] object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Hero screens – absolute on desktop, pushed down to overlap gradient section */}
        <div className="hidden lg:block absolute z-20 right-[4%] xl:right-[8%] top-20 w-[42%] xl:w-[40%] max-w-[560px] animate-slide-in-right delay-300">
          <Image
            src="/images/hero_screens.png"
            alt="Bow app screenshots"
            width={600}
            height={640}
            className="w-full object-contain"
            priority
          />
        </div>
      </section>

      {/*
        ── Wrapper for gradient section + below ──
        The two phone images are absolute to THIS wrapper
        so they overlap from the gradient section down into
        the sections below. main's overflow-x-hidden clips
        them at the viewport edges.
      */}
      <div className="relative">
        {/* Left image – absolute to wrapper, bleeds past left viewport edge and extends down */}
        <div data-animate="animate-slide-in-left" className="hidden lg:block absolute z-30 -left-[60px] xl:-left-[30px] top-0 w-[320px] xl:w-[370px] 2xl:w-[400px]">
          <Image
            src="/images/my_gift.png"
            alt="Mi Regalo - Airpods Max"
            width={400}
            height={860}
            className="w-full drop-shadow-2xl"
          />
        </div>

        {/* Right image – absolute to wrapper, bleeds past right viewport edge */}
        <div data-animate="animate-slide-in-right" className="hidden lg:block absolute z-30 -right-[40px] xl:-right-[10px] top-72 w-[320px] xl:w-[370px] 2xl:w-[400px]">
          <Image
            src="/images/dashboard.png"
            alt="Regalo de Tamara"
            width={400}
            height={760}
            className="w-full drop-shadow-2xl"
          />
        </div>

        {/* ── Gradient / background section ── */}
        <section className="relative">
          <Image
            src="/images/background.svg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
            priority
          />

          <div className="relative z-20 mx-auto max-w-xl px-6 pt-48 pb-16 md:pt-64 md:pb-24 lg:pt-80">
            {/* Mobile-only images */}
            <div className="flex justify-center gap-6 mb-10 lg:hidden">
              <Image
                src="/images/my_gift.png"
                alt="Mi Regalo - Airpods Max"
                width={200}
                height={430}
                className="w-[180px] drop-shadow-2xl"
              />
              <Image
                src="/images/dashboard.png"
                alt="Regalo de Tamara"
                width={200}
                height={380}
                className="w-[180px] drop-shadow-2xl"
              />
            </div>

            <h2 data-animate="animate-fade-up" className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Qué es Bow
            </h2>

            <div data-animate="animate-fade-up delay-200" className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
              <p>
                Es una plataforma única y dedicada que reúne todas las piezas
                dispersas de una celebración en un solo lugar. Para quien cumple
                años, se trata de recibir un único regalo que realmente desea.
              </p>
              <p>
                Para amigos y familiares, es una forma simple y ordenada de
                aportar y compartir cariño. Todo queda consolidado en un solo
                espacio, creando una experiencia enfocada y potente, una vez al
                año.
              </p>
            </div>

            <h3 data-animate="animate-fade-up" className="mt-10 font-serif text-2xl font-bold text-gray-900 md:text-3xl">
              Beneficios
            </h3>

            <ul data-animate="animate-fade-up delay-200" className="mt-6 list-disc pl-5 space-y-3 text-sm leading-relaxed text-gray-700 marker:text-gray-800 md:text-base">
              <li>Nunca te olvides de un cumpleaños</li>
              <li>Volvé a conectar con personas que te importan, incluso con aquellas con las que no festejás hace años.</li>
              <li>Un solo regalo significativo en lugar de muchos al azar.</li>
              <li>Pasa una vez al año, sin ruido ni compromisos constantes.</li>
              <li>No más grupos de chat temporales que mueren después del cumpleaños.</li>
              <li>El regalo llega el día exacto del cumpleaños.</li>
              <li>Recibí lo que realmente querés, no algo adivinado o repetido.</li>
              <li>Sin dolores de cabeza con la plata: nada de dividir, perseguir aportes o gestionar pagos.</li>
              <li>Evitá chats eternos y debates incómodos sobre &ldquo;qué comprar&rdquo;</li>
            </ul>
          </div>
        </section>

        {/* ── Cómo funciona Section ── */}
        <section className="relative z-20 px-6 py-16 md:px-12 md:py-24 lg:px-20 xl:px-28">
          <div className="mx-auto max-w-xl">
            <h2 data-animate="animate-fade-up" className="text-center font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Cómo funciona?
            </h2>

            <div data-animate="animate-fade-up delay-200" className="mt-10 space-y-6 text-base leading-relaxed text-gray-700 md:text-lg">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-800" />
                <p>
                  El usuario define su fecha de cumpleaños y elige un regalo que
                  desea a través de un link a Mercado Libre.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-800" />
                <div>
                  <p>Los amigos reciben una notificación y pueden:</p>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      Aportar dinero para alcanzar el objetivo del regalo
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      Escribir mensajes o compartir fotos
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-800" />
                <p>
                  El día del cumpleaños, todo se revela en un muro digital de
                  celebración, lindo y especial.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ── end wrapper ── */}

      {/* ── Emotional Section with scattered emojis ── */}
      <section className="relative px-6 py-16 md:px-12 md:py-24 lg:px-20 xl:px-28">
        {/* Scattered emojis – absolute positioned */}
        <span data-animate="animate-scale-in" className="absolute top-8 left-[10%] text-4xl md:text-5xl select-none animate-wobble" style={{animationDelay: '0s'}} aria-hidden="true">🤗</span>
        <span data-animate="animate-scale-in delay-200" className="absolute top-[15%] right-[8%] text-4xl md:text-5xl select-none animate-drift" style={{animationDelay: '0.3s'}} aria-hidden="true">🙌</span>
        <span data-animate="animate-scale-in delay-300" className="absolute bottom-[20%] left-[5%] text-3xl md:text-4xl select-none animate-wobble" style={{animationDelay: '0.8s'}} aria-hidden="true">❤️</span>
        <span data-animate="animate-scale-in delay-400" className="absolute bottom-12 right-[12%] text-3xl md:text-4xl select-none animate-drift" style={{animationDelay: '1.2s'}} aria-hidden="true">🐾</span>
        <span data-animate="animate-scale-in delay-500" className="absolute top-[40%] left-[3%] text-2xl md:text-3xl select-none animate-wobble" style={{animationDelay: '0.5s'}} aria-hidden="true">✨</span>
        <span data-animate="animate-scale-in delay-600" className="absolute bottom-[40%] right-[5%] text-2xl md:text-3xl select-none animate-drift" style={{animationDelay: '1.8s'}} aria-hidden="true">🎉</span>

        <div className="relative z-10 mx-auto max-w-3xl">
          <div data-animate="animate-fade-up" className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg">
            <p>
              Bow no es solo una app para hacer regalos. Es una forma de estar
              presentes, emocional y socialmente. Incluso un aporte pequeño o una
              palabra linda pasan a ser parte de un momento compartido que
              perdura. Convertimos los cumpleaños en cápsulas digitales de amor y
              presencia.
            </p>

            <p>
              Esta es la parte más importante. Bow es más que una utilidad; es
              una herramienta emocional. Le permite a los amigos &ldquo;estar&rdquo;
              para los demás, sin importar la distancia ni el presupuesto. Un
              aporte de $5 se siente tan significativo como uno de $50 porque
              forma parte de un esfuerzo colectivo.
            </p>

            <p>
              Cada mensaje, cada foto, cada peso queda como parte permanente de
              un momento compartido. No solo facilitamos regalos: creamos
              cápsulas digitales de amor y presencia.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Download Section ── */}
      <section className="px-6 pb-20 md:px-12 lg:px-20 xl:px-28">
        <div className="mx-auto max-w-3xl">
          <div data-animate="animate-scale-in" className="rounded-3xl bg-bow-yellow px-8 py-10 text-center shadow-sm md:px-16 md:py-14">
            <h2 className="font-serif text-3xl font-black text-gray-900 md:text-4xl lg:text-5xl">
              Descargá Bow, es gratis
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#" aria-label="Download on the App Store">
                <Image
                  src="/images/apple_store.svg"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-[50px] w-auto"
                />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <Image
                  src="/images/google_play.svg"
                  alt="Get it on Google Play"
                  width={165}
                  height={50}
                  className="h-[50px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer data-animate="animate-fade-up" className="border-t border-gray-200 bg-white px-6 py-10 md:px-12 lg:px-20 xl:px-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bow_logo.svg"
            alt="Bow"
            className="w-[100px]"
          />

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <a href="/privacy-policy" className="transition-colors hover:text-gray-900">Política de privacidad</a>
            <a href="/content-rights" className="transition-colors hover:text-gray-900">Derechos de contenido</a>
            <a href="/support" className="transition-colors hover:text-gray-900">Soporte</a>
          </nav>

          {/* Store badges */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Download on the App Store">
              <Image
                src="/images/apple_store.svg"
                alt="App Store"
                width={110}
                height={36}
                className="h-[36px] w-auto"
              />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              <Image
                src="/images/google_play.svg"
                alt="Google Play"
                width={120}
                height={36}
                className="h-[36px] w-auto"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Bow. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
