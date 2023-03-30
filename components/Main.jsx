import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsMedium } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Build your brand with The Right Copy for Your Audience. Let&#39;s
            get to it.
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Manuchim</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            A Technical Writer and Full Stack Engineer
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            As a technical writer, I help businesses break down complex topics
            and explain the benefits of cutting-edge technology in language that
            even the most technically-inexperienced reader can understand.
            <br />
            <br />
            My articles and ghostwritten op-eds can be found on Medium and in
            major publications like CoinMonks, Hacker Noon, and more.
          </p>
          <div className='flex items-center justify-between max-w-[400px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/manuchimoliver/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/mxnuchim'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://medium.com/@manuchimoliver779'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsMedium />
              </div>
            </a>
            <Link href='mailto:manuchimoliver779@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href='https://drive.google.com/file/d/1wL-fHWYh23mtGG79cESQRkrQx-JtiZsS/view?usp=sharing'
              target='_blank'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
