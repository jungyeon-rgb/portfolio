"use client"
import { useSession } from "next-auth/react"
import AuthButtons from "./components/AuthButtons"
import { useState } from "react"
import Image from "next/image"
import { marked } from "marked"
import CommentList from "./components/CommentList"
import MenuList from "../_components/MenuList"
import MenuButton from "../_components/MenuButton"

const GuestBook = () => {
    const { data: session } = useSession()
    const [comment, setComment] = useState("")
    const [commentsList, setCommentsList] = useState([])
    const [activeTab, setActiveTab] = useState("write")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleCommentChange = (e) => setComment(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (comment.trim()) {
            setCommentsList([
                ...commentsList,
                {
                    text: comment,
                    user: session?.user || {
                        email: "Anonymous",
                        image: "/path/to/default/image.png",
                        name: "Anonymous",
                    },
                    created_at: new Date().toISOString(),
                },
            ])
            setComment("")
            setActiveTab("write")
        }
    }

    return (
        <section className="flex flex-col items-center justify-center w-screen h-full font-medium font-pretendard">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                src="/video/background1.mp4"
                loop
                autoPlay
                muted
            />
            <h1 className="my-4 text-white text-9xl font-stardom">GUEST BOOK</h1>

            <div className="w-3/4 max-w-2xl p-4 mx-auto rounded-lg shadow-lg">
                <MenuButton onClick={toggleMenu} />

                <div className="flex mt-6 mb-4 ">
                    <div className="flex justify-center">
                        {session && (
                            <Image
                                src={session.user.image}
                                alt="Profile"
                                width={40}
                                height={40}
                                className="w-10 h-10 mr-2 rounded-xl"
                            />
                        )}
                    </div>
                    <div className="flex-row items-center justify-center w-full ml-4 text-black">
                        <div className="flex pt-2 px-2 bg-[#e1e4e8] rounded-t-md">
                            <button
                                className={`px-4 py-2 rounded-t-md border-t-2 ${
                                    activeTab === "write" ? "bg-white" : "bg-gray-200"
                                }`}
                                onClick={() => setActiveTab("write")}
                            >
                                Write
                            </button>
                            <button
                                className={`px-4 py-2 rounded-t-md border-t-2 ${
                                    activeTab === "preview" ? "bg-white" : "bg-gray-200"
                                }`}
                                onClick={() => setActiveTab("preview")}
                            >
                                Preview
                            </button>
                        </div>
                        {activeTab === "write" && (
                            <form onSubmit={handleSubmit} className="flex flex-col">
                                <textarea
                                    className="w-full h-32 p-3 resize-none focus:rounded-md focus:outline-none focus:ring-2 rounded-b-md focus:ring-blue-400"
                                    placeholder="Leave a comment"
                                    value={comment}
                                    onChange={handleCommentChange}
                                />
                                <div className="flex items-center justify-between my-4">
                                    <span className="text-sm text-gray-500">Styling with Markdown is supported</span>
                                    <AuthButtons handleCommentSubmit={handleSubmit} />
                                </div>
                            </form>
                        )}
                        {activeTab === "preview" && (
                            <form onSubmit={handleSubmit} className="flex flex-col">
                                <div
                                    className="w-full h-32 p-3 bg-white rounded-l resize-none focus:rounded-md focus:outline-none focus:ring-2 rounded-b-md focus:ring-blue-400"
                                    dangerouslySetInnerHTML={{ __html: marked(comment) }}
                                />
                                <div className="flex items-center justify-between my-4">
                                    <span className="text-sm text-gray-500">Styling with Markdown is supported</span>
                                    <AuthButtons handleCommentSubmit={handleSubmit} />
                                </div>
                            </form>
                        )}
                    </div>
                </div>
                <div className="max-h-[350px] overflow-y-auto text-black">
                    <CommentList commentsList={commentsList} />
                </div>
            </div>
            <MenuList isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </section>
    )
}

export default GuestBook
