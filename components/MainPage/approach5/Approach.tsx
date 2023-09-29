import { FC } from 'react'
import cls from './Approach.module.scss'
import Image from 'next/image';
import Transparent from '@/public/transparent.svg';
import FullConf from '@/public/fullConf.svg';
import FollowUp from '@/public/followUp.svg';
import InternalCross from '@/public/internalCross.svg';
import ClearMilestones from '@/public/clearMilestones.svg';


interface ApproachProps {
}

export const Approach: FC<ApproachProps> = ({ }) => {
    return (
        <div className={cls.Approach}>
            <h1 className={cls.ApproachHeader}>
                Our approach stands on:
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
                    Transparent working plan
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation2}`}>
                <Image 
                src={FullConf}
                alt='Full confidentiality'
                loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Full confidentiality
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation3}`}>
                <Image 
                src={FollowUp}
                alt='Follow-up guidance'
                loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Follow-up guidance
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation4}`}>
                <Image 
                src={InternalCross}
                alt='Internal cross-review'
                loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Internal cross-review
                </p>
            </div>
            <div className={`${cls.Evaluation} ${cls.Evaluation5}`}>
                <Image 
                src={ClearMilestones}
                alt='Clear milestones and deliverables'
                loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    Clear milestones and deliverables
                </p>
            </div>

        </div>
    )
}