import React from "react"
import "../Style/SidebaroptionM.css";

function SidebaroptionM({active, text , Icon}) {

    return(
        <div className={`sidebaroptionM ${active && 'sidebaroptionM--active'}`}>
            <h2>{text}</h2>
            <Icon />
        </div>
    );
}

export default SidebaroptionM;