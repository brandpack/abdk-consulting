"use client"
import React, { useState, useEffect } from 'react';
import cls from './MobileMenu.module.scss'
import logoDesktop from '@/public/fixedHeaderLogoo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';
import { usePathname } from 'next/navigation';

const MobileMenu: React.FC<any> = (props) => {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false);

    const scrollToTop = () => {
        if (props.scrollableElementRef.current) {
            props.scrollableElementRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (

        <div className={classNames(cls.Menu, { [cls.collapsed]: props.isOpen }, [])}>
            <div className={cls.Header}>
                <Link href={'/'}>
                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.7071 20.0165C8.75678 20.8005 11.5944 22.009 14.1722 23.5836C18.0378 21.1147 21.2722 17.8827 23.6709 14.0501L23.7318 13.9521C23.744 13.9325 23.7562 13.9129 23.7683 13.8933C23.7791 13.8759 23.7898 13.8585 23.8005 13.8411C25.4465 11.1623 26.687 8.19487 27.4532 4.99347L27.4398 4.97633L27.4405 4.97416C26.3516 3.56848 25.1113 1.67455 24.3351 0.489234L24.3312 0.483341C24.2139 0.304203 24.1077 0.141922 24.0142 0C20.5071 5.46892 17.5692 8.92039 14.8033 11.8618C12.1943 14.6364 9.64806 16.9557 5.7071 20.0165Z" fill='white' />
                        <path fillRule="evenodd" clipRule="evenodd" d="M47.6001 24.309C46.4181 25.0829 44.5317 26.3182 43.1272 27.4048L43.1232 27.4035L43.106 27.417C39.854 26.639 36.8455 25.375 34.1364 23.6954L33.9578 23.5846L33.9537 23.5872C30.1558 21.1894 26.9513 17.9681 24.5 14.1273C26.0777 11.5501 27.2808 8.72081 28.0643 5.67065C31.1292 9.61757 33.4502 12.1659 36.2273 14.7773C39.1688 17.5431 42.6203 20.481 48.0893 23.988C47.9474 24.0815 47.7851 24.1878 47.606 24.3051L47.6001 24.309Z" fill='white' />
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.5135 42.9928L20.5131 42.9942C21.6018 44.3997 22.8416 46.2931 23.6177 47.4782L23.6216 47.4841C23.7389 47.6632 23.8452 47.8255 23.9387 47.9674C27.4457 42.4985 30.3836 39.047 33.1495 36.1056C35.7582 33.3314 38.3041 31.0123 42.2442 27.9521C39.1953 27.1679 36.3597 25.9578 33.7841 24.3816C29.9482 26.8308 26.7336 30.0315 24.3402 33.8246L24.342 33.8275L24.2313 34.0061C22.5513 36.7157 21.2782 39.7242 20.5 42.9756L20.5135 42.9928Z" fill='white' />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.9658 20.5637L4.96359 20.563C3.55905 21.6498 1.67175 22.8857 0.489401 23.66L0.483354 23.6639L0.479423 23.6665C0.301837 23.7828 0.140887 23.8882 0 23.981C5.469 27.488 8.92053 30.4259 11.862 33.1917C14.6389 35.8029 16.9598 38.3511 20.0245 42.2976C20.8092 39.2448 22.0195 36.4059 23.5965 33.8275C21.1455 29.9885 17.9386 26.7718 14.139 24.3777L14.1311 24.3827L13.9524 24.2719C11.2433 22.5923 8.23483 21.3284 4.98287 20.5503L4.9658 20.5637Z" fill='white' />
                    </svg>
                </Link>
                <div
                    onClick={() => props.setIsOpen(!props.isOpen)}
                    className={classNames(cls.burger, { [cls.open]: props.isOpen }, [])}
                >
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            <div className={classNames(cls.headerLinks)}>
                <Link href={'/audit'} onClick={() => props.setIsOpen(!props.isOpen)} className={cls.link}>Audit</Link>
                <Link href={'/research'} onClick={() => props.setIsOpen(!props.isOpen)} className={cls.link}>Research</Link>
                <Link href={'/consulting'} onClick={() => props.setIsOpen(!props.isOpen)} className={cls.link}>Consulting</Link>
                <Link href={'/evaluation'} onClick={() => props.setIsOpen(!props.isOpen)} className={cls.link}>Evaluation</Link>
                <Link href={'/about-us'} onClick={() => props.setIsOpen(!props.isOpen)} className={cls.link}>About us</Link>
                <Link href={'/contact'} onClick={() => props.setIsOpen(!props.isOpen)} className={cls.link}>Contact</Link>
            </div>
        </div>
    );

};
export default MobileMenu;