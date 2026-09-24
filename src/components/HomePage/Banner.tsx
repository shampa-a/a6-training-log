import Image from "next/image";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="grid min-h-150 grid-cols-1 items-center gap-10 bg-[#171717] px-6 py-16 text-white md:grid-cols-2">

      {/* Left Content */}
      <div>
        <p className="mb-3 text-sm font-semibold tracking-widest text-[#ccff00]">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>

        <p className="mt-5 max-w-lg text-gray-400">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <button
          type="button"
          className="mt-6 rounded-md bg-[#ccff00] px-5 py-3 font-semibold text-black transition hover:bg-[#b8e600]"
        >
          BROWSE WORKOUTS
        </button>
      </div>

      {/* Right Image */}
      <div>
        <Image
          src={bannerImage}
          alt="Person doing a workout"
          className="h-auto w-full"
          priority
        />
      </div>

    </section>
  );
};

export default Banner;