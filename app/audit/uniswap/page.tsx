'use client';

import dynamic from 'next/dynamic';

// Динамический импорт компонента OneInchAudit с указанием его типа
const UniswapAudit = dynamic(() => import('../../../components/common/Audits/UniswapAudit').then((mod) => mod.UniswapAudit), {
    ssr: false, // Отключаем серверный рендеринг
});

export default function UniswapPage() {
    return (
        <main>
            <UniswapAudit />
        </main>
    );
}