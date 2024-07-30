import { signIn, useSession } from "next-auth/react"
import Image from "next/image"

const AuthButtons = ({ handleCommentSubmit }) => {
    const { data: session } = useSession()

    return (
        <div className="">
            {session ? (
                <>
                    <button
                        onClick={handleCommentSubmit}
                        className="w-[150px] h-[40px] px-4 py-2 leading-5 text-white bg-green-500 rounded-md hover:bg-green-600"
                    >
                        Comment
                    </button>
                </>
            ) : (
                <div className="leading-5 rounded-md hover:bg-green-600 text-white bg-green-500 flex items-center justify-center w-[200px] h-[40px] px-4 py-2">
                    <button onClick={() => signIn("github")} className="">
                        <Image src="/images/github.svg" width={20} height={20} alt="githubicon" />
                        Sign in with GitHub
                    </button>
                </div>
            )}
        </div>
    )
}

export default AuthButtons
