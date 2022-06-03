import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
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
                                {errors.email?.type === 'pattern' && <span className=" text-red">{errors.email.message}</span>}
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
                                    pattern: {
                                        value: 6,
                                        message: 'Must Be 6 Character or More Longer'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;