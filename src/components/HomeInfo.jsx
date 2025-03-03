import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets_3d_portfolio/assets/icons/arrow.svg';
const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm: text-xl text-center'>{text}</p>
        <Link to = {link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src = {arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className='sm: text-xl sm: leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Aayush</span>👋
            <br />
            An aspiring developer from India.
        </h1>
    ),
    2: (
        <InfoBox text = "Gained diverse skills through academic projects and hands-on learning experiences." link = "/about" btnText = "Learn More"/>
    ),
    3: (
        <InfoBox text = "Successfully completed multiple projects during my studies. Curious about their impact?" link = "/projects" btnText = "Visit my portfolio"/>
    ),
    4: (
        <InfoBox text = "Looking for a developer or need a project done? I'm just a message away!" link = "/contact" btnText = "Let's connect"/>
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;