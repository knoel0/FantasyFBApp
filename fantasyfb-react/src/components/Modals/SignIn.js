import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

const OVERLAY_STYLE = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}
const MAIN_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

export default function SignIn({ open, action, onClose }) {
    
    const [inputs, setInput] = useState([])
    
    const handleInputChange = (e) => setInput({
        ...inputs,
        [e.currentTarget.name]: e.currentTarget.value
    })
    
    if (!open) { return null }

    return ReactDOM.createPortal (
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MAIN_STYLE}>
                <form autoComplete="off" //onSubmit={submitHandler}
                >
                    <input type="email" name="email" onChange={handleInputChange} placeholder="email" onChange={handleInputChange} required />
                    <input type="password" name="password" onChange={handleInputChange} placeholder="password" onChange={handleInputChange} required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}