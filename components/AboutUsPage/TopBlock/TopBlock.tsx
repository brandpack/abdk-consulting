import { FC } from 'react'
import cls from './TopBlock.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import AboutUs from '@/public/about-us.webp';

interface TopBlockProps {
}

export const TopBlockAboutUs: FC<TopBlockProps> = ({ }) => {
    return (
        <div className={cls.TopBlock}>
            <Image
                src={AboutUs}
                className={cls.TopBlockImage}
                alt='TopBlockImage'
            />
            <div className={cls.TopBlockHeader}>
                <div className={cls.TopBlockContainer}>
                    <div className={cls.greenLine}></div>
                    <h1 className={cls.Header}>
                        About Us
                    </h1>
                    <p className={cls.Text}>
                        The ABDK Research Team, led by the world 
                        top cryptography, security, and blockchain 
                        researcher Dmitry Khovratovich, provides 
                        exclusive advice on blockchain, 
                        scalability, zero-knowledge techniques,
                        encryption, and consensus issues.
                    </p>
                </div>
            </div>
            <div className={cls.TopBlockFooter}>
                <div className={cls.TopBlockText}>
                    <Link href={'/audit'} className={cls.text}>Audit</Link>
                    <div className={cls.line}></div>
                    <Link href={'/consulting'} className={cls.text}>Consulting</Link>
                    <div className={cls.line}></div>
                    <Link href={'/research'} className={cls.text}>Research</Link>
                    <div className={cls.line}></div>
                    <Link href={'/evaluation'} className={cls.text}>Evaluation</Link>
                </div>
            </div>

        </div>
    )
}