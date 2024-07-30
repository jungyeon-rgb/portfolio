"use client"
import MenuList from "./MenuList"
import { useState, useEffect } from "react"

const MenuButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        console.log(`Menu is now ${isMenuOpen ? "open" : "closed"}`)
    }, [isMenuOpen])

    return (
        <section>
            <div className="text-2xl absolute flex justify-center items-center text-white w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer">
                <button onClick={toggleMenu}>MENU</button>
            </div>
            <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </section>
    )
}

export default MenuButton
