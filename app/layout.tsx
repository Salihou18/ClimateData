'use client';
import './globals.css';
import logo from '@/public/img/Logo.png'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Données Climatiques Canadiennes',
//   description: 'Visualisation des données climatiques par province canadienne',
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
  }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <html lang="fr">
            <body className={inter.className}>
                <div className="min-h-screen bg-gray-100">
                    {/* Header */}
                    <header className="bg-[#3A4F41] text-white py-4 px-8 shadow-md">
                        <div className="flex items-center gap-x-4">
                            {/* Logo */}
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    width={80}
                                    className="cursor-pointer"
                                />
                            </Link>

                            {/* Textes à droite du logo */}
                            <div>
                                <h1 className="text-2xl font-bold">
                                    Données Climatiques Canadiennes
                                </h1>
                                <p className="text-sm text-gray-200">
                                    Visualisation des températures et
                                    précipitations
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Main Layout */}
                    <div className="flex">
                        {/* Sidebar */}
                        <div className="w-64 min-h-screen bg-[#B8BEB6] p-4">
                            <nav className="space-y-4">
                                <a
                                    href="/"
                                    className="block p-4 bg-white hover:bg-gray-100 rounded-md transition-colors"
                                >
                                    Home
                                </a>
                                <a
                                    href="/temperature"
                                    className="block p-4 bg-white hover:bg-gray-100 rounded-md transition-colors"
                                >
                                    View Temperature Graph
                                </a>
                                <a
                                    href="/precipitation"
                                    className="block p-4 bg-white hover:bg-gray-100 rounded-md transition-colors"
                                >
                                    View Precipitation Graph
                                </a>
                                <a
                                    href="/pollution"
                                    className="block p-4 bg-white hover:bg-gray-100 rounded-md transition-colors"
                                >
                                    View Pollution Graph
                                </a>
                            </nav>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-8">{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
