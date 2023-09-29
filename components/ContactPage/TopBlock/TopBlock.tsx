'use client'
import { FC } from 'react'
import cls from './TopBlock.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import X from '@/public/x.svg';
import LinkedIn from '@/public/linkedIn.svg';
import GhLink from '@/public/ghLink.svg';
import EmailLink from '@/public/emailLink.svg';
import CopyIcon from '@/public/copyIcon.svg';

interface TopBlockProps {
}

export const TopBlockContact: FC<TopBlockProps> = ({ }) => {
    return (
        <div className={cls.TopBlock}>
            <div className={cls.TopBlockHeader}>
                <h1 className={cls.ApproachHeader}>
                    Get in
                    touch
                </h1>
                <div className={cls.Line1}></div>
                <div className={cls.Line2}></div>
                <div className={cls.Line3}></div>
                <div className={cls.Line4}></div>
                <div className={`${cls.Evaluation} ${cls.Evaluation1}`}>
                    <Image
                        src={X}
                        alt='X'
                        loading='lazy'
                    />
                    <Link href={"/"} className={cls.EvaluationText}>
                        Link
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M0.703125 10.2969L10 1M10 1H-3.72529e-08M10 1V11" strokeWidth="1.6" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.Evaluation} ${cls.Evaluation2}`}>
                    <Image
                        src={LinkedIn}
                        alt='LinkedIn'
                        loading='lazy'
                    />
                    <Link href={"/"} className={cls.EvaluationText}>
                        Link
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M0.703125 10.2969L10 1M10 1H-3.72529e-08M10 1V11" strokeWidth="1.6" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.Evaluation} ${cls.Evaluation3}`}>
                    <Image
                        src={GhLink}
                        alt='GhLink'
                        loading='lazy'
                    />
                    <Link href={"/"} className={cls.EvaluationText}>
                        Link
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M0.703125 10.2969L10 1M10 1H-3.72529e-08M10 1V11" strokeWidth="1.6" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
                <div className={`${cls.Evaluation} ${cls.Evaluation4}`}>
                    <Image
                        src={EmailLink}
                        alt='EmailLink'
                        loading='lazy'
                    />
                    <div className={cls.EvaluationFooterEmail}>
                        <div className={cls.FooterLeft}>
                        <p>Email</p>
                        <a className={cls.EvaluationFooterEmailLink} href="mailto:dmitry@abdkconsulting.com">dmitry@abdkconsulting.com</a>
                        </div>
                        <button
                        className={cls.EmailCopy}
                            onClick={() =>  navigator.clipboard.writeText('dmitry@abdkconsulting.com')}
                        >
                        <Image
                        src={CopyIcon}
                        alt='LinkedIn'
                        loading='lazy'
                    />
                        </button>
                    </div>
                </div>
            </div>
            <div className={cls.TopBlockFooter}>
                <div className={cls.TopBlockText}>
                    <Link href={'/audit'} className={cls.text}>Audit</Link>
                    <div className={cls.line}></div>
                    <Link href={'/consulting'} className={cls.text}>Consulting</Link>
                    <div className={cls.line}></div>
                    <Link href={'/research'} className={cls.text}>Research</Link>
                    <div className={cls.line}></div>
                    <Link href={'/evaluation'} className={cls.text}>Evaluation</Link>
                </div>
            </div>

        </div>
    )
}