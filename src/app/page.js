import { getAllProducts } from '../lib/getProducts'; //
import ProductListClient from '../components/ProductListClient';
import BannerCarousel from '../components/BannerCarousel'; // 1. Import nó vào đây

export default async function HomePage() {
  // Lấy dữ liệu sản phẩm tại Server
  const products = await getAllProducts();

  return (
    <div className=" min-h-screen">
      {/* Banner Section */}
      <section className="w-full pt-6"> 
        {/* Để w-full thay vì max-w-4xl để banner có không gian tràn ra 2 bên */}
        <BannerCarousel />
      </section>

      {/* Product Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="
            inline-block
            text-3xl md:text-4xl
            font-extrabold
            tracking-tight
            text-white
            px-5 py-2
            rounded-2xl
            bg-gradient-to-r from-obaxua-green via-obaxua-green/90 to-obaxua-green/70
            shadow-lg shadow-obaxua-green/30
            border border-white/20
            backdrop-blur-sm
            relative
            overflow-hidden
          ">
            <span className="relative z-8">
              Sản phẩm bán chạy
            </span>

            {/* ánh sáng chạy nhẹ */}
            <span className="
              absolute inset-0
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              translate-x-[-100%]
              animate-[shine_3s_infinite]
            "></span>
          </h2>        
        </div>
        
        {/* Truyền dữ liệu vào Component lọc */}
        <ProductListClient products={products} />
      </main>
    </div>
  );
}