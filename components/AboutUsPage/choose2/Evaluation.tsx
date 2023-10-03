'use client'
import { FC, useState } from 'react'
import cls from './Choose.module.scss'
import Image from 'next/image';



interface ApproachProps {
    text: string;
    img: string;
    imgH: string;
    AdditionalclassName: string;
}

export const Evaluation: FC<ApproachProps> = ({text, img, imgH, AdditionalclassName }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
    return (
            <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${cls.Evaluation} ${AdditionalclassName}`}
            >
                <Image 
                src={ hovered ? imgH : img}
                alt={text}
                loading='lazy'
                />
                <p className={cls.EvaluationText}>
                    {text}
                </p>
            </div>
    )
}