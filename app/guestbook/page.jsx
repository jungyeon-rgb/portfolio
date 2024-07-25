"use client"
import { useSession } from "next-auth/react"
import AuthButtons from "./components/AuthButtons"
import { useState } from "react"

const GuestBook = () => {
    const { data: session } = useSession()
    const [comment, setComment] = useState("")
    const [preview, setPreview] = useState("")

    const handleCommentChange = (e) => {
        setComment(e.target.value)
        setPreview(e.target.value) // 실시간 미리보기
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // 댓글 제출 로직 추가
        console.log("Comment submitted:", comment)
        setComment("") // 댓글 입력 후 초기화
    }

    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-4">GUEST BOOK</h1>
            <AuthButtons />
            {session && (
                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Write a Comment</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className="w-full h-32 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Leave a comment"
                            value={comment}
                            onChange={handleCommentChange}
                        />
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-sm text-gray-500">Styling with Markdown is supported</span>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Comment
                            </button>
                        </div>
                    </form>
                    <div className="mt-6">
                        <h3 className="text-lg font-bold mb-2">Preview</h3>
                        <div className="p-4 border border-gray-300 rounded-md">{preview}</div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default GuestBook
