import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Login.css';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if(loading||gLoading){
        return <Loading></Loading>
    }
    if(gUser||user){
        navigate('/');
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password);
    };

   
    return (
        <div>
            <div className="container my-5 py-5">
                <h2 className='title text-center'>Sign In</h2>
                <div className="form-controller">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control"
                                {
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="text-red">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-red">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control"
                                {
                                ...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must Be 6 Character or More Longer'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className=" text-red">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red">{errors.password.message}</span>}
                            </label>
                            <p>If you are Not Registered, Please <Link to={'/register'}>Register</Link></p>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="social-register d-flex">
                    <div className='line'></div>
                    <p> OR </p>
                    <div className='line'></div>
                </div>
                <button className='btn btn-outline-success mx-auto d-flex  mb-5' onClick={()=>signInWithGoogle()}> <FontAwesomeIcon icon={faGoogle}  className="me-2 pt-1"/>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;