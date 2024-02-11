'use client';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

import DarkModeButton from '@/atomics/DarkModeButton';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme(); // 테마 관리 훅 사용

    return (
        <header className={theme === 'dark' ? 'dark bg-gray-800' : 'bg-white'}>
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </a>
                </div>
                <div
                    className={`flex lg:hidden ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                >
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group
                    className={`hidden lg:flex lg:gap-x-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                >
                    <a href="#" className="text-sm font-semibold leading-6">
                        Features
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6">
                        Company
                    </a>
                </Popover.Group>

                <div
                    className={`hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                >
                    <a className="text-2xl">
                        <DarkModeButton />
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            {/* 모바일 */}
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel
                    className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                >
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className={`-m-2.5 rounded-md p-2.5 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} hover:bg-${theme === 'dark' ? 'gray-700' : 'gray-50'}`}
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} hover:bg-${theme === 'dark' ? 'gray-700' : 'gray-50'}`}
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} hover:bg-${theme === 'dark' ? 'gray-700' : 'gray-50'}`}
                                >
                                    Company
                                </a>
                            </div>
                            <div className="space-y-12 py-6">
                                <a
                                    className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                                >
                                    <DarkModeButton></DarkModeButton>
                                </a>
                                <a
                                    href="#"
                                    className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} hover:bg-${theme === 'dark' ? 'gray-700' : 'gray-50'}`}
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
