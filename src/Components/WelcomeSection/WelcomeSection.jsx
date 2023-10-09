

const WelcomeSection = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/r477ChX/dental-clinic-building-with-background-vector-illustration-268834-891.jpg" className="lg:max-w-xl rounded-lg shadow-2xl" />
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Welcome to our Clinic</h1>
                        <p className="py-6 font-medium">
                            we are thrilled to open our doors to you and your family, ensuring that your oral health and beautiful smiles are in the best hands. Our dedicated team of skilled dentists and friendly staff are committed to providing top-notch dental care in a comfortable and welcoming environment.
                            Thank you for choosing our Dental clinic as your trusted dental partner. We look forward to serving you and helping you achieve and maintain a lifetime of healthy, radiant smiles!</p>
                        <button className="btn btn-error text-white font-semibold">About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;