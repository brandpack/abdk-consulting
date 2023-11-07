"use client"
import React, { useState, useEffect } from 'react';
import cls from './StickHeader.module.scss'
import logoDesktop from '@/public/fixedHeaderLogoo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';
import { usePathname } from 'next/navigation';

const StickHeader: React.FC<any> = (props) => {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false);

    const isVisible = props.isHeaderFixed;

    const scrollToTop = () => {
        if (props.scrollableElementRef.current) {
            props.scrollableElementRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

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

    const BurgerMenu = () => {
        return(
            <div onClick={() => props.setIsOpen(!props.isOpen)} className={classNames(cls.burger, { [cls.open]: props.isOpen }, [])}>
                <span />
                <span />
                <span />
            </div>
        )
    }

    const DesktopNavigation = () => {
        return(
            <div className={cls.navigation}>
                <Link href={'/audit'} className={cls.link}>Audit</Link>
                <Link href={'/research'} className={cls.link}>Research</Link>
                <Link href={'/consulting'} className={cls.link}>Consulting</Link>
                <Link href={'/evaluation'} className={cls.link}>Evaluation</Link>
                <Link href={'/about-us'} className={cls.link}>About us</Link>
            </div>
        )
    }


    return (
        <div className={classNames(cls.header, { [cls.visible]: isVisible }, [])}>
            <div className={cls.container}>
                <Link className={cls.logo} href={'/'} onClick={scrollToTop}>
                    <Image src={logoDesktop} alt={'ABDK - Your guide in the world of crypto | Logotype'} loading="lazy"/>
                </Link>
                { isMobile ? BurgerMenu() : DesktopNavigation() }
            </div>
        </div>
    );

};
export default StickHeader;