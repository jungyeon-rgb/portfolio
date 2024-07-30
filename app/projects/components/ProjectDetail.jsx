import NewLineText from "./NewLineText"

const ProjectDetails = ({ project }) => (
    <div className="w-full h-full p-4 overflow-x-hidden overflow-y-auto text-white ">
        <h1 className="mb-2 text-3xl font-black">&lt;{project.title}&gt;</h1>
        <div className="mb-4">
            <h3 className="text-xl font-semibold">프로젝트 설명</h3>
            <p>{project.description}</p>
        </div>
        <div className="mb-4">
            <h3 className="text-xl font-semibold">프로젝트 기간</h3>
            <p>{project.period}</p>
        </div>
        <div className="mb-4">
            <h3 className="text-xl font-semibold">참여 인원</h3>
            <p>{project.teamMembers}</p>
        </div>
        <div className="mb-4">
            <h3 className="text-xl font-semibold">기술 스택</h3>
            <p>{project.technologies}</p>
        </div>
        <div className="mb-4">
            <h3 className="text-xl font-semibold">담당 역할</h3>
            <div className="preformatted-text">
                <NewLineText text={project.role} />
            </div>
        </div>
        {project.relatedLink && (
            <div className="mb-4">
                <h3 className="text-xl font-semibold">관련 게시글</h3>
                <a href={project.relatedLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    {project.relatedLink}
                </a>
            </div>
        )}
        {project.deploymentLink && (
            <div className="mb-4">
                <h3 className="text-xl font-semibold">배포 주소</h3>
                <a href={project.deploymentLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    {project.deploymentLink}
                </a>
            </div>
        )}
        <div className="mb-4">
            <h3 className="text-xl font-semibold">GitHub 링크</h3>
            <a href={project.githubLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                {project.githubLink}
            </a>
        </div>
        {project.figmaLink && (
            <div className="mb-4">
                <h3 className="text-xl font-semibold">Figma</h3>
                <a href={project.figmaLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    {project.figmaLink}
                </a>
            </div>
        )}
    </div>
)

export default ProjectDetails
