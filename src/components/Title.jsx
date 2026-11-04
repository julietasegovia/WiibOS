const base =
  "w-full aspect-[1.85] rounded-xl border-2 flex items-center justify-center text-center font-extrabold text-2xl transition duration-100";

const hoverGlow =
  "hover:scale-105 hover:z-10 hover:border-wii-blue " +
  "hover:shadow-[0_0_0_3px_rgba(53,182,230,0.35),0_8px_18px_rgba(0,0,0,0.25)]";

const inset = "shadow-[inset_0_-14px_20px_-12px_rgba(0,0,0,0.12)]";

const edge = "border-wii-edge dark:border-neutral-600";

const variants = {
  default: `${inset} ${hoverGlow} ${edge} bg-white dark:bg-slate-100 text-wii-blue`,
  photo: `${inset} ${hoverGlow} ${edge} bg-[#c9762f] text-white`,
  forecast: `${inset} ${hoverGlow} ${edge} bg-[#0a5ed8] text-white`,
  news: `${inset} ${hoverGlow} ${edge} bg-[#17601c] text-white`,
  internet: `${inset} ${hoverGlow} ${edge} bg-[#eafafd] text-wii-blue`,
  empty: `bg-white/35 border-dashed ${edge}`,
};

export default function Tile({ name, variant = "default" }) {
  return <div className={`${base} ${variants[variant] ?? variants.default}`}>{name}</div>;
}