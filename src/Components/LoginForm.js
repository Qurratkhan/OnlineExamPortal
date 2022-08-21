import React from 'react';
import "./LoginForm.css";
import loginPic from '../images/exam_login.png';

const LoginForm = () => {
  return (
    <div className='loginDiv'>
        <div className="card">
        <div className='row'>
          <div className='col-lg-4'>
            <img src={loginPic} />
          </div>
          <div className='col-lg-2'>
          </div>
          <div className='col-lg-6'>
                <div className="card-body">  
                <h3>Login Form</h3>          
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername1">Username</label>
                      <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                   
                    <div className="form-group">
                      <div className="form-check form-check-flat form-check-primary">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input"/>
                          Remember me
                        <i className="input-helper"></i></label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                    <p><b>Not have an account? <span><a href=''>Sign UP</a></span></b></p>
                  </form>
                </div>
              </div>
              </div>
          </div>
    </div>
  )
}

export default LoginForm
