'use client'
import { motion, useScroll } from "framer-motion"
import { FC, useRef, useState } from 'react'
import cls from './Services.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Audit from '@/public/audit-small.webp';
import Consulting from '@/public/consulting-small.webp';
import Evaluation from '@/public/evaluation-small.webp';
import Research from '@/public/research-small.webp';

interface ServicesProps {
}

export const Services: FC<ServicesProps> = ({ }) => {

    return (
        <div className={cls.Services}>
            <div className={cls.Service}>
                <div className={cls.ServiceTextHeader}>
                    <h1>Audit</h1>
                    <div className={cls.blueLine}>
                    </div>
                </div>
                <div className={cls.ServiceTextFooter}>
                    <p>
                        Audit of smart contracts, zero
                        knowledge circuits, cryptographic
                        schemes, and protocols.
                    </p>
                    <Link
                        className={cls.ServiceButton}
                        href={'audit'}
                    >
                        View More
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M0.84375 12.1562L12 1M12 1H-4.47035e-08M12 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.zoomHover}`}>
                    <figure className={cls.imgFigure}>
                        <motion.div
                        initial={{scale: 1.08}}
                        whileInView={{scale: 1}}
                        transition={{ ease: "easeIn", duration: 0.8,}}
                        className={`${cls.imgBigScreen1}`}
                        />
                    </figure>
                </div>
            </div>
            <div className={cls.Service}>
                <div className={cls.ServiceTextHeader}>
                    <h1>Research</h1>
                    <div className={cls.greenLine}>
                    </div>
                </div>
                <div className={cls.ServiceTextFooter}>
                    <p>
                        Advise on making best
                        architectural and security
                        decisions.
                    </p>
                    <Link
                        className={cls.ServiceButton}
                        href={'research'}
                    >
                        View More
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M0.84375 12.1562L12 1M12 1H-4.47035e-08M12 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.zoomHover}`}>
                    <figure className={cls.imgFigure}>
                        <motion.div
                        initial={{scale: 1.08}}
                        whileInView={{scale: 1}}
                        transition={{ ease: "easeIn", duration: 0.8,}}
                        className={`${cls.imgBigScreen2}`}
                        />
                    </figure>
                </div>
            </div>
            <div className={cls.Service}>
                <div className={cls.ServiceTextHeader}>
                    <h1>Consulting</h1>
                    <div className={cls.cyanLine}>
                    </div>
                </div>
                <div className={cls.ServiceTextFooter}>
                    <p>
                        Design optimal and secure
                        schemes in crypto.
                    </p>
                    <Link
                        className={cls.ServiceButton}
                        href={'consulting'}
                    >
                        View More
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M0.84375 12.1562L12 1M12 1H-4.47035e-08M12 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.zoomHover}`}>
                    <figure className={cls.imgFigure}>
                        <motion.div
                        initial={{scale: 1.08}}
                        whileInView={{scale: 1}}
                        transition={{ ease: "easeIn", duration: 0.8,}}
                        className={`${cls.imgBigScreen3}`}
                        />
                    </figure>
                </div>
            </div>
            <div className={cls.Service}>
                <div className={cls.ServiceTextHeader}>
                    <h1>Evaluation</h1>
                    <div className={cls.purpleLine}>
                    </div>
                </div>
                <div className={cls.ServiceTextFooter}>
                    <p>
                        Review existing approaches from
                        security and performance
                        perspective.
                    </p>
                    <Link
                        className={cls.ServiceButton}
                        href={'evaluation'}
                    >
                        View More
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M0.84375 12.1562L12 1M12 1H-4.47035e-08M12 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.zoomHover}`}>
                    <figure className={cls.imgFigure}>
                        <motion.div
                        initial={{scale: 1.1}}
                        whileInView={{scale: 1}}
                        transition={{ ease: "easeIn", duration: 0.8,}}
                        className={`${cls.imgBigScreen4}`}
                        />
                    </figure>
                </div>
            </div>
        </div>
    )
}