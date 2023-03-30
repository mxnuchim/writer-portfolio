import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I've worked as a technology writer in the information technology
            industry since 2020 and I have about 4 years of writing experience.
            During this time, I've written website content, articles, op-eds,
            and research reports for some of the most creative and
            fastest-growing companies in the software development space,
            specializing mainly in SaaS, healthcare IT, cybersecurity, DevOps
            and engineering.
          </p>
          <p className='py-2 text-gray-600'>
            Before entering the information technology industry as a developer
            and a writer, I served as an academic researcher in the Departent of
            Civil Engineering, Rivers State University, Port Harcourt. In that
            time, I covered the topic: RETAINED STRENGTH AND SWELL REDUCTION OF
            SUBMERGED LATERITE ROCK ASPHALT CONCRETE FOR HEAVY TRAFFIC. I have
            also worked as a copywriter and content writer in various capacities
          </p>
          <p className='py-2 text-gray-600'>
            I started web developement in 2019, and since then, I have gathtered
            an impressive toolset of skills and technolgies. As Engineering Lead
            at Kiko, I also have experience working directly with clients and
            stakeholders, and taking mock wireframes all the way to deployed
            applications. In my spare time I mentor budding developers and teach
            and write about software developement on Medium and Twitter where I
            have a steadily growing audience.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest works.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
