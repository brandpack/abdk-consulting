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
import ClientsMark from '@/public/clientsMark.svg';
import Image from 'next/image';

interface ClientsProps {
}

export const Clients: FC<ClientsProps> = ({ }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Check if window is defined (i.e., we are in a browser environment)
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 700);
      }
    }, []);
    if (isMobile) {
        return (
            <div className={cls.Clients}>
                <div className={cls.ClientsText}>
                    <h1>Clients</h1>
                    <p>
                        Suspendisse sodales turpis non magna
                        pharetra facilisis. Duis rutrum a nibh id tempor.
                        Integer cursu.
                    </p>
                </div>
                <div className={cls.clientsImages1}>
                <div className={cls.Company}>
                    <Image
                        src={maverick}
                        alt={'maverick'}
                        loading="lazy"
                    />
                    </div>
                </div>

                <div className={cls.clientsImages2}>
                    <div className={cls.Company}>
                    <Image
                        src={starkware}
                        alt={'starkware'}
                        loading="lazy"
                    />
                    </div>
                    <div className={cls.Company}>
                    <Image
                        src={uniswap}
                        alt={'uniswap'}
                        loading="lazy"
                    />
                    </div>
                    <div className={cls.Company}>
                    <Image
                        src={starknet}
                        alt={'starknet'}
                        loading="lazy"
                    />
                    </div>
    
                
                </div>
                <div className={cls.clientsImages3}>
                <div className={cls.Company}>
                    <Image
                        src={zklink}
                        alt={'zklink'}
                        loading="lazy"
                    />
                    </div>
                    <div className={cls.Company}>
                    <Image
                        src={yieldProtocol}
                        alt={'yieldProtocol'}
                        loading="lazy"
                    />
                    </div>
                    <div className={cls.Company}>
                    <Image
                        src={notional}
                        alt={'notional'}
                        loading="lazy"
                    />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={cls.Clients}>
                    <Image
                        className={cls.clientsBgImage}
                        src={ClientsMark}
                        alt={'ClientsMark'}
                        loading="lazy"
                    />
                <div className={cls.ClientsText}>
                    <h1>Clients</h1>
                    <p>
                        Suspendisse sodales turpis non magna
                        pharetra facilisis. Duis rutrum a nibh id tempor.
                        Integer cursu.
                    </p>
                </div>
                <div className={cls.clientsImages}>
                    <div className={cls.Company}>
                    <Image
                        src={starkware}
                        alt={'starkware'}
                        loading="lazy"
                    />
                    </div>
                    <div className={cls.Company}>
                    <Image
                        src={uniswap}
                        alt={'uniswap'}
                        loading="lazy"
                    />
                    </div>
                    <div className={cls.Company}>
                    <Image
                        src={starknet}
                        alt={'starknet'}
                        loading="lazy"
                    />
                    </div>
    
                
                </div>
                <div className={cls.clientsImages2}>
                <div className={cls.Company}>
                    <Image
                        src={zklink}
                        alt={'zklink'}
                        loading="lazy"
                    />
                    </div>
                    <div className={cls.Company}>
                    <Image
                        src={yieldProtocol}
                        alt={'yieldProtocol'}
                        loading="lazy"
                    />
                    </div>
                    <div className={cls.Company}>
                    <Image
                        src={notional}
                        alt={'notional'}
                        loading="lazy"
                    />
                    </div>
                    <div className={cls.Company}>
                    <Image
                        src={maverick}
                        alt={'maverick'}
                        loading="lazy"
                    />
                    </div>
                </div>
            </div>
        )
    }

}