import { FC } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';
import Transparent from '@/public/transparent.svg';
import TransparentH from '@/public/transparentAuditH.svg';
import trackRecord from '@/public/trackRecord.svg';
import trackRecordH from '@/public/trackRecordAuditH.svg';
import advice from '@/public/advice.svg';
import adviceH from '@/public/adviceAuditH.svg';
import FollowUp from '@/public/followUp.svg';
import FollowUpH from '@/public/FollowUpH.svg';
import InternalCross from '@/public/internalCross.svg';
import InternalCrossH from '@/public/InternalCrossAuditH.svg';
import Reverse from '@/public/Reverse.svg';
import ReverseH from '@/public/ReverseAuditH.svg';
import { Evaluation } from './Evaluation';


interface ChooseProps {
}

export const ChooseAudit: FC<ChooseProps> = ({ }) => {
    return (
        <div className={cls.Approach}>
            <h1 className={cls.ApproachHeader}>
                Why Choose <br />
                abdk
            </h1>
            <div className={cls.Line1}></div>
            <div className={cls.Line2}></div>
            <div className={cls.Line3}></div>
            <div className={cls.Line4}></div>
            <div className={cls.Line5}></div>
            <div className={cls.Line6}></div>
            <Evaluation
                text='Transparent audit process'
                AdditionalclassName={cls.Evaluation1}
                img={Transparent}
                imgH={TransparentH}
            />
            <Evaluation
                text='Track record of thousands of critical bugs'
                AdditionalclassName={cls.Evaluation2}
                img={trackRecord}
                imgH={trackRecordH}
            />
            <Evaluation
                text='Advice on optimization and architecture'
                AdditionalclassName={cls.Evaluation3}
                img={advice}
                imgH={adviceH}
            />
            <Evaluation
                text='Follow-up guidance'
                AdditionalclassName={cls.Evaluation4}
                img={FollowUp}
                imgH={FollowUpH}
            />
            <Evaluation
                text='Internal cross-review'
                AdditionalclassName={cls.Evaluation5}
                img={InternalCross}
                imgH={InternalCrossH}
            />
            <Evaluation
                text='Reverse-engineered code to uncover more issues'
                AdditionalclassName={cls.Evaluation6}
                img={Reverse}
                imgH={ReverseH}
            />

        </div>
    )
}