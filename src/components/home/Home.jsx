import React from 'react';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

//import options for particles 
import config from './particlesData.js';

const Home = () => {
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

    return (
        <div className='w-screen h-screen'>
            <Particles
                id="tsparticles"
                options={config}
                init={particlesInit}
                loaded={particlesLoaded}
            />
        </div>
    );
};

export default Home;
