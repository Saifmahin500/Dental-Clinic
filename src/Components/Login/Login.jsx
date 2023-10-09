import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
    const { googleSignIn ,signIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

            if (email,password) {
                signIn(email,password)
            .then(()=> {
                toast.success('Successfully LogIn!')
                navigate(location?.state ? location.state : "/")
            })
            .catch(() =>{
                toast.error("Password doesn't match");
              })
            }
        
        
    }
    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                toast.success('Successfully LogIn!')
                navigate(location?.state ? location.state : "/")
            })
            .catch(() => {
                toast.error("Password doesn't match");
            })
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" required className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-error">Login</button>
                                    <p className="text-center">Or</p>
                                        <button  onClick={handleGoogle} className="btn btn-neutral"><FaGoogle></FaGoogle>Login With Google</button>
                                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        Dont’t Have An Account ?
                                        <Link to="/reg">
                                            <a
                                                className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                                href="#"
                                            >
                                                Registration
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;