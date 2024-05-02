import { FC } from 'react'
import cls from './Methodology.module.scss'
import Link from 'next/link'
import AuditBook from '@/public/book.svg'
// import pdf from '@/public/audit_methodology_ABDK.pdf'
import Image from 'next/image'

export const Methodology: FC<any> = ({nameRequest, stages}) => {

    function openPdf(){
        window.open('/public/audit_methodology_ABDK.pdf');
    }

    return (
        <div className={cls.Methodology}>
            
            <div className={cls.container}>
                <div className={cls.content}>
                    <Image src={AuditBook} className={cls.book} alt=''/>
                    <div className={cls.right}>
                        <div className={cls.title}>Audit</div>
                        <div className={cls.subtitle}>Methodology</div>
                        <Link href={'/audit_methodology_ABDK.pdf'} className={cls.button} target='_blank'>
                            Show Document
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                <path d="M1.58118 12.1562L12.7374 1M12.7374 1H0.737427M12.7374 1V13" stroke="white" strokeWidth="1.8" strokeLinejoin="bevel" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}