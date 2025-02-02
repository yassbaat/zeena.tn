import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex justify-center items-center h-40">
        <div className="container flex justify-center items-center">
          <Image
            src="/black-logo.svg"
            alt="Logo"
            width={450}
            height={450}
            className="h-40"
          />
        </div>
      </header>

      <main
        className="flex-grow flex items-center bg-cover bg-center bg-repeat bg-opacity-40 "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/cover-white.jpg')",
        }}
      >
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 ">
            Bienvenue à Zeena Bizerte
          </h1>
          <p className="text-xl mb-20">
            Achetez en toute confiance. Zeena est votre destination idéale pour
            des textiles de maison de qualité et des meubles intelligents et
            abordables.
          </p>

          <Link
            href="https://facebook.com/zeena.com.tn"
            className="inline-block bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-gray-800 transition-colors"
          >
            Visiter notre Page Facebook
          </Link>
          <p className="text-sm mt-8">
            Il y a deux ans, nous avons commencé dans notre boutique au
            centre-ville de Bizerte. Aujourd’hui, nous nous étendons en ligne !
            🌟
          </p>
          <p className="text-xl mt-8">Contactez nous sur le:</p>
          <p className="text-xl mb-20"> (+216) 92564466 - (+216) 93460002</p>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.491160972657!2d9.8730857!3d37.275796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e31f003d72c011%3A0xdb14835225c1df5e!2sBoutique%20Zina%20(Biasa)!5e1!3m2!1sen!2stn!4v1738488940610!5m2!1sen!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        <div className="container mx-auto">
          © {new Date().getFullYear()} Zeena. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
