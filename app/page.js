"use client"
import MenuList from "./@components/MenuList"
import { useState } from "react"
import NameLogo from "./@components/NameLogo"

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <main className="relative w-full h-screen">
                <section>
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                        src="/video/background2.mp4"
                        loop
                        autoPlay
                        muted
                    />
                    <div className="relative p-12 flex flex-col text-white font-stardom">
                        <h1 className="text-9xl">Front-end Developer</h1>
                        <h1 className="text-9xl">Kim Jung Yeon</h1>
                        <h4 className="text-2xl pt-10 w-1/2">
                            For a moment of rest between lives Jukdo Beach in Yangyang has become an exotic village
                            where surfers gather. Surfers' unique sense of style appeals to many people. 3.42 Stay is
                            located in a clean village within walking distance of Jukdo Beach. The large yard, swimming
                            pool, and various landscaping allow you to feel relaxed. The Indonesian wood finish gives an
                            exotic feel, and the large window connected to the yard provides a comfortable rest.
                        </h4>
                    </div>
                    <div className="text-2xl absolute flex justify-center items-center text-white w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer">
                        <button onClick={toggleMenu}>MENU</button>
                    </div>
                    <div className="absolute bottom-10 right-10 transform -translate-x-1/2 p-6">
                        <NameLogo />
                    </div>
                    <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </section>
            </main>
        </>
    )
}
