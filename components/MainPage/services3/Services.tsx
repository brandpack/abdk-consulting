'use client'
import { motion } from "framer-motion"
import { FC, useEffect, useState } from 'react'
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
            <div className={cls.Container}>
                <div className={cls.Service}>
                    <div className={cls.Header}>
                        <h2>Audit</h2>
                        <div className={`${cls.Line} ${cls.blueLine}`}/>
                    </div>
                    <div className={cls.Footer}>
                        <p>
                            Audit of smart contracts, zero knowledge circuits, <br/>
                            cryptographic schemes, and protocols.
                        </p>
                        <div className={cls.btnContainer}>
                            <Link
                                className={cls.Button}
                                href={'audit'}
                            >
                                View More
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M0.84375 12.1562L12 1M12 1H-4.47035e-08M12 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                                </svg>
                            </Link>
                            <div></div>
                        </div>
                    </div>
                    <div className={`${cls.zoomHover}`}>
                        <figure className={cls.imgFigure}>
                            <motion.div
                            initial={{scale: 1.08}}
                            whileInView={{scale: 1}}
                            transition={{ ease: "linear", duration: 2.4,}}
                            className={`${cls.imgBigScreen} ${cls.imgBigScreen1}`}
                            />
                        </figure>
                    </div>
                </div>

                <div className={cls.Service}>
                    <div className={cls.Header}>
                        <h2>Research</h2>
                        <div className={`${cls.Line} ${cls.greenLine}`}/>
                    </div>
                    <div className={cls.Footer}>
                        <p>
                            Advise on making best
                            architectural<br/> and security
                            decisions.
                        </p>
                        <div className={cls.btnContainer}>
                            <Link
                                className={cls.Button}
                                href={'research'}
                            >
                                View More
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M0.84375 12.1562L12 1M12 1H-4.47035e-08M12 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                                </svg>
                            </Link>
                            <div></div>
                        </div>
                    </div>
                    <div className={`${cls.zoomHover}`}>
                        <figure className={cls.imgFigure}>
                            <motion.div
                            initial={{scale: 1.08}}
                            whileInView={{scale: 1}}
                            transition={{ ease: "linear", duration: 2.4,}}
                            className={`${cls.imgBigScreen} ${cls.imgBigScreen2}`}
                            />
                        </figure>
                    </div>
                </div>
                <div className={cls.Service}>
                    <div className={cls.Header}>
                        <h2>Consulting</h2>
                        <div className={`${cls.Line} ${cls.cyanLine}`}/>
                    </div>
                    <div className={cls.Footer}>
                        <p>
                            Design optimal and secure <br/>
                            schemes in crypto.
                        </p>
                        <div className={cls.btnContainer}>
                            <Link
                                className={cls.Button}
                                href={'consulting'}
                            >
                                View More
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M0.84375 12.1562L12 1M12 1H-4.47035e-08M12 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                                </svg>
                            </Link>
                            <div></div>
                        </div>
                    </div>
                    <div className={`${cls.zoomHover}`}>
                        <figure className={cls.imgFigure}>
                            <motion.div
                            initial={{scale: 1.08}}
                            whileInView={{scale: 1}}
                            transition={{ ease: "linear", duration: 2.4,}}
                            className={`${cls.imgBigScreen} ${cls.imgBigScreen3}`}
                            />
                        </figure>
                    </div>
                </div>
                <div className={cls.Service}>
                    <div className={cls.Header}>
                        <h2>Evaluation</h2>
                        <div className={`${cls.Line} ${cls.purpleLine}`}/>
                    </div>
                    <div className={cls.Footer}>
                        <p>
                            Review existing approaches from <br/>
                            security and performance
                            perspective.
                        </p>
                        <div className={cls.btnContainer}>
                            <Link
                                className={cls.Button}
                                href={'evaluation'}
                            >
                                View More
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M0.84375 12.1562L12 1M12 1H-4.47035e-08M12 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                                </svg>
                            </Link>
                            <div></div>
                        </div>
                    </div>
                    <div className={`${cls.zoomHover}`}>
                        <figure className={cls.imgFigure}>
                            <motion.div
                            initial={{scale: 1.08}}
                            whileInView={{scale: 1}}
                            transition={{ ease: "linear", duration: 2.4,}}
                            className={`${cls.imgBigScreen} ${cls.imgBigScreen4}`}
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}