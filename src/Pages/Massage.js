import React, { useEffect } from 'react';
import "../Style/massage.css";
import Sidebar from '../component/Sidebar';
import Feed from "../component/Feed";
import Widgets from "../component/Widgets";




function Massage() {

    useEffect(() => {
        document.title = 'Twitter - Massage';
    }, []);

    return (
        <div className="massage" >
            <Sidebar />
            <Feed texts="Massage" />
            <Widgets />
        </div>
    )
}

export default Massage;
