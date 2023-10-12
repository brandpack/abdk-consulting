'use client'
import { FC, useEffect, useState } from 'react'
import cls from './CheckOut.module.scss'
import github from '@/public/github.svg';
import githubPage from '@/public/github.webp';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";


interface CheckOutProps {
}

export const CheckOut: FC<CheckOutProps> = ({ }) => {
    return (
        <div className={cls.CheckOut}>
            <div className={cls.test}>
                <figure className={cls.Portfolio}>
                    <Image 
                        src={github}
                        alt='github'
                        loading='lazy'
                    />
                    <motion.div
                    initial={{opacity: 0.7, marginTop: 35, scale: .97}}
                    whileInView={{opacity: 1, marginTop: 0, scale: 1}}
                    transition={{ ease: [0.17, 0.67, 0.83, 1], duration: 1,}}
                    className={`${cls.PortfolioText}`}
                    >
                        <h1>Our audit portfolio</h1>
                        <p>Check out our audit portfolio on github.</p>
                        <Link className={cls.PortfolioButton} href={'https://github.com/abdk-consulting'} target="_blank" >Check Out</Link>
                    </motion.div>
                </figure>
                <Image 
                className={cls.GhPage}
                src={githubPage}
                alt='GhPage'
                loading='lazy'
                />
            </div>
        </div>
    )
}