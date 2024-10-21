import cls from './CheckOut.module.scss'
import github from '@/public/github.svg';
import githubPage from '@/public/github.webp';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

export const CheckOut = ({ }) => {
    return (
        <div className={cls.checkout}>
            <div className={cls.container}>
                <div className={cls.test}> <figure className={cls.Portfolio}>
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
                            <h2>Our audit portfolio</h2>
                            <p>Check out our audit portfolio on github.</p>
                            <Link className={cls.PortfolioButton} href={'https://github.com/abdk-consulting/audits'} target="_blank" >Check Out</Link>
                        </motion.div>
                    </figure>
                    <motion.div
                        className={cls.GhPage}
                        initial={{transform: 'rotate3d(1, 0, 0, 45deg)'}}
                        whileInView={{transform: 'rotate3d(1, 0, 0, 30deg)'}}
                        transition={{ ease: [0.17, 0.67, 0.83, 1], duration: 0.5,}}
                    >
                        <Image 
                            src={githubPage}
                            alt='GhPage'
                            loading='lazy'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}