import cls from '../WhyChoose.module.scss'
import Image from 'next/image';

export const ItemChoose = ({item}:any) => {

    return (
        <div className={cls.item}>
            <Image src={item.image} className={cls.item__monochrome} alt={item.text} loading='lazy'/>
            <Image src={item.hoverImage} className={cls.item__colored} alt={item.text} loading='lazy'/>
            <p>{item.text}</p>
        </div>
    )
}