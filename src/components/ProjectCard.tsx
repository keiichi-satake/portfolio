// src/components/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
    title: string;
        description: string;
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
    return (
    <div className="border rounded-lg p-4 shadow-md">
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
    </div>
        );
};

export default ProjectCard;