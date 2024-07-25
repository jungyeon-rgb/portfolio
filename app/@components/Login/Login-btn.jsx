"use client"

import { signIn, signOut, useSession } from "next-auth/react"

const LoginButton = () => {
    const { data } = useSession()

    const onClick = async (e) => {
        e.preventDefault()
        if (data) {
            await signOut()
        } else {
            await signIn()
        }
    }

    return (
        <div>
            <button onClick={onClick}>{data ? "로그아웃" : "로그인"}</button>
        </div>
    )
}

export default LoginButton
