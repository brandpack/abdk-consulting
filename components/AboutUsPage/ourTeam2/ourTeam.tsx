"use client"
import { FC, useEffect, useState } from 'react'
import cls from './ourTeam.module.scss'
import Image from 'next/image';
import Dmitry from '@/public/dmitry.jpg';
import Mikhail from '@/public/mikhail.jpg';
import Anna from '@/public/anna.jpg';
import Aleksandra from '@/public/alexandra.jpg';

import Lines from '@/public/linesAboutUs.svg';
import LinesMobile from '@/public/linesMobile.svg';

interface ourTeamProps {
}

export const OurTeam: FC<ourTeamProps> = ({ }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth <= 700);
            }
        }
    
        // Initial check and setup
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <div className={cls.Expertise}>
            <div className={cls.Lines}>
            <Image 
                 src={isMobile ? LinesMobile : Lines}
                 alt='Lines'
                 loading='lazy'
                 />
            </div>
            <h1 className={cls.ExpertiseHeader}>
                Our Team
            </h1>
            <p className={cls.ExpertiseText}>
                The core team of ABDK has remained unchanged over the years and has maintained the uniformly high quality in all projects.
            </p>
            <div className={cls.ExpertiseContainer}>
            <div className={cls.Evaluation1}>
                <Image 
                 src={Dmitry}
                 alt='Dmitry'
                 loading='lazy'
                 />
                <div className={cls.EvaluationTextBlock}>
                <h1 className={cls.EvaluationHeader}>
                    Dmitry
                    Khovratovich
                </h1>
                <p className={cls.EvaluationText}>
                    Founder and <br />
                    Lead Cryptographer
                </p>
                </div>

            </div>
            <div className={cls.Evaluation2}>
                <Image 
                 src={Mikhail}
                 alt='Mikhail'
                 loading='lazy'
                />
                <div className={cls.EvaluationTextBlock}>
                <h1 className={cls.EvaluationHeader}>
                    Mikhail <br />
                    Vladimirov
                </h1>
                <p className={cls.EvaluationText}>
                    Chief technology <br /> 
                    officer 
                </p>
                </div>

            </div>
            <div className={cls.Evaluation3}>
                <Image 
                 src={Anna}
                 alt='Anna'
                 loading='lazy'
                 />
                <div className={cls.EvaluationTextBlock}>
                <h1 className={cls.EvaluationHeader}>
                    Anna
                    Buryanitsa
                </h1>
                <p className={cls.EvaluationText}>
                    Financial <br />
                    Officer
                </p>
                </div>

            </div>
            <div className={cls.Evaluation4}>
                <Image 
                 src={Aleksandra}
                 alt='Aleksandra'
                 loading='lazy'
                 />
                <div className={cls.EvaluationTextBlock}>
                <h1 className={cls.EvaluationHeader}>
                    Aleksandra
                    Zveryanskaya
                </h1>
                <p className={cls.EvaluationText}>
                    Project <br />
                    Manager
                </p>
                </div>

            </div>
            </div>

        </div>
    )
}