import Section from "../layout/Section.jsx";
import Container from "../layout/Container.jsx";
import projects from "../../data/projects.js";
import ProjectFeature from "../ui/ProjectFeature.jsx";

function Projects() {
  return (
    <Section className="min-h-screen">
      <Container className="flex flex-col">
        {projects.map((project) => (
          <ProjectFeature key={project.id} project={project} />
        ))}
      </Container>
    </Section>
  );
}

export default Projects;
