import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
<div class="card text-center">
  
  <div class="card-body bg-dark text-light py-4">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <NavLink to="/"><button className='btn btn-success'>Home Page</button></NavLink>
  </div>
</div>

    </div>
  )
}

export default Footer