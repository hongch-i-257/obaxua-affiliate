import { getAllProducts } from '../lib/getProducts'; //
import ProductListClient from '../components/ProductListClient';

export default async function HomePage() {
  // Lấy dữ liệu sản phẩm tại Server
  const products = await getAllProducts();

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Banner Section */}
      <section className="max-w-4xl mx-auto px-4 pt-6">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img 
            src="/images/banners/banner-main.jpg" 
            alt="Obaxua Banner" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Product Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#2D4628]">Sản phẩm bán chạy</h2>
        </div>
        
        {/* Truyền dữ liệu vào Component lọc */}
        <ProductListClient products={products} />
      </main>
    </div>
  );
}