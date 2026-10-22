import Image from "next/image";
import Link from "next/link";

const FB_PATH =
  "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z";

const IG_PATH =
  "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334";

function FbIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d={FB_PATH} />
    </svg>
  );
}

function IgIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d={IG_PATH} />
    </svg>
  );
}

type SocialLinksProps = {
  facebook?: string;
  instagram?: string;
};

function SocialLinks({ facebook, instagram }: SocialLinksProps) {
  return (
    <ul className="flex justify-center mt-4 space-x-4">
      {facebook && (
        <li>
          <Link href={facebook} className="text-[#39569c]" aria-label="Facebook">
            <FbIcon />
          </Link>
        </li>
      )}
      {instagram && (
        <li>
          <Link href={instagram} className="text-[#39569c]" aria-label="Instagram">
            <IgIcon />
          </Link>
        </li>
      )}
    </ul>
  );
}

type CardItem = {
  name: string;
  img: string;
  url?: string;
  facebook?: string;
  instagram?: string;
};

function Card({ item }: { item: CardItem }) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full border-2 border-black"
        src={item.img}
        alt={item.name}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
        {item.url ? <Link href={item.url}>{item.name}</Link> : item.name}
      </h3>
      <SocialLinks facebook={item.facebook} instagram={item.instagram} />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 border-b-2 border-gray-900">
      <h2 className="mb-4  text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">{children}</h2>
    </div>
  );
}

const foreningar = [
  {
    name: "KF Stationen",
    img: "/media/stationen.jpg",
    url: "https://www.facebook.com/kfstationen",
    facebook: "https://www.facebook.com/kfstationen",
    instagram: "https://www.instagram.com/kfstationen",
  },
  {
    name: "K&K Records",
    img: "/media/KKRECORDS_GOTHIC.jpg",
    url: "https://www.kkrecords.se",
    facebook: "https://www.facebook.com/kkmusicrecords",
    instagram: "https://www.instagram.com/kkmusicrecords",
  },
  {
    name: "DöFisk Skivor",
    img: "/media/dopfisk.jpg",
    url: "https://www.facebook.com/profile.php?id=61563532603704",
    facebook: "https://www.facebook.com/profile.php?id=61563532603704",
    instagram: "https://www.instagram.com/dofiskskivor",
  },
  {
    name: "Indiedepartementet",
    img: "/media/indiedep.png",
    url: "",
    facebook: "https://www.facebook.com/Indiedepartementet",
    instagram: "https://www.instagram.com/Indiedepartementet",
  },
  {
    name: "KF-019",
    img: "/media/BATTREKF.png",
    url: "https://www.kf019.se/",
    facebook: "https://www.facebook.com/kfnollnitton/",
    instagram: "https://www.instagram.com/kfnollnitton/",
  },
  {
    // TODO: fyll i riktiga länkar
    name: "Kulturföreningen Overdrive",
    img: "/media/OD_KF.jpg",
    url: "",
    facebook: "https://www.facebook.com/profile.php?id=61563021230268",
    instagram: "https://www.instagram.com/klubb_overdrive",
  },
];

