import { FC } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';
import Transparent from '@/public/transparent.svg';
import Time from '@/public/time.svg';
import Independence from '@/public/Independence.svg';


interface ChooseProps {
}

export const ChooseAboutUs: FC<ChooseProps> = ({ }) => {
    return (
        <div className={cls.Approach}>
            <h1 className={cls.ApproachHeader}>
                our values
            </h1>
            <div className={cls.Line1}></div>
            <div className={cls.Line3}></div>
            <div className={cls.Line4}></div>
            <div className={cls.Line5}></div>
            <div className={`${cls.Evaluation} ${cls.Evaluation1}`}>
                <Image
                    src={Transparent}
                    alt='transparent'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Designated approach
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation2}`}>
                <Image
                    src={Time}
                    alt='Time'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Time commitment
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation3}`}>
                <Image
                    src={Independence}
                    alt='Independence'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Independence
                </p>
            </div>
        </div>
    )
}