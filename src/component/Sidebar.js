import React from 'react';
import "../Style/Sidebar.css";
import Sidebaroption from './Sidebaroption';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from "react-router-dom";
import Tweetmobile from "./Tweetmobile";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="TwitterIcon">
                <TwitterIcon />
            </div>
            <div className="sidebar_op_pc">
                <div ><Link className="link_click"  to="/explore" ><Sidebaroption Icon={SearchIcon} text="Explore" /></Link></div>
                <div ><Link className="link_click"  to="/massage" ><Sidebaroption Icon={MailOutlineIcon} text="Massages" /></Link></div>
                <div ><Link className="link_click"  to="/notification" ><Sidebaroption Icon={NotificationsNoneIcon} text="Notification" /></Link></div>
                <div ><Link className="link_click"  to="/bookmark" ><Sidebaroption Icon={BookmarkBorderIcon} text="Bookmark" /></Link></div>
                <div ><Link className="link_click"  to="/profile" ><Sidebaroption Icon={PersonOutlineIcon} text="Profile" /></Link></div>
                <Sidebaroption Icon={MoreHorizIcon} text="More" />
                <Tweetmobile />
            </div>
        </div>
    );
}

export default Sidebar;