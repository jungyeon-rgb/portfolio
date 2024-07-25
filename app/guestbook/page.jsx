"use client"
import { signIn, signOut, useSession } from "next-auth/react"

// TODO : https://next-auth.js.org/getting-started/example
// TODO : 로그인 아닐 때는 로그인버튼, 로그인 되어있을 때는 Comment버튼

const GuestBook = () => {
    const { data: session } = useSession()
    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-4">GUEST BOOK</h1>
            <div>
                {session ? (
                    <>
                        <p>Logged in as {session.user.email}</p>
                        <button onClick={() => signOut()}>Sign out</button>
                    </>
                ) : (
                    <>
                        <p>You are not logged in</p>
                        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
                    </>
                )}
            </div>
        </section>
    )
}

export default GuestBook
