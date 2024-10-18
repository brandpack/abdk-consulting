'use client'
import { FC, useEffect, useState } from 'react'
import cls from './Clients.module.scss'
import starkware from '@/public/starkware.svg';
import uniswap from '@/public/uniswap.svg';
import starknet from '@/public/starknet.svg';
import zklink from '@/public/zk-link.svg';
import yieldProtocol from '@/public/YieldProtocol.svg';
import notional from '@/public/notional.svg';
import maverick from '@/public/maverick.svg';
import oneInch from '@/public/1inch.svg';
import aave from '@/public/aave.svg';
import masterLabs from '@/public/masterLabs.svg';
import scroll from '@/public/scroll.svg';
import ClientsMark from '@/public/clientsMark.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface ClientsProps {
}

export const Clients: FC<ClientsProps> = ({ }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Check if window is defined (i.e., we are in a browser environment)
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 720);
        }
    }, []);

    return (
        <div className={cls.Clients}>
            <div className={cls.container}>
                <h2>Our Clients</h2>
            </div>
            <Marquee className={cls.clientsImages}>
                <Image
                    className={cls.logo}
                    src={starkware}
                    alt={'starkware'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={uniswap}
                    alt={'uniswap'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={starknet}
                    alt={'starknet'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={zklink}
                    alt={'zklink'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={yieldProtocol}
                    alt={'yieldProtocol'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={notional}
                    alt={'notional'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={maverick}
                    alt={'maverick'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={oneInch}
                    alt={'oneInch'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={aave}
                    alt={'aave'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={masterLabs}
                    alt={'masterLabs'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
                <Image
                    className={cls.logo}
                    src={scroll}
                    alt={'scroll'}
                    loading={isMobile? 'eager' : 'lazy'}
                />
            </Marquee>
        </div>
    )


}