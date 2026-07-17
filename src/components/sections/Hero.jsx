import Container from "../layout/Container.jsx";
import Section from "../layout/Section.jsx";
import Button from "../ui/Button.jsx";

function Hero() {
  return (
    <Section className="min-h-screen">
      <Container>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <p>Hi, I'm Robert</p>

            <h1 className="text-5xl font-semibold">
              Frontend Developer creating thoughtful experiences for small
              businesses and startups.
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <p>
              I build fast, accessible, and visually polished web experiences
              using modern frontend technologies with a strong focus on
              thoughtful design and user experience.
            </p>

            <div className="flex-col md:flex gap-8">
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
