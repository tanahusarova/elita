import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            
            <label htmlFor="name">nickname</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="geter_prochal_na_hrad" />

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="elitak@gmail.com" id="email" name="email" />
            
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="••••••••" id="password" name="password" />
            
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log In here.</button>
        </div>
    )
}