import logo from '../assets/logonew.jpg'

import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt="" className='w-10 inline-block items-center'/><span className='text-white'>XYZ</span> 
                </a>

                <p className='md:w-1/2'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the topic sentence.</p>

                <div>
                    <input type="email" name='email' id='email' placeholder='Your Email' className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                    <input type="submit" value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all' />
                </div>

                </div>

                {/* footer navigation */}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>Overview</a>
                            <a href="/" className='block hover:text-gray-300'>features</a>
                            <a href="/" className='block hover:text-gray-300'>About</a>
                            <a href="/" className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>

                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>How does it works ?</a>
                            <a href="/" className='block hover:text-gray-300'>Where to ask questions ?</a>
                            <a href="/" className='block hover:text-gray-300'>How to play ?</a>
                            <a href="/" className='block hover:text-gray-300'>What is needed fo this</a>
                        </ul>
                    </div>

                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <p className=' hover:text-gray-300'>(011) 272 5447</p>
                            <p className=' hover:text-gray-300'>123 xyz xyz</p>
                            <p className=' hover:text-gray-300'>Colombo, Sri lanka</p>
                            <p className=' hover:text-gray-300'>095467</p>
                        </ul>
                    </div>

                    

                </div>
                
            </div>

            <hr />

            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p>@ All Rights Reserved.</p>
                <div className='flex items-center space-x-5'>
                    <img src={facebook} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <img src={instagram} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <img src={linkedin} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <img src={twitter} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;