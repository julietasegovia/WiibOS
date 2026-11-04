import photoImg from "../assets/photo_channel.png";
import forecastImg from "../assets/forecast_channel.jpg";
import newsImg from "../assets/news_channel.webp";
import internetImg from "../assets/internet_channel.jpg";

const base =
  "w-full aspect-[1.85] rounded-xl border-2 flex items-center justify-center text-center font-extrabold text-2xl transition duration-100 bg-cover bg-center bg-no-repeat";

const hoverGlow =
  "hover:scale-105 hover:z-10 hover:border-wii-blue " +
  "hover:shadow-[0_0_0_3px_rgba(53,182,230,0.35),0_8px_18px_rgba(0,0,0,0.25)]";

const inset = "shadow-[inset_0_-14px_20px_-12px_rgba(0,0,0,0.12)]";
const edge = "border-wii-edge dark:border-neutral-600";

const variantStyles = {
  default: { classes: `${inset} ${hoverGlow} ${edge} bg-white dark:bg-slate-100 text-wii-blue` },
  photo: { classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: photoImg },
  forecast: { classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: forecastImg },
  news: { classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: newsImg },
  internet: { classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: internetImg },
  empty: { classes: `bg-white/35 border-dashed ${edge}` },
};

export default function Tile({ name, variant = "default" }) {
  const currentVariant = variantStyles[variant] ?? variantStyles.default;

  return (
    <div
      className={`${base} ${currentVariant.classes}`}
      style={currentVariant.bg ? { backgroundImage: `url(${currentVariant.bg})` } : undefined}
    >
    </div>
  );
}