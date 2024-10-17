'use client'
import { FC } from 'react';
import cls from './NotFoundBlock.module.scss';
import Link from 'next/link';

export const NotFoundBlock: FC = () => {
    return (
        <div className={cls.NotFoundBlock}>
            <div className={cls.container}>
                <h3>404</h3>
                <div className={cls.content}>
                    <h1>You&apos;ve found a page<br/> that doesn&apos;t exist</h1>
                    <p>Uh oh, we can&apos;t seem to find the page you&apos;re looking for.<br/>Try going back to the home page.</p>
                </div>
                
                <div className={cls.btnContainer}>
                    <Link
                        className={cls.Button}
                        href={'/'}
                    >
                        Back Home
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M0.84375 12.1562L12 1M12 1H-4.47035e-08M12 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
};