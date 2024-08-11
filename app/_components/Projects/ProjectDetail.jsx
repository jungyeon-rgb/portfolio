import React from "react";

const ProjectDetails = ({ project }) => (
  <div className="w-full h-full p-6 overflow-x-hidden overflow-y-auto  text-black">
    <div className="mb-4">
      <h3 className="text-2xl font-bold">OverView</h3>
      <p className="">{project.description}</p>
    </div>
    <div className="mb-4">
      <h3 className="text-xl font-black">프로젝트 기간</h3>
      <p className="font-body">{project.period}</p>
    </div>
    <div className="mb-4">
      <h3 className="text-xl font-black">참여 인원</h3>
      <p className="font-body">{project.teamMembers}</p>
    </div>
    <div className="mb-4">
      <h3 className="text-xl font-black">기술 스택</h3>
      <p className="font-body">{project.technologies}</p>
    </div>
    <div className="mb-4">
      <h3 className="text-xl font-black">담당 역할</h3>
      <div className="preformatted-text font-body">
        <div>
          {project.role.split("\n").map((role, index) => (
            <React.Fragment key={index}>
              {role}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
    {project.relatedLink && (
      <div className="mb-4">
        <h3 className="text-xl font-semibold font-body">관련 게시글</h3>
        <a
          href={project.relatedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {project.relatedLink}
        </a>
      </div>
    )}
    {project.deploymentLink && (
      <div className="mb-4">
        <h3 className="text-xl font-semibold font-body">배포 주소</h3>
        <a
          href={project.deploymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {project.deploymentLink}
        </a>
      </div>
    )}
    <div className="mb-4">
      <h3 className="text-xl font-semibold font-body">GitHub 링크</h3>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        {project.githubLink}
      </a>
    </div>
    {project.figmaLink && (
      <div className="mb-4">
        <h3 className="text-xl font-semibold font-body">Figma</h3>
        <a
          href={project.figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {project.figmaLink}
        </a>
      </div>
    )}
  </div>
);

export default ProjectDetails;
