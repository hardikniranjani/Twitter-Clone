import { useEffect, useState } from 'react';
import '../Style/Login.css';
import { Link } from 'react-router-dom';
import db from '../Utils/firebase';
import { auth, provider } from "../Utils/firebase";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';



function Login() {
    const [ dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };


    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await db.auth().signInWithEmailAndPassword(emailAddress, password);
            // history.push(ROUTES.EXPLORE);
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Twitter - Login ';
    }, []);
    return (

        <div className="login_page">
            <div className="login_page_image">
                <img className="login_page_image_size" src="/images/Twitter.png" alt="TwitterImage" />
            </div>
            <div className="login_page_div">
                <div className="login_form">
                    <h1>
                        <img src="/images/Twitter_logo.jpg" alt="Twitter Logo" style={{ width: "100px", marginBottom: "10px" }} />
                    </h1>
                    <h3 style={{ fontStyle: 'normal', color: 'gray', fontSize: '15px', marginTop: '-10px' }}>LogIn Page</h3>

                    {error && <p className="login_error">{error}</p>}

                    <form className="login_form_1">
                        <input
                            placeholder="Email address"
                            type="text"
                            className="login_email"
                            value={emailAddress}
                            onChange={((target) => setEmailAddress(target.value))}
                        />

                        <input
                            className="login_password"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={((target) => setPassword(target.value))}
                        />
                        <button
                            className="login_button"
                            disabled={isInvalid}
                            type="submit"
                            // onClick={handleLogin}
                        >Login</button>
                    </form>
                </div>
                <div className="login_form_footer">
                    <p>Don't have an Account? </p>
                    <Link
                        to="/" className="login_form_footer_link">SignUp</Link>
                    <p className="signup_form_devider">Or you can</p>
                    <div className="google_signin">
                        <button type="submit" className="google_signin_button" onClick={signIn}>SignIn with Google</button></div>
                </div>
            </div>
        </div>
    )
}

export default Login;
