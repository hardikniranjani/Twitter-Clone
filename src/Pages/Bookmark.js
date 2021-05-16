import React,{ useEffect} from 'react';
import "../Style/bookmark.css";
import Sidebar from '../component/Sidebar';
import Feed from "../component/Feed";
import Widgets from "../component/Widgets";



function Bookmark() {
   
    useEffect(() => {
        document.title = 'Twitter - Bookmark ';
      }, []);
    
    return (
        <div className="bookmark" >
            <Sidebar />
            <Feed texts="Bookmark" />
            <Widgets />
        </div>
    )
}

export default Bookmark;
