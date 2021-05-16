import React, { useEffect, useState } from 'react';
import '../Style/SignUp.css';
import { Link } from 'react-router-dom';
import { doesUsernameExist } from '../services/FirebaseServices';
import db from '../Utils/firebase';
import { auth, provider } from "../Utils/firebase";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';



function SighUp() {
  const [state, dispatch] = useStateValue();

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


  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignUp = async (event) => {
    event.preventDefault();

    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await db
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // authentication
        // -> emailAddress & password & username (displayName)
        await createdUserResult.user.updateProfile({
          displayName: username
        });

        // db user collection (create a document)
        await db
          .firestore()
          .collection('users')
          .add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ['2'],
            followers: [],
            dateCreated: Date.now()
          });


      } catch (error) {
        setFullName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setUsername('');
      setError('That username is already taken, please try another.');
    }
  };

  useEffect(() => {
    document.title = 'Twitter - Sign Up ';
  }, []);

  return (
    <div className="signup_page">
      <div className="signup_page_image">
        <img className="signup_page_image_size" src="/images/Twitter.png" alt="TwitterImage" />
      </div>
      <div className="signup_page_main_div">
        <div className="signup_page_div">
          <div className="signup_form">
            <h1>
              <img src="/images/Twitter_logo.jpg" alt="Twitter Logo" style={{ width: "100px", marginBottom: "10px" }} />
            </h1>
            <h3 style={{ fontStyle: 'normal', color: 'gray', fontSize: '15px', marginTop: '-10px' }}>SignUp Page</h3>

            {error && <p className="signup_error">{error}</p>}

            <form className="signup_form_1">
              <input
                className="signup_username"
                placeholder="Username"
                type="text"
                value={username}
                onChange={((e) => setUsername(e.target.value))}
              />

              <input
                className="signup_fullname"
                placeholder="FullName"
                type="text"
                value={fullName}
                onChange={((e) => setFullName(e.target.value))}
              />

              <input
                placeholder="Email address"
                type="text"
                className="signup_email"
                value={emailAddress}
                onChange={((e) => setEmailAddress(e.target.value))}
              />

              <input
                className="signup_password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={((e) => setPassword(e.target.value))}
              />
              <button
                className="signup_button"
                disabled={isInvalid}
                type="submit"
              // onClick={handleSignUp}
              >SignUP</button>
            </form>
          </div>
          <div className="signup_form_footer">
            <p>Already have an Account? </p>
            <Link
              to="/login" className="signup_form_footer_link">Login</Link>
          </div>
          <p className="signup_form_devider">Or you can</p>
          <div className="google_signin">
            <button type="submit" className="google_signin_button" onClick={signIn}>SignIn with Google</button></div>
        </div>
      </div>

    </div>
  )
}

export default SighUp
