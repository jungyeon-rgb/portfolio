// pages/api/guestbook.js
import { getSession } from "next-auth/react"

export default async (req, res) => {
    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ error: "You must be logged in to submit a message" })
    }

    if (req.method === "POST") {
        const { message, name, email } = req.body
        // Handle storing the message in your database here

        return res.status(200).json({ message: "Message submitted successfully" })
    }

    return res.status(405).json({ error: "Method not allowed" })
}
