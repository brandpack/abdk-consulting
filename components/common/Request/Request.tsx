import { FC } from 'react'
import cls from './Request.module.scss'
import Link from 'next/link'

export const Request: FC<any> = ({nameRequest, stages}) => {

    const itemsLength = Object.keys(stages).length;

    const threeStages = (
        <div className={`${cls.RequestItems} ${cls.three}`}>
            <div className={cls.Line1}></div>
            <div className={cls.Line2}></div>
            <div className={cls.Line3}></div>
            <div className={cls.Line4}></div>
            <div className={cls.Line5}></div>
            <div className={`${cls.item} ${cls.item1}`}>
                <p>1</p>
                <p>{stages[0]}</p>
            </div>
            <div className={`${cls.item} ${cls.item2}`}>
                <p>2</p>
                <p>{stages[1]}</p>
            </div>
            <div className={`${cls.item} ${cls.item3}`}>
                <p>3</p>
                <p>{stages[2]}</p>
            </div>
        </div>
    );


    const fourStages = (
        <div className={cls.RequestItems}>
            <div className={cls.Line1}></div>
            <div className={cls.Line2}></div>
            <div className={cls.Line3}></div>
            <div className={cls.Line4}></div>
            <div className={cls.Line5}></div>
            <div className={`${cls.item} ${cls.item1}`}>
                <p>1</p>
                <p>{stages[0]}</p>
            </div>
            <div className={`${cls.item} ${cls.item2}`}>
                <p>2</p>
                <p>{stages[1]}</p>
            </div>
            <div className={`${cls.item} ${cls.item3}`}>
                <p>3</p>
                <p>{stages[2]}</p>
            </div>
            <div className={`${cls.item} ${cls.item4}`}>
                <p>4</p>
                <p>{stages[3]}</p>
            </div>
        </div>
    );

    return (
        <div className={cls.Request}>
            <div className={cls.container}>
                <h2 className={cls.Header}>
                    How to request <br/> {nameRequest}?
                </h2>

                { itemsLength === 3 ? threeStages : fourStages }

                <div className={cls.content}>
                    <p className={cls.text}>
                        We will make it fast and furious, just like in a movie
                    </p>
                    <Link href={'/contact'} className={cls.button}>
                        Request {nameRequest}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                            <path d="M1.58118 12.1562L12.7374 1M12.7374 1H0.737427M12.7374 1V13" stroke="black" strokeWidth="1.8" strokeLinejoin="bevel" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}