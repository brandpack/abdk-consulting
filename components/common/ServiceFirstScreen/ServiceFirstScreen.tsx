import { FC } from 'react'
import cls from './ServiceFirstScreen.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface ServiceFirstScreen {
    title: string;
    text: string;
    image: any;
    color?: string;
}

export const ServiceFirstScreen: FC<ServiceFirstScreen> = ({title, text, image, color}) => {

    return (
        <div className={cls.firstSceen}>
            <Image src={image} className={cls.backgroundImage} alt={`${title} - ${text}`}/>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.line} style={{background: color}}></div>
                    <h1 className={cls.title}>{title}</h1>
                    <p className={cls.text}>{text}</p>
                </div>

                {
                    color ? <Link className={cls.button} href={'/contact'} style={{
                        backgroundColor: color + '15',
                        border: '2px solid ' + color,
                        color: color,
                    }}>
                        Request {title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                            <path d="M1.58118 12.1562L12.7374 1M12.7374 1H0.737427M12.7374 1V13" stroke={color} strokeWidth="1.8" strokeLinejoin="bevel" />
                        </svg>
                    </Link>

                    :
                    null
                }

                
            </div>
        </div>
    )
}