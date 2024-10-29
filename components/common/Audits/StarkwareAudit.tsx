'use client'
import WebViewer from '@pdftron/webviewer';
import { useEffect, useRef, useState } from 'react';

export function StarkwareAudit() {
    const viewerDiv = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const beenInitialised = useRef<Boolean>(false);

    useEffect(() => {
        // Проверяем, что код выполняется на клиенте
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && !beenInitialised.current && viewerDiv.current) {
            beenInitialised.current = true;
            WebViewer(
                {
                    path: '/lib',
                    initialDoc: '/ABDK_Starkware_Perpetual_v1.pdf',
                    licenseKey: process.env.PDF_KEY // sign up to get a free trial key at https://dev.apryse.com
                },
                viewerDiv.current as HTMLDivElement
            ).then(() => {
                // Дополнительные действия после инициализации
            });
        }
    }, [isClient]);

    return (
        <div className='MyComponent'>
            <div className='webviewer' ref={viewerDiv} style={{ height: '100vh' }}></div>
        </div>
    );
}