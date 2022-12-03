import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import { usercontext } from '../Contex/Authcontext';
import loginimg from './Assests/Authentication.gif'

const login = () => {
 const data =useContext(usercontext)
 console.log(data);
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse w-[90%] shadow-2xl h-[95vh] ">
                <div className="">
                    <Image src={loginimg} alt="loginimg" className=''/>           
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                            <Link href="/singup">Create a Account</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default login;