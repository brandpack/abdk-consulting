import { FC } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';
import Provide from '@/public/provide.svg';
import trackRecord from '@/public/trackRecord.svg';
import Collaborate from '@/public/collaborate.svg';
import Develop from '@/public/develop.svg';
import Author from '@/public/author.svg';


interface ChooseProps {
}

export const ChooseResearch: FC<ChooseProps> = ({ }) => {
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
            <div className={cls.Line5}></div>
            <div className={`${cls.Evaluation} ${cls.Evaluation1}`}>
                <Image
                    src={trackRecord}
                    alt='Track record of thousands of critical bugs'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Track record of thousands of critical bugs
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation2}`}>
                <Image
                    src={Provide}
                    alt='Provide'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Provide transparent
                    rates and timelines
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation3}`}>
                <Image
                    src={Collaborate}
                    alt='Collaborate'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Collaborate with top researchers 
                    on cutting-edge problems
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation4}`}>
                <Image
                    src={Develop}
                    alt='Develop'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Develop math models for Uniswap and Yield
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation5}`}>
                <Image
                    src={Author}
                    alt='Author top cryptography publications in zero knowledge'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Author top cryptography publications in
                    zero knowledge
                </p>
            </div>

        </div>
    )
}