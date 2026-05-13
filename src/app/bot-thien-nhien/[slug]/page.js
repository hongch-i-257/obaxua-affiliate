import { getAllProducts } from '@/lib/getProducts';

export default async function ProductDetail({ params }) {
  const products = await getAllProducts();
  const product = products.find(p => p.slug === params.slug);

  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <img src={product.image} className="rounded-3xl shadow-lg w-full" />
        <div>
          <h1 className="text-3xl font-bold text-[#2D4628]">{product.name}</h1>
          <p className="text-2xl text-red-700 font-bold mt-4">{product.price.toLocaleString()}đ</p>
          <div className="mt-6 text-gray-700 leading-relaxed">
            <h3 className="font-bold mb-2">Công dụng nổi bật:</h3>
            <ul className="list-disc ml-5">
              <li>Dưỡng trắng da tự nhiên.</li>
              <li>Mờ thâm, sạch sâu lỗ chân lông.</li>
              <li>100% nguyên chất, không chất bảo quản.</li>
            </ul>
          </div>
          <a href={product.affiliateUrl} className="mt-8 inline-block bg-black text-white px-10 py-4 rounded-full font-bold">
            Mua ngay trên TikTok Shop
          </a>
        </div>
      </div>
    </main>
  );
}