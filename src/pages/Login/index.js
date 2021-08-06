import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';


const Login = () => {
  const history = useHistory()
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="login-bg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="email" />
        <Gap height={18} />
        <Input label="Password" placeholder="password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => history.push('/')} />
        <Gap height={100} />
        <Link title="Belum punya akun? silahkan daftar" onClick={() => history.push('/register')} />
      </div>
    </div>
  )
}

export default Login
