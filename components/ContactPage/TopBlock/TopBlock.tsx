'use client'
import { FC, useState } from 'react'
import cls from './TopBlock.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import X from '@/public/xMini.svg';
import Telegram from '@/public/telegram.svg';
import LinkedIn from '@/public/linkedInMini.svg';
import GhLink from '@/public/GithubMini.svg';
import EmailLink from '@/public/emailLink.svg';
import { sendEmail } from '../sendEmail'

interface TopBlockProps {
}

export const TopBlockContact: FC<TopBlockProps> = ({ }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);  
    const [isError, setIsError] = useState(false);         

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
            await sendEmail(formData);
            setIsSubmitted(true);
            setIsError(false);     
        } catch (error) {
            setIsError(true); 
        }
    };

    return (
        <div className={cls.TopBlock}>

            <div className={cls.Form}>
                <div className={cls.titles}>
                    <h3>Get in touch</h3>
                    <h1>Tell us about your project</h1>
                    <p>We are here to offer our expertise as you build towards your vision. Email us on <b>info@abdkconsulting.com</b> or fill in the form.</p>
                </div>
                <div className={cls.content_form}>
                    <form onSubmit={handleSubmit}>
                        <div className={cls.line}>
                            <div className={cls.Input}>
                                <span>Name</span>
                                <input type="text" name="name" placeholder="Your name" required />
                            </div>

                            <div className={cls.Input}>
                                <span>Telegram Handle</span>
                                <input type="text" name="telegram" placeholder="@username" />
                            </div>
                        </div>

                        <div className={cls.Input}>
                            <span>Email</span>
                            <input type="email" name="email" placeholder="Your email" required />
                        </div>

                        <div className={cls.TextArea}>
                            <span>How may we help you?</span>
                            <textarea name="message" rows={4} required placeholder="Project details (description, links to documentation, smart contract source code, etc.)" />
                        </div>
                        
                        <button type="submit">Send Request</button>
                    </form>
                    {isSubmitted && !isError && (
                        <p className={cls.successMessage}>Your message has been sent successfully!</p>
                    )}

                    {isError && (
                        <p className={cls.errorMessage}>An error occurred while sending the message. Please try again.</p>
                    )}
                </div>
            </div>

            <div className={cls.container}>

                <div className={cls.left}>
                    <Image
                        src={EmailLink}
                        alt='EmailLink'
                        loading='lazy'
                    />
                    <div className={cls.EvaluationFooterEmail}>
                        <p>Email</p>
                        <div className={cls.FooterBtn}>
                            <a className={cls.EvaluationFooterEmailLink} href="mailto:info@abdkconsulting.com">info@abdkconsulting.com</a>
                            <button className={cls.EmailCopy} onClick={() => navigator.clipboard.writeText('info@abdkconsulting.com')}>Copy</button>
                        </div>
                        <p className={cls.emailText}>
                            We combine experience from science and industry and are able to solve problems that are too tough for our competitors.
                        </p>
                    </div>
                </div>

                <div className={cls.right}>

                    <div className={`${cls.Evaluation} ${cls.Evaluation0}`}>
                        <Image
                            src={Telegram}
                            alt='Telegram'
                            loading='lazy'
                        />
                        <span>Telegram</span>
                        <Link href={"https://t.me/khovratovich"} className={cls.EvaluationText} target="_blank">
                            <p>Contact us</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M0.703125 10.2969L10 1M10 1H-3.72529e-08M10 1V11" strokeWidth="1.6" strokeLinejoin="bevel" />
                            </svg>
                        </Link>
                    </div>

                    <div className={`${cls.EvaluationBottom}`}>

                        <Link href={'https://github.com/abdk-consulting'} className={cls.EvaluationLink} target="_blank" >
                            <Image className={`${cls.GitHub}`}
                                src={GhLink}
                                alt='GhLink'
                                loading='lazy'
                            />
                        </Link>

                        <Link href={"https://x.com/ABDKconsulting"} className={cls.EvaluationLink} target="_blank">
                            <Image className={`${cls.Twitter}`}
                                src={X}
                                alt='X'
                                loading='lazy'
                            />
                        </Link>

                        <Link href={"https://www.linkedin.com/company/abdk-consulting/"} className={cls.EvaluationLink} target="_blank">
                            <Image className={`${cls.LinkedIn}`}
                                src={LinkedIn}
                                alt='LinkedIn'
                                loading='lazy'
                            />
                        </Link>
                    </div>

                </div>    
            </div>
        </div>
    )
}