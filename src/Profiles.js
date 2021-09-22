import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    };
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/Profiles/jspark">jspark</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/Profiles/gildong">gildong</NavLink>
                </li>
            </ul>

            <Route path="/Profiles"
                exact render={() => <div>사용자를 선택해주세요.</div>} />
            <Route path="/Profiles/:username" component={Profile} />

        </div>
    );
}

export default Profiles;