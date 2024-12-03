'use client';

import Image from 'next/image';
import logo from "@/public/images/PL-900.png"
import Link from 'next/link';

export default function Footer() {
  return (
        <footer className="bg-white rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="https://mamadou-lamine-portfolio.vercel.app/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image 
                        src={logo} 
                        height={40} 
                        width={40} 
                        alt="Logo PL-900" 
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Quiz App</span>
                    </Link>
                    <div>
                        <p className='text-sm'>Une application de Quiz sur PL-900</p>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://mamadou-lamine-portfolio.vercel.app/" className="hover:underline">Mamadou Lamine DIASSY™</a>. All Rights Reserved.</span>
            </div>
        </footer>
  )
}
