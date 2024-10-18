'use client';

import dynamic from 'next/dynamic';

// Динамический импорт компонента OneInchAudit с указанием его типа
const OneInchAudit = dynamic(() => import('../../../components/common/Audits/OneInchAudit').then((mod) => mod.OneInchAudit), {
    ssr: false, // Отключаем серверный рендеринг
});

export default function OneInchPage() {
    return (
        <main>
            <OneInchAudit />
        </main>
    );
}