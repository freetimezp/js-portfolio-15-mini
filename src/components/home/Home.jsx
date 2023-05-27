import React, { useState } from 'react';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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

            <div className='w-full h-full container mx-auto md:px-10 items-center text-center grid grid-cols-12 relative'>
                <div className='col-span-8'>
                    <div className='flex flex-col text-left gap-5'>
                        <p className='text-2xl'>Hi, I'm</p>
                        <h1 className='text-8xl'>Charlotte Harper</h1>
                        <h2 className='text-4xl'>Web Designer</h2>
                    </div>
                    <div className='mt-10 text-left font-bold backdrop-blur-xl rounded-2xl shadow-md p-10 w-fit'>
                        <p className='text-2xl text-[#dc4646]'>Contact Me {'{'}</p>
                        <p className='text-xl text-[#702929] leading-10'>
                            &nbsp; Email: charlotte.harper@gmail.com <br />
                            &nbsp; Phone: +38 123 456-789-1 <br />
                            &nbsp; Github: https://github.com/freetimezp <br />
                        </p>
                        <p className='text-2xl text-[#dc4646]'>{'}'}</p>
                    </div>
                </div>
                <div className='col-span-4 p-5'>
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
                </div>
            </div>
        </div>
    );
};

export default Home;
