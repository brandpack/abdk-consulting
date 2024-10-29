'use client';

import dynamic from 'next/dynamic';

// Динамический импорт компонента OneInchAudit с указанием его типа
const StarkwareAudit = dynamic(() => import('../../../components/common/Audits/StarkwareAudit').then((mod) => mod.StarkwareAudit), {
    ssr: false, // Отключаем серверный рендеринг
});

export default function StarkwarePage() {
    return (
        <main>
            <StarkwareAudit />
        </main>
    );
}