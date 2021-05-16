import React from 'react';
import "../Style/post.css";
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from "../VerifiedIcon.png";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';


function Post({ displayName, verified, text, image, avatar,timestamp }) {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__avatar">
                    <Avatar src={avatar} alt="" />
                    <div className="post__headerText">
                        <h3> {displayName} {verified && <img src={VerifiedIcon} alt="verified" width="15px" height="15px" />}
                        </h3><p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </div>
                </div>
            </div>
            <div className="post_body">
                <p>{text}</p><br></br>
                <img src={image} alt="/" />
            </div>
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishOutlinedIcon fontSize="small" />
            </div>
            
        </div>
    );
};

export default Post;
