import about from '../assets/About.svg'
import about2 from '../assets/about2.svg'

//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../Variants';


const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-9" id='about'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <motion.div
                variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}
                className='md:w-1/2'>
                    <img src={about} alt="" />
                </motion.div>

                {/* about content*/}
                <motion.div
                variants={fadeIn("left", 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}
                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span></h2>
                    <p className='text-tertiary text-lg mb-7'>We have been enhancing our product for many years, continuously refining and updating it to meet the highest standards and ensure it remains the best solution available.</p>
                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </div>


            {/* 2nd part */}
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <motion.div 
                variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}
                className='md:w-1/2'>
                    <img src={about2} alt="" />
                </motion.div>

                {/* about content*/}
                <motion.div 
                variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}
                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can practice at any <span className='text-secondary'>time convenient for you.</span></h2>
                    <p className='text-tertiary text-lg mb-7'>You can practice at any time convenient for you, making it easy to fit learning into your schedule. This flexibility ensures you can progress at your own pace and convenience.</p>
                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </div>
            
        </div>
    );
};

export default About;