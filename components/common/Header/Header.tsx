"use client"
import React, { useState, useEffect } from 'react';
import cls from './Header.module.scss'
import logoDesktop from '@/public/fixedHeaderLogoo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';

const Header: React.FC<any> = (props) => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth <= 700);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (

        <div className={classNames(cls.headerFixed, { [cls.visible]: isHeaderFixed }, [])}>
            <div className={cls.headerContent}>
                <a href={'/'}>
                    <Image
                        src={logoDesktop}
                        alt={'ADKB'}
                        loading="lazy"
                    />
                </a>
                {
                    isMobile ?
                        <>
                            <div
                                onClick={() => props.setIsOpen(!props.isOpen)}
                                className={classNames(cls.burger, { [cls.open]: props.isOpen }, [])}
                            >
                                <span />
                                <span />
                                <span />
                            </div>
                        </>
                        :
                        <div className={cls.headerLinks}>
                            <Link href={'/audit'} className={cls.link}>Audit</Link>
                            <Link href={'/research'} className={cls.link}>Research</Link>
                            <Link href={'/consulting'} className={cls.link}>Consulting</Link>
                            <Link href={'/evaluation'} className={cls.link}>Evaluation</Link>
                            <Link href={'/about-us'} className={cls.link}>About us</Link>
                        </div>
                }
            </div>
        </div>
    );

};
export default Header;