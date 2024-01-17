import React from 'react';

const About = () => {
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
    transition: 'border 0.5s ease-in-out, border-radius 0.3s ease-in-out',
    
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
        backgroundImage: `url("../Images/laptop5.jpg")`
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
        }}>Crafting Stunning and User-Friendly Websites</h1>

        <h2 style={{
          ...headingStyle,
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'orange',
          textShadow: '3px 3px 5px black', 
          textAlign: 'center',
          fontSize: '2em'
        }}>Welcome to WebPortfolio</h2>
      </div>



      <div className="container-fluid text-light d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#001f3f' }}>
  <div className="row my-4 d-flex align-items-center">
    <div className="col-sx-12 col-md-6" style={containerStyle}>
      <h1 style={headingStyle}>Your Web Design Destination</h1>
      <p style={paraStyle}>Welcome to WebPortfolio, where creativity meets functionality. As a dedicated web designer, I specialize in crafting visually stunning and user-friendly websites using HTML, CSS, and JavaScript. With a blend of design innovation and technical excellence, I thrive on turning ideas into interactive and responsive digital solutions. Let's collaborate to bring your web vision to life. Explore my portfolio and witness the seamless fusion of aesthetics and functionality.</p>
    </div>
    <div className="col-sx-12 col-md-6">
      <img style={imgStyle} src="../Images/laptop6.jpg" alt="" />
    </div>
  </div>
</div>



<div className="container-fluid" style={{ backgroundColor: "#dcdcdc", height: '600px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', rowGap: '10px' }}>
    <div className="item m-3 p-3 item1 align-self-end">
        <h2 className="mt-2 mb-2" style={{ fontWeight:"bolder", color:"#001f3f"}}>Visual Design and User Experience</h2>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>Unique and engaging digital solutions crafted with a blend of design innovation and technical excellence.</p>
    </div>
    <div className="item m-3 p-3 item1 align-self-end">
        <h2 className="mt-2 mb-2" style={{ fontWeight:"bolder", color:"#001f3f"}}>Interactive and Responsive Design</h2>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>I thrive on creating unique and engaging digital solutions, ensuring seamless user experiences from conceptualization to execution.</p>
    </div>
    <div className="item m-3 p-3">
        <h2 className="mt-2 mb-2" style={{ fontWeight:"bolder", color:"#001f3f"}}>Web Design and Development</h2>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>Crafting visually stunning and user-friendly websites is my passion. With expertise in HTML, CSS, and JavaScript, I specialize in turning ideas into interactive and responsive designs, blending aesthetics with functionality to ensure seamless user experiences.</p>
    </div>

    <div className="item m-3 p-3">
        <h2 className="mt-2 mb-2" style={{ fontWeight:"bolder",color:"#001f3f"}}>Digital Solutions and Innovation</h2>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>Let's collaborate and bring your web vision to life. Explore my portfolio to witness a fusion of design innovation and technical excellence.</p>
    </div>


</div>

    </>
  );
}

export default About;
