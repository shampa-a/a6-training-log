import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[#171717] text-white">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">

        {/* Logo + FITLOG */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={32}
            height={32}
          />

          <span className="font-bold">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex gap-2">
          <Link
            href="/workouts"
            className="rounded-md bg-[#ccff00] px-4 py-2 text-black"
          >
            Workout
          </Link>

          <Link
            href="/plan"
            className="rounded-md px-4 py-2 text-gray-300"
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex gap-2">
          <span className="rounded-full bg-[#ccff00] px-3 py-1 text-black">
            Plan 0
          </span>

          <span className="rounded-full border border-gray-500 px-3 py-1">
            Saved 0
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;