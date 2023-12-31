import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className='bg-yellow-100'>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
    <img src="https://i.ibb.co/9vQWTNq/hero-main-bg.png" className="lg:max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div>
      <h1 className="text-5xl font-bold">We Protect Your Teeth</h1>
      <p className="py-6">The best and cheapest dentistry is when the right thing is done <br /> extremely well the first time and it lasts for a long time.It only takes a split second to smile and forget,<br />yet to someone that needed it, it can last a lifetime.</p>
      <Link to="/Appointment"> <button className="btn  btn-error p-4 w-[200px] mr-6 text-white font-semibold">Appointment</button></Link>
      <button className="btn btn-outline btn-secondary">Learn More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;