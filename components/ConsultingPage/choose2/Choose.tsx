import { FC } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';
import Engaged from '@/public/engaged.svg';
import EngagedH from '@/public/enagedConsultingH.svg';
import OurDesigns from '@/public/ourDesigns.svg';
import OurDesignsH from '@/public/OurDesignsConsultingH.svg';
import Conduct from '@/public/conduct.svg';
import ConductH from '@/public/ConductConsultingH.svg';
import Advise from '@/public/advise.svg';
import AdviseH from '@/public/AdviseConsultingH.svg';
import { Evaluation } from './Evaluation';


interface ChooseProps {
}

export const ChooseConsulting: FC<ChooseProps> = ({ }) => {
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
                text='Engaged in standards for blockchain and cryptography'
                AdditionalclassName={cls.Evaluation1}
                img={Engaged}
                imgH={EngagedH}
            />
            <Evaluation
                text='Our designs used in hundreds of applications'
                AdditionalclassName={cls.Evaluation2}
                img={OurDesigns}
                imgH={OurDesignsH}
            />
            <Evaluation
                text='Conduct transparent consultation'
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