// Ordning: ÖP, UP, Mono, Homo, 50 Spänn, Overdrive
const arrangemang = [
  {
    name: "Örebro Punkfest",
    img: "/media/op.jpg",
    url: "https://www.punkfesten.se",
    facebook: "https://www.facebook.com/orebropunkfest",
    instagram: "https://www.instagram.com/orebropunkfest",
  },
  {
    name: "Ung & Punk",
    img: "/media/up.jpg",
    url: "https://www.facebook.com/ungopunk",
    facebook: "https://www.facebook.com/ungopunk",
    instagram: "https://www.instagram.com/ungopunk",
  },
  {
    name: "Klubb Mono",
    img: "/media/mono.png",
    url: "https://www.facebook.com/klubbmono",
    facebook: "https://www.facebook.com/klubbmono",
    instagram: "https://www.instagram.com/klubbmono",
  },
  {
    name: "Klubb Homo",
    img: "/media/klubbhomo.png",
    url: "https://www.facebook.com/klubbhomo",
    facebook: "https://www.facebook.com/klubbhomo",
    instagram: "https://www.instagram.com/klubbhomo",
  },
  {
    name: "Definitivt 50 Spänn",
    img: "/media/50.png",
    url: "https://www.facebook.com/definitivt50spann",
    facebook: "https://www.facebook.com/definitivt50spann",
    instagram: "https://www.instagram.com/definitivt50spann",
  },
  {
    // TODO: fyll i riktiga länkar
    name: "Klubb Overdrive",
    img: "/media/OD_KL.jpg",
    url: "",
    facebook: "https://www.facebook.com/profile.php?id=61563021230268",
    instagram: "https://www.instagram.com/klubb_overdrive",
  },
];

export default function Home() {
  return (
    <main>
      {/* Logga + Vi är Music For Pennies */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <Link href="https://www.facebook.com/musicforpennies/">
          <Image
            className="mx-auto mb-4"
            src="/media/music_for_pennies_logga.png"
            alt="Music For Pennies"
            width={900}
            height={300}
          />
          </Link>

          <div className="mx-auto mt-12 max-w-screen-xl">
            <h2 className="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 mx-auto mb-8 max-w-screen-sm lg:mb-16 border-b-2 border-gray-900">
              Vi är Music For Pennies
            </h2>
            <Link href="https://www.instagram.com/musicforpennies">
              <Image
                className="mx-auto mb-6 w-full max-w-xl rounded-lg"
                src="/media/MFP_banner.jpg"
                alt="Vi är Music For Pennies"
                width={900}
                height={300}
              />
            </Link>
            <p className="mb-4 text-lg text-gray-700">
              Music For Pennies är en förening där föreningar förenas och där kreativitet och
              gemenskap står i fokus. Vi arbetar för en levande, alternativ musikscen i Örebro.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Vår tagline är: <br />
              <span className="font-bold">Bästa gänget, hänget &amp; svänget!</span>
            </p>
            <p className="mb-2 text-gray-700">
              Läs reportage om MFP i NA{" "}
              <Link
                className="underline"
                href="https://gantrack1.com/t/l/10237410/1_NDk2NDcwNDU1NjM/"
              >
                här
              </Link>
              {" "}
              eller{" "}
              <Link   
                className="underline"
                href="https://gantrack1.com/t/l/10237411/1_NDk2NDcwNDU1NjM/"
              >
                här
              </Link>
              .
            </p>
            <SocialLinks
              facebook="https://www.facebook.com/musicforpennies"
              instagram="https://www.instagram.com/musicforpennies"
            />
          </div>
        </div>
      </section>

      {/* Föreningar */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <SectionHeading>Våra föreningar</SectionHeading>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3">
            {foreningar.map((f) => (
              <Card key={f.name} item={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Arrangemang */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <SectionHeading>Våra arrangemang</SectionHeading>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center">
            {arrangemang.map((a) => (
              <Card key={a.name} item={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <SectionHeading>Kontakta oss</SectionHeading>
          <div className="grid grid-cols-12">
            <div className="relative col-span-full md:col-start-1 md:col-end-7">
              <h1>
                <span className="font-bold">HQ:</span> <br />
                Music For Pennies <br />
                Järnvägsgatan 8 <br />
                703 62 Örebro
              </h1>
            </div>
            <div className="relative col-span-full md:col-start-7 md:col-end-13">
              <div className="max-w-full md:max-w-[520px]">
                <h1>
                  <span className="font-bold">Mail:</span> <br />
                  <Link href="mailto:tjooo@musicforpennies.se">tjooo@musicforpennies.se</Link>
                </h1>
                <SocialLinks
                  facebook="https://www.facebook.com/musicforpennies"
                  instagram="https://www.instagram.com/musicforpennies"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}