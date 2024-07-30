"use client"
import { useSession } from "next-auth/react"
import AuthButtons from "./components/AuthButtons"
import { useState, useEffect } from "react"
import Image from "next/image"
import { marked } from "marked" // marked 라이브러리 임포트
import matter from "gray-matter" // gray-matter 임포트
import path from "path" // 경로 모듈
import { serialize } from "next-mdx-remote" // MDX 직렬화

const GuestBook = () => {
    const { data: session } = useSession()
    const [comment, setComment] = useState("")
    const [commentsList, setCommentsList] = useState([])
    const [activeTab, setActiveTab] = useState("write")
    const [markdownContent, setMarkdownContent] = useState("") // Markdown 내용 상태

    // useEffect(() => {
    //     // Markdown 파일 로드
    //     const loadMarkdown = async () => {
    //         const filePath = path.join(process.cwd(), "content/sample.md")
    //         const fileContent = fs.readFileSync(filePath, "utf8")
    //         const { content } = matter(fileContent)
    //         const serializedContent = await serialize(content)
    //         setMarkdownContent(serializedContent)
    //     }
    //     loadMarkdown()
    // }, [])

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

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
                    },
                },
            ])
            setComment("")
            setActiveTab("write")
        }
    }

    const handleCommentSubmit = () => {
        handleSubmit(new Event("submit", { cancelable: true }))
    }

    return (
        <section className="flex flex-col items-center justify-center w-screen h-full text-black">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                src="/video/background1.mp4"
                loop
                autoPlay
                muted
            />
            <h1 className="my-4 text-white text-9xl font-stardom">GUEST BOOK</h1>

            <div className="w-3/4 max-w-2xl p-6 mx-auto rounded-lg shadow-lg">
                {/* 댓글 작성된 목록 확인 */}
                {commentsList.length > 0 && (
                    <div className="mt-6">
                        <h3 className="mb-2 text-lg font-bold">Comments</h3>
                        <div className="p-4 bg-white border border-gray-300 rounded-md">
                            {commentsList.map((cmt, index) => (
                                <div
                                    key={index}
                                    className="flex bg-[#e1e4e8] items-start p-2 mb-2 border-b border-gray-200"
                                >
                                    <div>
                                        <p className="font-bold solid ">{cmt.user.name}</p>
                                        <div
                                            className="text-black"
                                            dangerouslySetInnerHTML={{ __html: marked(cmt.text) }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* 댓글 달 때 */}
                <div className="flex my-6">
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
                    <div className="flex-row items-center justify-center w-full ml-4">
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
                                    className="w-full h-32 p-3 rounded-l resize-none focus:rounded-md focus:outline-none focus:ring-2 rounded-b-md focus:ring-blue-400"
                                    placeholder="Leave a comment"
                                    value={comment}
                                    onChange={handleCommentChange}
                                />
                                <div className="flex items-center justify-between my-4">
                                    <span className="text-sm text-gray-500">Styling with Markdown is supported</span>
                                    <AuthButtons handleCommentSubmit={handleCommentSubmit} />
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
                                    <AuthButtons handleCommentSubmit={handleCommentSubmit} />
                                </div>
                            </form>
                        )}
                        {/* Markdown 콘텐츠 렌더링
                        <div className="p-4 mt-4 border border-gray-300 rounded-md">
                            <h3 className="mb-2 text-lg font-bold">Markdown Content</h3>
                            <div
                                className="text-black"
                                dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} // Markdown 콘텐츠
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GuestBook
