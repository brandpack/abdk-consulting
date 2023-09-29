import { FC } from 'react'
import cls from './CheckOut.module.scss'
import github from '@/public/github.svg';
import githubPage from '@/public/github.webp';
import Image from 'next/image';
import Link from 'next/link';

interface CheckOutProps {
}

export const CheckOut: FC<CheckOutProps> = ({ }) => {
    return (
        <div className={cls.CheckOut}>
            <div className={cls.Portfolio}>
                <Image 
                    src={github}
                    alt='github'
                    loading='lazy'
                />
                <div className={cls.PortfolioText}>
                    <h1>Our audit portfolio</h1>
                    <p>Check out our audit portfolio on github.</p>
                    <Link className={cls.PortfolioButton} href={'https://github.com/abdk-consulting'} target="_blank" >Check Out</Link>
                </div>
            </div>
            <Image 
            className={cls.GhPage}
            src={githubPage}
            alt='GhPage'
            loading='lazy'
            />
        </div>
    )
}