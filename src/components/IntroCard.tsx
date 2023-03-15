type IntroCards = {
    src: string,
    alt: string,
    title: string
}

export const IntroCard = ({ src, alt, title }: IntroCards) => {
    return (
        <div className="relative justify-center w-14 md:w-32 hover:scale-110">
            <div>
                {/* <img
                    src="/my-daily-icon3.png"
                    alt="my_daily_icon."
                    className="opacity-[0] hover:opacity-[1]"
                /> */}
                <img className="rounded" src={src} alt={alt} />
            </div>
            <h2 className="mt-2 md:ml-3 text-gray font-bold">{title}</h2>

        </div>
    );
}