import "./App.css";
import HomePage from "./Pages/HomePage";
import Bookmark from "./Pages/Bookmark";
import Explore from "./Pages/Explore";
import Massage from "./Pages/Massage";
import Notification from "./Pages/Notification";
import Profile from "./Pages/Profile";
import { Route } from 'react-router-dom';
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();



  return (
    <div className="App">
      { !user ? (
        <>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/explore" component={Login} />
          <Route exact path="/homepage" component={Login} />
          <Route exact path="/bookmark" component={Login} />
          <Route exact path="/massage" component={Login} />
          <Route exact path="/notification" component={Login} />
          <Route exact path="/profile" component={Login} />
        </>
      ) : (
        <>
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/bookmark" component={Bookmark} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/massage" component={Massage} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Explore} />
          <Route exact path="/" component={Explore} />
        </>
      )
      }
    </div >
  );
}

export default App;
