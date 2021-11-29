import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Typewriter from 'typewriter-effect';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y1ijdfa', 'template_d720dd1', form.current, 'user_g0h2wvzIvn6MELIR9o7Jf')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className='fixed-top bg-dark '>
        <Container>
          <Navbar.Brand className='text-light' href="#home">Mrinal</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav >
              <Nav.Link className='text-light' href="#home">Home</Nav.Link>
              <Nav.Link className='text-light' href="#AboutMe">About Me</Nav.Link>
              <Nav.Link className='text-light' href="#Projects">Projects</Nav.Link>
              <Nav.Link className='text-light' href="#Contact">Contact</Nav.Link>
              <Nav.Link className='text-light' href="#Resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container'>
      <div id='home' className='row '>
        <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
          <div>
            <h4 className='font-monospace fs-4'>WELCOME TO MY WEBSITE</h4>
            <h3 className='fs-2 fw-bolder'>Hi There!</h3>
            <h3>I'M Mrinal Kanti Roy</h3>
            <Typewriter
              options={{
                strings: ['JS Developer', 'React Developer', 'Fornt-End Developer', 'Full Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <Card.Img src="https://i.ibb.co/qr213CY/259992864-427093148860258-4629823978777317286-n-removebg-preview.png" className='img-fluid' />
        </div>
      </div>
      </div>
      <div className='container'>
      <div id='AboutMe' className='row'>
        {/* <h2 className='mt-3'>About Me</h2> */}
        <div className='col-lg-6 col-md-6 col-sm-12 mt-3'>
          <Card.Img src="https://i.ibb.co/qr213CY/259992864-427093148860258-4629823978777317286-n-removebg-preview.png" className='img-fluid' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 mt-3 d-flex align-items-center justify-content-center'>
          <p className='fs-4 font-monospace'> I am Mrinal Kanti Roy
            from Dinajpur, Bangladesh.I am a Web Developer and I am very passionate and dedicated to my work with 2 years experience as a professional Web Developer . I have acquired the skills and knowledge necessary to make your project a success</p>
        </div>
      </div>
      </div>
      <div id='Projects' className='container my-5'>
        <h1>My Projects</h1>
        <div className='row mt-3'>
          <div className='col-lg-4 col-md-6 col-sm-12 g-2'>
            <Card >
              <Card.Img variant="top" src="https://i.ibb.co/9Z33dLD/admiring-wiles-b3a0ad-netlify-app.png" />
              <Card.Body>
                <Card.Title>Light House</Card.Title>
                <a className='btn btn-primary' href="https://admiring-wiles-b3a0ad.netlify.app">Site Link</a>
                <a className='ms-2 btn btn-primary' href="https://github.com/Mrinal-KANTI55/JhoomerLightHouse">Code Link</a>
              </Card.Body>
            </Card></div>
          <div className='col-lg-4 col-md-6 col-sm-12 g-2'>
            <Card >
              <Card.Img variant="top" src="https://i.ibb.co/nD2zCBf/hardcore-jones-602380-netlify-app-home.png" />
              <Card.Body>
                <Card.Title>Bangladesh Tourism</Card.Title>
                <a className='btn btn-primary' href="https://hardcore-jones-602380.netlify.app">Site Link</a>
                <a className='ms-2 btn btn-primary' href="https://github.com/Mrinal-KANTI55/BangladeshTourism">Code Link</a>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 g-2'>

            <Card >
              <Card.Img variant="top" src="https://i.ibb.co/7CxzDv5/kind-austin-b71e19-netlify-app.png" />
              <Card.Body>
                <Card.Title>Happy Learning</Card.Title>
                <a className='btn btn-primary' href="https://kind-austin-b71e19.netlify.app">Site Link</a>
                <a className='ms-2 btn btn-primary' href="https://github.com/Mrinal-KANTI55/HappyLearning">Code Link</a>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 g-2'>

            <Card >
              <Card.Img variant="top" src="https://i.ibb.co/d6sK0bk/vigilant-jang-3a54b6-netlify-app.png" />
              <Card.Body>
                <Card.Title>Dental Caries</Card.Title>
                <a className='btn btn-primary' href="https://laughing-bose-4b86d5.netlify.app">Site Link</a>
                <a className='ms-2 btn btn-primary' href="https://github.com/Mrinal-KANTI55/DentalCaries">Code Link</a>
              </Card.Body>
            </Card></div>
          <div className='col-lg-4 col-md-6 col-sm-12 g-2'>

            <Card >
              <Card.Img variant="top" src="https://i.ibb.co/jZGjyFs/wonderful-chandrasekhar-fa3cdf-netlify-app.png" />
              <Card.Body>
                <Card.Title>Shopping Card</Card.Title>
                <a className='btn btn-primary' href="https://wonderful-chandrasekhar-fa3cdf.netlify.app">Site Link</a>
                <a className='ms-2 btn btn-primary' href="https://github.com/Mrinal-KANTI55/CardOperation">Code Link</a>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 g-2'>

            <Card >
              <Card.Img variant="top" src="https://i.ibb.co/9n9R6X3/relaxed-perlman-6a351f-netlify-app.png" />
              <Card.Body>
                <Card.Title>Honda CBR 300R</Card.Title>
                <a className='btn btn-primary' href="https://relaxed-perlman-6a351f.netlify.app">Site Link</a>
                <a className='ms-2 btn btn-primary' href="https://github.com/Mrinal-KANTI55/HondaCBR300R">Code Link</a>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
      <div id='Contact' className='container my-5'>
        <h1>Contact</h1>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <form className='w-75' ref={form} onSubmit={sendEmail}>
              <input className='form-control' type="text" name="user_name" placeholder='Name' />
              <br />
              <input className='form-control' type="email" name="user_email" placeholder='Email' />
              <br />
              <textarea className='form-control' name="message" placeholder='Message' />
              <br />
              <input type="submit" value="Send" />
            </form>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-3 d-flex align-items-center justify-content-center '>
            <p className='fs-5 font-monospace mt-3'>I'm a Full Stack Web Developer mainly . I have been working as a Web Developer around the last 2 years. I used to work on up Work & I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the Design process, from discussion and collaboration

              Moreover I used to work with different Projects as a Support Admin , I handled inbound calls daily. Recently I am trying to work for as an Junior Developer</p>
          </div>
        </div>

      </div>
      <div id='Resume' className='container my-5'>
      <a className='btn btn-outline-primary' href="https://drive.google.com/file/d/1iSB0dtwpjaJRNNkt-LFMmYmLPY4AV0Mx/view?usp=sharing" target="_blank">Download Resume</a>
      <div className='my-5'>
        <h3>Skills On</h3>
        <div>
          <button className='btn w-25 fs-1'><i class="fab fa-html5"></i></button>
          <button className='btn w-25 fs-1'><i class="fab fa-css3-alt"></i></button>
          <button className='btn w-25 fs-1'><i class="fab fa-react"></i></button>
          <button className='btn w-25 fs-1'><i class="fab fa-js-square"></i></button>
          <button className='btn w-25 fs-1'><i class="fab fa-bootstrap"></i></button>
          <button className='btn w-25 fs-1'><i class="fab fa-node-js"></i></button>
          <button className='btn w-25 fs-1'><i class="fas fa-code-branch"></i></button>
          <button className='btn w-25 fs-1'><i class="fab fa-github"></i></button>
        </div>
      </div>


      </div>
    </div>
  );
}

export default App;
