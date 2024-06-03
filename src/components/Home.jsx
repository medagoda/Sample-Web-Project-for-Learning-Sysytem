import banner from '../assets/first.png'
import Banner from '../shared/Banner';

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id='home'>
           <Banner banner={banner} heading={"Develop your skills without diligence"} subheading={"Develop Your Skills Without Diligence: Discover Efficient Methods for Mastering New Abilities Effortlessly and Effectively"}
           btn1={"Get Started"} btn2={"Discount"}/>
        </div>
    );
};

export default Home;