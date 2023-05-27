import React, { useState } from 'react';

//particles
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

//react reveal
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

//import options for particles 
import config from './particlesData.js';

import homeImg from '../../assets/images/home.jpg';

const Home = () => {
    //particles animation
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    //image hover
    const [imgHover, setImgHover] = useState(false);

    const imgHoverToggle = () => {
        setImgHover(!imgHover);
    };

    return (
        <div className='w-screen h-screen'>
            <Particles
                id="tsparticles"
                options={config}
                init={particlesInit}
                loaded={particlesLoaded}
            />

            <div className='w-full h-full container mx-auto px-5 py-5 md:px-10 items-center text-center grid grid-cols-12 relative break-words grid-flow-row-dense'>
                <div className='col-span-12 md:col-span-8 order-2 md:order-1'>
                    <div className='flex flex-col text-left gap-5'>
                        <Fade right cascade>
                            <p className='text-xl md:text-2xl'>Hi, I'm</p>
                        </Fade>
                        <Zoom right cascade duration={2500}>
                            <h1 className='text-4xl md:text-8xl'>Charlotte Harper</h1>
                        </Zoom>
                        <Fade right cascade>
                            <h2 className='text-2xl md:text-4xl'>Web Designer</h2>
                        </Fade>
                    </div>
                    <Fade bottom duration={2000}>
                        <div className='mt-10 text-left font-bold backdrop-blur-xl rounded-2xl shadow-md p-4 md:p-10 w-fit my-5'>
                            <p className='text-2xl text-[#dc4646]'>Contact Me {'{'}</p>
                            <p className='text-base md:text-xl text-[#702929] leading-10'>
                                &nbsp; Email: charlotte.harper@gmail.com <br />
                                &nbsp; Phone: +38 123 456-789-1 <br />
                                &nbsp; Github: https://github.com/freetimezp <br />
                            </p>
                            <p className='text-2xl text-[#dc4646]'>{'}'}</p>
                        </div>
                    </Fade>
                </div>
                <div className='col-span-12 md:col-span-4 p-2 pb-4 md:p-5 order-1 md:order-2'>
                    <Fade top duration={2000}>
                        <div className='overflow-hidden rounded-2xl w-full relative'>
                            <img
                                src={homeImg}
                                alt="home"
                                className={`w-full ease-in-out duration-500 ${imgHover && 'scale-125 grayscale-[0.4]'}`}
                            />
                            <a
                                onMouseEnter={imgHoverToggle}
                                onMouseLeave={imgHoverToggle}
                                href="https://github.com/freetimezp"
                                className='absolute top-0 right-0 w-full h-full' target={'_blank'} rel="noreferrer"
                            >
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Home;
