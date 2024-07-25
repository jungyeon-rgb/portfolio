"use client"
import { useSession } from "next-auth/react"
import AuthButtons from "./components/AuthButtons"
import { useState } from "react"

const GuestBook = () => {
    const { data: session } = useSession()
    const [comment, setComment] = useState("")
    const [commentsList, setCommentsList] = useState([])

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (comment.trim()) {
            // 댓글과 사용자 정보 함께 저장
            setCommentsList([...commentsList, { text: comment, user: session.user }])
            setComment("") // 댓글 입력 후 초기화
        }
    }

    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center text-black">
            <h1 className="text-4xl mb-4">GUEST BOOK</h1>
            <AuthButtons />
            {session && (
                <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <img src={session.user.image} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
                        <p className="text-lg font-bold text-black">{session.user.email}</p>
                    </div>
                    <h2 className="text-lg font-bold mb-4">Write a Comment</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <textarea
                            className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Leave a comment"
                            value={comment}
                            onChange={handleCommentChange}
                        />
                        <span className="text-sm text-gray-500 mt-2">Styling with Markdown is supported</span>
                        <button
                            type="submit"
                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                            Comment
                        </button>
                    </form>
                    <div className="mt-6">
                        <h3 className="text-lg font-bold mb-2">Comments</h3>
                        <div className="bg-white border border-gray-300 rounded-md p-4">
                            {commentsList.map((cmt, index) => (
                                <div key={index} className="mb-2 p-2 border-b border-gray-200 flex items-center">
                                    <img src={cmt.user.image} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                                    <div>
                                        <p className="font-bold">{cmt.user.email}</p>
                                        <p className="text-black">{cmt.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default GuestBook
