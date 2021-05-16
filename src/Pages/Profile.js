import React, { useState, useEffect } from "react";
import "../Style/profile.css";
import Sidebar from '../component/Sidebar';
import { Button } from '@material-ui/core';
import VerifiedIcon from "../VerifiedIcon.png";
import ProfileInfo from "../component/ProfileInfo";
import db from "../Utils/firebase";
import Post from "../component/Post";
import SidebarMobileProfile from "../component/SidevarMobileProfile";

function Profile() {
    const [posts, setPosts] = useState([]);
   

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))));
    }, []);

    useEffect(() => {
        document.title = 'Twitter - Profile ';
      }, []);

    return (
        <div className="profile" >
            <div className="profile_sidebar">
                <Sidebar />
            </div>
            <div className="profile_header">
                <div className="profile_header_title">
                    <h3>Profile</h3>
                </div>
                <div className="profile_bg">
                    <img
                        src="https://tinyurl.com/fxzx7htn"
                        alt="/"
                        style={{ width: "638px", height: "200px", top: "20px" }}
                    />
                </div>
                <div className="profile_pic">
                    <img src="https://tinyurl.com/bzhyub98" alt="/" />

                </div>
                <Button>Follow</Button>
                <div className="profile_header_text">
                    <h2>Hardik <img src={VerifiedIcon} alt="verified" width="15px" height="15px" /> </h2>
                    <p>@Hardik_Niranjani</p>
                </div>
                <div className="profile_header_info">
                    <ProfileInfo />
                </div>
                <div className="profile_post">
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            displayName={post.data.displayName}
                            avatar={post.data.avatar}
                            text={post.data.text}
                            image={post.data.image}
                            verified={post.data.verified}
                            timestamp={post.data.timestamp}
                        />
                    ))}
                </div>
            </div>
            <div className="feed__footer_space"></div>
            <div className="profile_footer">
                <SidebarMobileProfile />
            </div>
         </div>
    )
}

export default Profile;
