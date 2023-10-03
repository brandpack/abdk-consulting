import { FC } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';
import Provide from '@/public/provide.svg';
import ProvideH from '@/public/ProvideResearchH.svg';
import trackRecord from '@/public/trackRecord.svg';
import trackRecordH from '@/public/trackRecordResearchH.svg';
import Collaborate from '@/public/collaborate.svg';
import CollaborateH from '@/public/collaborateResearchH.svg';
import Develop from '@/public/develop.svg';
import DevelopH from '@/public/DevelopResearchH.svg';
import Author from '@/public/author.svg';
import AuthorH from '@/public/authorResearchH.svg';
import { Evaluation } from './Evaluation';


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
            <Evaluation
                text='Track record of thousands of critical bugs'
                AdditionalclassName={cls.Evaluation1}
                img={trackRecord}
                imgH={trackRecordH}
            />
            <Evaluation
                text='Provide transparent rates and timelines'
                AdditionalclassName={cls.Evaluation2}
                img={Provide}
                imgH={ProvideH}
            />
            <Evaluation
                text='Collaborate with top researchers on cutting-edge problems'
                AdditionalclassName={cls.Evaluation3}
                img={Collaborate}
                imgH={CollaborateH}
            />
            <Evaluation
                text='Develop math models for Uniswap and Yield'
                AdditionalclassName={cls.Evaluation4}
                img={Develop}
                imgH={DevelopH}
            />
            <Evaluation
                text='Author top cryptography publications in zero knowledge'
                AdditionalclassName={cls.Evaluation5}
                img={Author}
                imgH={AuthorH}
            />
        </div>
    )
}