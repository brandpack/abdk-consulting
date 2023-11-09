import cls from './OurTeam.module.scss'
import Image from 'next/image';
import Dmitry from '@/public/dmitry.jpg';
import Mikhail from '@/public/mikhail.jpg';
import Anna from '@/public/anna.jpg';
import Aleksandra from '@/public/alexandra.jpg';
import LinesTeam from '@/public/LinesTeam.svg';
import Lines from '@/public/linesAboutUs.svg';

export const OurTeam = ({ }) => {

    return (
        <div className={cls.Expertise}>
            <div className={cls.container}>

                <div className={cls.Lines}>
                    <Image src={Lines} alt='Lines' loading='lazy'/>
                </div>
                <div className={cls.LinesMobile}>
                    <Image src={LinesTeam} alt='Lines' loading='lazy'/>
                </div>

                <h2>Our team</h2>
                <p>The core team of ABDK has remained unchanged over the years and has maintained the uniformly high quality in all projects.</p>

                <div className={cls.ExpertiseContainer}>

                    <div className={`${cls.item} ${cls.Evaluation1} `}>
                        <Image src={Dmitry} alt='SmartContarcts' loading='lazy'/>
                        <div className={cls.content}>
                            <h3>Dmitry<br/>Khovratovich</h3>
                            <p>Founder and Lead Cryptographer</p>
                        </div>
                    </div>

                    <div className={`${cls.item} ${cls.Evaluation2} `}>
                        <Image src={Mikhail} alt='ZeroKnowledge' loading='lazy'/>
                        <div className={cls.content}>
                            <h3>Mikhail<br/>Vladimirov</h3>
                            <p>Chief technology<br/>officer</p>
                        </div>
                    </div>

                    <div className={`${cls.item} ${cls.Evaluation3} `}>
                        <Image src={Anna} alt='Cryptography' loading='lazy'/>
                        <div className={cls.content}>
                            <h3>Anna<br/>Buryanitsa</h3>
                            <p>Financial<br/>Officer</p>
                        </div>
                    </div>

                    <div className={`${cls.item} ${cls.Evaluation4} `}>
                        <Image src={Aleksandra} alt='DeFi' loading='lazy'/>
                        <div className={cls.content}>
                            <h3>Aleksandra<br/>Zveryanskaya</h3>
                            <p>Project<br/>Manager</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}