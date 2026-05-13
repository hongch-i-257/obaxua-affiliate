"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductListClient({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Định nghĩa các danh mục dựa trên dữ liệu trong products.json
  const categories = [
    // { label: "Tất cả", value: "all" },
    { label: "75g", value: "75g" },
    { label: "250g", value: "250g" },
    { label: "500g", value: "500g" },
    { label: "Combo tiết kiệm", value: "combo" },
  ];

  // Logic lọc sản phẩm theo khối lượng (weight)
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.weight === selectedCategory);

  return (
    <>
      {/* Thanh danh mục nút bấm */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
              selectedCategory === cat.value
                ? "bg-[#2D4628] text-white border-[#2D4628] shadow-md"
                : "bg-white text-[#2D4628] border-stone-200 hover:border-[#2D4628]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid hiển thị sản phẩm sau khi lọc */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-stone-400">
          Chưa có sản phẩm nào thuộc phân loại này.
        </div>
      )}
    </>
  );
}