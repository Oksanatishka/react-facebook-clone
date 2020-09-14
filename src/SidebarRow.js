import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

// const SidebarRow = (props) => {
//     return (
//         <div className="sidebarRow">
//             <p>{props.title}</p>
//         </div>
//     );
// };

// destructure

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
};

export default SidebarRow;
