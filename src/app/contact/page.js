import Link from 'next/link';

// ─── Contact Cards Data ───────────────────────────────────────────────────────
const CONTACT_CARDS = [
  {
    id: 'franchise',
    icon: '/images/Contact/franchise.png',
    title: 'Franchise & Distribution',
    body: (
      <>
        <p className="text-sm text-gray-500 leading-relaxed">
          Authentic Lao Ban is expanding internationally and welcomes partners to bring our authentic
          and meaningful food experiences.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mt-3">
          We also offer food distribution partnerships for retail outlets, supermarkets, and food operators
          interested in carrying Authentic Lao Ban products.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mt-3">
          For franchise or distribution enquiries, please contact us.
        </p>
      </>
    ),
    btnLabel: 'Franchise Enquiry',
    btnHref: 'mailto:laobanyf@gmail.com',
  },
  {
    id: 'events',
    icon: '/images/Contact/events.png',
    title: 'Events, Bulk Orders & Collaborations',
    body: (
      <>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          Celebrate with Authentic Lao Ban!
        </p>
        <ul className="flex flex-col gap-2.5">
          {[
            { label: 'Corporate & Special Events', desc: 'Impress guests, delight employees, or add a sweet touch to any occasion.' },
            { label: 'Bulk Orders', desc: 'Flexible quantities for parties, gatherings, or celebrations.' },
            { label: 'Collaborations', desc: 'Partner with us for co-branded products, pop-ups, or creative campaigns.' },
          ].map(({ label, desc }) => (
            <li key={label} className="flex items-start gap-2.5">
              <img src="/images/Contact/check.png" alt="" className="w-6 h-6 object-contain mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-bold text-LB-black">{label}</span>
                <p className="text-xs text-gray-500 leading-snug">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
    btnLabel: 'Enquiry Now',
    btnHref: 'mailto:laobanyf@gmail.com',
  },
];

const CAREER_CARD = {
  icon: '/images/Contact/career.png',
  title: 'Career Opportunities',
  body: (
    <>
      <p className="text-sm text-gray-500 leading-relaxed">
        We welcome individuals who share our passion for quality food and sincere service to join our growing team.
      </p>
      <p className="text-sm text-gray-500 leading-relaxed mt-3">
        Be part of a brand that values tradition, teamwork, and genuine connections.
      </p>
    </>
  ),
  btnLabel: 'Send Resume',
  btnHref: 'mailto:laobanyf@gmail.com',
};

// ─── Reusable Components ──────────────────────────────────────────────────────
function ContactCard({ icon, title, body, btnLabel, btnHref }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
        <img src={icon} alt={title} className="w-10 h-10 object-contain shrink-0" />
        <h2 className="text-lg sm:text-xl font-extrabold text-LB-black leading-snug">{title}</h2>
      </div>

      {/* Body */}
      <div className="flex-1">{body}</div>

      {/* CTA Button */}
      <a
        href={btnHref}
        className="mt-auto inline-flex items-center gap-2 bg-LB-yellow text-LB-black font-bold text-sm px-6 py-2.5 rounded-full hover:brightness-95 transition-all self-start shadow-sm"
      >
        {btnLabel}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <>
      {/* ── Hero Header ────────────────────────────────────────────────────── */}
      <section className="w-full bg-white pt-16 pb-10 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-1 bg-LB-yellow rounded-full" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-LB-black">Contact Us</h1>
            <div className="w-10 h-1 bg-LB-yellow rounded-full" />
          </div>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mt-3">
            We&apos;re here for you. Whether you&apos;re a customer, partner,<br className="hidden sm:block" />
            or future team member, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Top Contact Cards (Franchise + Events) ─────────────────────────── */}
      <section className="w-full bg-white py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CONTACT_CARDS.map((card) => (
            <ContactCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* ── Career + Create Something Together ────────────────────────────── */}
      <section className="w-full bg-white py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Career Card */}
          <ContactCard
            icon={CAREER_CARD.icon}
            title={CAREER_CARD.title}
            body={CAREER_CARD.body}
            btnLabel={CAREER_CARD.btnLabel}
            btnHref={CAREER_CARD.btnHref}
          />

          {/* Let's Create Something Together */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7 flex flex-col gap-5">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <img src="/images/Contact/create.png" alt="Create Together" className="w-10 h-10 object-contain shrink-0" />
              <h2 className="text-lg sm:text-xl font-extrabold text-LB-black leading-snug">
                Let&apos;s Create Something Together
              </h2>
            </div>

            <div className="flex-1">
              <p className="text-sm text-gray-500 leading-relaxed">
                From enjoying our beancurd to partnering with us, we&apos;re always excited to connect with you.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mt-3">
                Drop us an email and our team will get back to you as soon as possible.
              </p>
            </div>

            {/* Handwritten look-forward note */}
            <div className="mt-2">
              <img
                src="/images/Contact/lookForward.png"
                alt="We look forward to hearing from you!"
                className="w-56 sm:w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Get In Touch ──────────────────────────────────────────────────── */}
      <section className="w-full bg-gray-50 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-LB-black">Get In Touch</h2>
          <div className="w-20 h-2 bg-LB-yellow rounded-full my-6" />
          <p className="text-sm text-gray-500 mb-8 max-w-lg">
            For all enquiries about products, distribution, franchise partnerships, careers, events, bulk orders or co-branding:
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Contact Details */}
            <div className="flex flex-col gap-5 flex-1">
              {/* Email */}
              <div className="flex items-center gap-3">
                <img src="/images/Contact/email.png" alt="Email" className="w-12 h-12 object-contain shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Email</p>
                  <a
                    href="mailto:laobanyf@gmail.com"
                    className="text-sm font-semibold text-LB-black hover:underline underline-offset-4 transition-all"
                  >
                    laobanyf@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <img src="/images/Contact/phone.png" alt="Phone" className="w-12 h-12 object-contain shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Phone</p>
                  <a
                    href="tel:+6596562908"
                    className="text-sm font-semibold text-LB-black hover:underline underline-offset-4 transition-all"
                  >
                    03 9656 2908
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <img src="/images/Contact/address.png" alt="Address" className="w-12 h-12 object-contain shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Address</p>
                  <p className="text-sm font-semibold text-LB-black leading-snug">
                    Blk 1550, Bedok North Ave 4,<br />
                    #08-17, Bedok Food City 489950
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-5 my-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="text-LB-black hover:opacity-70 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="text-LB-black hover:opacity-70 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                  className="text-LB-black hover:opacity-70 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Store Photo */}
            <div className="w-full sm:w-64 lg:w-80 shrink-0">
              <img
                src="/images/Contact/getInTouch.png"
                alt="Authentic Lao Ban store"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <img
            src="/images/Menu/logo.png"
            alt="Lao Ban mascot"
            className="w-36 sm:w-48 h-auto object-contain shrink-0"
          />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-LB-black leading-snug">
              Simple delights made with dedication since 1978
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start items-center">
              <Link
                href="#"
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

      {/* ── Tagline ───────────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-20 md:py-28 px-6 flex flex-col items-center justify-center">
        <img
          src="/images/tagline.png"
          className="w-5/6 xl:w-1/3 h-auto object-contain mb-10"
          alt="正宗老伴、有爱相伴"
        />
        <p className="text-2xl sm:text-3xl md:text-4xl text-gray-500 italic text-center">
          Authentic Lao Ban, Always With Love
        </p>
      </section>
    </>
  );
}
