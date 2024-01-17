import React from 'react';

const Home = () => {
  const headingStyle = {
    fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    fontWeight: 'bolder'
  };

  const paraStyle = {
    fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    fontSize: "1rem"
  };

  const imgStyle = {
    border: "2px solid aqua",
    borderRadius: "10px"
  };

  const containerStyle = {
    position: 'relative',
    transition: 'border 0.5s ease-in-out, border-radius 0.3s ease-in-out'
  };

  const sectionStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    opacity: "0.6"
  };

  return (
    <>
      <div className="container-fluid bg-light d-flex align-items-center justify-content-center vh-100" style={{
        ...sectionStyle,
        backgroundImage: `url("../Images/laptop9.jpeg")`
      }}>
        <h1 style={{
          ...headingStyle,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'orange',
          textShadow: '3px 3px 5px black',
          textAlign: 'center',
          whiteSpace: "nowrap",
          fontSize: '3em',
          fontWeight: "bolder"
        }}>Crafting Visually Stunning Websites</h1>

        <h3 style={{
          ...headingStyle,
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'orange',
          textShadow: '3px 3px 5px black',
          textAlign: 'center',
          fontSize: '2em'
        }}>Bringing your web vision to life with innovative design and technical excellence.</h3>
      </div>

      <div className="container-fluid bg-light d-flex align-items-center justify-content-center vh-100">
        <div className="row my-4 d-flex align-items-center">
          <div className="col-sx-12 col-md-6" style={containerStyle}>
            <h1 style={headingStyle}>About Web Portfolio</h1>
            <p style={paraStyle}>Welcome to WebPortfolio, your destination for exceptional web design. Our passion for creating visually stunning and user-friendly websites is matched only by our expertise in HTML, CSS, and JavaScript. We specialize in turning ideas into interactive and responsive designs, ensuring seamless user experiences. From conceptualization to execution, we bring your web vision to life with a fusion of design innovation and technical excellence.</p>
          </div>
          <div className="col-sx-12 col-md-6">
            <img style={imgStyle} src="../Images/laptop1.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-light d-flex align-items-center justify-content-center vh-100">
        <div className="row my-4 d-flex align-items-center">
        <div className="col-sx-12 col-md-6">
            <img style={imgStyle} src="../Images/laptop3.jpg" alt="" />
          </div>
          <div className="col-sx-12 col-md-6" style={containerStyle}>
            <h1 style={headingStyle}>Interactive & Responsive Designs</h1>
            <p style={paraStyle}>I specialize in creating visually stunning and user-friendly websites using HTML, CSS, and JavaScript. My designs are not only beautiful but also interactive and responsive, providing seamless user experiences. From concept to execution, I am dedicated to crafting unique and engaging digital solutions that bring your web vision to life.</p>
          </div>
          
        </div>
      </div>

      <div className="container-fluid text-dark d-flex align-items-center justify-content-center vh-100" style={{backgroundColor: "#add8e6"}}>
        <div className="row my-4 mt-1 d-flex align-items-center">
          
          <div className="col-sx-12 col-md-6">
            <h1 style={headingStyle}>Web Design & Development</h1>
            <p style={paraStyle}>Crafting visually stunning and user-friendly websites is my passion. With expertise in HTML, CSS, and JavaScript, I ensure that every website I create seamlessly blends aesthetics with functionality. Let's collaborate and turn your ideas into an innovative, interactive, and visually captivating web presence.</p>
          </div>
          <div className="col-sx-12 col-md-6" style={containerStyle}>
            
            <img style={imgStyle} src="../Images/laptop2.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
