import { useContext } from "react";
import { FaHome, FaPersonBooth, FaServicestack, FaTooth, FaAtlassian, FaArrowAltCircleRight } from "react-icons/fa";
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
            <div className="navbar bg-[#f87272]  lg:p-2 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-black text-xl">
                            <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black" : ""
                            }><li><a>Home</a></li></NavLink>
                            <NavLink to="/about" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black" : ""
                            }><li><a>About</a></li></NavLink>
                            <NavLink to="/services" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black" : ""
                            }><li><a>Services</a></li></NavLink>
                            <NavLink to="/Appointment" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black" : ""
                            }><li><a>Appointment</a></li></NavLink>
                            <NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black" : ""
                            }><li><a>Login</a></li></NavLink>
                        </ul>
                    </div>
                    <NavLink to="/"><a className="btn btn-ghost normal-case md:text-2xl text-white"><FaTooth></FaTooth>Dental Clinic</a></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-bold text-white">
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a><FaHome></FaHome>Home</a></li></NavLink>
                        <NavLink to="/about" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a><FaPersonBooth></FaPersonBooth>About</a></li></NavLink>
                        <NavLink to="/services" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a><FaServicestack></FaServicestack>Services</a></li></NavLink>
                        <NavLink to="/Appointment" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a><FaAtlassian></FaAtlassian>Appointment </a></li></NavLink>
                        <NavLink to="/Login" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>
                            <FaArrowAltCircleRight></FaArrowAltCircleRight> Login</a></li></NavLink>
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center text-center">
                                    <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                               {user.email}
                                            </a>
                                        </li>
                                        
                                        <li onClick={handleLogOut} ><a>Logout</a></li>
                                    </ul>
                                </div>
                                <button onClick={handleLogOut}
                                    className="btn btn-active btn-neutral"

                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <span>Logout</span>
                                </button>
                            </div>
                            :
                            <NavLink to="/login">
                                <button
                                    className="btn btn-warning"
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