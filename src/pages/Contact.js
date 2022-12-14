import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
   return (
      <Container>
         <Row className="mb-5 mt-3">
            <Col lg="8">
               <h1 className="display-4 mb-4">Contact Me</h1>
               <hr className="t_border my-4 ml-0 text-left" />
            </Col>
         </Row>
         <Row className="sec_sp">
            <Col lg="5" className="mb-5">
               <h3 className="color_sec py-4">Get in touch</h3>
               <address>
                  <strong>Email: TravelBlogger@gmail.com</strong>{" "}
                  <br />
                  <br />
                  <p>
                     <strong>Phone: + 385 95 100 100</strong> 
                  </p>
               </address>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
               <form  className="contact__form w-100">
                  <Row className="mb-3">
                  <Col lg="6" className="form-group">
                  <input
                     className="form-control"
                     id="name"
                     name="name"
                     placeholder="Name" 
                     type="text"
                     required 
                  />
                  </Col>
                  <Col lg="6" className="form-group">
                  <input
                     className="form-control rounded-2"
                     id="email"
                     name="email"
                     placeholder="Email"
                     type="email" 
                     required 
                  />
                  </Col>
                  </Row>
                  <textarea
                  className="form-control rounded-2"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5" 
                  required
                  ></textarea>
                  <br />
                  <Row>
                  <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit"> 
                  Send
                  </button>
            </Col>
            </Row>
               </form>
            </Col>
         </Row>
      </Container>
  );
}
