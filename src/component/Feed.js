import React, { useState, useEffect } from "react";
import "../Style/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../Utils/firebase";
import { useStateValue } from "../StateProvider";
import SidebarMobile from "./SidebarMobile";

function Feed({ texts }) {

    const [posts, setPosts] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))));
    }, []);

    return (
        <div className="feed">
            <div className="feed_header">
                <h3>{texts}</h3>

            </div>

            <div className="tweet_massage">
                <TweetBox />
            </div>
            <div className="tweet_border"></div>
            <div>
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
            <div className="feed__footer_space"></div>
            <div className="feed__footer">
                <SidebarMobile />
            </div>
        </div>
    );
}

export default Feed;
