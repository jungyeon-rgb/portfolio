"use client"
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import axiosInstance from "../api/axiosInstance"
import MenuButton from "../_components/MenuButton"
import MenuList from "../_components/MenuList"
import CommentList from "../_components/GuestBook/CommentList"
import Image from "next/image"
import { marked } from "marked"

const GuestBook = () => {
    const { data: session } = useSession()
    const [comment, setComment] = useState("")
    const [commentsList, setCommentsList] = useState([])
    const [activeTab, setActiveTab] = useState("write")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        fetchComments()
    }, [])

    const fetchComments = async () => {
        try {
            const response = await axiosInstance.get("/comments")
            setCommentsList(response.data)
            console.log("댓글리스트 응답", response.data)
        } catch (error) {
            console.error("Error fetching comments:", error)
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleCommentChange = (e) => setComment(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("handleSubmit called") // 디버깅용 로그
        if (comment.trim()) {
            const newComment = {
                email: session?.user.email || "Anonymous",
                name: session?.user.name || "Anonymous",
                comment: comment,
            }

            try {
                console.log("Sending POST request with:", newComment) // 디버깅용 로그
                const response = await axiosInstance.post("/comments", newComment)
                console.log("Response:", response) // 디버깅용 로그

                setCommentsList([
                    ...commentsList,
                    {
                        ...newComment,
                        created_at: new Date().toISOString(),
                        user: session?.user || {
                            email: "Anonymous",
                            image: session?.user.image || "/path/to/default/image.png",
                            name: "Anonymous",
                        },
                    },
                ])
                setComment("")
                setActiveTab("write")
            } catch (error) {
                console.error("Error posting comment:", error)
            }
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

                <div className="flex mt-6 mb-4">
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
                                    {session ? (
                                        <button
                                            type="submit"
                                            className="w-[150px] h-[40px] px-4 py-2 leading-5 text-white bg-green-500 rounded-md hover:bg-green-600"
                                        >
                                            Comment
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => signIn("github")}
                                            className="leading-5 rounded-md hover:bg-green-600 text-white bg-green-500 flex items-center justify-center w-[200px] h-[40px] px-4 py-2"
                                        >
                                            <Image src="/images/github.svg" width={20} height={20} alt="githubicon" />
                                            Sign in with GitHub
                                        </button>
                                    )}
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
                                    {session ? (
                                        <button
                                            type="submit"
                                            className="w-[150px] h-[40px] px-4 py-2 leading-5 text-white bg-green-500 rounded-md hover:bg-green-600"
                                        >
                                            Comment
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => signIn("github")}
                                            className="leading-5 rounded-md hover:bg-green-600 text-white bg-green-500 flex items-center justify-center w-[200px] h-[40px] px-4 py-2"
                                        >
                                            <Image src="/images/github.svg" width={20} height={20} alt="githubicon" />
                                            Sign in with GitHub
                                        </button>
                                    )}
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
