import { FC } from "react";

import {FaCheck} from 'react-icons/fa'

import { useForm } from "react-hook-form";

import { validationSchema } from "./validation-schema";

import { yupResolver } from '@hookform/resolvers/yup';

import { defaultValues } from './default-values';


import './styles.scss';
import { Link } from "react-router-dom";



const Account: FC  = () => {

    const {
        register, 
        formState: {errors},
        handleSubmit
        } = useForm ({
        resolver: yupResolver (validationSchema),
        defaultValues,
    })

    return (
        <div className="container">

            <div className="account d-flex flex-row justify-content-center align-items-center bg-danger">

                <div className="account-box">

                    <div className="col d-flex flex-column account-left-col">
                        <h3 className="">Want to annotate?</h3>
                        <p className="">Are you a writer? Feel like you could provide some great feedback on movies. Here are the features and benefits of becoming a member.</p>
                        <ul className="">
                            <li> <FaCheck/> Discuss movies with friends</li>
                            <li> <FaCheck/> Build your collection of discussed films</li>
                            <li> <FaCheck/> Save your favourite movies</li>
                        </ul>
                    </div>

                    <div className="col d-flex flex-column align-items-start justify-content-start account-right-col">
                        <form action="" className="">
                            <h2>Create Account</h2>
                            <div className="d-flex flex-row ">
                                <div className="d-flex flex-column align-items-center justify-content-center ">
                                    <label htmlFor="name" className="form-label"></label>
                                    <input 
                                        id="name" 
                                        type="text" 
                                        className="firstname"
                                        placeholder="First name" 
                                        required 
                                        {...register('firstname')}  
                                    />
                                    {errors.firstname?.message}
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-center ">
                                    <label htmlFor="lastname"  className="form-label"></label>
                                    <input 
                                        id="lastname" 
                                        type="text" 
                                        className="lastname"
                                        placeholder="Last name" 
                                        required 
                                        {...register('lastName')}  
                                    />
                                    {errors.lastName?.message}
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-center ">
                                <label htmlFor="email"  className="form-label"></label>
                                <input 
                                    id="email" 
                                    type="email"  
                                    className="email"  
                                    placeholder="Email adress" 
                                    required
                                    {...register('email')}
                                />
                                {errors.email?.message}
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-center ">
                                <label htmlFor="password"  className="form-label"></label>
                                <input 
                                    id="password" 
                                    type="password" 
                                    className="password"
                                    placeholder="Password" 
                                    required 
                                    {...register('password')}  
                                />
                                {errors.password?.message}
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-start account-login">
                                <button type="submit">Create Account</button>
                                <p>Already have an account? <Link to={`/login`}>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )

}

export { Account }
