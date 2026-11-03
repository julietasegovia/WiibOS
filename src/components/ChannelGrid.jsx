import Title from "./Title.jsx";

export default function ChannelGrid({channels}){
    return(
        <main className="flex min-h-0 flex-1 items-center justify-center px-[4vw] py-[2vh]">
            <div className="grid w-full max-w-[1080px] grid-cols-4 gap-[clamp(8px, 1.6vw,18px)]">
                {channels.map((channel, i) => (
                    <Title key={i}{...channel}></Title>
                ))}
            </div>
        </main>
    );
}