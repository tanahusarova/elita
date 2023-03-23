import React, {useState} from "react"


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (

        <div className="front-pages">
        <div className="auth-form-container">

        <napis>ELITA</napis>

        <form className="login-form" onSubmit={handleSubmit}>

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="elitak@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="••••••••" id="password" name="password" />
        <button className="button-front-page" type="submit" onClick={() => props.onFormSwitch('calendar')}>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>

    )
}