import Banner from "../../Components/Banner/Banner";
import DentisCards from "../../Components/DentistCards/DentisCards";
import ServicesCards from "../../Components/ServicesCards/ServicesCards";
import WelcomeSection from "../../Components/WelcomeSection/WelcomeSection";






const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
            <WelcomeSection></WelcomeSection>
            <ServicesCards></ServicesCards>
            <DentisCards></DentisCards>
            </div>
                     
            
            
        </div>
    );
};

export default Home;