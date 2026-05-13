"use client"; // Nhớ thêm dòng này ở đầu file để dùng useState
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-stone-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        
        {/* LOGO (Giữ nguyên code thay chữ O của Chí) */}
        <Link href="/" className="flex items-center font-bold text-xl md:text-2xl text-[#2D4628]">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-1">
            <img src="/logo-obaxua.jpg" alt="logo" className="w-full h-full object-cover" />
          </div>
          <span>BAXUA REVIEW</span>
        </Link>

        {/* NÚT HAMBURGER CHO MOBILE */}
        <button 
          className="md:hidden p-2 text-[#2D4628]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
           <Link href="/don-si" className="text-orange-600 font-bold">Đơn sỉ</Link>
            <Link href="/gioi-thieu">Giới thiệu</Link>
          <Link href="/cach-dung">Cách dùng</Link>
        </nav>
      </div>

      {/* MENU DROPDOWN CHO MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-stone-600 animate-fadeIn">
          <Link href="/don-si" className="text-orange-600 font-bold" onClick={() => setIsOpen(false)}>Đơn sỉ</Link>
          <Link href="/gioi-thieu" onClick={() => setIsOpen(false)}>Giới thiệu</Link>
          <Link href="/cach-dung" onClick={() => setIsOpen(false)}>Cách dùng</Link>
          
        </div>
      )}
    </header>
  );
}