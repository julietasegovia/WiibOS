import { useClock } from "../hooks/useClock.js";

export default function Clock() {
  const d = useClock();
  const hours = d.getHours() % 12 || 12;
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const weekday = d.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className="absolute left-1/2 top-[2%] -translate-x-1/2 text-center leading-none text-[#8a8d91]">
      <div className="font-clock text-[clamp(48px,8vw,80px)] tracking-[0.05em]">
        {hours}:{minutes}
      </div>
      <div className="mt-10 text-3xl font-semibold">
        {weekday} {d.getMonth() + 1}/{d.getDate()}
      </div>
    </div>
  );
}