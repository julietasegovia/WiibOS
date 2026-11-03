import Title from "./Title.jsx";

export default function ChannelGrid({ channels }) {
  return (
    <main className="flex flex-1 overflow-auto px-[4vw] py-[2vh]">
      <div className="m-auto grid w-max grid-cols-[repeat(4,25rem)] gap-4">
        {channels.map((channel, i) => (
          <Title key={i} {...channel} />
        ))}
      </div>
    </main>
  );
}