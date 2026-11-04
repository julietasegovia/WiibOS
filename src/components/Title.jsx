import photoImg from "../assets/photo_channel.png";
import forecastImg from "../assets/forecast_channel.jpg";
import newsImg from "../assets/news_channel.jpg";
import internetImg from "../assets/internet_channel.jpg";
import youtubeImg from "../assets/youtube_channel.jpg";
import shopImg from "../assets/shop_channel.webp";
import netflixImg from "../assets/netflix_channel.jpg";
import miiImg from "../assets/mii_channel.jpg";
import wiispeakImg from "../assets/wiispeak_channel.webp";
import crunchyrollImg from "../assets/crunchyroll_channel.jpg";
import checkmiioutImg from "../assets/checkmiiout.jpeg";
import todayandtommorrowImg from "../assets/todayandtommorow.jpeg";

const base =
  "w-full aspect-[1.85] rounded-xl border-2 flex items-center justify-center text-center font-extrabold text-2xl transition duration-100 bg-cover bg-center bg-no-repeat";

const hoverGlow =
  "hover:scale-105 hover:z-10 hover:border-wii-blue " +
  "hover:shadow-[0_0_0_3px_rgba(53,182,230,0.35),0_8px_18px_rgba(0,0,0,0.25)]";

const inset = "shadow-[inset_0_-14px_20px_-12px_rgba(0,0,0,0.12)]";
const edge = "border-wii-edge dark:border-neutral-600";

const variantStyles = {
  default: { classes: `${inset} ${hoverGlow} ${edge} text-white` },
  photo: { classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: photoImg },
  forecast: { classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: forecastImg },
  news: { classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: newsImg },
  internet: { classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: internetImg },
  youtube: {classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: youtubeImg},
  shop: {classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: shopImg},
  netflix: {classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: netflixImg},
  mii: {classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: miiImg},
  wiispeak: {classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: wiispeakImg},
  crunchyroll: {classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: crunchyrollImg}, 
  checkmiiout: {classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: checkmiioutImg},
  todayandtommorrow: {classes: `${inset} ${hoverGlow} ${edge} text-white`, bg: todayandtommorrowImg},
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