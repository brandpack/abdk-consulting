import { FC } from 'react'
import cls from './WhyChoose.module.scss'
import { ItemChoose } from './ItemChoose/ItemChoose';

interface WhyChooseInterface {
    array: any
}

interface ItemInterface {
    image: any,
    hoverImage: any,
    text: string,
}

export const WhyChoose: FC<any> = ({items,title}) => {

    const itemsLength = Object.keys(items).length;

    const chooseTitleDesktop = (
        <h3>Why Choose <br/>ABDK</h3>
    );

    const chooseTitleMobile = (
        <h3>Why <span>Choose</span>ABDK</h3>
    );

    const customTitle = (
        <h3 className={cls.custom}>{title}</h3>
    );


    const showDesktopTitle:any = () => {
        return title ? customTitle : chooseTitleDesktop
    }

    const showMobileTitle:any = () => {
        return title ? customTitle : chooseTitleMobile
    }


    if (itemsLength == 6) {
        return (
            <>
                <div className={cls.WhyChoose}>
                    <div className={cls.container}>
                        <div className={cls.top}>
                            { showDesktopTitle() }
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
                            { showMobileTitle() }
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

    if (itemsLength == 5) {

        return (
            <>
                <div className={cls.WhyChoose}>
                    <div className={cls.container}>
                        <div className={cls.top}>
                            { showDesktopTitle() }
                            <div className={cls.space__full}></div>
                            <div className={cls.line__horizontal}></div>
                            <div className={cls.line__horizontal__full}></div>
                            <div className={cls.line__horizontal}></div>
                            <div className={cls.line__horizontal__full}></div>
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[0]}/> 
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
                            <ItemChoose item={items[1]}/> 
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[2]}/> 
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[3]}/> 
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[4]}/> 
                        </div>
                    </div>
                </div>
    
                <div className={cls.MobileWhyChoose}>
                    <div className={cls.container}>
                        <div className={cls.top}>
                            { showMobileTitle() }
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

                            <div className={cls.space__full}></div>
                            <div className={cls.space__full}></div>
                            <ItemChoose item={items[4]}/>
                        </div>
                    </div>
                </div>
    
            </>
    
        )
    }


    if (itemsLength == 4) {

        return (
            <>
                <div className={cls.WhyChoose}>
                    <div className={cls.container}>
                        <div className={`${cls.top} ${cls.top__four}`}>
                            { showDesktopTitle() }
                            <div className={cls.angleLine}></div>
                        </div>
                        <div className={`${cls.bottom} ${cls.bottom__four}`}>
                            <ItemChoose item={items[0]}/> 
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[1]}/> 
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[2]}/> 
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[3]}/> 
                        </div>
                    </div>
                </div>
    
                <div className={cls.MobileWhyChoose}>
                    <div className={cls.container}>
                        <div className={cls.top}>
                            { showMobileTitle() }
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
                        </div>
                    </div>
                </div>
    
            </>
    
        )
    }

    if (itemsLength == 3) {

        return (
            <>
                <div className={cls.WhyChoose}>
                    <div className={cls.container}>
                        <div className={`${cls.top} ${cls.top__four}`}>
                            { showDesktopTitle() }
                            <div className={cls.angleLine}></div>
                        </div>
                        <div className={`${cls.bottom} ${cls.bottom__four}`}>
                            <div className={cls.space__full}></div>
                            <div className={cls.line__horizontal} style={{opacity: 0}}></div>
                            <ItemChoose item={items[0]}/> 
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[1]}/> 
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[2]}/>
                        </div>
                    </div>
                </div>
    
                <div className={cls.MobileWhyChoose}>
                    <div className={cls.container}>
                        <div className={cls.top}>
                            { showMobileTitle() }
                            <div className={cls.angleLine}></div>
                        </div>
                        <div className={cls.bottom}>
    
                            <ItemChoose item={items[0]}/> 
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[1]}/> 
    
                            <div className={cls.line__vertical} style={{height:'12px'}}></div>
                            <div className={cls.space__line}></div>
                            <div className={cls.space__full}></div>
    
                            <div className={cls.space__full}></div>
                            <div className={cls.line__horizontal}></div>
                            <ItemChoose item={items[2]}/>
                        </div>
                    </div>
                </div>
    
            </>
    
        )
    }
}