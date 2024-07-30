"use client"
import MenuList from "./_components/MenuList"
import { useState } from "react"
import NameLogo from "./_components/NameLogo"

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <main className="relative w-full h-screen font-pretendard">
                <section>
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                        src="/video/background2.mp4"
                        loop
                        autoPlay
                        muted
                    />
                    <div className="relative flex flex-col p-12 text-white font-stardom">
                        <h1 className="text-9xl">Front-end Developer</h1>
                        <h1 className="text-9xl">Kim Jung Yeon</h1>
                        <h4 className="w-1/2 pt-10 text-2xl">
                            For a moment of rest between lives Jukdo Beach in Yangyang has become an exotic village
                            where surfers gather. Surfers`&apos;` unique sense of style appeals to many people. 3.42
                            Stay is located in a clean village within walking distance of Jukdo Beach. The large yard,
                            swimming pool, and various landscaping allow you to feel relaxed. The Indonesian wood finish
                            gives an exotic feel, and the large window connected to the yard provides a comfortable
                            rest.
                        </h4>
                    </div>
                    <div className="text-2xl absolute flex justify-center items-center text-white w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer">
                        <button onClick={toggleMenu}>MENU</button>
                    </div>
                    <div className="absolute p-2 pb-16 transform -translate-x-1/2 bottom-10 right-10">
                        <NameLogo />
                    </div>
                    <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </section>
            </main>
        </>
    )
}
