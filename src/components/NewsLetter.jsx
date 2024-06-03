import Banner from "../shared/Banner";
import newsletter from '../assets/newsletter.png'


const NewsLetter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            {/* use our banner component and pass props*/}
            <Banner banner={newsletter} heading="Each student an share their discount code for friends" subheading="Every student can distribute their discount code among friends, enabling them to enjoy the benefits of the discount when making a purchase." btn1="I have a code" btn2=""/>
        </div>
    );
};

export default NewsLetter;