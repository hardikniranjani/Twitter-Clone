import React from 'react';
import "../Style/SidebarMobileProfile.css";
import SidebaroptionM from './SidebaroptionM';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from "react-router-dom";
import Tweetmobile from "./Tweetmobile";


function SidebarMobileProfile() {


    return (
        <div className="sidebarMobile">

            <div className="sidebar_op_mobile_profile"  >
                <div className="sidebar_op_mobile_profile_home" ><Link className="link_home_click" to="/" ><SidebaroptionM active Icon={HomeIcon} /></Link></div>
                <div className="sidebar_op_mobile_profile_explore" ><Link className="link_click" to="/explore" ><SidebaroptionM Icon={SearchIcon} /></Link></div>
                <div className="sidebar_op_mobile_profile_massage" ><Link className="link_click" to="/massage" ><SidebaroptionM Icon={MailOutlineIcon} /></Link></div>
                <div className="sidebar_op_mobile_profile_notification" ><Link className="link_click" to="/notification" ><SidebaroptionM Icon={NotificationsNoneIcon} /></Link></div>
                <div className="sidebar_op_mobile_profile_bookmark" ><Link className="link_click" to="/bookmark" ><SidebaroptionM Icon={BookmarkBorderIcon} /></Link></div>
                <div className="sidebar_op_mobile_profile_profile" ><Link className="link_click" to="/profile" ><SidebaroptionM Icon={PersonOutlineIcon} /></Link></div>
                <div className="sidebar_op_mobile_profile_more" ><SidebaroptionM Icon={MoreHorizIcon} /></div>
                <div className="sidebar_op_mobile_profile_tweet" ><Tweetmobile /></div>
            </div>

        </div>
    );
}

export default SidebarMobileProfile;