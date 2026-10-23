import React, {useContext} from 'react'
import UserContext from '../context/usercontext'


function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return <div>please login</div>
  return <div>Hii, {user.username} Welcome to my Web Application</div>
}

export default Profile