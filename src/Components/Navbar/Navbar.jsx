import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-[#f87272]  p-2 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold ">
                          <Link to="/"><li><a>Home</a></li></Link>  
                          <Link to="/about"><li><a>About</a></li></Link>
                          <Link to="/services"><li><a>Services</a></li></Link>
                          <Link to="/dentist"><li><a>Dentist</a></li></Link> 
                          <Link to="/contract"><li><a>Contract</a></li></Link> 
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Mother Dental Center</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                    <Link to="/"><li><a>Home</a></li></Link>  
                          <Link to="/about"><li><a>About</a></li></Link>
                          <Link to="/services"><li><a>Services</a></li></Link>
                          <Link to="/dentist"><li><a>Dentist</a></li></Link> 
                          <Link to="/contract"><li><a>Contract</a></li></Link> 
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;