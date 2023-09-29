"use client"
import React, { useState, useEffect } from 'react';
import cls from './StaticHeader.module.scss'
import logoDesktop from '@/public/fixedHeaderLogoo.svg';
import Image from 'next/image';
import Link from 'next/link';

const StaticHeader = React.memo(() => {

    return (
        <div className={cls.headerStatic}>
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


});
StaticHeader.displayName = 'StaticHeader';
export default StaticHeader;