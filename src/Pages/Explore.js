import React,{ useEffect} from 'react';
import "../Style/explore.css";
import Sidebar from '../component/Sidebar';
import Feed from "../component/Feed";
import Widgets from "../component/Widgets";

function Explore() {

    useEffect(() => {
        document.title = 'Twitter - Explore ';
      }, []);

    return (
        <div className="explore" >
            <head>
                <title>Explore Page</title>
            </head>
            <Sidebar />
            <Feed texts ="Explore" />
            <Widgets />
         
        </div>
    )
}

export default Explore;
