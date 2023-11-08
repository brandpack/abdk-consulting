import { FC } from 'react'
import cls from './WhyChoose.module.scss'
import Image from 'next/image';
import { ItemChoose } from './ItemChoose/ItemChoose';


interface WhyChooseInterface {
    array: any
}

interface ItemInterface {
    image: any,
    hoverImage: any,
    text: string,
}

export const WhyChoose: FC<any> = ({items}:any) => {

    return (
        <>
            <div className={cls.WhyChoose}>
                <div className={cls.container}>
                    <div className={cls.top}>
                        <h3>Why Choose <br/>ABDK</h3>
                        <div className={cls.space__full}></div>
                        <div className={cls.line__horizontal}></div>
                        <div className={cls.line__horizontal__full}></div>
                        <div className={cls.line__horizontal}></div>
                        <ItemChoose item={items[0]}/> 
                        <div className={cls.line__horizontal}></div>
                        <ItemChoose item={items[1]}/> 
                    </div>
                    <div className={cls.middle}>
                        <div className={cls.space__full}></div>
                        <div className={cls.space__line}></div>
                        <div className={cls.space__full}></div>
                        <div className={cls.space__line}></div>
                        <div className={cls.space__full}></div>
                        <div className={cls.space__line}></div>
                        <div className={cls.line__vertical}></div>
                    </div>
                    <div className={cls.bottom}>
                        <ItemChoose item={items[2]}/> 
                        <div className={cls.line__horizontal}></div>
                        <ItemChoose item={items[3]}/> 
                        <div className={cls.line__horizontal}></div>
                        <ItemChoose item={items[4]}/> 
                        <div className={cls.line__horizontal}></div>
                        <ItemChoose item={items[5]}/> 
                    </div>
                </div>
            </div>

            <div className={cls.MobileWhyChoose}>
                <div className={cls.container}>
                    <div className={cls.top}>
                        <h3>Why <span>Choose</span>ABDK</h3>
                        <div className={cls.angleLine}></div>
                    </div>
                    <div className={cls.bottom}>

                        <ItemChoose item={items[0]}/> 
                        <div className={cls.line__horizontal}></div>
                        <ItemChoose item={items[1]}/> 

                        <div className={cls.line__vertical} style={{height:'12px'}}></div>
                        <div className={cls.space__line}></div>
                        <div className={cls.space__full}></div>

                        <ItemChoose item={items[2]}/> 
                        <div className={cls.line__horizontal}></div>
                        <ItemChoose item={items[3]}/> 

                        <div className={cls.space__full}></div>
                        <div className={cls.space__line}></div>
                        <div className={cls.line__vertical} style={{height:'12px'}}></div>

                        <ItemChoose item={items[4]}/> 
                        <div className={cls.line__horizontal}></div>
                        <ItemChoose item={items[5]}/> 
                    </div>
                </div>
            </div>

        </>



    )
}