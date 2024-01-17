import React from 'react';

const Posts = () => {
  const postsStyle = {
    backgroundImage: `url("../Images/bang2.jpg")`, // Background image path
    backgroundSize: 'cover', // Adjust the background size as needed
    backgroundPosition: 'center', // Center the background image
    backgroundRepeat: 'no-repeat', // Do not repeat the background image
    // height: '400px', // Specify the height of the div
    // opacity: 0.7, // Set the opacity value between 0 (transparent) to 1 (opaque)
    
  };
  const headingStyle = {
    position: 'absolute', // Position the heading absolutely within the parent div
    top: '70%', // Center the heading vertically
    left: '50%', // Center the heading horizontally
    transform: 'translate(-50%, -50%)', // Center the heading precisely
    color: 'orange', // Text color
    textAlign: 'center', // Center-align the text
    fontSize: '3em', // Adjust the font size
  };

  const paraStyle = {
    position: 'absolute', // Position the heading absolutely within the parent div
    top: '90%', // Center the heading vertically
    left: '50%', // Center the heading horizontally
    transform: 'translate(-50%, -50%)', // Center the heading precisely
    color: 'orange', // Text color
    textAlign: 'center', // Center-align the text
    fontSize: '2em', // Adjust the font size
    
  };

  return (
    <>
    <div style={postsStyle}>
      <div className='container w-100'>
      <h1 style={headingStyle}>Welcome to MashaAllahEstate</h1>
      <p style={paraStyle}>Your trusted partner for all your real estate needs. Find the perfect property, plot, bungalow, or flat with us.</p>
        <img src="../Images/bang2.jpg" className="d-block w-100" alt=""/>
      </div>
    </div>

    <h1 className='text-center text-info'>OUR SERVICES</h1>
    <div className="container">

    </div>
    </>
  );
}

export default Posts;
