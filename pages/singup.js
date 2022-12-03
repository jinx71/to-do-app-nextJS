import Link from "next/link";
import { useContext } from "react";
import { usercontext } from "../Contex/Authcontext";

const singup = () => {
  const {createuser} = useContext(usercontext)


  const handelsingup = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    createuser(email, password)
    .then((userCredential) => {
    })
  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up</h1>

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
                                <input type="text" placeholder="password" className="input input-bordered"  name="password"/>
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

export default singup;