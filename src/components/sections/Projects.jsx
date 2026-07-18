import Section from "../layout/Section.jsx";
import projects from "../../data/projects.js";
import ProjectFeature from "../ui/ProjectFeature.jsx";

function Projects() {
    return (
        <Section className="min-h-screen">
            {projects.map((project) => (
                <ProjectFeature key= {project.id} project={project} />
            ))}
        </Section>
    );
}

export default Projects;