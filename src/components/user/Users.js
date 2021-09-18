import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../state/users'

const Users = ({ 
    getUsers,
    users 
    }) => { 
    useEffect(() => {
        getUsers();
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div>
            {users.map(user=> (
                <UserData
                    key={user.id}
                    user={user}
                    />
            ))}
        </div>
    )
}


const UserData = ({ user }) => { 
    const { username, position } = user
    return(
        <div>
            <p> {username} is a <span>{position}</span></p>
        </div>
    )

}
export default connect(state => state.allUsers, { getUsers })(Users)
