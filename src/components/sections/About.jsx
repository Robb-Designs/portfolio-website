import Section from "../layout/Section.jsx";
import Container from "../layout/Container.jsx";

function About() {
  return (
    <Section>
      <Container>
        <div className="about-content grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <p className="uppercase text-sm text-neutral-500">Behind the Developer</p>

            <div className="editorial-statements   flex flex-col gap-4">
              <h2 className="text-6xl leading-none">Beautiful interfaces invite curiosity.</h2>
              <h2 className="text-6xl leading-none">Thoughtful interactions keep people exploring.</h2>
            </div>

            <div className="portrait">
              {/* <img src="" alt="" /> <----- add image   */}
            </div>
          </div>

          <div className="story lg:pt-30">
            <div className="flex flex-col gap-6 text-lg leading-8 text-neutral-600 max-w-prose">
              <p>
                I love creating. Frontend is where design, technology, and
                creativity intersect: taking an idea from a blank canvas and
                watching it evolve into something people can interact with,
                explore, and remember.
              </p>
              <p>
                That instinct comes from years as an artist — painting,
                animation, digital art — long before I started web development.
                I believe the best interfaces communicate, guide, and leave a
                lasting impression. That's why I care about typography,
                composition, motion, and the small details that shape how a
                product feels.
              </p>
              <p>
                Today, I'm continuing to deepen my frontend engineering skills
                through projects that challenge both my creativity and my
                approach to software architecture. As I grow, I'm equally
                committed to strengthening the systems thinking that supports
                every experience I build.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
