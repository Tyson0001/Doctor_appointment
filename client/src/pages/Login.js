import react from 'react';
import "../styles/Registerstyle.css";
import{ Form,Input } from 'antd';
import{Link} from 'react-router-dom';

const Login = () => {
   // form submit handler
   const onfinishHandler = (values) => {
    console.log(values);
}
return(
    <div className="form-container">
        <Form layout='vertical' 
        onFinish={onfinishHandler} 
        className='register-form'>

            <h3 className='text-center'>Login Form</h3>
           
           <Form.Item label="Email" name="email">
                 <Input type='text' required/>
           </Form.Item>
           <Form.Item label="password" name="password">
                 <Input type='text' required/>
           </Form.Item>
           <Link to="/register" className='m-5'>Not a registered user</Link>     
           <button className='btn btn-primary' type='submit'>Login</button>
        </Form>
    </div>
)
}

export default Login;