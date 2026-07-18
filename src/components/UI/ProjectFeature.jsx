import Container from "../layout/Container.jsx";
import Section from "../layout/Section.jsx";
import Button from "./Button.jsx";

function ProjectFeature({ project }) {
  const isReversed = project.layout === "right";

  return (
    <Section>
      <Container>
        <div className="project-feature grid grid-cols-1 gap-16 lg:grid-cols-2 ">
          <div
            className={`project-content flex flex-col gap-4 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          >
            <header className="project-header flex items-start gap-6">
              <span className="project-number text-sm tracking-[0.3em] text-neutral-500">
                {project.number}
              </span>

              <div className="project-title-group flex flex-col gap-2">
                <h2>{project.title}</h2>
                <p>{project.category}</p>
              </div>
            </header>

            <div className="project-overview max-w-xl">
              <p>{project.overview}</p>
            </div>

            <div className="project-highlights">
              <ul className="list-none">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              <ul>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>

            <div className="project-actions flex flex-row gap-4">
              {project.repository ? (
                <Button variant="secondary" href={project.repository}>
                  View Code
                </Button>
              ) : (
                <p className="text-sm text-muted">{project.repositoryNote}</p>
              )}

              {project.website && (
                <Button variant="primary" href={project.website}>
                  Live Site
                </Button>
              )}
            </div>
          </div>

          <div
            className={`project-media flex flex-col ${isReversed ? "lg:order-1" : "lg:order-2"}`}
          >
            <img
              className="w-full rounded-xl object-cover"
              src={project.images?.[0]}
              alt={project.imageAlt}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ProjectFeature;
