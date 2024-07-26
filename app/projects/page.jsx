import SwiperCustom from "./components/SwiperCustom"

const Projects = () => {
    return (
        <section className="flex-row items-center justify-center w-screen h-screen text-center">
            <p className="my-10 text-6xl font-stardom">projects</p>
            <div className="m-10">
                <SwiperCustom />
            </div>
        </section>
    )
}

export default Projects
