import Banner from "../../Components/Banner/Banner";
import ServicesCards from "../../Components/ServicesCards/ServicesCards";






const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
            <ServicesCards></ServicesCards>
            </div>
                     
            
            
        </div>
    );
};

export default Home;