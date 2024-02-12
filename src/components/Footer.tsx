'use client';
import { useTheme } from 'next-themes';

export default function Footer() {
    const { theme, setTheme } = useTheme(); // 테마 관리 훅 사용

    return (
        <footer
            className={
                theme === 'dark'
                    ? 'dark bg-gray-800 text-white py-4'
                    : 'bg-white py-4 text-black'
            }
            style={{ position: 'relative', transform: 'translateY(100%)' }}
        >
            <div className="container mx-auto text-center">
                <p>
                    © 2024 cmoonjun11@gmail.com <br />
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}
