import { signIn, useSession } from "next-auth/react"
import Image from "next/image"

const AuthButtons = () => {
    const { data: session } = useSession()

    return (
        <div className="">
            {session ? (
                <>
                    <span className="text-white">{session.user.name}</span>
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
