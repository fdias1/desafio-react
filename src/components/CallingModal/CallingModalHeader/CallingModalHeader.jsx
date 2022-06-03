import './style.css'
import ProfilePicture from "../../ProfilePicture";
import Icon from "../../Icon";

const CallingModalHeader = ({ fromProfilePicture, userProfilePicture, icon }) => {
    return (
        <div className="header-container">
            <ProfilePicture imageUrl={fromProfilePicture} />
            <Icon icon={icon}/>
            <ProfilePicture imageUrl={userProfilePicture} />
        </div>
    );
}
 
export default CallingModalHeader;