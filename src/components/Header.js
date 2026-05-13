"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        bg-[#fffdf8]/85
        border-b border-[#ece6d8]
      "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          {/* Logo */}
          <div
            className="
              relative
              w-10 h-10 md:w-12 md:h-12
              rounded-full
              overflow-hidden
              bg-gradient-to-br from-[#f8f3e7] to-[#e8dcc4]
              shadow-sm border border-white/70
              group-hover:scale-105
              transition-all duration-300
            "
          >
            <img
              src="/logo-obaxua.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />

            {/* Glow */}
            <div className="absolute inset-0 bg-white/10" />
          </div>

          {/* Brand */}
          <div className="leading-tight">
            <h1 className="font-black text-[22px] md:text-[34px] tracking-tight text-[#24422D]">
              BAXUA REVIEW
            </h1>

            <p className="hidden md:block text-[10px] uppercase tracking-[0.25em] text-[#8b7b61] mt-0.5">
              Natural Beauty & Lifestyle
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-2">

          <Link
            href="/don-si"
            className="
              px-5 py-2 rounded-full
              text-[15px] font-black
              text-orange-600
              bg-orange-50
              hover:bg-orange-100
              transition-all duration-300
            "
          >
            Đơn sỉ
          </Link>

          <Link
            href="/gioi-thieu"
            className="
              px-5 py-2 rounded-full
              text-[15px] font-semibold
              text-[#2D4628]
              hover:bg-[#edf4e7]
              transition-all duration-300
            "
          >
            Giới thiệu
          </Link>

          <Link
            href="/cach-dung"
            className="
              px-5 py-2 rounded-full
              text-[15px] font-semibold
              text-[#2D4628]
              hover:bg-[#edf4e7]
              transition-all duration-300
            "
          >
            Cách dùng
          </Link>

          {/* CTA */}
          {/* <a
            href="#products"
            className="
              ml-2 px-5 py-3 rounded-full
              bg-[#2D4628]
              text-white text-sm font-black
              shadow-lg shadow-[#2D4628]/20
              hover:scale-105
              transition-all duration-300
            "
          >
            Xem sản phẩm
          </a> */}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="
            md:hidden
            w-11 h-11
            rounded-xl
            bg-[#f4efe3]
            flex items-center justify-center
            text-[#2D4628]
            active:scale-95
            transition-all
          "
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* GRADIENT LINE */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d9c9aa] to-transparent" />

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
            md:hidden
            bg-[#fffdf8]
            border-b border-[#ece6d8]
            px-4 py-5
            flex flex-col gap-3
            animate-fadeIn
          "
        >
          <Link
            href="/don-si"
            className="
              py-3 px-4 rounded-2xl
              bg-orange-50
              text-orange-600
              font-black
            "
            onClick={() => setIsOpen(false)}
          >
            🛒 Đơn sỉ
          </Link>

          <Link
            href="/gioi-thieu"
            className="
              py-3 px-4 rounded-2xl
              bg-[#f5f3ec]
              text-[#2D4628]
              font-semibold
            "
            onClick={() => setIsOpen(false)}
          >
            🌿 Giới thiệu
          </Link>

          <Link
            href="/cach-dung"
            className="
              py-3 px-4 rounded-2xl
              bg-[#f5f3ec]
              text-[#2D4628]
              font-semibold
            "
            onClick={() => setIsOpen(false)}
          >
            ✨ Cách dùng
          </Link>

          {/* <a
            href="#products"
            className="
              mt-2 py-3 rounded-2xl
              bg-[#2D4628]
              text-white text-center
              font-black
            "
            onClick={() => setIsOpen(false)}
          >
            Xem sản phẩm
          </a> */}
        </div>
      )}
    </header>
  );
}