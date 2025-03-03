import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { experiences, skills, socialLinks } from '../constants';
const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Aayush</span>
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    Aspiring Software Engineer with a strong foundation in programming and problem-solving. Actively seeking internship or job opportunities in the software engineering domain to apply my skills and gain hands-on industry experience. Passionate about building efficient, scalable solutions and continuously learning new technologies.
                </p>
            </div>
            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My Skills</h3>
                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20'>
                            <div className='btn-back rounded-xl'/>
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src = {skill.imageUrl}
                                    alt = {skill.name}
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-16'>
                <h3 className='subhead-text'>Hackathons and Certificates</h3>
                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                icon={<div className='flex justify-center items-center w-full h-full'>
                                    <img
                                        src={experience.icon}
                                        alt={experience.company_name}
                                        className='w-[60%] h-[60%] object-contain'
                                    />
                                </div>}
                                iconStyle={{ background: experience.iconBg }}
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none',
                                }}>
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                                        {experience.company_name}
                                    </p>
                                </div>
                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
            <div className="py-10 flex flex-col items-center">
                <h3 className="text-3xl font-semibold mb-5">Social Links</h3>
                <div className="flex gap-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            target={link.target}
                            rel={link.target === '_blank' ? 'noopener noreferrer' : ''}
                            className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-100 transition"
                        >
                        <img src={link.iconUrl} alt={link.name} className="w-6 h-6" />
                        <span className="text-lg">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
            <hr className='border-slate-200'/>
            <CTA />
        </section>
    )
}

export default About