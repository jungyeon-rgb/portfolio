import { marked } from "marked"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"

const CommentList = ({ commentsList }) => {
    return (
        <section>
            {commentsList.length > 0 && (
                <div className="mt-6">
                    {commentsList.map((cmt, index) => (
                        <div key={index} className="flex justify-center p-2 mb-2">
                            <Image
                                src={cmt.user.image}
                                alt="Profile"
                                width={40}
                                height={40}
                                className="w-10 h-10 mr-2 rounded-xl"
                            />
                            <div className="w-full">
                                <div className="flex px-4 py-2 border border-b border-gray-200 rounded-t-md bg-[#e1e4e8]">
                                    <p className="mr-2 font-bold">{cmt.user.name}</p>
                                    <span className="text-sm text-gray-500">
                                        {formatDistanceToNow(new Date(cmt.created_at), { addSuffix: true })}
                                    </span>
                                </div>
                                <div
                                    className="px-4 py-4 bg-white rounded-b-xl"
                                    dangerouslySetInnerHTML={{ __html: marked(cmt.text) }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default CommentList
