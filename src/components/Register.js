import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRegister} from '../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const email=useRef()
  const password=useRef()
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const {error,loading}=useSelector(state=>state.user)


  const handleRegister = async () => {
    await dispatch(
       UserRegister({
        email: email.current.value,
        password: password.current.value,
      })
    )

    if(!error){
      navigate("/profile")
    }
  };



  return (
    <div>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>

      
    <div className='form'>

    <h3>register Here</h3>
    

    <label for="email">Email</label>
<input type='email' placeholder='type ur email' ref={email} ></input>
<label for="password">password</label>
<input type='password' placeholder='type ur password'ref={password} ></input>


<button onClick={()=>{
  handleRegister()
  
}}>Register</button>
{error && <h3> {error} </h3>}
{loading && <h3> loading...... </h3>}



    </div>
    </div>
  )
}

export default Register