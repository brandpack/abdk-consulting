"use client"
import React from 'react';
import cls from './MostPopularAudit.module.scss'
import logoDesktop from '@/public/FooterDesktopLogo.svg';
import linesDesktop from '@/public/linesDesktop.png';
import linesMobile from '@/public/linesMobile.png';
import Image from 'next/image';
import Link from 'next/link';
import AuditIcon from '@/public/audit-small-icon.svg';
import FirstInchIcon from '@/public/1inch_icon.svg';
import UniswapIcon from '@/public/uniswap_icon.svg';
import AaveIcon from '@/public/aave_icon.svg';
import StarkwareIcon from '@/public/starkware_icon.svg';

export const MostPopularAudit: React.FC<any> = (props) => {
    return (
        <div className={cls.MostPopularAudit}>
            <div className={cls.Container}>
                <div className={cls.first}>
                    <h2>Most Popular Audits</h2>

                    <div className={`${cls.auditCard} ${cls.colorGreen}`}>
                        <div className={cls.info}>
                            <div className={cls.company}>
                                <div className={cls.logo}>
                                    <Image src={FirstInchIcon} alt="1inch Icon"></Image>
                                </div>
                                <div className={cls.name}>1inch</div>
                            </div>
                            <div className={`${cls.item} ${cls.marketCap}`}>
                                <span>Market cap</span>
                                <p>$340,000,000</p>
                            </div>
                        </div>

                        <div className={`${cls.item} ${cls.description}`}>
                            <span>Description</span>
                            <p>1inch is one of the largest DeFi projects boasting a limit order functionality. It enables users to place a limit order and exchange any token that supports permits for ETH, even with a zero ETH balance.</p>
                        </div>

                        <div className={cls.auditInfo}>
                            <div className={cls.info}>
                                <div className={cls.item}>
                                    <span>Platform</span>
                                    <p>Ethereum L1</p>
                                </div>
                                <div className={cls.item}>
                                    <span>Language</span>
                                    <p>Solidity</p>
                                </div>
                            </div>

                            <Link href={'/'} className={cls.audit}>
                                <div className={`${cls.item} ${cls.auditDate}`}>
                                    <span>Last Audit</span>
                                    <p>February 2023</p>
                                </div>
                                <div className={cls.button}>
                                    <div className={cls.icon}/>
                                    <p>View audit</p>
                                </div>
                            </Link>
                        </div>



                    </div>

                    <div className={`${cls.auditCard} ${cls.colorBlue} ${cls.tablet}`}>
                            <div className={cls.info}>
                                <div className={cls.company}>
                                    <div className={cls.logo}>
                                        <Image src={StarkwareIcon} alt="Starkware Icon"></Image>
                                    </div>
                                    <div className={cls.name}>Starkware</div>
                                </div>
                                <div className={`${cls.item} ${cls.marketCap}`}>
                                    <span>Market cap</span>
                                    <p>$735,000,000</p>
                                </div>
                            </div>

                            <div className={`${cls.item} ${cls.description}`}>
                                <span>Description</span>
                                <p>Cairo Language Library provides support for the Cairo programming language. Cairo is the first Turing-complete language for creating provable programs for general computation.</p>
                            </div>

                            <div className={`${cls.auditInfo} ${cls.Last}`}>
                                <Link href={'/'} className={cls.audit}>
                                    <div className={`${cls.item} ${cls.auditDate} ${cls.noLink}`}>
                                        <span>Last Audit</span>
                                        <p>February 2023</p>
                                    </div>
                                </Link>
                                <div className={cls.info}>
                                    <div className={cls.item}>
                                        <span>Platform</span>
                                        <p>Ethereum L1</p>
                                    </div>
                                    <div className={cls.item}>
                                        <span>Language</span>
                                        <p>Cairo</p>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>

                <div className={cls.second}>
                    <h2>Most Popular Audits</h2>
                    <div className={cls.top}>
                        <div className={`${cls.auditCard} ${cls.colorPink}`}>
                            <div className={cls.info}>
                                <div className={cls.company}>
                                    <div className={cls.logo}>
                                        <Image src={UniswapIcon} alt="Uniswap Icon"></Image>
                                    </div>
                                    <div className={cls.name}>Uniswap</div>
                                </div>
                                <div className={`${cls.item} ${cls.marketCap}`}>
                                    <span>Market cap</span>
                                    <p>$4,440,000,000</p>
                                </div>
                            </div>

                            <div className={`${cls.item} ${cls.description}`}>
                                <span>Description</span>
                                <p>Uniswap v4 is an automated market maker (AMM) facilitating efficient exchange of value on the Ethereum Virtual Machine (EVM). As with previous versions of the Uniswap Protocol, it is noncustodial, non-upgradable, and permissionless. The focus of Uniswap v4 is on additional customization for developers and architectural changes for gas efficiency improvements, building on the AMM model built by Uniswap v1 and v2 and the concentrated liquidity model introduced in Uniswap v3.</p>
                            </div>

                            <div className={cls.auditInfo}>
                                <div className={cls.info}>
                                    <div className={cls.item}>
                                        <span>Platform</span>
                                        <p>Ethereum L1</p>
                                    </div>
                                    <div className={cls.item}>
                                        <span>Language</span>
                                        <p>Solidity</p>
                                    </div>
                                </div>

                                <Link href={'/'} className={cls.audit}>
                                    <div className={`${cls.item} ${cls.auditDate}`}>
                                        <span>Last Audit</span>
                                        <p>March 2021</p>
                                    </div>
                                    <div className={cls.button}>
                                        <div className={cls.icon}/>
                                        <p>View audit</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className={`${cls.auditCard} ${cls.colorPurple}`}>
                            <div className={cls.info}>
                                <div className={cls.company}>
                                    <div className={cls.logo}>
                                        <Image src={AaveIcon} alt="Aave Icon"></Image>
                                    </div>
                                    <div className={cls.name}>Aave</div>
                                </div>
                                <div className={`${cls.item} ${cls.marketCap}`}>
                                    <span>Market cap</span>
                                    <p>$2,323,200,000</p>
                                </div>
                            </div>

                            <div className={`${cls.item} ${cls.description}`}>
                                <span>Description</span>
                                <p>The Aave V3 design is born from thoughtful analysis of the evolution of the protocol and its ecosystems. The V3 enhanced features allow for new use cases that will spur a wave of innovation from users and developers. Aave V3 makes 4 improvements in all the aforementioned categories – capital efficiency, security, decentralization, UX – while simultaneously providing new functionalities to leverage the capabilities of rollups and the growing ecosystem of competing L1s.</p>
                            </div>

                            <div className={cls.auditInfo}>
                                <div className={cls.info}>
                                    <div className={cls.item}>
                                        <span>Platform</span>
                                        <p>Ethereum L1</p>
                                    </div>
                                    <div className={cls.item}>
                                        <span>Language</span>
                                        <p>Solidity</p>
                                    </div>
                                </div>

                                <Link href={'/'} className={cls.audit}>
                                    <div className={`${cls.item} ${cls.auditDate}`}>
                                        <span>Last Audit</span>
                                        <p>January 2022</p>
                                    </div>
                                    <div className={cls.button}>
                                        <div className={cls.icon}/>
                                        <p>View audit</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className={cls.bottom}>
                        <div className={`${cls.auditCard} ${cls.colorBlue}`}>
                            <div className={cls.info}>
                                <div className={cls.company}>
                                    <div className={cls.logo}>
                                        <Image src={StarkwareIcon} alt="Starkware Icon"></Image>
                                    </div>
                                    <div className={cls.name}>Starkware</div>
                                </div>
                                <div className={`${cls.item} ${cls.marketCap}`}>
                                    <span>Market cap</span>
                                    <p>$735,000,000</p>
                                </div>
                            </div>

                            <div className={`${cls.item} ${cls.description}`}>
                                <span>Description</span>
                                <p>Cairo Language Library provides support for the Cairo programming language. Cairo is the first Turing-complete language for creating provable programs for general computation.</p>
                            </div>

                            <div className={`${cls.auditInfo} ${cls.Last}`}>
                                <Link href={'/'} className={cls.audit}>
                                    <div className={`${cls.item} ${cls.auditDate} ${cls.noLink}`}>
                                        <span>Last Audit</span>
                                        <p>February 2023</p>
                                    </div>
                                </Link>
                                <div className={cls.info}>
                                    <div className={cls.item}>
                                        <span>Platform</span>
                                        <p>Ethereum L1</p>
                                    </div>
                                    <div className={cls.item}>
                                        <span>Language</span>
                                        <p>Cairo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

};