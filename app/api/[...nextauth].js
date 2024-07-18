// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user.id = token.id
            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
    },
})
