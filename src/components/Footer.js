import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "./assets/img/logo.svg";
// import navIcon1 from "./assets/img/nav-icon1.svg";
// import navIcon2 from "./assets/img/nav-icon2.svg";
// import navIcon3 from "./assets/img/nav-icon3.svg";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaGithubAlt } from "react-icons/fa";
// import { FaFilePdf } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <p className="text-center">Copyright 2022. All Rights Reserved</p>
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          {/* <Col size={12} sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ashton-brown-mba-6000238a/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/mr7brown" target="_blank">
                <FaGithubAlt />
              </a>
              <a href="#">
                <FaFilePdf />
              </a>
            </div> */}
        </Row>
      </Container>
    </footer>
  );
};
