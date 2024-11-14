import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import auth from '../Firebase/Firebase.utils';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [massErr, setmassErr] = useState('');
    const [passForget, setPassForget] = useState('');
    const navigate = useNavigate();

    const handleSignInBtn = (e) => {
        e.preventDefault();
        setmassErr('');

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login successfully');
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                console.log(errorCode);
                setmassErr(error.message)
            });
    };

    const handleForgetPassBtn = () => {
        sendPasswordResetEmail(auth, passForget)
            .then(result => {
                console.log(result);
                toast.success('Check your email and change your password')

            })
            .catch(error => console.log(error)
            )
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignInBtn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={(e) => setPassForget(e.target.value)} type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForgetPassBtn} type='button' className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        {massErr && <p className='text-red-600'>{massErr}</p>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;