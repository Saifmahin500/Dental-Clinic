import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const DentisCards = () => {
  return (
    <div>
      <h3 className="text-center text-5xl font-bold my-10">Our Special Dentist</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-8 mt-4 h-80 overflow-hidden rounded-full bg-blue-300 bg-clip-border text-gray-700 shadow-lg flex justify-center">
          <img className="" src="https://i.ibb.co/pz92gsK/d1.png" alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Saif Uddin
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-orange-500 antialiased">
          Dentist Anesthesiologists
          </p>
        </div>
        <hr />
        <div className="flex justify-center gap-7 p-6 pt-2">
          <a
            href="#facebook"
            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
          >
            <i className="fab fa-facebook" aria-hidden="true"><FaFacebook></FaFacebook></i>
          </a>
          <a
            href="#twitter"
            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
          >
            <i className="fab fa-twitter" aria-hidden="true"><FaTwitter></FaTwitter></i>
          </a>
          <a
            href="#instagram"
            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
          >
            <i className="fab fa-instagram" aria-hidden="true"><FaInstagram></FaInstagram></i>
          </a>
        </div>
      </div>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-8 mt-4 h-80 overflow-hidden rounded-full bg-pink-500 bg-clip-border text-gray-700 shadow-lg flex justify-center">
          <img src="https://i.ibb.co/zJXZcqW/d3.png" alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Nusrat Jahan
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-orange-500 antialiased">
          Oral Medicine
          </p>
        </div>
        <hr />
        <div className="flex justify-center gap-7 p-6 pt-2">
          <a
            href="#facebook"
            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-2normal leading-relaxed text-black antialiased"
          >
            <i className="fab fa-facebook" aria-hidden="true"><FaFacebook></FaFacebook></i>
          </a>
          <a
            href="#twitter"
            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
          >
            <i className="fab fa-twitter" aria-hidden="true"><FaTwitter></FaTwitter></i>
          </a>
          <a
            href="#instagram"
            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
          >
            <i className="fab fa-instagram" aria-hidden="true"><FaInstagram></FaInstagram></i>
          </a>
        </div>
      </div>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-8 mt-4 h-80 overflow-hidden rounded-full bg-[#f87272] bg-clip-border text-gray-700 shadow-lg flex justify-center">
          <img src="https://i.ibb.co/yRcJ55b/d2.png" alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Sajeeb Das
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-orange-500 antialiased">
          Endodontist
          </p>
        </div>
        <hr />
        <div className="flex justify-center gap-7 p-6 pt-2">
          <a
            href="#facebook"
            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
          >
            <i className="fab fa-facebook" aria-hidden="true"><FaFacebook></FaFacebook></i>
          </a>
          <a
            href="#twitter"
            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
          >
            <i className="fab fa-twitter" aria-hidden="true"><FaTwitter></FaTwitter></i>
          </a>
          <a
            href="#instagram"
            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-2xl font-normal leading-relaxed text-black antialiased"
          >
            <i className="fab fa-instagram" aria-hidden="true"><FaInstagram></FaInstagram></i>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DentisCards;