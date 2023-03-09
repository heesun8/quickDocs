import { IntroCard } from "~/components/IntroCard";
import Link from "next/link";

export const Intro = () => {
    return (
        <div className="justify-center h-screen bg-info">
            <div className="flex justify-center grid bg-info text-white pb-5">
                <h1
                    className="text-white text-lg font-bold m-3"
                >
                    Daily
                </h1>
                <p className="text-md">All transactions in one place</p>
            </div>
            <div className="bg-info-content p-2 mb-5"/>

            <div className="flex justify-center gap-10 mt-20">
                <Link href="/Journal"><IntroCard src="/Journal.svg.png" alt="journal-icon." title="Journal" /></Link>
                <Link href="/Notebook"><IntroCard src="/notebook.jpg" alt="notebook-icon." title="Notebook" /></Link>
                <Link href="/Stickies"><IntroCard src="/sticky_note.png" alt="stickynote-icon." title="Stickies" /></Link>
            </div>

        </div>
    );
}