// pages/guestbook.js
import GuestBookForm from "./@components/GuestBookForm"

const GuestBook = () => {
    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-4">GUEST BOOK</h1>
            <GuestBookForm />
        </section>
    )
}

export default GuestBook
