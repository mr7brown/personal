import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import projImg1 from "./assets/img/project-img1.png";
import amazon1 from "./assets/img/amazon1.png";
import amazon2 from "./assets/img/amazon2.png";
import amazon3 from "./assets/img/amazon3.png";
import aic4 from "./assets/img/aic4.jpg";
import GitLab from "./assets/img/gitlab.jpeg";
import google from "./assets/img/google.jpeg";
import hbo3 from "./assets/img/hbo3.jpeg";
import hbo2 from "./assets/img/hbo2.jpeg";
import hbo1 from "./assets/img/hbo1.jpg";
import projImg2 from "./assets/img/project-img2.png";
import projImg3 from "./assets/img/project-img3.png";
import colorSharp2 from "./assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    For the past decade, I've help write, edit, develop, and
                    engineer technical documentation for some of the most
                    recognizeable companies on the planet...from Robotic Process
                    Automation, API docs, and SDKs to Audio/Video specs and
                    original research. And everything in-between.
                  </p>
                  <p>
                    Here is a small sample of content I've published within the
                    past few years.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Scientific Writing</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Engineering Docs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Technical Specs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col>
                            <div>
                              <img className="projects-img" src={amazon1} />
                              <a
                                target="_blank"
                                className="projects-title"
                                href="https://advertising.amazon.com/en-us/library/research/multichannel-investments-help-sales-and-growth/?ref_=a20m_us_libr"
                              >
                                <div>
                                  <h5 className="projects-title">
                                    (Amazon Ads)
                                  </h5>
                                  <h3 className="projects-title">
                                    Multichannel Investment
                                  </h3>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <img className="projects-img" src={amazon2} />
                              <a
                                target="_blank"
                                className="projects-title"
                                href="https://advertising.amazon.com/en-us/library/research/prime-day-ad-strategies-used-by-top-performers/?ref_=a20m_us_libr"
                              >
                                <div>
                                  <h5 className="projects-title">
                                    (Amazon Ads)
                                  </h5>
                                  <h3 className="projects-title">
                                    Prime Day Strategy
                                  </h3>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <img className="projects-img" src={amazon3} />
                              <a
                                target="_blank"
                                className="projects-title"
                                href="https://advertising.amazon.com/en-us/library/research/coffee-marketing/?ref_=a20m_us_libr"
                              >
                                <div>
                                  <h5 className="projects-title">
                                    (Amazon Ads)
                                  </h5>
                                  <h3 className="projects-title">
                                    Apori Analysis
                                  </h3>
                                </div>
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col>
                            <div>
                              <img className="projects-img" src={aic4} />
                              <a
                                target="_blank"
                                className="projects-title"
                                href="https://partnerhub.warnermedia.com/metadata/automated-content-delivery/technical-metadata"
                              >
                                <div>
                                  <h5 className="projects-title">
                                    (HBO/WarnerMedia)
                                  </h5>
                                  <h3 className="projects-title">
                                    MMC Technical Metadata
                                  </h3>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <img className="projects-img" src={GitLab} />
                              <a
                                target="_blank"
                                className="projects-title"
                                href="https://ashtongbrown.com/gitlab.html"
                              >
                                <div>
                                  <h5 className="projects-title">
                                    (HBO/WarnerMedia)
                                  </h5>
                                  <h3 className="projects-title">
                                    GitLab Setup
                                  </h3>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <img className="projects-img" src={google} />
                              <a
                                target="_blank"
                                className="projects-title"
                                href="https://ashtongbrown.com/google-rpi3.html"
                              >
                                <div>
                                  <h5 className="projects-title">(Google)</h5>
                                  <h3 className="projects-title">
                                    Audio Config w/ Rasperri Pi
                                  </h3>
                                </div>
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col>
                            <div>
                              <img className="projects-img" src={hbo1} />
                              <a
                                target="_blank"
                                className="projects-title"
                                href="https://partnerhub.warnermedia.com/specifications-and-guides/originals/originals-hdr"
                              >
                                <div>
                                  <h5 className="projects-title">
                                    (HBO/WarnerMedia)
                                  </h5>
                                  <h3 className="projects-title">
                                    HDR Specification
                                  </h3>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <img className="projects-img" src={hbo3} />
                              <a
                                target="_blank"
                                className="projects-title"
                                href="https://partnerhub.warnermedia.com/specifications-and-guides/promotionals"
                              >
                                <div>
                                  <h5 className="projects-title">
                                    (HBO/WarnerMedia)
                                  </h5>
                                  <h3 className="projects-title">
                                    Promotional Content
                                  </h3>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <img className="projects-img" src={hbo2} />
                              <a
                                target="_blank"
                                className="projects-title"
                                href="https://partnerhub.warnermedia.com/specifications-and-guides/licensed/licensed-content-sdr"
                              >
                                <div>
                                  <h5 className="projects-title">
                                    (HBO/WarnerMedia)
                                  </h5>
                                  <h3 className="projects-title">
                                    SDR Specification
                                  </h3>
                                </div>
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
