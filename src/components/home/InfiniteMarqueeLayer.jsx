import { Marquee } from '../Marquee';

export const InfiniteMarqueeLayer = () => {
    return (
        <section className="py-32 bg-obsidian overflow-hidden border-t border-white/5 flex flex-col gap-6">
            <Marquee speed={30} text="JUST DO IT • " />
            <Marquee speed={25} reverse text="THE FUTURE IS NOW • " />
            <Marquee speed={40} text="DEPARTURE FROM THE NORM • " />
        </section>
    );
};
