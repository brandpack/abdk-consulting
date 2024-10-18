'use client';

import dynamic from 'next/dynamic';

// Динамический импорт компонента OneInchAudit с указанием его типа
const AaveAudit = dynamic(() => import('../../../components/common/Audits/AaveAudit').then((mod) => mod.AaveAudit), {
    ssr: false, // Отключаем серверный рендеринг
});

export default function AavePage() {
    return (
        <main>
            <AaveAudit />
        </main>
    );
}