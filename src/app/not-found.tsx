
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-2xl text-center">
        {/* Error Number */}
        <p className="mb-4 text-sm font-bold tracking-[0.3em] text-lime-400">
          ERROR 404
        </p>

        {/* Main Heading */}
        <h1 className="mb-6 text-6xl font-black uppercase tracking-tight sm:text-8xl">
          PAGE NOT FOUND
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
          Looks like this workout took a wrong turn. The page you are looking
          for does not exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-lime-300"
        >
          ← Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
