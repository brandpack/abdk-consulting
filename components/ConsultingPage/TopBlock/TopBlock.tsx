import { FC } from 'react'
import cls from './TopBlock.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Consulting from '@/public/Consulting.webp';

interface TopBlockProps {
}

export const TopBlockConsulting: FC<TopBlockProps> = ({ }) => {
    return (
        <div className={cls.TopBlock}>
            <Image
                src={Consulting}
                className={cls.TopBlockImage}
                alt='TopBlockImage'
            />
            <div className={cls.LinearGradient}></div>
            <div className={cls.TopBlockHeader}>
                <div className={cls.TopBlockContainer}>
                    <div className={cls.cyanLine}></div>
                    <h1 className={cls.Header}>
                        Consulting
                    </h1>
                    <p className={cls.Text}>
                        Request a one-time or a series of consultations 
                        on the design, development or usage of 
                        decentralized finance or cryptography
                    </p>
                </div>

                <Link 
                className={cls.TopBlockButton}
                    href={'/contact'}
                >
                    Request Consulting
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M1.58118 12.1562L12.7374 1M12.7374 1H0.737427M12.7374 1V13" strokeWidth="1.8" strokeLinejoin="bevel" />
                    </svg>
                </Link>
            </div>
            <div className={cls.TopBlockFooter}>
                <div className={cls.TopBlockText}>
                    <Link href={'/audit'} className={cls.text}>Audit</Link>
                    <div className={cls.line}></div>
                    <Link href={'/research'} className={cls.text}>Research</Link>
                    <div className={cls.line}></div>
                    <Link href={'/consulting'} className={cls.text}>Consulting</Link>
                    <div className={cls.line}></div>
                    <Link href={'/evaluation'} className={cls.text}>Evaluation</Link>
                </div>
            </div>

        </div>
    )
}