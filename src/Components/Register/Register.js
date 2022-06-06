import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Register.css';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Register = () => {
   
    const { register, formState: { errors }, handleSubmit,watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const navigate = useNavigate();
    const location = useLocation()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if(loading ||updating||gLoading){
        return <Loading></Loading>
    }
    let signInError;
    if(error ||updateError||gError){
        signInError=<p className='text-danger'>{error?.message}</p>
    }
     if(user || gUser){
         navigate('/')
     }
    
    const onSubmit = async data => {        
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({displayName:data.username});
        toast.success("Created User Successfully");
        
    }
    return (
        <div>
            <div className="container">
                <h1 className='text-center pt-5'>Sign Up</h1>
                <div className="form-controller">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-section">
                            <label htmlFor="username">Username</label>
                            <input type="text" className='input-field' placeholder='User Name'
                                {
                                ...register("username", {
                                    required: {
                                        value:true,
                                        message: "Usernmae is required"
                                    }
                                })
                                }
                            />
                            <label>
                                {errors.username?.type === 'required' && <span className='text-danger'>{errors.username.message}</span>}
                            </label>
                        </div>
                        <div className="input-section">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Email'
                                {
                                ...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Email is not Valid'
                                    }
                                })
                                }
                            />
                            <label htmlFor="">
                                {errors.email?.type === 'required' && <span className='text-danger'> {errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-danger'> {errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="input-section">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Password'
                                {
                                ...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must Be 6 Character or More Longer'
                                    }
                                })
                                }
                            />
                            <label htmlFor="">
                                {errors.password?.type === 'required' && <span className='text-danger'> {errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-danger'> {errors.password.message}</span>}
                            </label>
                        </div>
                        <div className="input-section">
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input type="password" placeholder='Repeat Password'
                                {
                                ...register('confirm_password', {
                                    required: {
                                        value: true,
                                        message: 'confirm_password is Required'
                                    },
                                   validate: value=>
                                   value=== password.current || "The passwords do not match"
                                })
                                }
                            />
                            <label htmlFor="">
                                {errors.confirm_password?.type === 'required' && <span className='text-danger'> {errors.confirm_password.message}</span>}
                                {errors.confirm_password?.type === 'validate' && <span className='text-danger'> {errors.confirm_password.message}</span>}
                            </label>
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

export default Register;