import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="h-216 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center flex flex-col items-center">
          <div className="sm:hidden flex-1 flex justify-center md:justify-start items-center py-6">
            <img src="/images/Home/logo.png" className="w-full h-64 sm:h-72 object-contain p-4" />
          </div>

          <div className="pb-8">
            <h1 className="text-6xl font-bold text-LB-black mb-2">
              404
            </h1>
            <h2 className="text-4xl font-bold text-LB-black mb-8">
              Page Not Found
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg mx-6 font-semibold leading-7 text-LB-black max-w-2xl mb-16">
            Looks like this bowl wandered off the menu. The page you’re
            looking for might have been moved, renamed, or never existed
            in the first place. Let’s get you back to something delicious.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="md:w-1/3 w-5/6 bg-LB-yellow text-LB-black font-bold text-sm px-4 py-4 my-20 rounded-full flex items-center justify-center gap-2 hover:brightness-95 transition-all mt-auto"
          >
            Home Page
          </Link>
        </div>
      </section>
    </>
  );
}