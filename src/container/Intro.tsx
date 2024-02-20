import { IntroCard } from "~/components/IntroCard";
import Link from "next/link";

export const Intro = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-center grid text-white pb-5 md:pl-10 pl-5">
                <div className="flex text-white md:text-[50px] text-[30px] font-bold font-['Consolas'] m-10">
                    <h1>QuickDocs</h1>
                    <img src="/my-daily-headerIcon1.png" className="object-contain hover:scale-110"/>
                </div>
                <p className="md:pl-10 md:text-lg text-sm font-['Consolas']">Write IT down! Write THAT down!</p>
            </div>
            <div className="bg-white shadow-xl" />

            <div className="flex justify-center font-['Consolas'] gap-[2rem] md:gap-[5rem] lg:gap-[7rem] mt-20">
                <Link href="/Journal"><IntroCard src="/journalIcon2.png" alt="journal-icon." title="Journal" /></Link>
                <Link href="/Notebook"><IntroCard src="/notebookIcon2.png" alt="notebook-icon." title="Notebook" /></Link>
                <Link href="/Stickies"><IntroCard src="/stickiesIcon2.png" alt="stickynote-icon." title="Stickies" /></Link>
            </div>
            <div className="md:ml-10 lg:ml-48 md:mt-5 mt-10 ml-24 w-32 md:w-48">
                <img
                    src="/my-daily-icon2.png"
                    alt="my_daily_icon."
                    className=""
                />
            </div>

        </div>
    );
}