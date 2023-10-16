"use client"
import React, { useState, useEffect } from 'react';
import cls from './Footer.module.scss'
import logoDesktop from '@/public/FooterDesktopLogo.svg';
import linesDesktop from '@/public/FooterDesktopLines.svg';
import linesMobile from '@/public/FooterMobileLines.svg';
import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';
import { usePathname } from 'next/navigation';

const Footer: React.FC<any> = (props) => {
    const pathname = usePathname()

    const scrollToTop = () => {
        if (props.scrollableElementRef.current) {
            props.scrollableElementRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (

        <div className={cls.Footer}>
            <div className={cls.Line}></div>
            <Image
                        className={cls.FooterLineImage}
                        src={linesDesktop}
                        alt='logo'
                        loading='lazy'
            />
            <Image
                        className={cls.FooterLineImageMobile}
                        src={linesMobile}
                        alt='logo'
                        loading='lazy'
            />
            <div className={cls.FooterContent}>
                    <Image
                        className={cls.FooterImage}
                        src={logoDesktop}
                        alt='logo'
                        loading='lazy'
                    />
                    <p className={cls.FooterCombine}>
                    We combine experience from science and industry and are able to solve problems that are too tough for our competitors.
                    </p>
                <div className={cls.FooterRight}>
                    <div className={cls.links}>
                    { pathname === '/' ?
                        <Link className={cls.link} href={'/'} onClick={scrollToTop}>Home</Link>
                        :
                        <Link className={cls.link} href={'/'}>Home</Link>
                    }
                        <Link className={cls.link} href={'/about-us'} >About us</Link>
                        <Link className={cls.link} href={'/contact'} >Contact</Link>
                    </div>
                    <div className={cls.links}>
                        <Link className={cls.link} href={'/audit'} >Audit</Link>
                        <Link className={cls.link} href={'/research'} >Research</Link>
                        <Link className={cls.link} href={'/consulting'} >Consulting</Link>
                        <Link className={cls.link} href={'/evaluation'} >Evaluation</Link>
                    </div>
                    <div className={cls.links}>
                        <a className={cls.link} href="mailto:dmitry@abdkconsulting.com" >
                            Email
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                <path d="M0.5625 8.9375L8 1.5M8 1.5H-2.98023e-08M8 1.5V9.5" stroke="#A3A2CC" strokeWidth="1.5" strokeLinejoin="bevel" />
                            </svg>
                        </a>
                        <Link className={cls.link} href={'https://x.com/ABDKconsulting'}  target="_blank">
                            X
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                <path d="M0.5625 8.9375L8 1.5M8 1.5H-2.98023e-08M8 1.5V9.5" stroke="#A3A2CC" strokeWidth="1.5" strokeLinejoin="bevel" />
                            </svg>
                        </Link>
                        <Link className={cls.link} href={'https://www.linkedin.com/company/abdk-consulting/'}  target="_blank">
                            LinkedIn
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                <path d="M0.5625 8.9375L8 1.5M8 1.5H-2.98023e-08M8 1.5V9.5" stroke="#A3A2CC" strokeWidth="1.5" strokeLinejoin="bevel" />
                            </svg>
                        </Link>
                        <Link className={cls.link} href={'https://github.com/abdk-consulting'}  target="_blank">
                            GitHub
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                <path d="M0.5625 8.9375L8 1.5M8 1.5H-2.98023e-08M8 1.5V9.5" stroke="#A3A2CC" strokeWidth="1.5" strokeLinejoin="bevel" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
            <div className={cls.footerRightsContainer}>
                <p className={cls.footerRights}>
                    2023 © ABDK Consulting | All rights reserved.
                </p>
                <Link href={'https://brandpack.me/'} className={cls.footerDesigned}>
                    Designed by brandpack.me
                </Link>
            </div>
        </div>
    );

};
export default Footer;