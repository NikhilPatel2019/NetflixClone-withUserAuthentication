import React from 'react';
import './profileScreen.css';
import { useHistory } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Nav from '../Nav';
import { auth } from '../firebase';

function ProfileScreen(){
    const history = useHistory();
    const user = useSelector(selectUser);

    return(
        <div className="profilescreen">
            <Nav />
            <div className="profilescreen-body">
                <h1>My Profile</h1>
                <div className="profilescreen-info">
                      <img onClick={() => history.push('./profile')}
                           className="" 
                           src="images/avatars/avatar-8.png" 
                           alt="Profile Logo" /> 
                      <div className="profilescreen-details">
                          <h2>{user.email}</h2>
                          <div className="profilescreen-plans">
                              <h3>Plans</h3>
                              <button onClick={() => auth.signOut()} 
                                      className="profilescreen-signout">Sign Out</button>
                          </div>
                      </div>     
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;