import Image from "next/image"

const NameLogo = () => {
    const text = "For a moment of rest between lives stay."

    return (
        <section className="relative w-fit h-fit flex items-center justify-center">
            <div className="relative flex items-center justify-center">
                <Image src="/images/cloud.svg" width={150} height={150} alt="cloud" />
                <div className="circle-text absolute w-full h-full flex items-center justify-center text-4xl">
                    {Array.from(text).map((char, index) => (
                        <span
                            key={index}
                            className="absolute text-white"
                            style={{
                                transform: `rotate(${index * (360 / text.length)}deg) translate(100px) rotate(-${
                                    index * (360 / text.length)
                                }deg)`,
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NameLogo
