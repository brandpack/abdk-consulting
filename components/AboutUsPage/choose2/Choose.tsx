import { FC } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';
import Transparent from '@/public/transparent.svg';
import TransparentH from '@/public/TransparentAboutUsH.svg';
import Time from '@/public/time.svg';
import TimeH from '@/public/TimeAboutUsH.svg';
import Independence from '@/public/Independence.svg';
import IndependenceH from '@/public/IndependenceAboutUsH.svg';
import { Evaluation } from './Evaluation';


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
            <Evaluation
                text='Designated approach'
                AdditionalclassName={cls.Evaluation1}
                img={Transparent}
                imgH={TransparentH}
            />
            <Evaluation
                text='Time commitment'
                AdditionalclassName={cls.Evaluation2}
                img={Time}
                imgH={TimeH}
            />
            <Evaluation
                text='Independence'
                AdditionalclassName={cls.Evaluation3}
                img={Independence}
                imgH={IndependenceH}
            />
        </div>
    )
}