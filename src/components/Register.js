import { useRef, useState } from "react";


const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');


    const [success, setSuccess] = useState(false);



    return (
        <>
            {success ? (
                <section style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{backgroundColor: 'white', padding: '2rem', width: '400px'}}>
                        <div style={{marginBottom: '2rem'}}>
                    <div>Username: {user}</div>
                    <div>Password: {pwd}</div>
                    <div>Confirm password: {matchPwd}</div>
                    <div>Name: {name}</div>
                    <div>Last name: {lastName}</div>
                    </div>
                    <button onClick={() => setSuccess(false)}>Close</button>
                    </div>
                </section>
            ) : (null)}
                <section>
                    <h1>Register</h1>
                    <div style={{display: 'flex', flexDirection: 'column',}}>
                        <label htmlFor="username">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <label htmlFor="password">
                            Password:
                        
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <label htmlFor="confirm_pwd">
                            Confirm Password:   
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                        />
                    <label htmlFor="name">
                            Enter name:   
                        </label>
                            <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                        />
                            <label htmlFor="lastName">
                            Enter last name:   
                        </label>
                            <input
                            type="text"
                            id="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                        />
                    </div><br/>
                    <div>
                        <button onClick={() => setSuccess(true)}>Sign Up</button>
                    </div>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign In</a>
                        </span>
                    </p>
                </section>
            
        </>
    )
}

export default Register