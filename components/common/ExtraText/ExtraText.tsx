'use client'
import Link from 'next/link'
import cls from './ExtraText.module.scss'

export const ExtraText = () => {

    return (
        <div className={cls.ExtraText}>
            <div className={cls.container}>
                <h2>Third-Party Security Audit</h2>
                <div className={cls.text}>
                    <p className={cls.first}>
                        Audit is one of many mechanisms to ensure the quality of a product. A third-party audit provides a fresh, independent perspective that cannot be achieved in-house. A skilled auditor examines the business logic, consistency, and performance of your product, leveraging their experience in the field. At ABDK, we offer audits for the most critical and fragile IT components: security-critical code (smart contracts, ZK circuits) and cryptography (schemes and protocols).
                    </p>
                    
                    <div className={cls.item}>
                        <h4>Smart Contract Audits</h4>
                        <p>
                            A smart contract is a publicly accessible piece of code that runs on a blockchain (global virtual machine). It is difficult to modify and can only be protected by a few defense mechanisms. A bug in a smart contract can easily lead to losses in the billions of dollars. At ABDK, we have been <Link href={'https://github.com/abdk-consulting/abdk-libraries-solidity'} target="_blank">writing</Link> and securing smart contracts since Ethereum's inception in 2015. The smart contract audits, our primary product, has been provided to  <Link href={'https://github.com/abdk-consulting/audits'} target="_blank">more than 100 clients</Link> over the years.
                        </p>
                    </div>
                    <Link href={'https://github.com/abdk-consulting/abdk-libraries-solidity'} target="_blank"></Link>

                    <div className={cls.item}>
                        <h4>ZK Circuit Development and Audits</h4>
                        <p>
                            A zero-knowledge (ZK) circuit is a piece of code specifically designed to be part of <Link href={'https://en.wikipedia.org/wiki/Verifiable_computing#Verifiable_computation'} target="_blank">verifiable computation (VC)</Link>. Such computation is commonly used in applications where sensitive processes, such as asset transfers, are carried out by untrusted parties that provide a certificate of correctness (proof) of their actions, typically in <Link href={'https://en.wikipedia.org/wiki/Zero-knowledge_proof'} target="_blank">zero knowledge</Link>. It is anticipated that a significant portion of blockchain transactions will be processed through ZK circuits to reduce bandwidth and storage costs. Programming in ZK requires specialized skills, as the execution environment is uncommon and best practices differ. ABDK Consulting has extensive experience in <Link href={'https://github.com/abdk-consulting/abdk-libraries-circom'} target="_blank">writing</Link> and <Link href={'https://github.com/abdk-consulting/abdk-libraries-circom'} target="_blank">auditing</Link> ZK circuits in various languages, including Circom, Rust, C++, and Zokrates, which are showcased in our <Link href={'https://github.com/abdk-consulting/audits'} target="_blank">portfolio</Link>.
                        </p>
                    </div>

                    <div className={cls.item}>
                        <h4>Cryptography  Audits and Consulting</h4>
                        <p>
                            Cryptography is essential in modern web applications and extends beyond blockchain. Despite its widespread use on the Internet over the past 20 years, it remains exceptionally difficult to implement correctly. Choosing the right parameters, verifying assumptions on inputs, key management, and optimizations are common but complex challenges. ABDK offers a full suite of cryptography services, from groundbreaking <Link href={'https://tosc.iacr.org/index.php/ToSC/article/view/11810'} target="_blank">research</Link>, development and prototyping to protocol <Link href={'https://github.com/abdk-consulting/audits/blob/main/tornado/Tornado_cryptographic_review.pdf'} target="_blank">analysis</Link> and implementation audits. Our cryptographic audits have uncovered dozens of <Link href={'https://github.com/abdk-consulting/audits/blob/main/nil_foundation/ABDK_NilFoundation_BlockchainVerifier_v_2_0.pdf'} target="_blank">critical bugs</Link>, many of which are nearly impossible to detect without specialized cryptographic knowledge.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}