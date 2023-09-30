"use client"
import React, { useState, useEffect } from 'react';
import cls from './StaticHeader.module.scss'
import logoDesktop from '@/public/logo.svg';
import logoMini from '@/public/headerLogoMini.svg';
import Image from 'next/image';
import Link from 'next/link';

const StaticHeader = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Check if window is defined (i.e., we are in a browser environment)
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 700);
      }
    }, []);

    return (
        <div className={cls.headerStatic}>
            <div className={cls.headerContent}>
                <a href={'/'}>
                    {
                        isMobile ? 
                        <Image
                            src={logoMini}
                            alt={'ADKB'}
                            loading="lazy"
                        />
                        :
                        <Image
                        src={logoDesktop}
                        alt={'ADKB'}
                        loading="lazy"
                    />
                    }

                </a>
                <div className={cls.headerLinks}>
                    <Link className={cls.link} href={'/'}>Home</Link>
                    <Link className={cls.link} href={'/about-us'}>About us</Link>
                    <Link className={cls.link} href={'/contact'}>Contact</Link>
                </div>
            </div>
        </div>
    );


};
export default StaticHeader;