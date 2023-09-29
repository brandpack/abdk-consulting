import { FC } from 'react'
import cls from './Expertise.module.scss'
import Image from 'next/image';
import SmartContarcts from '@/public/smartContarcts.svg';
import ZeroKnowledge from '@/public/zeroKnowledge.svg';
import Cryptography from '@/public/cryptography.svg';
import DeFi from '@/public/deFi.svg';

import Lines from '@/public/lines.svg';

interface ExpertiseProps {
}

export const Expertise: FC<ExpertiseProps> = ({ }) => {
    return (
        <div className={cls.Expertise}>
            <div className={cls.Lines}>
            <Image 
                 src={Lines}
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
                    Found more than a thousand critical bugs 
                    over the 7 years of audit experience.
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
                    Designed and audited SNARK circuits for 
                    Rollups, Mixers, and Virtual Machines --
                    written in Rust, Circom, ZoKrates, Cairo, C++
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
                    Developed and analyzed cutting-edge
                    protocols and schemes of verifiable 
                    encryption, lookup arguments, ZK hashing,
                    signatures, VDFs.
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
                    Constructed, evaluated, and optimized DeFi 
                    protocols (trading curves, liquidity mining)
                    for top industry players.
                </p>
                </div>

            </div>
            </div>

        </div>
    )
}