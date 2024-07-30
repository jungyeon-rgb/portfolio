import React, { useState } from "react"
import NOT from "../../../assets/img/notfoundpage.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons"
import Modal from "../../Modal/Modal"

const ProjectCard = ({ item }) => {
    const [modalOpen, setModalOpen] = useState(false)

    const goToSite = () => {
        window.open(item.site, "_blank")
    }

    const goToFigma = () => {
        window.open(item.figma, "_blank")
    }

    const goToGithub = () => {
        window.open(item.github, "_blank")
    }

    let imageUrl
    try {
        imageUrl = require("../../../assets/img/project/" + `${item?.img}` + ".png")
    } catch (err) {
        imageUrl = NOT
    }

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 p-8 bg-black bg-opacity-50 w-full min-w-full h-[600px]">
            {/* Image Section */}
            <div
                className="flex-shrink-0 transition-transform duration-150 ease-in-out shadow-md cursor-pointer"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                }}
                onClick={goToSite}
            >
                <div className="w-full h-[580px] bg-cover bg-center" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col w-full lg:w-[700px] max-w-[800px] h-full p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex flex-col gap-10 mb-4">
                    <h3 className="text-4xl font-bold">{item?.projectNM}</h3>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold">PAGE</h3>
                            <ul className="list-disc list-inside">
                                {item.page.map((page, index) => (
                                    <li key={index} className="text-lg">
                                        {page}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">TOOL</h3>
                            <ul className="list-disc list-inside">
                                {item.skill.map((tool, index) => (
                                    <li key={index} className="text-lg">
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">참여도</h3>
                            <p className="text-lg">{item?.part}</p>
                        </div>
                    </div>
                    <p className="text-lg leading-relaxed">{item?.text}</p>
                </div>

                {/* More Info Section */}
                <div className="flex items-center justify-between mt-auto">
                    <button
                        onClick={handleModal}
                        className="h-12 text-white transition-colors duration-200 bg-black border border-white rounded-full w-28 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                    >
                        MORE
                    </button>
                    <div className="flex gap-3">
                        {item?.figma && (
                            <div
                                onClick={goToFigma}
                                className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-200 border border-white rounded-full cursor-pointer hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                            >
                                <FontAwesomeIcon icon={faFigma} className="text-xl" />
                            </div>
                        )}
                        <div
                            onClick={goToGithub}
                            className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-200 border border-white rounded-full cursor-pointer hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                        >
                            <FontAwesomeIcon icon={faGithub} className="text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen && <Modal setModalOpen={setModalOpen} item={item} imageUrl={imageUrl} />}
        </div>
    )
}

export default ProjectCard
