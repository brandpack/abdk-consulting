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
import oneInch from '@/public/oneInch.svg';
import aave from '@/public/aave.svg';
import masterLabs from '@/public/masterLabs.svg';
import scroll from '@/public/scroll.svg';
import ClientsMark from '@/public/clientsMark.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface ClientsProps {
}

export const Clients: FC<ClientsProps> = ({ }) => {

    

    return (
        <div className={cls.Clients}>
            <div className={cls.ClientsText}>
                <h1>our Clients</h1>
            </div>
            <Marquee className={cls.clientsImages}>
                <Image
                        src={starkware}
                        alt={'starkware'}
                        loading="lazy"
                    />
                     <Image
                        src={uniswap}
                        alt={'uniswap'}
                        loading="lazy"
                    />
                
                <Image
                        src={starknet}
                        alt={'starknet'}
                        loading="lazy"
                    />
                

                    <Image
                        src={zklink}
                        alt={'zklink'}
                        loading="lazy"
                    />


                    <Image
                        src={yieldProtocol}
                        alt={'yieldProtocol'}
                        loading="lazy"
                    />

                    <Image
                        src={notional}
                        alt={'notional'}
                        loading="lazy"
                    />
                
                
                    <Image
                        src={maverick}
                        alt={'maverick'}
                        loading="lazy"
                    />
                
                
                    <Image
                        src={oneInch}
                        alt={'oneInch'}
                        loading="lazy"
                    />
                
                
                    <Image
                        src={aave}
                        alt={'aave'}
                        loading="lazy"
                    />
                
                
                    <Image
                        src={masterLabs}
                        alt={'masterLabs'}
                        loading="lazy"
                    />
                
                
                    <Image
                        src={scroll}
                        alt={'scroll'}
                        loading="lazy"
                    />
                
            </Marquee>
        </div>
    )


}