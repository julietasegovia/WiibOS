export default function Orb({ side, label, children }) {
  const position = side === "left" ? "left-[3vw]" : "right-[3vw]";

  return (
    <button
      aria-label={label}
      className={`absolute bottom-[14%] ${position} grid aspect-square w-32 cursor-default place-items-center rounded-full border-[3px] border-[#00a0e9] bg-[radial-gradient(circle_at_50%_20%,#ffffff_10%,#f0f0f0_60%,#d4d5d8_100%)] text-[1.5rem] font-extrabold text-[#9da0a4] shadow-[inset_0_-4px_8px_rgba(0,0,0,0.08),inset_0_4px_8px_rgba(255,255,255,0.9),0_0_0_4px_rgba(255,255,255,0.5),0_0_12px_rgba(0,160,233,0.4)] transition-transform active:scale-95`}
    >
      {children}
    </button>
  );
}