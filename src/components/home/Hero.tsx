import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        
        {/* Left Content */}
        <div>
          {/* Eyebrow */}
          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          {/* CTA */}
          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime-400 px-6 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-lime-300"
          >
            <span>Browse Workouts</span>
            <span aria-hidden="true">↓</span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
          <div className="relative aspect-square w-full">
            <Image
              src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
              alt="Athlete working out"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Image Overlay */}
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/70 p-4 backdrop-blur-sm">
            <p className="text-xs font-bold tracking-[0.2em] text-lime-400">
              FITLOG
            </p>
            <p className="mt-1 text-sm font-semibold uppercase">
              Train hard. Log honest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
