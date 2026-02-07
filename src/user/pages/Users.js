import React from "react";

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Max SChwarz', 
            image:
              'https://images.pexels.com/photos/839011/pexels_photo-839011.jpeg?auto=compress&dpr=1&h=750&w=1260', 
              places: 3
            }
        ];

    return <UsersList items={USERS} />;
};

export default Users;