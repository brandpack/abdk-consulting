'use client'
import { ServiceFirstScreen } from "@/components/common/ServiceFirstScreen/ServiceFirstScreen";
import { WhyChoose } from "@/components/common/WhyChoose/WhyChoose";
import { Request } from "@/components/common/Request/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";
import image from '@/public/Audit.webp';
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
import { Methodology } from "@/components/common/Methodology/Methodology";
import { ExtraText } from "@/components/common/ExtraText/ExtraText";
import { CheckOut } from "@/components/MainPage/CheckOut/CheckOut";
import { MostPopularAudit } from "@/components/common/MostPopularAudit/MostPopularAudit";

const nameService = 'Audit';

const WhyChooseData = [
    {
        image: Transparent,
        hoverImage: TransparentH,
        text: 'Transparent audit process',
    },
    {
        image: trackRecord,
        hoverImage: trackRecordH,
        text: 'Track record of thousands of critical bugs',
    },
    {
        image: advice,
        hoverImage: adviceH,
        text: 'Reverse-engineered code to uncover more issues',
    },
    {
        image: FollowUp,
        hoverImage: FollowUpH,
        text: 'Internal cross-review',
    },
    {
        image: InternalCross,
        hoverImage: InternalCrossH,
        text: 'Follow-up guidance',
    },
    {
        image: Reverse,
        hoverImage: ReverseH,
        text: 'Advice on optimization and architecture',
    },
];

const AuditStages = [
    'Show your project',
    'Get a quote and timeline',
    'Pay a deposit',
    'Deliver the project for the audit'
];


export default function Audit() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main>
            <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'#2DAED7'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
            <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
            <ServiceFirstScreen title={nameService} image={image} text='Order an audit of your code, protocol, or architecture' color='#2DAED7'/>
            <MostPopularAudit/>
            <ExtraText/>
            <WhyChoose items={WhyChooseData}/>
            <CheckOut/>
            <Request nameRequest={nameService} stages={AuditStages}/>
            <Methodology/>
            <Footer/>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </main>
    )
}
