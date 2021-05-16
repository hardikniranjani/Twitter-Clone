import React, { useState } from 'react';
import "../Style/tweetbox.css"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import ImageUpload from "./ImageUpload";
import { storage } from "../Utils/firebase";
import db from "../Utils/firebase";
import { useStateValue } from '../StateProvider';
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },

    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));



function TweetBox() {

    const [{ user }, dispatch] = useStateValue();
    const [tweetMessage, setTweetMessage] = useState(null);
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState(0);
    const classes = useStyles();




    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };


    const handleUpload = () => {
        const uploadTask = storage.ref(`image/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // Error Function
                //   console.log(error);
                alert(error.message);
            },
            () => {
                // Final Part
                storage
                    .ref("image")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        //post Img..
                        db.collection("posts").add({
                            displayName: user.displayName,
                            avatar: user.photoURL,
                            text: tweetMessage,
                            image: url,
                            verified: true,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        });
                        setProgress(0);
                        setTweetMessage(null);
                        setImage("");

                    })
            }

        )

    };


    return (

        <div className="tweetbox">
            <div className={classes.root}>
                <from className="form">
                    <div className="tweetbox_input">
                        <Avatar
                            src={user.photoURL}
                            className={classes.large} />
                        <textarea
                            value={tweetMessage}
                            onChange={(e) => setTweetMessage(e.target.value)}
                            placeholder={`Write Something!! ${user.displayName}.`}>
                        </textarea>
                    </div>
                    <div className="tweetbox_footer">
                        <div onChange={handleChange} ><ImageUpload /></div>
                        <progress className="progess_bar" value={progress} max="100" />
                        <Button type="submit" onClick={handleUpload} >Tweet</Button>
                    </div>
                </from>
            </div>
        </div>

    )
}

export default TweetBox;
