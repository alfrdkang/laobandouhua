import Link from "next/link";
import Navbar from "@/components/Navbar";

const PILLARS = [
  { label: "Authentic Craftsmanship", icon: "/images/Menu/authentic.png" },
  { label: "Premium Soybeans", icon: "/images/Menu/premium.png" },
  { label: "Silky Smooth Texture", icon: "/images/Menu/smooth.png" },
];

const NEW_PRODUCTS = [
  {
    name: "Herbal Jelly",
    desc: "Silky smooth, top-tier, refreshing.",
    img: "/images/Menu/herbalJelly.png",
    isNew: true,
  },
];

const BEANCURD = [
  {
    name: "Original Beancurd",
    desc: "Silky smooth, top-tier, refreshing.",
    img: "/images/Menu/original.png",
  },
  {
    name: "Low Sugar Beancurd",
    desc: "Same smooth texture, with less sweetness.",
    img: "/images/Menu/lowSugar.png",
  },
  {
    name: "Almond Beancurd",
    desc: "A fragrant style with a subtle nutty aroma.",
    img: "/images/Menu/almond.png",
  },
  {
    name: "Matcha Beancurd",
    desc: "Silky smooth, top-tier, refreshing.",
    img: "/images/Menu/matcha.png",
  },
  {
    name: "Houjicha Beancurd",
    desc: "Warm, roasted flavour, with a smooth finish.",
    img: "/images/Menu/houjicha.png",
  },
  {
    name: "Spicy Beancurd",
    desc: "A fiery twist of bold flavour, with a smooth finish.",
    img: "/images/Menu/spicy.png",
  },
];

const SOYA_MILK = [
  {
    name: "Original Soya Milk",
    desc: "Silky smooth, top-tier, refreshing.",
    img: "/images/Menu/originalMilk.png",
  },
  {
    name: "Almond Soya Milk",
    desc: "Same smooth texture, with a nutty twist.",
    img: "/images/Menu/almondMilk.png",
  },
];

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
      <div className="w-10 h-1 bg-LB-yellow rounded-full" />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-LB-black">
        {children}
      </h2>
    </div>
  );
}

function MenuCard({ name, desc, img, isNew }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100" data-aos="fade-up">
      <div className="relative">
        {isNew && (
          <span className="absolute top-2 left-2 bg-LB-yellow text-LB-black text-xs font-bold px-2 py-0.5 rounded">
            New
          </span>
        )}
        <img src={img} alt={name} className="w-full h-44 sm:h-52 object-cover" />
      </div>
      <div className="px-4 py-4">
        <h3 className="text-lg sm:text-xl font-bold text-LB-black mb-1">{name}</h3>
        <p className="text-gray-500 text-sm sm:text-base leading-snug">{desc}</p>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <>
      <Navbar />
      {/* Our Menu header */}
      <section className="w-full bg-white pt-16 pb-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-4" data-aos="fade-in">
            <div className="w-10 h-1 bg-LB-yellow rounded-full" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-LB-black">Our Menu</h1>
            <div className="w-10 h-1 bg-LB-yellow rounded-full" />
          </div>
          <p className="text-gray-500 text-lg sm:text-xl max-w-xl leading-relaxed mb-10" data-aos="fade-up" data-aos-delay="100">
            Simple, comforting desserts that celebrate traditional flavours enjoyed by generations across Singapore.
          </p>

          {/* Pillars */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10" data-aos="fade-up" data-aos-delay="200">
            {PILLARS.map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2">
                <img src={icon} alt={label} className="w-7 h-7 object-contain" />
                <span className="text-base sm:text-lg font-semibold text-LB-black">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="w-full bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>New Products</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {NEW_PRODUCTS.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Signature Beancurd */}
      <section className="w-full bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>Signature Beancurd</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BEANCURD.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Signature Soya Milk */}
      <section className="w-full bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>Signature Soya Milk</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOYA_MILK.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-white py-14 px-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <img
            src="/images/Menu/logo.png"
            alt="Lao Ban mascot"
            className="w-36 sm:w-48 h-auto object-contain shrink-0"
            data-aos="fade-right"
          />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5" data-aos="fade-left">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-LB-black leading-snug">
              Simple delights made with dedication since 1970
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
              <Link
                href="https://wa.me/6586862808?text=Hi%20I'm%20interested%20in%20your%20beancurd%20"
                className="bg-LB-yellow text-LB-black font-bold text-base px-7 py-2.5 rounded-full hover:brightness-95 transition-all shadow-sm"
              >
                Order Now
              </Link>
              <Link
                href="/outlets"
                className="border-2 border-LB-black text-LB-black font-bold text-base px-7 py-2.5 rounded-full hover:bg-LB-black hover:text-white transition-all"
              >
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="w-full bg-white py-20 md:py-28 px-6 flex flex-col items-center justify-center">
        <img src="/images/tagline.png" className="w-5/6 xl:w-1/3 h-auto object-contain mb-10" alt="正宗老伴、有爱相伴" data-aos="fade-up" />
        <p className="text-2xl sm:text-3xl md:text-4xl text-gray-500 italic text-center" data-aos="fade-up" data-aos-delay="150">
          Authentic Lao Ban, Always With Love
        </p>
      </section>
    </>
  );
}