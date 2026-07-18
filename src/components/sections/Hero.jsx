import Container from "../layout/Container.jsx";
import Section from "../layout/Section.jsx";
import Button from "../ui/Button.jsx";

function Hero() {
  return (
    <Section>
      <Container>
        <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <p>Hi, I'm Robert</p>

            <h1 className="text-5xl font-semibold max-w-4xl">
              Frontend Developer creating thoughtful experiences for small
              businesses and startups.
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <p className="max-w-2xl">
              I build fast, accessible, and visually polished web experiences
              using modern frontend technologies with a strong focus on
              thoughtful design and user experience.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button variant="primary">View Projects</Button>
              <Button variant="secondary">Lets Connect</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
