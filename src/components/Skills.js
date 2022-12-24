import meter1 from "./assets/img/meter1.svg";
import meter2 from "./assets/img/meter2.svg";
import meter3 from "./assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "./assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <br />
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="95%" />
                  <h4>Docs-as-code</h4>
                  <h5>(HTML | CSS | Markdown |Git)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="80%" />
                  <h4>Development</h4>
                  <h5>(JS | GatsbyJS | React | CICD)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="90%" />
                  <h4>General Tech</h4>
                  <h5>(Bash | Linux | NPM | API docs)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="95" />
                  <h4>Content</h4>
                  <h5>(UI/UX design | Flesch-Kincaid)</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
