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
            <div className={cls.LinearGradient}></div>
            <div className={cls.TopBlockHeader}>
                <div className={cls.TopBlockContainer}>
                    <div className={cls.greenLine}></div>
                    <h1 className={cls.Header}>
                        About Us
                    </h1>
                    <p className={cls.Text}>
                        ABDK Consulting was founded in 2016 as a top service provider in the design and security of Web 3.0. Since then we have conducted over 100 audit projects, have developed DeFi protocols and cryptographic schemes, have crafted Solidity libraries and consulted dozens of clients. 
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