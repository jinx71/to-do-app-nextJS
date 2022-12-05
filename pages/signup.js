import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { usercontext } from "../Contex/Authcontext";
import singupimg from './Assests/singup.png'


const Singup = () => {
    const { createuser, user, userproflie, logout } = useContext(usercontext)


    const handelsingup = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        createuser(email, password)
            .then((res) => {
                userproflie(name)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen  bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl w-[90%] mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="pt-5">
                            Welcome to the To Do App.
                            Please sign up to continue.
                        </p>

                        <Image src={singupimg} alt="loginimg" className='lg:w-[50%] w-[90%] mx-auto' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handelsingup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" name="name" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name="email" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name="password" />
                                <label className="label">
                                    <Link href="/login"> Have Account ? Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;