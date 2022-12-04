import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import Router from 'next/router';
import { usercontext } from '../Contex/Authcontext';
import loginimg from './Assests/Authentication.gif'

const Login = () => {
    const { user, login } = useContext(usercontext)
    useEffect(() => {
        if (user) {
            Router.push("/home");
        } else if (user == null) {
            Router.push({
                pathname: '/login'
            }
            )
        }
    }
        , [user])
    const handellogin = (e) => {

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        login(email, password)
            .then(res => {
                toast.success('Login Success')
                console.log(res);

            })
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse w-[90%] shadow-2xl h-[95vh] ">
                <div className="">
                    <Image src={loginimg} alt="loginimg" className='' />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 ">
                    <form className="card-body" onSubmit={handellogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" name='password' />
                            <label className="label">
                                <Link href="/singup">Create a Account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;