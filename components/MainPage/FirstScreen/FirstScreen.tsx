'use client'
import { FC, useEffect, useState } from 'react'
import cls from './FirstScreen.module.scss'
import Link from 'next/link';

interface FirstScreenProps {
}

export const FirstScreen: FC<FirstScreenProps> = ({ }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window is defined (i.e., we are in a browser environment)
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 1000);
        }
    }, []);

    const MobileVideo = () => {
        return (
            <video autoPlay muted playsInline disablePictureInPicture loop>
                <source src='/BgVideoMobile1.webm' type="video/webm" />
                <source src='/BgVideoMobile.mp4' type="video/mp4" />
            </video>
        )
    }

    const DestkopVideo = () => {
        return (
            <video autoPlay muted playsInline disablePictureInPicture loop>
                <source src='/BgVideo.webm' type="video/webm" />
                <source src='/BgVideo.mp4' type="video/mp4" />
            </video>
        )
    }



    return (
        <div className={cls.firstscreen}>
            <div className={cls.videoWrapper}>
                { isMobile ? MobileVideo() : DestkopVideo() }
            </div>
            <div className={cls.container}>
                <h1>Your <b>Guide</b> in the World of Crypto</h1>
                <div className={cls.bottom}>
                    <Link href={'/contact'} className={cls.button}>
                        Contact Us
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M1.57191 15.7969L15.7821 1.58667M15.7821 1.58667H0.497189M15.7821 1.58667V16.8716" stroke="white" strokeWidth="2.29274" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}