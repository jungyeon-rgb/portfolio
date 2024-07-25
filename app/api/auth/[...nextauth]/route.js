import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

// authOptions를 정의합니다.
const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
    },
}

// NextAuth 핸들러를 정의합니다.
const handler = NextAuth(authOptions)

// GET 및 POST 요청을 처리할 수 있도록 핸들러를 내보냅니다.
export { handler as GET, handler as POST }
