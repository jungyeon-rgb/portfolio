"use client"
import { useState } from "react"
import MenuList from "./MenuList"
import { motion } from "framer-motion"

const MenuButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <section>
            <motion.div
                className="shadow-md bg-[#C0A8BF] z-[100] text-3xl absolute flex justify-center items-center text-white w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer font-stardom"
                onClick={toggleMenu}
                initial={false}
                animate={isMenuOpen ? { rotate: 360, opacity: 0 } : { rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <span>MENU</span>
            </motion.div>
            <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </section>
    )
}

export default MenuButton
