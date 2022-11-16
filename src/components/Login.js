import { useRef, useState } from 'react';
import './Login.css';
//const LOGIN_URL = '/auth';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    return (
        <>
            {success ? (
                <section style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{backgroundColor: 'white', padding: '2rem', width: '400px'}}>
                        <div style={{marginBottom: '2rem'}}>
                    <div>Username: {user}</div>
                    <div>Password: {pwd}</div>
                    </div>
                    <button onClick={() => setSuccess(false)}>Close</button>
                    </div>
                </section>
            ) : (null)}
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <div className='login'>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </div>
                        <div classname='botun'>
                            <button id='botun' onClick={() => setSuccess(true)}>Sign In</button>
                        </div><br/>
                    <p>
                        Need an Account?<br />
                        <span className="line"> 
                            {"/login"}
                            <a>Sign Up</a>
                        </span>
                    </p>
                </section>
            
        </>
    )
}

export default Login;