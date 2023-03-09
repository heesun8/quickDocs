type IntroCards = {
    src: string,
    alt: string,
    title: string
}

export const IntroCard = ({src, alt, title}: IntroCards) => {
    return (
        <div className="w-20">
            <img className="rounded"src={src} alt={alt} />
            <h2 className="">{title}</h2>

        </div>
    );
}