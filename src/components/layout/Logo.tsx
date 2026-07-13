export default function Logo() {
  return (
    <a
      href="#hero"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#A44E4B]
          text-white
          shadow-lg
        "
      >
        <span className="font-heading text-xl font-semibold">
          S
        </span>
      </div>

      <div className="leading-none">
        <h1 className="font-heading text-3xl tracking-[0.12em] text-[#2B2623]">
          SERANE
        </h1>

        <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-[#8D8078]">
          Spa & Wellness
        </p>
      </div>
    </a>
  );
}