import React from 'react'

const Items = () => {
  return (
    <div className="container-fluid bg-light" style={{ height: '600px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', rowGap: '10px' }}>
    <div className="item bg-light m-3 p-3 item1 align-self-end">
        <h1>This is Heading one</h1>
        <p>Unique and engaging digital solutions crafted with a blend of design innovation and technical excellence.</p>
    </div>
    <div className="item bg-light m-3 p-3 item1 align-self-end">
        <h1 className="mt-2 mb-2">This is Heading Tow</h1>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut semper velit. Vestibulum consequat leo eu consequat sollicitudin. Nulla facilisi.</p>
    </div>
    <div className="item bg-light m-3 p-3">
        <h1 className="mt-2 mb-2">This is Heading Three</h1>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut semper velit. Vestibulum consequat leo eu consequat sollicitudin. Nulla facilisi.</p>
    </div>

    <div className="item bg-light m-3 p-3">
        <h1 className="mt-2 mb-2">This is Heading Four</h1>
        <p className="mb-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut semper velit. Vestibulum consequat leo eu consequat sollicitudin. Nulla facilisi.</p>
    </div>


</div>

  )
}

export default Items