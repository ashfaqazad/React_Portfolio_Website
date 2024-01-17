import React from 'react'


const Services = () => {

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
    opacity: "0.4"
  };


  

  return (
  <>
  

  <div className="container-fluid bg-light d-flex align-items-center justify-content-center vh-100" style={{
        ...sectionStyle,
        backgroundImage: `url("../Images/laptop15.jpeg")`
      }}>
        <h1 style={{
          ...headingStyle,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: "red",
          textShadow: '5px 5px 5px black',
          textAlign: 'center',
          // whiteSpace: "nowrap",
          fontSize: '3em',
          fontWeight: "bolder"
        }}>Elevate Your Online Presence with Cutting-Edge Web Solutions!

        </h1>

        {/* <h2 style={{
          ...headingStyle,
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'orange',
          textShadow: '3px 3px 5px black', 
          textAlign: 'center',
          fontSize: '2em'
        }}>Welcome to WebPortfolio</h2> */}


      </div>





<div className="container-fluid bg-light" style={{ height: '600px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignItems: "center", textAlignLast:"center"}}>
    <div className="item m-3 p-3 ">
        <h2 className="mt-10 mb-10" style={{ fontWeight:"bolder", color:"#001f3f"}}>Innovative</h2>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>My web designs embody creativity and innovation, delivering visually captivating experiences that leave a lasting impression on users. I prioritize originality and strive to push the boundaries of conventional design, ensuring that every project stands out from the rest.</p>
    </div>
    <div className="item m-3 p-3">
        <h2 className="mt-2 mb-2" style={{ fontWeight:"bolder", color:"#001f3f"}}>Dependable</h2>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>Clients trust me to translate their visions into captivating digital experiences. My dedication to delivering top-notch, reliable web solutions has earned me a reputation for trustworthiness and dependability.</p>
    </div>
    <div className="item m-3 p-3">
        <h2 className="mt-2 mb-2" style={{ fontWeight:"bolder", color:"#001f3f"}}>Efficient</h2>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>I pride myself on my commitment to delivering seamless and efficient web solutions. From responsive layouts to optimized functionality, I ensure that every website I create offers a user-friendly experience to visitors.</p>
    </div>



</div>




<div className="container-fluid" style={{ backgroundColor:"#add8e6", height: '600px', display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', alignItems: "center", textAlignLast:"center"}}>
    


</div>

  
  </>
  )
}

export default Services