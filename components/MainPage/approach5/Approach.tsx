import { FC, useState } from 'react'
import cls from './Approach.module.scss'
import Transparent from '@/public/transparent.svg';
import TransparentH from '@/public/transparentH.svg';
import FullConf from '@/public/fullConf.svg';
import FullConfH from '@/public/FullConfH.svg';
import FollowUp from '@/public/followUp.svg';
import FollowUpH from '@/public/followUpH.svg';
import InternalCross from '@/public/internalCross.svg';
import InternalCrossH from '@/public/InternalCrossH.svg';
import ClearMilestones from '@/public/clearMilestones.svg';
import ClearMilestonesH from '@/public/clearMilestonesH.svg';

import { Evaluation } from './Evaluation';


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
            <Evaluation 
                text='Transparent working plan'
                AdditionalclassName={cls.Evaluation1}
                img={Transparent}
                imgH={TransparentH}
            />
            <Evaluation 
                text='Full confidentiality'
                AdditionalclassName={cls.Evaluation2}
                img={FullConf}
                imgH={FullConfH}
            />
            <Evaluation 
                text='Follow-up guidance'
                AdditionalclassName={cls.Evaluation3}
                img={FollowUp}
                imgH={FollowUpH}
            />
            <Evaluation 
                text='Internal cross-review'
                AdditionalclassName={cls.Evaluation4}
                img={InternalCross}
                imgH={InternalCrossH}
            />
            <Evaluation 
                text='Internal cross-review'
                AdditionalclassName={cls.Evaluation4}
                img={InternalCross}
                imgH={InternalCrossH}
            />
            <Evaluation 
                text='Clear milestones and deliverables'
                AdditionalclassName={cls.Evaluation5}
                img={ClearMilestones}
                imgH={ClearMilestonesH}
            />
        </div>
    )
}