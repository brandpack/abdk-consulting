"use client"
import React, { useState, useEffect, FC } from 'react';
import cls from './TopStaticHeader.module.scss';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';
import { usePathname } from 'next/navigation';
import { DarkLogo, DarkMobileLogo, DestkopLogo, MobileLogo } from './Logos';

interface HeaderProps {
    auditColor: string;
    researchColor: string;
    consultingColor: string;
    evaluationColor: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const TopStaticHeader: FC<HeaderProps> = ({auditColor, researchColor, consultingColor, evaluationColor,isOpen,setIsOpen}) => {
    const [isMobile, setIsMobile] = useState(false);

    const url = usePathname()
    if (url === '/contact') {
        console.log(url);
    }

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
            <div onClick={() => setIsOpen(!isOpen)} className={classNames(cls.burger, { [cls.open]: isOpen }, [])}>
                <span/>
                <span/>
                <span/>
            </div>
        )
    }

    const DesktopNavigation = () => {
        return (
            <div className={cls.navigation}>
                <Link href={'/audit'} className={cls.link}>Audit</Link>
                <Link href={'/research'} className={cls.link}>Research</Link>
                <Link href={'/consulting'} className={cls.link}>Consulting</Link>
                <Link href={'/evaluation'} className={cls.link}>Evaluation</Link>
                <Link className={cls.link} href={'/about-us'}>About us</Link>
            </div>
        )
    }

    const logo = !isMobile ? DestkopLogo(auditColor, researchColor, consultingColor, evaluationColor) : MobileLogo(auditColor, researchColor, consultingColor, evaluationColor);
    const darkLogo = !isMobile ? DarkLogo() : DarkMobileLogo();
    const navigation = !isMobile ? DesktopNavigation() : BurgerMenu();

    return (
        <div className={cls.header}>
        { url !== '/contact'
            ?
            <div className={cls.container}>
                <a  href={'/'} className={cls.logo}>
                    <div className={cls.hoverLogo}>
                        { logo }
                    </div>
                </a>
                { navigation }
            </div>
            :
            <div className={`${cls.container} ${cls.isContact}`}>
                <a  href={'/'} className={cls.logo}>
                    <div className={cls.hoverLogo}>
                        { darkLogo }
                    </div>
                </a>
                { navigation }
            </div>
        }
        </div>
    );
};

export default TopStaticHeader;