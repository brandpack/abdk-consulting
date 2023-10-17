"use client"
import React, { useState, useEffect } from 'react';
import cls from './Header.module.scss'
import logoDesktop from '@/public/fixedHeaderLogoo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';
import { usePathname } from 'next/navigation';

const Header: React.FC<any> = (props) => {
    const pathname = usePathname()

    const scrollToTop = () => {
        if (props.scrollableElementRef.current) {
            props.scrollableElementRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (

        <div className={classNames(cls.headerFixed, { [cls.visible]: props.isHeaderFixed }, [])}>
            <div className={cls.headerContent}>
                    { pathname === '/' ?
                        <Link href={'/'} onClick={scrollToTop}>
                            <Image
                                src={logoDesktop}
                                alt={'ADKB'}
                                loading="lazy"
                            />
                        </Link>
                        :
                        <Link href={'/'}>
                            <Image
                                src={logoDesktop}
                                alt={'ADKB'}
                                loading="lazy"
                            />
                        </Link>
                    }
                <div className={cls.headerLinks}>
                    { pathname === '/' ?
                        <Link className={cls.link} href={'/'} onClick={scrollToTop}>Home</Link>
                        :
                        <Link className={cls.link} href={'/'}>Home</Link>
                    }
                    <Link className={cls.link} href={'/about-us'}>About us</Link>
                    <Link className={cls.link} href={'/contact'}>Contact</Link>
                </div>
            </div>
        </div>
    );

};
export default Header;