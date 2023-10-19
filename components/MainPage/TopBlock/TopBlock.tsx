'use client'
import { FC, useEffect, useState } from 'react'
import cls from './TopBlock.module.scss'
import Link from 'next/link';

interface TopBlockProps {
}

export const TopBlock: FC<TopBlockProps> = ({ }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window is defined (i.e., we are in a browser environment)
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 700);
        }
    }, []);
    return (
        <div className={cls.TopBlock}>
            <div className={'videoWrapper'}>
                {
                    isMobile ?
                        <video className={'bgVideo'} autoPlay={true} muted={true} playsInline={true} disablePictureInPicture={true} loop={true}>
                            <source src='/BgVideoMobile1.mp4' type="video/mp4" />
                        </video>
                        :
                        <video className={'bgVideo'} autoPlay muted playsInline disablePictureInPicture loop>
                            <source src='/BgVideo.webm' type="video/webm" />
                            <source src='/BgVideo.mp4' type="video/mp4" />
                        </video>
                }

            </div>
            <div className={cls.LinearGradient}></div>
            <div className={cls.TopBlockHeader}>

                Your <span className={cls.TopBlockGuide}>
                        <svg className={cls.GuideBgImage} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1508_82517)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.61525 9.05585C4.69454 9.3298 5.6363 9.67853 6.56176 10.1794C6.93119 10.3793 7.2959 10.6023 7.66401 10.8525C9.11171 9.81413 10.3503 8.53924 11.3268 7.07008C11.556 6.70208 11.7588 6.32768 11.9415 5.93421C12.4299 4.88254 12.784 3.67478 13.1007 2.05778C12.6463 1.43829 12.1728 0.715155 11.8582 0.234704L11.8563 0.231877C11.8 0.145937 11.7491 0.0680852 11.7042 0C10.0217 2.62364 8.6123 4.27945 7.28539 5.69055C6.19373 6.85148 5.125 7.84628 3.61525 9.05585ZM12.3052 7.38572C12.5026 7.05329 12.6828 6.71219 12.8485 6.3554C13.288 5.40902 13.6191 4.36563 13.9037 3.10072C15.2302 4.78176 16.2813 5.92241 17.5223 7.08927C18.9334 8.41616 20.5892 9.82559 23.2129 11.508C23.1448 11.5529 23.067 11.6038 22.981 11.6601L22.9782 11.662C22.4112 12.0333 21.5062 12.6259 20.8324 13.1472L20.8305 13.1466L20.8222 13.153C19.2621 12.7798 17.8189 12.1734 16.5192 11.3676L16.4335 11.3145L16.4315 11.3157C14.8137 10.2944 13.4204 8.9615 12.3052 7.38572ZM2.58239 9.86481L2.58345 9.86515L2.59164 9.85871C4.15173 10.232 5.595 10.8383 6.89468 11.6441L6.98037 11.6973L6.98418 11.6949C8.58214 12.7017 9.96153 14.0118 11.0697 15.5605C10.7117 16.0912 10.4088 16.6072 10.1508 17.1306C9.76108 17.9211 9.47842 18.7189 9.26012 19.5971C8.04919 18.0854 7.0537 17.0158 5.8918 15.9233C4.48068 14.5964 2.82486 13.187 0.201172 11.5045C0.26876 11.46 0.345974 11.4095 0.431169 11.3537L0.433055 11.3524L0.435956 11.3505C1.00317 10.9791 1.90858 10.3862 2.58239 9.86481ZM11.5557 22.777C11.1834 22.2085 10.5886 21.3002 10.0663 20.6259L10.06 20.617C10.4334 19.0572 11.0441 17.6139 11.8501 16.314L11.9032 16.2283L11.9023 16.2269C12.8944 14.6546 14.1805 13.2945 15.699 12.1958C16.1996 12.5374 16.7122 12.8343 17.2629 13.0966C18.0102 13.4526 18.8193 13.741 19.752 13.9933C18.2668 15.186 17.2089 16.1722 16.1285 17.3212C14.8016 18.7323 13.3921 20.3881 11.7097 23.0117C11.6648 22.9437 11.6138 22.8658 11.5575 22.7799L11.5557 22.777Z" fill="#77F8A2"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1508_82517">
                        <rect width="23.0117" height="23.0117" fill="white" transform="translate(0.201172)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    Guide </span>
                in the World
                of Crypto
            </div>
            <div className={cls.TopBlockHeaderFixHeader}>
                Your
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
                <Link href={'/contact'} className={cls.TopBlockButton}>
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M1.57191 15.7969L15.7821 1.58667M15.7821 1.58667H0.497189M15.7821 1.58667V16.8716" stroke="white" strokeWidth="2.29274" strokeLinejoin="bevel" />
                    </svg>
                </Link>
            </div>

        </div>
    )
}