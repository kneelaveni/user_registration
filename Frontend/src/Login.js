import {React,useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
function Login() {
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const navigate= useNavigate();
    const [errors,setErrors]=useState({});
    const handleInput = (event)=>{
        setValues(prev=>({...prev,[event.target.name]:event.target.value}))
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        console.log(values);
        if(errors.email==="" && errors.password===""){
            axios.post('http://localhost:8081/login',values)
            .then(res =>  
              {
                if(res.data ==='Success'){
                    navigate('/home');
                    // alert('Successfully!!!!')
                }else{
                    alert('No record exited')
                }
             
            }
            )
            .catch(err => console.log(err));
        }
    }
  return (
    <div className='d-flex justify-content-center bg-black align-items-center  vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-In</h2>
            <form action=''onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input  onChange={handleInput} type='email' name='email' placeholder='Enter Email'className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input onChange={handleInput} type='password' name='password' placeholder='Enter Password'className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}

                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                <p>Yoy are agree to our terms and policies</p>
                <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
            </form>
        </div>

    </div>
  )
}

export default Login