import Link from "next/link";

export default function Story() {
    return (
        <>
            <div className="relative w-full lg:h-256 h-0 rounded-xl">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/interview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Tagline */}
            <section className="w-full bg-white py-20 md:py-28 px-6 flex flex-col items-center justify-center">
                <img data-aos="fade-up" src="/images/tagline.png" className="w-5/6 xl:w-1/3 h-auto object-contain mb-14" />
                <p data-aos="fade-up" data-aos-delay="150" className="text-2xl md:text-3xl text-[#555] italic text-center">
                    Authentic Lao Ban, Always With Love
                </p>
            </section>

            {/* Heritage */}
            <section className="w-full bg-white pb-20 md:pb-28">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 md:gap-16">
                    <div data-aos="fade-right" className="flex-1 flex justify-center md:justify-start">
                        <img
                            src="/images/Story/history.png"
                            alt="Our Heritage"
                            className="w-full max-w-sm md:max-w-none h-full rounded-2xl object-cover"
                        />
                    </div>

                    <div data-aos="fade-left" className="flex-1 flex flex-col justify-center text-left">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-LB-black mb-8 leading-snug">
                            Our Heritage
                        </h2>
                        <div className="space-y-5 text-[#555] text-base md:text-[17px] leading-relaxed max-w-lg">
                            <p>
                                Since{" "}
                                <strong className="text-LB-darkYellow text-2xl md:text-3xl">1978</strong>, Mr.
                                Li Pui Shing has been crafting traditional Chinese desserts,
                                starting with tang yuan and later perfecting the silky smooth
                                beancurd that would become Lao Ban's signature.
                            </p>
                            <p>
                                The first stall at Old Airport Road Food Centre quickly gained
                                a loyal following. Customers from across Singapore formed long
                                queues daily to enjoy its smooth texture and comforting taste,
                                making Lao Ban a household name.
                            </p>
                            <p>
                                From the beginning, Li Fang Yan, Co-Founder, worked alongside
                                her father Mr. Li Pui Shing and continues to build and grow
                                the Lao Ban business today. She helped shape the brand identity
                                and created the Lao Ban icon, inspired by her parents'
                                companionship while making beancurd together, a symbol of
                                warmth, care, and sharing.
                            </p>
                            <p>
                                Over the decades, Authentic Lao Ban has remained true to its
                                original values: simplicity, sincerity, and the joy of sharing
                                good food with loved ones.
                            </p>
                            <p>
                                Every bowl carries the spirit that began the journey: authentic
                                taste, heartfelt craftsmanship, and the happiness of sharing
                                with family and friends.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Different */}
            <section className="w-full bg-white pb-20 md:pb-28">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 md:gap-16">
                    <div data-aos="fade-right" className="flex-1 flex flex-col justify-center text-left">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-LB-black mb-10 leading-snug">
                            Why Lao Ban
                            <br />
                            Beancurd is Different
                        </h2>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Authentic Craftsmanship",
                                    body: "Desserts are made using traditional methods passed down through generations, ensuring perfect texture and flavour.",
                                },
                                {
                                    title: "Signature Silky Texture",
                                    body: "Celebrated for its smooth, delicate consistency, creating a comforting dessert experience.",
                                },
                                {
                                    title: "A Brand Built on Companionship",
                                    body: "The Lao Ban icon represents love, care, and togetherness — reminding us that desserts are best enjoyed with people we love.",
                                },
                            ].map(({ title, body }, index) => (
                                <div key={title} data-aos="fade-up" data-aos-delay={index * 100}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-LB-darkYellow mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                                        {body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div data-aos="fade-left" className="flex-1 flex justify-center md:justify-end">
                        <img
                            src="/images/Story/different.png"
                            alt="Why Lao Ban Beancurd is Different"
                            className="w-full max-w-sm md:max-w-none rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Consistency */}
            <section className="w-full bg-white pb-20 md:pb-28">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 md:gap-16">
                    <div data-aos="fade-right" className="flex-1 flex justify-center md:justify-start">
                        <img
                            src="/images/Story/legacy.png"
                            alt="Consistency Since 1978"
                            className="w-full max-w-sm md:max-w-none rounded-2xl object-cover"
                        />
                    </div>

                    <div data-aos="fade-left" className="flex-1 flex flex-col justify-center text-left gap-12">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-LB-black mb-4">
                                Consistency Since{" "}
                                <span className="text-LB-darkYellow">1978</span>
                            </h3>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                                Trusted for reliable quality and authentic taste across all
                                outlets.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-LB-darkYellow mb-4">
                                Made to Bring People Together
                            </h3>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                                Every bowl is a symbol of connection, warmth, and shared
                                moments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Craft */}
            <section className="w-full bg-white pb-20 md:pb-28">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 md:gap-16">
                    <div data-aos="fade-right" className="flex-1 flex flex-col justify-center text-left">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-LB-black mb-10 leading-snug">
                            Our Craft
                        </h2>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Freshly Made with Care",
                                    body: "Desserts are freshly made using carefully selected ingredients to preserve authentic flavour and smooth texture.",
                                },
                                {
                                    title: "Premium Ingredients",
                                    body: "Only high-quality soybeans ingredients are used to ensure the signature taste.",
                                },
                                {
                                    title: "Handcrafted with Attention",
                                    body: "From mixing soy milk to achieving the perfect beancurd texture, every step is done with care and precision.",
                                },
                                {
                                    title: "A Family Tradition",
                                    body: "Inspired by family care and companionship, passed from Mr. Li Pui Shing to Li Fang Yan, and shared with every customer.",
                                },
                            ].map(({ title, body }, index) => (
                                <div key={title} data-aos="fade-up" data-aos-delay={index * 100}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-LB-darkYellow mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                                        {body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div data-aos="fade-left" className="flex-1 flex justify-center md:justify-end">
                        <div className="border-4 border-LB-yellow rounded-2xl overflow-hidden shadow-lg w-full max-w-sm md:max-w-none">
                            <img
                                src="/images/Story/craft.png"
                                alt="Our Craft"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}