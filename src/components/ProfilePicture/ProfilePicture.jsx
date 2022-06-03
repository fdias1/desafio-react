import React from 'react';
import './style.css'

const ProfilePicture = ({ imageUrl }) => (
    <img className="profile-picture" src={imageUrl} alt="" />
)
 
export default ProfilePicture;
