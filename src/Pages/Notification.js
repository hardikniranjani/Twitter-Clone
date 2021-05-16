import React, { useEffect } from 'react';
import "../Style/notification.css";
import Sidebar from '../component/Sidebar';
import Feed from "../component/Feed";
import Widgets from "../component/Widgets";

function Notification() {

    useEffect(() => {
        document.title = 'Twitter - Notification ';
    }, []);

    return (
        <div className="notification" >
            <Sidebar />
            <Feed texts="Notification" />
            <Widgets />
        </div>
    )
}

export default Notification;
