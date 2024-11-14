import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../Firebase/Firebase.utils';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [isSuccess, setIsSuccess] = useState('');
    const [isShow, setIsShow] = useState(false);
    const navigate = useNavigate();

    const handleSignUpBtn = (event) => {
        event.preventDefault();
        setErrorMsg('');
        setIsSuccess('');


        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 8) {
            setErrorMsg('password at least 8 characters type')
            return;
        }
        else if (!(/(?=.*[a-z])/.test(password))) {
            setErrorMsg('At least one lowercase character')
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                sendEmailVerification(auth.currentUser)
                .then(result => toast.success('Please check your email and varyfied'))
                setIsSuccess('Account Created Successfully');
                navigate("/signIn")

            })
            .catch(err => setErrorMsg(err.message));
    };

    return (
        <div className='text-center'>
            <div className='border-2 max-w-[600px] mx-auto p-6 rounded-lg'>
                <h1 className='text-4xl font-bold text-violet-500 mb-8'>Please Sign Up</h1>
                <form onSubmit={handleSignUpBtn}>
                    <input className='px-4 py-2 mb-4 w-full border-2 rounded-lg' type="email" name="email" placeholder='Type Your Email' required /> <br />
                    <div className='relative'>
                        <input className=' px-4 py-2 mb-6 w-full border-2 rounded-lg' type={isShow ? "text" : "password"} name="password" placeholder='Your Password' required />
                        <h1 className='absolute bottom-9 right-4 text-xl' onClick={() => setIsShow(!isShow)}>
                            {isShow ? <LuEye /> : <LuEyeOff />}
                        </h1>
                    </div> <br />
                    <input className='px-8 py-2 mb-6 btn btn-primary text-xl font-bold text-slate-100' type="submit" value="Sign up" />
                </form>
                {
                    errorMsg && <p className='text-orange-600'>{errorMsg}</p>
                }
                {
                    isSuccess && <p className='text-green-600'>{isSuccess}</p>
                }
            </div>
        </div>
    );
};

export default SignUp;