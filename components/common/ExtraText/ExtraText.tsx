'use client'
import cls from './ExtraText.module.scss'

export const ExtraText = () => {

    return (
        <div className={cls.ExtraText}>
            <div className={cls.container}>
                <h2>Third-Party Security Audit</h2>
                <div className={cls.text}>
                    <p className={cls.first}>Audit is one of many mechanisms to ensure the quality of a product. Third-party audit provides a fresh, independent view, which you can not achieve in-house. A skilled auditor checks business logic, consistency, and performance of your product using their experience in the field. At ABDK, we offer audit of the most fragile and important IT components: security-critical code (smart contracts, ZK circuits) and cryptography (schemes and protocols).</p>
                    
                    <div className={cls.item}>
                        <h4>Smart contracts</h4>
                        <p>Smart contract is a publicly accessible piece of code, which runs at a worldwide virtual machine. It is difficult to modify and can be protected by only a few defense mechanisms. A bug in a smart contract can easily lead to billion losses. At ABDK, we have been writing and securing smart contracts since the inception of Ethereum in 2015. Being our primary product, the smart contract audit has been offered to more than 100 clients over the years.</p>
                    </div>

                    <div className={cls.item}>
                        <h4>ZK circuits</h4>
                        <p>Zero-knowledge (ZK) circuit is a piece of code specially crafted to be part of verifiable computation (VC). Such computation is commonly used in applications where sensitive computation such as asset movement is carried by untrusted parties that provide a certificate of correctness (proof) of their action, typically in zero knowledge. It is envisioned that a good fraction of blockchain transactions will be put in ZK to reduce bandwidth and storage costs. Programming in ZK requires a special skill as the execution environment is uncommon and best practices are different. ABDK Consulting has had a large experience in writing and auditing ZK circuits in many languages: Circom, Rust, C++, Zokrates, which you can find in our portfolio.</p>
                    </div>

                    <div className={cls.item}>
                        <h4>Cryptography</h4>
                        <p>Cryptography is essential in modern web applications and is not restricted to blockchain. Despite its widespread use in the last 20 years in the Internet, it is still exceptionally hard to do it right. Choosing correct parameters, checking assumptions on the inputs, key management and optimizations are common but nontrivial questions. ABDK offers a full stack of cryptography R&D: from groundbreaking research and prototyping through protocol analysis to the audit of implementations. Our cryptographic audits has captured dozens of critical bugs, many of which are impossible to find by a non-cryptographer.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}