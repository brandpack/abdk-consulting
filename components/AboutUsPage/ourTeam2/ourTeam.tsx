"use client"
import { FC, useEffect, useState } from 'react'
import cls from './ourTeam.module.scss'
import Image from 'next/image';
import Dmitry from '@/public/dmitry.svg';
import Mikhail from '@/public/mikhail.svg';
import Anna from '@/public/anna.svg';
import Aleksandra from '@/public/aleksandra.svg';

import Lines from '@/public/linesAboutUs.svg';
import LinesMobile from '@/public/linesMobile.svg';

interface ourTeamProps {
}

export const OurTeam: FC<ourTeamProps> = ({ }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Check if window is defined (i.e., we are in a browser environment)
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 700);
      }
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