
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#171717] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ccff00] font-black text-black">
            F
          </div>

          {/* Brand Name */}
          <span className="text-xl font-black tracking-wide">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;