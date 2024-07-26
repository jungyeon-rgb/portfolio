import { signIn, signOut, useSession } from "next-auth/react"

const AuthButtons = () => {
    const { data: session } = useSession()

    return (
        <div className="mb-4">
            {session ? (
                <>
                    <p>Logged in as {session.user.email}</p>
                    <button
                        onClick={() => signOut()}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Sign out
                    </button>
                </>
            ) : (
                <>
                    <p>You are not logged in</p>
                    <button
                        onClick={() => signIn("github")}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Sign in with GitHub
                    </button>
                </>
            )}
        </div>
    )
}

export default AuthButtons
