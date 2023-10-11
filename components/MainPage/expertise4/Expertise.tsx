"use client"
import { FC, useEffect, useState } from 'react'
import cls from './Expertise.module.scss'
import Image from 'next/image';
import SmartContarcts from '@/public/smartContarcts.svg';
import ZeroKnowledge from '@/public/zeroKnowledge.svg';
import Cryptography from '@/public/cryptography.svg';
import DeFi from '@/public/deFi.svg';

import Lines from '@/public/lines.svg';
import LinesMobile from '@/public/linesMobile.svg';

interface ExpertiseProps {
}

export const Expertise: FC<ExpertiseProps> = ({ }) => {
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
                Expertise
            </h1>
            <div className={cls.ExpertiseContainer}>
            <div className={cls.Evaluation1}>
                <Image 
                 src={SmartContarcts}
                 alt='SmartContarcts'
                 loading='lazy'
                 />
                <div className={cls.EvaluationTextBlock}>
                <h1 className={cls.EvaluationHeader}>
                    Smart contracts
                </h1>
                <p className={cls.EvaluationText}>
                    Found more than a thousand critical bugs over the 7 years of audit experience.
                </p>
                </div>

            </div>
            <div className={cls.Evaluation2}>
                <Image 
                 src={ZeroKnowledge}
                 alt='ZeroKnowledge'
                 loading='lazy'
                />
                <div className={cls.EvaluationTextBlock}>
                <h1 className={cls.EvaluationHeader}>
                    Zero Knowledge
                </h1>
                <p className={cls.EvaluationText}>
                    Designed and audited SNARK circuits for privacy protocols and zkvM.
                </p>
                </div>

            </div>
            <div className={cls.Evaluation3}>
                <Image 
                 src={Cryptography}
                 alt='Cryptography'
                 loading='lazy'
                 />
                <div className={cls.EvaluationTextBlock}>
                <h1 className={cls.EvaluationHeader}>
                    Cryptography
                </h1>
                <p className={cls.EvaluationText}>
                    Developed and analyzed cutting-edge protocols and schemes.
                </p>
                </div>

            </div>
            <div className={cls.Evaluation4}>
                <Image 
                 src={DeFi}
                 alt='DeFi'
                 loading='lazy'
                 />
                <div className={cls.EvaluationTextBlock}>
                <h1 className={cls.EvaluationHeader}>
                    DeFi
                </h1>
                <p className={cls.EvaluationText}>
                    Constructed, audited, and optimized protocols for top industry players.
                </p>
                </div>

            </div>
            </div>

        </div>
    )
}