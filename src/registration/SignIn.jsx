import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdHand } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/Authprovider';
import { toast } from 'react-hot-toast';

const SignIn = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { loginUser } = useContext(AuthContext);
const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const onSubmit = data => {
    loginUser(data.email,data.password).then(res => {
      const user = res.user;
        navigate(from, { replace: true });
      console.log(user);
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage)
    });
  };
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card md:p-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className='text-2xl text-center font-semibold text-green-400'>Welcome Back! Sign in <IoMdHand className='mx-auto text-center'></IoMdHand> </h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="input text-black input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="input   text-black  input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-green-400">Login</button>
               
              </div>
              <p className='text-black text-sm'> If You New Please <Link className='text-green-400 hover:text-green-500' to="/signUp">Sign Up</Link> </p>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
    );
};

export default SignIn;