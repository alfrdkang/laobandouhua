import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar disableLogo={true} />
      {/* Hero Banner */}
      <picture data-aos="fade-in">
        <source media="(min-width: 1024px)" srcSet="/images/Home/banner/1920x1080.webp" />
        <source media="(min-width: 640px)" srcSet="/images/Home/banner/1280×800.webp" />
        <img
          src="/images/Home/banner/1080×1350.webp"
          alt="Hero Banner"
          className="w-full h-auto object-cover"
        />
      </picture>

      {/* Legacy Section */}
      <section className="w-full bg-white pt-10 md:pt-28">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left" data-aos="fade-right">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-LB-black mb-6 leading-snug">
              A Legacy of<br />Authentic Taste
            </h2>
            <p className="text-base md:text-lg text-[#555] leading-relaxed max-w-sm md:max-w-md">
              Since <strong className="text-yellow-500 text-2xl md:text-3xl">1978</strong>, Lao Ban has been dedicated to crafting
              traditional Chinese desserts with simplicity and care. Founded by
              Mr. Li Pui Ching, the brand quickly became famous for its silky
              smooth desserts and comforting flavours.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left">
            <img src="/images/Home/legacy.png" className="w-full h-72 sm:h-96 md:h-[420px] rounded-[30px] object-contain" />
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="w-full bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

          <div className="flex-1 flex justify-center md:justify-start items-center p-4" data-aos="fade-right">
            <img src="/images/Home/logo.png" className="w-full h-72 sm:h-96 md:h-[420px] rounded-[30px] object-contain" />
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-md md:max-w-lg" data-aos="fade-left">
            <p className="text-base md:text-lg text-LB-black leading-relaxed mb-8">
              In <strong className="text-yellow-500 text-2xl md:text-3xl">2008</strong>, the first stall at Old Airport Road Food Centre
              quickly gained a loyal following. Customers from across Singapore formed
              long queues daily to enjoy its smooth texture and comforting taste, making
              Lao Ban a household name.
            </p>
            <Link
              href="/our-story"
              className="inline-block bg-LB-yellow text-LB-black text-base font-bold px-8 py-3 rounded-full hover:bg-[#E6CE00] transition-colors shadow-sm"
            >
              Our Story
            </Link>
          </div>

        </div>
      </section>

      {/* Three Pillars */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-10">
            {[
              { label: "Premium Soybean", bg: "images/Home/premium.png" },
              { label: "Authentic Craftsmanship", bg: "images/Home/authentic.png" },
              { label: "Silky Smooth Texture", bg: "images/Home/smooth.png" },
            ].map(({ label, bg }, index) => (
              <div
                key={label}
                className="flex-1 flex flex-col bg-[#FFF9C4] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img src={bg} className="w-full h-88 md:h-100 object-cover" />
                <div className="px-6 py-7">
                  <h3 className="font-bold text-LB-black text-2xl md:text-3xl leading-tight w-3/4">{label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Outlet CTA */}
      <section
        className="w-full relative flex items-center justify-center overflow-hidden bg-[url(/images/Home/locBG.jpeg)] bg-cover bg-center"
        style={{ minHeight: "320px" }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 text-center" data-aos="zoom-in">
          <p className="text-white text-3xl md:text-4xl font-extrabold mb-10 max-w-2xl leading-tight">
            Find your nearest outlet today across our islandwide locations.
          </p>
          <Link
            href="/outlets"
            className="bg-LB-yellow text-LB-black font-bold text-base md:text-lg px-10 py-3.5 rounded-full hover:bg-[#E6CE00] transition-colors shadow-md"
          >
            Our Locations
          </Link>
        </div>
      </section>

      {/* Tagline */}
      <section className="w-full bg-white py-20 md:py-28 px-6 flex flex-col items-center justify-center">
        <img src="/images/tagline.png" className="w-5/6 xl:w-1/3 h-auto object-contain mb-14" data-aos="fade-up" />
        <p className="text-center text-2xl sm:text-4xl text-[#555] italic" data-aos="fade-up" data-aos-delay="150">
          Authentic Lao Ban, Always With Love
        </p>
      </section>
    </>
  );
}