import React from 'react';
import './register.scss';
import { RegisterBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';
import { useHistory } from 'react-router-dom';


const Register = () => {
  const history = useHistory()
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="register-bg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="full name" />
        <Gap height={18} />
        <Input label="Email" placeholder="email" />
        <Gap height={18} />
        <Input label="Password" placeholder="password" />
        <Gap height={50} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali kehalaman Login" onClick={() => history.push('/login')} />
      </div>
    </div>
  )
}

export default Register
