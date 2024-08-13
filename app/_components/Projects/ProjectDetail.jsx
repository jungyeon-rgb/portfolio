import React from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons"
import { faBlog } from "@fortawesome/free-solid-svg-icons" // Velog 대체 아이콘 (블로그)

const ProjectDetails = ({ project }) => (
    <div className="w-full h-full p-6 overflow-x-hidden overflow-y-auto text-white">
        <div className="mb-4">
            <h3 className="text-xl font-black">프로젝트 목표 및 배경</h3>
            <div
                className="font-body"
                dangerouslySetInnerHTML={{
                    __html: Array.isArray(project.description) ? project.description.join("") : project.description,
                }}
            />
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
            <ul className="pl-5 list-disc font-body">
                {project.role.map((roleItem, index) => (
                    <li key={index}>{roleItem}</li>
                ))}
            </ul>
        </div>

        {project.relatedLink && (
            <div className="mb-4">
                <h3 className="text-xl font-black font-body">관련 게시글</h3>
                <a href={project.relatedLink} target="_blank" rel="noopener noreferrer" className="">
                    {project.relatedLink}
                </a>
            </div>
        )}

        {project.deploymentLink && (
            <div className="mb-4">
                <h3 className="text-xl font-black font-body">배포 주소</h3>
                <div className="font-body">
                    {Array.isArray(project.deploymentLink)
                        ? project.deploymentLink.map((link, index) => (
                              <div key={index} dangerouslySetInnerHTML={{ __html: link }} />
                          ))
                        : project.deploymentLink}
                </div>
            </div>
        )}

        <div className="flex mb-4 space-x-4">
            {project.githubLink && (
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            )}
            {project.relatedLink && (
                <a
                    href={project.relatedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600"
                >
                    <FontAwesomeIcon icon={faBlog} size="2x" />
                </a>
            )}
            {project.figmaLink && (
                <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-600"
                >
                    <FontAwesomeIcon icon={faFigma} size="2x" />
                </a>
            )}
        </div>
    </div>
)

export default ProjectDetails
