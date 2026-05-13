// src/components/ProductCard.js
import Link from 'next/link';
import { SiShopee, SiTiktok } from "react-icons/si";

export default function ProductCard({ product, index }) {
  // Xác định Top 3 để hiển thị Badge đặc biệt
  const isTopThree = index < 3;

  return (
    <div
  className="
    relative overflow-hidden
    bg-gradient-to-br from-[#fffdf8] via-[#f8f6ef] to-[#f3efe3]
    border border-[#e9e3d3]
    rounded-[2rem]
    shadow-sm hover:shadow-xl
    transition-all duration-300
    group w-full mx-auto mb-6
  "
>
  {/* Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#8BA870]/5 via-transparent to-[#D8C7A1]/10 pointer-events-none" />

  {/* 1. KHU VỰC ẢNH */}
  <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-stone-50">
    
    {/* Top Badge */}
    {isTopThree && (
      <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-[#8BA870] to-[#6f8d57] text-white text-[9px] font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 uppercase tracking-tighter">
        👑 Bán chạy
      </div>
    )}

    {/* Weight Badge */}
    <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md text-[#2D4628] text-[10px] font-black px-3 py-1 rounded-full shadow">
      {product.weight}
    </div>

    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
  </div>

  {/* 2. CONTENT */}
  <div className="relative p-4 sm:p-6">

    {/* Category */}
    <div className="inline-flex items-center gap-1 bg-[#EEF4E8] text-[#56724A] text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
      🌿 Thiên nhiên
    </div>

    {/* Product Name */}
    <h3 className="font-black text-[#2D4628] text-lg sm:text-xl mb-3 line-clamp-2 leading-tight">
      {product.name}
    </h3>

    {/* Description */}
    {/* <p className="text-stone-500 text-[13px] leading-relaxed line-clamp-2 mb-5">
      {product.description}
    </p> */}

    {/* DETAIL BUTTON */}
    <Link
      href={`/bot-thien-nhien/${product.slug}`}
      className="
        block w-full text-center py-3 mb-5
        rounded-2xl text-[12px]
        font-black tracking-wide
        border border-[#2D4628]
        text-[#2D4628]
        hover:bg-[#2D4628]
        hover:text-white
        transition-all active:scale-[0.98]
      "
    >
      Xem chi tiết ❯
    </Link>

    {/* Divider */}
    <div className="relative flex justify-center mb-4">
      <span className="bg-[#f7f4eb] px-3 text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em] z-10">
        Mua ngay trên
      </span>

      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stone-200"></div>
    </div>

    {/* BUY BUTTONS */}
    <div className="grid grid-cols-2 gap-3">

      {/* Shopee */}
      <a
        href={product.shopeeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex flex-col items-center justify-center
          border border-[#EE4D2D]/20
          bg-gradient-to-b from-[#fff5f2] to-[#fff0ec]
          py-3 rounded-2xl
          hover:scale-[1.02]
          transition-all active:scale-95
        "
      >
        <SiShopee className="text-[#EE4D2D] text-xl mb-1" />

        <span className="text-[9px] text-stone-500 leading-none">
          Mua tại
        </span>

        <span className="text-[13px] font-black text-[#EE4D2D] leading-none mt-1">
          Shopee
        </span>
      </a>

      {/* TikTok */}
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex flex-col items-center justify-center
          border border-black/10
          bg-gradient-to-b from-[#1c1c1c] to-black
          py-3 rounded-2xl
          hover:scale-[1.02]
          transition-all active:scale-95
        "
      >
        <SiTiktok className="text-white text-xl mb-1" />

        <span className="text-[9px] text-stone-300 leading-none">
          Mua tại
        </span>

        <span className="text-[13px] font-black text-white leading-none mt-1">
          TikTok
        </span>
      </a>
    </div>
  </div>
</div>
  );
}