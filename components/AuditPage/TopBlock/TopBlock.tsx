import { FC } from 'react'
import cls from './TopBlock.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Audit from '@/public/Audit.webp';

interface TopBlockProps {
}

export const TopBlockAudit: FC<TopBlockProps> = ({ }) => {
    return (
        <div className={cls.TopBlock}>
            <Image
                src={Audit}
                className={cls.TopBlockImage}
                alt='TopBlockImage'
            />
            <div className={cls.LinearGradient}></div>
            <div className={cls.TopBlockHeader}>
                <div className={cls.TopBlockContainer}>
                    <div className={cls.blueLine}></div>
                    <h1 className={cls.Header}>
                        Audit
                    </h1>
                    <p className={cls.Text}>
                        Order an audit of your code,
                        protocol, or architecture
                    </p>
                </div>

                <Link 
                className={cls.TopBlockButton}
                    href={'/contact'}
                >
                    Request Audit
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M1.58118 12.1562L12.7374 1M12.7374 1H0.737427M12.7374 1V13" stroke="#2DAED7" strokeWidth="1.8" strokeLinejoin="bevel" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}