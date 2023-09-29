import { FC } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';
import Transparent from '@/public/transparent.svg';
import trackRecord from '@/public/trackRecord.svg';
import advice from '@/public/advice.svg';
import FollowUp from '@/public/followUp.svg';
import InternalCross from '@/public/internalCross.svg';
import Reverse from '@/public/Reverse.svg';


interface ChooseProps {
}

export const ChooseAudit: FC<ChooseProps> = ({ }) => {
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
                    src={Transparent}
                    alt='Transparent working plan'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Transparent audit process
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation2}`}>
                <Image
                    src={trackRecord}
                    alt='Track record of thousands of critical bugs'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Track record of thousands of critical bugs
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation3}`}>
                <Image
                    src={advice}
                    alt='advice'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Advice
                    on optimization
                    and architecture
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation4}`}>
                <Image
                    src={FollowUp}
                    alt='Follow-up guidance'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Follow-up guidance
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation5}`}>
                <Image
                    src={InternalCross}
                    alt='Internal cross-review'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Internal cross-review
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation6}`}>
                <Image
                    src={Reverse}
                    alt='Reverse-engineered code to uncover more issues'
                    loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Reverse-engineered code to uncover more issues
                </p>
            </div>

        </div>
    )
}