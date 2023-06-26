import MakeAppointment from "../../MakeAppointment/MakeAppointment";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="px-5">
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;