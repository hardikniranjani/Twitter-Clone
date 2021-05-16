import React, { useEffect } from 'react';
import Sidebar from '../component/Sidebar';
import Feed from "../component/Feed";
import "../Style/HomePage.css";



function HomePage() {

    useEffect(() => {
        document.title = 'Twitter - Home';
    }, []);

    return (
        <div className="HomePage">
            <div className="sidebar_home">
                <Sidebar />
            </div>
            <div className="feed__home">
                <Feed texts="Home" />
            </div>
        </div>
    )
}

export default HomePage;