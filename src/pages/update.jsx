import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/user/userReducer';

export default function update() {

    const {id} = useParams();
    const users = useSelector((state)=>state.users)
    const existingUser = users.filter(user=>user.id == id)
    const {name,email} = existingUser[0]

    const [uname,setName] = useState(name)
    const [uemail,setEmail] = useState(email)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        event.preventDefault()
        dispatch(updateUser({id,name:uname,email:uemail}))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input onChange={e=>setName(e.target.value)} value={uname}  type="text" name='name' className='form-control' placeholder='enter name'/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={e=>setEmail(e.target.value)} value={uemail} type="text" name='email' className='form-control' placeholder='enter email'/>
            </div><br/>
            <button className='btn btn-info'>Update</button>
        </form>

    </div>

</div>
  )
}
