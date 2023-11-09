import cls from './Expertise.module.scss'
import Image from 'next/image';
import SmartContarcts from '@/public/smartContarcts.svg';
import ZeroKnowledge from '@/public/zeroKnowledge.svg';
import Cryptography from '@/public/cryptography.svg';
import DeFi from '@/public/deFi.svg';
import Lines from '@/public/lines.svg';
import LinesMobile from '@/public/linesMobile.svg';
import LinesTeam from '@/public/LinesTeam.svg';

export const Expertise = ({ }) => {

    return (
        <div className={cls.Expertise}>
            <div className={cls.container}>

                <div className={cls.Lines}>
                    <Image src={Lines} alt='Lines' loading='lazy'/>
                </div>
                <div className={cls.LinesMobile}>
                    <Image src={LinesTeam} alt='Lines' loading='lazy'/>
                </div>

                <h2>Expertise</h2>

                <div className={cls.ExpertiseContainer}>

                    <div className={`${cls.item} ${cls.Evaluation1} `}>
                        <Image src={SmartContarcts} alt='SmartContarcts' loading='lazy'/>
                        <div className={cls.content}>
                            <h3>Smart contracts</h3>
                            <p>Found more than a thousand critical bugs over the 7 years of audit experience.</p>
                        </div>
                    </div>

                    <div className={`${cls.item} ${cls.Evaluation2} `}>
                        <Image src={ZeroKnowledge} alt='ZeroKnowledge' loading='lazy'/>
                        <div className={cls.content}>
                            <h3>Zero Knowledge</h3>
                            <p>Designed and audited SNARK circuits for privacy protocols and zkvM.</p>
                        </div>
                    </div>

                    <div className={`${cls.item} ${cls.Evaluation3} `}>
                        <Image src={Cryptography} alt='Cryptography' loading='lazy'/>
                        <div className={cls.content}>
                            <h3>Cryptography</h3>
                            <p>Developed and analyzed cutting-edge protocols and schemes.</p>
                        </div>
                    </div>

                    <div className={`${cls.item} ${cls.Evaluation4} `}>
                        <Image src={DeFi} alt='DeFi' loading='lazy'/>
                        <div className={cls.content}>
                            <h3>DeFi</h3>
                            <p>Constructed, audited, and optimized protocols for top industry players.</p>
                        </div>
                        {/* <div className={cls.EvaluationTextBlock}>
                            <h1 className={cls.EvaluationHeader}>
                                DeFi
                            </h1>
                            <p className={cls.EvaluationText}>
                                Constructed, audited, and optimized protocols for top industry players.
                            </p>
                        </div> */}
                    </div>
                
                </div>
            </div>
        </div>
    )
}