import { useContext } from "react";
import { FaHome, FaPersonBooth, FaPhone, FaServicestack, FaTooth } from "react-icons/fa";
import { NavLink, } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className=''>
            <div className="navbar bg-[#f87272]  p-2 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-white text-xl">
                            <NavLink to="/"className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>Home</a></li></NavLink>
                            <NavLink to="/about"className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>About</a></li></NavLink>
                            <NavLink to="/services"className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>Services</a></li></NavLink>
                            <NavLink to="/dentist"className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>Dentist</a></li></NavLink>
                            <NavLink to="/contract"className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>Contract</a></li></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl text-white"><FaTooth></FaTooth>Dental Clinic</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-bold text-white">
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a><FaHome></FaHome>Home</a></li></NavLink>
                        <NavLink to="/about" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a><FaPersonBooth></FaPersonBooth>About</a></li></NavLink>
                        <NavLink to="/services"className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a><FaServicestack></FaServicestack>Services</a></li></NavLink>
                        <NavLink to="/Appointment"className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>Appointment </a></li></NavLink>
                        <NavLink to="/Login"className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>
                        Login</a></li></NavLink>
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleLogOut}
                                className="btn btn-primary"

                                type="button"
                                data-ripple-light="true"
                            >
                                <span>Logout</span>
                            </button>
                            :
                            <NavLink to="/login">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <span>Login</span>
                                </button>
                            </NavLink>

                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;