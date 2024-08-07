"use client"
import { useSession, signIn } from "next-auth/react"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import axiosInstance from "../api/axiosInstance"
import MenuButton from "../_components/MenuButton"
import MenuList from "../_components/MenuList"
import CommentList from "../_components/GuestBook/CommentList"
import Image from "next/image"
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

// 동적 로딩으로 SSR 문제 방지
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })
const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), { ssr: false })

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

    const handleCommentChange = (value) => setComment(value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (comment.trim() && session) {
            const newComment = {
                email: session.user.email,
                name: session.user.name,
                comment: comment,
            }

            try {
                const response = await axiosInstance.post("/comments", newComment)

                setCommentsList([
                    ...commentsList,
                    {
                        ...newComment,
                        created_at: new Date().toISOString(),
                        user: session.user,
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

                <div className="flex flex-col items-center mt-6 mb-4">
                    <div className="flex justify-center mb-4">
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
                    <div className="w-full">
                        <div className="flex justify-start pt-2 px-2 bg-[#e1e4e8] rounded-t-md">
                            <button
                                className={`px-4 py-2 rounded-t-md border-t-2 ${
                                    activeTab === "write" ? "bg-white text-black" : "bg-[#e1e4e8] text-black"
                                }`}
                                onClick={() => setActiveTab("write")}
                            >
                                Write
                            </button>
                            <button
                                className={`px-4 py-2 rounded-t-md border-t-2 ${
                                    activeTab === "preview" ? "bg-white text-black" : "bg-[#e1e4e8] text-black"
                                }`}
                                onClick={() => setActiveTab("preview")}
                            >
                                Preview
                            </button>
                        </div>
                        <div className="w-full p-3 bg-white rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                            {activeTab === "write" && (
                                <MDEditor
                                    value={comment}
                                    onChange={handleCommentChange}
                                    className="h-32"
                                    readOnly={!session}
                                />
                            )}
                            {activeTab === "preview" && (
                                <MarkdownPreview source={comment} className="h-48" />
                            )}
                        </div>
                        {session ? (
                            <form onSubmit={handleSubmit} className="flex items-center justify-between my-4 mx-4 text-center">
                                <p>Styling with Markdown is supported</p>
                                <span className="text-sm text-gray-500">Styling with Markdown is supported</span>
                                <button
                                    type="submit"
                                    className="w-[150px] h-[40px] px-4 py-2 leading-5 text-white bg-green-500 rounded-md hover:bg-green-600"
                                >
                                    Comment
                                </button>
                            </form>
                        ) : (
                            <div className="flex justify-between mx-4 items-center text-center my-4">
                                <p>Styling with Markdown is supported</p>
                                <button
                                    onClick={() => signIn("github")}
                                    className="leading-5 rounded-md hover:bg-green-600 text-white bg-green-500 flex items-center justify-center w-[200px] h-[40px] px-4 py-2"
                                >
                                    <Image src="/images/github.svg" width={20} height={20} alt="githubicon" />
                                    <span className="pl-2">Sign in with GitHub</span>
                                </button>
                            </div>
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
