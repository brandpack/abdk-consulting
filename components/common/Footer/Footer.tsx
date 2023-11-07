"use client"
import React from 'react';
import cls from './Footer.module.scss'
import logoDesktop from '@/public/FooterDesktopLogo.svg';
import linesDesktop from '@/public/linesDesktop.png';
import linesMobile from '@/public/linesMobile.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer: React.FC<any> = (props) => {
    const pathname = usePathname()

    const year = new Date().getFullYear();

    const scrollToTop = () => {
        if (props.scrollableElementRef.current) {
            props.scrollableElementRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (

        <footer className={cls.footer}>
            <Image className={cls.LinesDesktop} src={linesDesktop} loading='lazy' alt='ABDK - We combine experience from science and industry and are able to solve problems that are too tough for our competitors.'/>
            <Image className={cls.LinesMobile} src={linesMobile} loading='lazy' alt='ABDK - We combine experience from science and industry and are able to solve problems that are too tough for our competitors.'/>
            <div className={cls.container}>
                <div className={cls.left}>
                <Image
                    className={cls.logo}
                    src={logoDesktop}
                    alt='ABDK - We combine experience from science and industry and are able to solve problems that are too tough for our competitors.'
                    loading='lazy'
                />
                <p>We combine experience from science and industry and are able to solve problems that are too tough for our competitors.</p>
                </div>
                <div className={cls.right}>
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
            
            <div className={cls.bottom}>
                <div className={cls.line}></div>
                <div className={cls.container}>
                    <p className={cls.rights}>
                        {year} © ABDK Consulting | All rights reserved.
                    </p>
                    <Link href={'https://brandpack.me/'} className={cls.by} target='_blank'>
                        Designed by brandpack.me
                    </Link>
                </div>
            </div>
        </footer>
    );

};
export default Footer;