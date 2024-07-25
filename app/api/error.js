export default function ErrorPage({ searchParams }) {
    return (
        <div>
            <h1>로그인 오류</h1>
            <p>{searchParams.error}</p>
        </div>
    )
}
