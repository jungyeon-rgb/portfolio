// "use client"
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useState } from "react"

// const GuestBookForm = () => {
//     const { data: session } = useSession()
//     const [message, setMessage] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         if (!message) return

//         const response = await fetch("/api/guestbook", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 message,
//                 name: session.user.name,
//                 email: session.user.email,
//             }),
//         })

//         if (response.ok) {
//             setMessage("")
//             // Handle successful submission (e.g., show a message or refresh the list)
//         } else {
//             // Handle submission error
//         }
//     }

//     if (!session) {
//         return (
//             <div>
//                 <p>You must be logged in to sign the guest book.</p>
//                 <button onClick={() => signIn("github")}>Sign in with GitHub</button>
//             </div>
//         )
//     }

//     return (
//         <form onSubmit={handleSubmit} className="flex flex-col">
//             <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Leave your message here"
//                 required
//                 className="p-2 border border-gray-300 rounded"
//             />
//             <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
//                 Submit
//             </button>
//             <button onClick={() => signOut()} className="mt-2 p-2 bg-red-500 text-white rounded">
//                 Sign out
//             </button>
//         </form>
//     )
// }

// export default GuestBookForm
