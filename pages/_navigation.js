import React, { useContext, useEffect } from 'react';
import Link from 'next/link'

import { usercontext } from '../Contex/Authcontext';

const Navigation = () => {
    const { user, logout } = useContext(usercontext)
    console.log(user)


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">To Do App</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {user && user.uid ? <li><Link href="/home">Home</Link></li> : null}

                    {user && user.uid ? <li><Link onClick={logout} href="/login">Logout</Link></li> : <>
                        <li><Link href="/login">Login</Link></li> <li><Link href="/signup">Signup</Link></li>
                    </>}
                </ul>
            </div>
            <div className="flex-end">{user?.email}</div>
        </div>
    );
};

export default Navigation;