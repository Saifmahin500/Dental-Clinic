import { Link } from "react-router-dom";



const About = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/w4Bsy7p/experienceddentist.png" className="max-w-xl rounded-lg shadow-2xl" />
                    <div className="mx-12">
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">Welcome to Performance Dental Center! You’ll find high quality dental care and advanced services offered in a relaxed and laid back atmosphere. Our office is modern and equipped with the latest in dental technology to make treatment more comfortable, efficient, and pleasant for our patients.

                            Performance Dental Center prides itself on providing general and restorative dentistry to families and in and around Boulder. We believe dental health is essential to successful physical and mental performance. Whether you are new to the area, looking for a new dentist, or just need a second opinion we will help you get to a happy and healthy smile.</p>
                        <Link to="/Appointment"><button className="btn btn-error  font-semibold">Request an Appointment</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;