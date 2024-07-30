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

    // TODO : payne_gray, navy2, navy1, air_force_blue, dark_pink

    return (
        <section>
            <div className="shadow-md bg-[#C0A8BF] z-90 text-3xl absolute flex justify-center items-center text-white w-12 h-12 rounded-full bottom-[50px] left-1/2 transform -translate-x-1/2 cursor-pointer font-stardom">
                <button onClick={toggleMenu} className="flex items-center">
                    {/* Uncomment the SVG if you want to use the icon */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" fill="none" className="mr-1">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.4099 14.015L29.3272 0.207581L22.7728 13.6849C20.5699 16.1601 17.227 17.4094 13.9413 16.9868L0.151794 11.0772L13.634 17.6341C16.1089 19.8423 17.3546 23.1915 16.9235 26.4806L11.0214 40.2526L17.59 26.7464C19.7953 24.2869 23.13 23.0484 26.4068 23.4732L40.1968 29.383L26.6955 22.8168C24.2356 20.6168 22.9935 17.2884 23.4099 14.015Z"
                            fill="white"
                        />
                    </svg> */}
                    <span>MENU</span>
                </button>
            </div>
            <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </section>
    )
}

export default MenuButton
