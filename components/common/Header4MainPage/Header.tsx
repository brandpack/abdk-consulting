"use client"
import React, { useState, useEffect } from 'react';
import cls from './Header.module.scss'
import logoDesktop from '@/public/fixedHeaderLogoo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';

const Header: React.FC<any> = (props) => {
    

    return (

        <div className={classNames(cls.headerFixed, { [cls.visible]: props.isHeaderFixed }, [])}>
            <div className={cls.headerContent}>
                <a href={'/'}>
                    <Image
                        src={logoDesktop}
                        alt={'ADKB'}
                        loading="lazy"
                    />
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
export default Header;