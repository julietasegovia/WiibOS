const base ="w-full aspect-[1.85] rounded-xl border-2 flex text-center font-extrabold text-2xl transition duration-100";

const hoverGlow ="hover:scale-105 hover:z-10 hover:border-wii-blue " + "hover:shadow-[0_0_0_3px_rgba(53,182,230,0.35),0_8px_18px_rgba(0,0,0,0.25)]";

const inset = "shadow-[inset_0_-14px_20px_-12px_rgba(0,0,0,0.12)]";

const variants = {
  default: `${inset} ${hoverGlow} bg-white dark:bg-slate-100 border-wii-edge dark:border-neutral-600 text-wii-blue items-center justify-center`,
  photo: `${inset} ${hoverGlow} bg-gradient-to-br from-[#d98b4a] to-[#b8672b] border-wii-edge dark:border-neutral-600 text-white items-start justify-center pt-[6%]`,
  forecast: `${inset} ${hoverGlow} bg-gradient-to-br from-[#2aa2ff] to-[#04207a] border-wii-edge dark:border-neutral-600 text-white items-start justify-start px-[6%] py-[8%]`,
  news: `${inset} ${hoverGlow} bg-gradient-to-br from-[#2e8a3a] to-[#0e4a16] border-wii-edge dark:border-neutral-600 text-white items-start justify-start px-[6%] py-[8%]`,
  internet: `${inset} ${hoverGlow} bg-gradient-to-b from-white from-60% to-[#c9f2f4] border-wii-edge dark:border-neutral-600 text-wii-blue items-center justify-center`,
  empty: "bg-white/35 border-dashed border-wii-edge dark:border-neutral-600",
};

export default function Tile({ name, variant = "default" }) {
  return <div className={`${base} ${variants[variant] ?? variants.default}`}>{name}</div>;
}
