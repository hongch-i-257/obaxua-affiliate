import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D4628] text-[#FDFBF7] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Cột 1: Thương hiệu */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-xl mb-4 tracking-tight">OBAXUA REVIEW</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Chuyên review và chia sẻ các công thức làm đẹp từ bột thiên nhiên nguyên chất. 
              Mộc mạc - Chân phương - Hiệu quả.
            </p>
          </div>

          {/* Cột 2: Khám phá */}
          <div>
            <h4 className="font-bold mb-4 text-white">Khám phá</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li><Link href="/bot-thien-nhien" className="hover:text-white transition">Bột thiên nhiên</Link></li>
              <li><Link href="/cach-dung" className="hover:text-white transition">Cách dùng</Link></li>
              <li><Link href="/don-si" className="hover:text-white transition">Chính sách sỉ</Link></li>
              <li><Link href="/gioi-thieu" className="hover:text-white transition">Về chúng tôi</Link></li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ & Chính sách */}
          <div>
            <h4 className="font-bold mb-4 text-white">Chính sách</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li className="hover:text-white cursor-pointer transition">Hướng dẫn mua hàng</li>
              <li className="hover:text-white cursor-pointer transition">Chính sách Affiliate</li>
              <li className="hover:text-white cursor-pointer transition">Cam kết chất lượng</li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div>
            <h4 className="font-bold mb-4 text-white">Kết nối với mình</h4>
            <div className="flex space-x-4 mb-4">
              {/* Bạn có thể thêm icon TikTok/Zalo ở đây */}
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">T</div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">Z</div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">F</div>
            </div>
            <p className="text-xs text-stone-400">Email: hotro@obaxuareview.com</p>
          </div>

        </div>

        {/* Dòng bản quyền */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-stone-400">
          <p>© 2026 Obaxua Review.</p>
          <p className="mt-2 text-[10px]">Tất cả sản phẩm đều được dẫn trực tiếp từ TikTok Shop chính hãng.</p>
        </div>
      </div>
    </footer>
  );
}