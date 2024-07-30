import { signIn, useSession } from "next-auth/react"
import Image from "next/image"

const AuthButtons = ({ handleCommentSubmit }) => {
    const { data: session } = useSession()

    return (
        <div className="mb-4">
            {session ? (
                <>
                    <button
                        onClick={handleCommentSubmit}
                        className="w-[150px] px-4 py-2 leading-5 text-white bg-green-500 rounded-md hover:bg-green-600"
                    >
                        Comment
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={() => signIn("github")}
                        className="w-[150px] px-4 py-2 leading-5 text-white bg-green-500 rounded-md hover:bg-green-600"
                    >
                        <Image src="/images/github.svg" width={40} height={40} alt="githubicon" />
                        Sign in with GitHub
                    </button>
                </>
            )}
        </div>
    )
}

export default AuthButtons
