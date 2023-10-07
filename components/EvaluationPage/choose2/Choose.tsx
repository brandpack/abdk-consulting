import { FC } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';
import Review from '@/public/review.svg';
import ReviewH from '@/public/reviewEvaluationH.svg';
import OpenSource from '@/public/openSource.svg';
import OpenSourceH from '@/public/OpenSourceEvaluationH.svg';
import Conduct from '@/public/conduct.svg';
import ConductH from '@/public/ConductEvaluationH.svg';
import Advise from '@/public/advise.svg';
import AdviseH from '@/public/AdviseEvaluationH.svg';
import { Evaluation } from './Evaluation';


interface ChooseProps {
}

export const ChooseEvaluation: FC<ChooseProps> = ({ }) => {
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
            <Evaluation
                text='Review for top conferences and journals'
                AdditionalclassName={cls.Evaluation1}
                img={Review}
                imgH={ReviewH}
            />
            <Evaluation
                text='Develop open-source standards and packages'
                AdditionalclassName={cls.Evaluation2}
                img={OpenSource}
                imgH={OpenSourceH}
            />
            <Evaluation
                text='Conduct transparent evaluation process'
                AdditionalclassName={cls.Evaluation3}
                img={Conduct}
                imgH={ConductH}
            />
            <Evaluation
                text='Advise top players in the industry'
                AdditionalclassName={cls.Evaluation4}
                img={Advise}
                imgH={AdviseH}
            />
        </div>
    )
}