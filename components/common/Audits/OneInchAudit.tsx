'use client'
import WebViewer from '@pdftron/webviewer';
import { useEffect, useRef, useState } from 'react';

export function OneInchAudit() {
    const viewerDiv = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Проверяем, что код выполняется на клиенте
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && viewerDiv.current) {
            WebViewer(
                {
                    path: '/lib',
                    initialDoc: '/ABDK_1inch_Limit_Order_Settlement_v1.0.pdf',
                    licenseKey: process.env.PDF_KEY  // sign up to get a free trial key at https://dev.apryse.com
                },
                viewerDiv.current as HTMLDivElement
            ).then(() => {
                // Дополнительные действия после инициализации
            });
        }
    }, [isClient]); // WebViewer вызывается только на клиенте

    return (
        <div className='MyComponent'>
            <div className='webviewer' ref={viewerDiv} style={{ height: '100vh' }}></div>
        </div>
    );
}