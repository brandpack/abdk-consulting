import { FC } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';
import Engaged from '@/public/engaged.svg';
import OurDesigns from '@/public/ourDesigns.svg';
import Conduct from '@/public/conduct.svg';
import Advise from '@/public/advise.svg';


interface ChooseProps {
}

export const ChooseConsulting: FC<ChooseProps> = ({ }) => {
    return (
        <div className={cls.Approach}>
            <h1 className={cls.ApproachHeader}>
                Why <br />
                &nbsp;&nbsp;&nbsp;Choose <br />
                abdk
            </h1>
            <div className={cls.Line1}></div>
            <div className={cls.Line2}></div>
            <div className={cls.Line3}></div>
            <div className={cls.Line4}></div>
            <div className={`${cls.Evaluation} ${cls.Evaluation1}`}>
                <Image
                    src={Engaged}
                    alt='Engaged'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Engaged
                    in standards
                    for blockchain
                    and cryptography
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation2}`}>
                <Image
                    src={OurDesigns}
                    alt='OurDesigns'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Our designs
                    used in hundreds
                    of applications
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation3}`}>
                <Image
                    src={Conduct}
                    alt='Conduct'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Conduct transparent 
                    consultation
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation4}`}>
                <Image
                    src={Advise}
                    alt='Advise top players in the industry'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Advise top players
                    in the industry
                </p>
            </div>

        </div>
    )
}