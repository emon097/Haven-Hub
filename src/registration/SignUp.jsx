import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-hot-toast';

const SignUp = () => {
  const { createUsersEmail, updateUser, googleRegister } =
    useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
    
    createUsersEmail(data.email, data.password).then(res => 
      {
        const user = res.user
        if(user.uid){
          navigate(from, { replace: true });
        }
        console.log(user);
        const userInfo = {
          displayName: data.fullName,
          
        };
        updateUser(userInfo).then((res) => {
          const user = res.user;
          
        })
      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage)
      });
  };

    return (
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse md:mx-40 ">

            <div className="text-center text-black lg:text-left">
              <h1 className="text-5xl font-bold text-green-400">Sign Up now!</h1>
              <p className="py-6 font-semibold text-2xl">
              Shop Smarter, Not Harder - Sign Up for Exclusive Deals and Easy Checkout!
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName")}
                    className="input text-black input-bordered"
                  />
                </div>
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
                    placeholder="password"
                    {...register("password")}
                    className="input text-black input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="bg-green-400">Sign Up</button>
                </div>
                <p className='text-black text-sm'> If You Have Already an Account then You can <Link className='text-green-400 hover:text-green-500' to="/login">LogIn</Link> </p>
              </div>
            </div>
          </div>
        </div>
       </form>
      </div>
    );
};

export default SignUp;