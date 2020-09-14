import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useStateValue } from './StateProvider';

const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            {/* <SidebarRow
                src="https://avatars0.githubusercontent.com/u/11281854?s=460&u=2624345d87ed990594996507f6ed380a2871770a&v=4"
                title="Oksana"
            /> */}
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />

            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
        </div>
    );
};

export default Sidebar;
