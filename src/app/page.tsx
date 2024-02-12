'use client';
import { getLottoLastNumber } from '@/api/lotto';
import { useTheme } from 'next-themes';

import { useEffect } from 'react';
import CurrentLotto from '@/components/main/CurrentLotto';

export default function Home() {
    const { theme, setTheme } = useTheme(); // 테마 관리 훅 사용

    useEffect(() => {
        getLottoLastNumber();
    }, []);

    return (
        <main
            className={
                theme === 'dark'
                    ? 'dark bg-gray-800 text-white py-4'
                    : 'bg-white py-4 text-black'
            }
        >
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <CurrentLotto />
            </div>
        </main>
    );
}
