"use client"
import React, { useState, useEffect } from 'react';
import cls from './Footer.module.scss'
import logoDesktop from '@/public/FooterDesktopLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';

const Footer = () => {

    return (

        <div className={cls.Footer}>
            <div className={cls.Line}></div>
            <div className={cls.FooterContent}>
                <div className={cls.FooterLeft}>
                    <Image
                        src={logoDesktop}
                        alt='logo'
                        loading='lazy'
                    />
                    <p>
                        © 2017-2023 ABDK. All rights reserved.
                    </p>
                </div>
                <div className={cls.FooterRight}>
                    <div className={cls.links}>
                        <Link className={cls.link} href={'/'} >Home</Link>
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
                                <path d="M0.5625 8.9375L8 1.5M8 1.5H-2.98023e-08M8 1.5V9.5" stroke="#353539" strokeWidth="1.5" strokeLinejoin="bevel" />
                            </svg>
                        </a>
                        <Link className={cls.link} href={'a'} >
                            X
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                <path d="M0.5625 8.9375L8 1.5M8 1.5H-2.98023e-08M8 1.5V9.5" stroke="#353539" strokeWidth="1.5" strokeLinejoin="bevel" />
                            </svg>
                        </Link>
                        <Link className={cls.link} href={'a'} >
                            LinkedIn
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                <path d="M0.5625 8.9375L8 1.5M8 1.5H-2.98023e-08M8 1.5V9.5" stroke="#353539" strokeWidth="1.5" strokeLinejoin="bevel" />
                            </svg>
                        </Link>
                        <Link className={cls.link} href={'a'} >
                            GitHub
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                <path d="M0.5625 8.9375L8 1.5M8 1.5H-2.98023e-08M8 1.5V9.5" stroke="#353539" strokeWidth="1.5" strokeLinejoin="bevel" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );

};
export default Footer;