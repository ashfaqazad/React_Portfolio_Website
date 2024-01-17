import React from 'react';

const Contact = () => {
  const contactStyle = {
    backgroundColor: '#add8e6', // Light gray background
    color: '#343a40', // Dark text color
    padding: '40px',
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for depth
  };

  const formStyle = {
    backgroundColor: '#ffffff', // White background for the form
    padding: '20px',
    borderRadius: '8px', // Rounded corners for the form
  };

  const submitButtonStyle = {
    backgroundColor: '#007bff', // Blue submit button
    color: '#ffffff', // White text on the button
  };

  return (
    <div style={contactStyle}>
      <h1 className="text-center text-warning mt-5 mb-2">Contact Us</h1>
      <div className="container w-75" style={formStyle}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control mb-3" placeholder="Enter Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input type="text" className="form-control mb-3" placeholder="Enter Mobile Number" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Feedback</label>
          <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn btn-primary mb-3' style={submitButtonStyle}>Submit Feedback</button>
      </div>
    </div>
  );
}

export default Contact;
