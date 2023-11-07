"use client"
import React, { useState, useEffect } from 'react';
import cls from './StickHeader.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/components/lib/classNames/classNames';
import { usePathname } from 'next/navigation';

const StickHeader: React.FC<any> = (props) => {
    
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

    const LOGO_SVG = () => {
        return (
                <svg className={cls.ImageLogo} viewBox="0 0 115 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1623_77014)">
                        <g clip-path="url(#clip1_1623_77014)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7783 19.1182C28.9421 20.4598 31.3483 21.4635 33.9502 22.0721C33.9512 22.0712 33.9523 22.0704 33.9534 22.0695C33.9537 22.0696 33.9539 22.0697 33.9539 22.0697C30.6452 24.6133 28.586 26.4744 26.4736 28.7208C24.2767 31.0572 21.9403 33.8081 19.1291 38.2397C19.024 38.0868 18.8613 37.8383 18.6587 37.5289C18.0329 36.5732 17.0269 35.037 16.1671 33.9438C17.6443 27.6282 21.4652 22.4607 26.7783 19.1182Z" fill="#2E52D0"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1177 11.4609C20.463 9.29722 21.4631 6.89905 22.0716 4.29717C22.0708 4.29606 22.0699 4.29496 22.069 4.29386C22.0691 4.29359 22.0692 4.29346 22.0692 4.29346C24.6128 7.60209 26.4739 9.6613 28.7203 11.7737C31.0567 13.9706 33.8076 16.307 38.2392 19.1182C38.0863 19.2233 37.8378 19.386 37.5284 19.5886C36.5727 20.2144 35.0365 21.2204 33.9433 22.0802C27.6277 20.603 22.4602 16.774 19.1177 11.4609Z" fill="#9D63D3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.461 19.1216C9.29714 17.78 6.89097 16.7762 4.2891 16.1676C4.28801 16.1685 4.28692 16.1694 4.28582 16.1702C4.28554 16.1701 4.2854 16.1701 4.2854 16.1701C7.59403 13.6264 9.65324 11.7653 11.7656 9.51891C13.9626 7.18252 16.299 4.43161 19.1102 7.77627e-06C19.2152 0.152977 19.378 0.401492 19.5805 0.710836C20.2064 1.66651 21.2124 3.20275 22.0721 4.29595C20.595 10.6115 16.7741 15.779 11.461 19.1216Z" fill="#82E0FF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1294 26.7719C17.7878 28.9357 16.7766 31.3419 16.168 33.9438C16.1689 33.9449 16.1697 33.946 16.1706 33.9471C16.1705 33.9474 16.1705 33.9475 16.1705 33.9475C13.6268 30.6389 11.7657 28.5797 9.5193 26.4673C7.18291 24.2703 4.432 21.9339 0.000391914 19.1227C0.153362 19.0177 0.401878 18.8549 0.711223 18.6524C1.6669 18.0265 3.20314 17.0205 4.29633 16.1608C10.6119 17.6379 15.7868 21.4588 19.1294 26.7719Z" fill="#51AB96"/>
                        </g>
                        <g clip-path="url(#clip2_1623_77014)">
                            <path d="M54.7521 15.2116L50.041 26.8757H46.1406L52.4952 11.557H57.0091L63.3856 26.8757H59.4195L54.7521 15.2116ZM58.5868 24.3591H50.8737L51.6844 21.4704H57.7322L58.5868 24.3591Z" fill="#190628"/>
                            <path d="M65.3508 26.8757V11.557H73.3269C74.4517 11.557 75.4159 11.7102 76.2193 12.0166C77.0374 12.323 77.6582 12.7679 78.0818 13.3515C78.5201 13.9205 78.7392 14.6135 78.7392 15.4305C78.7392 16.0286 78.615 16.583 78.3667 17.0937C78.133 17.6043 77.7897 18.0347 77.3368 18.3848C76.884 18.7349 76.3581 18.983 75.7592 19.1289L75.6496 18.7787C76.789 18.9538 77.6947 19.3988 78.3667 20.1136C79.0387 20.8139 79.3747 21.682 79.3747 22.7178C79.3747 23.5786 79.1409 24.3226 78.6735 24.95C78.206 25.5627 77.5267 26.0369 76.6356 26.3724C75.7592 26.708 74.722 26.8757 73.5241 26.8757H65.3508ZM68.813 20.5075V17.7939H72.6038C73.1589 17.7939 73.6117 17.7356 73.9623 17.6189C74.3276 17.4876 74.5978 17.3052 74.7731 17.0718C74.9484 16.8238 75.036 16.5174 75.036 16.1527C75.036 15.5837 74.8388 15.1752 74.4444 14.9272C74.05 14.6645 73.4365 14.5332 72.6038 14.5332H69.054V23.8995H73.0201C73.6191 23.8995 74.1084 23.8412 74.4882 23.7245C74.8681 23.5932 75.1529 23.4035 75.3428 23.1555C75.5327 22.9075 75.6277 22.5938 75.6277 22.2145C75.6277 21.6309 75.4086 21.2005 74.9703 20.9233C74.5321 20.6461 73.8601 20.5075 72.9544 20.5075H68.813Z" fill="#190628"/>
                            <path d="M82.0016 26.8757V11.557H88.8163C90.5254 11.557 92.0228 11.8707 93.3083 12.498C94.6084 13.1254 95.6018 14.0153 96.2884 15.1679C96.9896 16.3204 97.3402 17.6626 97.3402 19.1945C97.3402 20.741 96.9896 22.0978 96.2884 23.2649C95.6018 24.4175 94.6084 25.3074 93.3083 25.9347C92.0228 26.5621 90.5254 26.8757 88.8163 26.8757H82.0016ZM88.641 23.6588C89.6343 23.6588 90.4889 23.4837 91.2047 23.1336C91.9205 22.7689 92.4683 22.2582 92.8481 21.6017C93.2426 20.9306 93.4398 20.1355 93.4398 19.2164C93.4398 18.2827 93.2426 17.4876 92.8481 16.8311C92.4683 16.1599 91.9132 15.6493 91.1828 15.2992C90.467 14.949 89.6197 14.774 88.641 14.774H85.7705V23.6588H88.641Z" fill="#190628"/>
                            <path d="M109.776 26.8685L103.436 19.479V18.7787L109.593 11.5352H114.195L107.687 19.0851L114.367 26.8685H109.776ZM100.062 26.8757L100.04 11.557H103.83V26.8757H100.062Z" fill="#190628"/>
                        </g>
                    </g>
                </svg>
            )
    }

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
                    { LOGO_SVG() }
                </Link>
                { isMobile ? BurgerMenu() : DesktopNavigation() }
            </div>
        </div>
    );

};
export default StickHeader;