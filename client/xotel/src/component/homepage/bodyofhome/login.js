import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate , Link} from 'react-router-dom';
const Signup = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        let signedin = localStorage.getItem('user');
        if (signedin) {
            navigate('/');
        }
    });
    const register = async (e) => {
        e.preventDefault();
        let data = {email, password };

        let result = await fetch('http://localhost:5000/login', {  
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = await result.json();
        if (result.msg == "SuccessFul") {
            localStorage.setItem('user', JSON.stringify(result));
            setError(result.msg)
            setTimeout(()=>{
                navigate('/');
            },5000)
        }
        else{
            setError(result.msg)
        }
    };


    return (
        <div className="signup-container">
            <form className="signup" onSubmit={(e) => register(e)}>
                <h1>Login</h1>
                <p id='errorMsg' className='error-msg'>
                    {error}
                </p>
                <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Email' id="" />
                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Password' id="" />
                <button className='btn' type="submit">Login</button>  
                <p className='user-note'>don't have an account? <Link to={'/SignUp'}>Register</Link></p>              
            </form>
        </div>
    );
};

export default Signup;
