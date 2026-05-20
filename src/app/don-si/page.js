'use client';

import React, { useState } from 'react';

export default function DonSiPage() {
  const zaloLink = "https://zalo.me/0862920522";

  // Quản lý trạng thái đóng/mở của phần Câu hỏi thường gặp (FAQ)
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Dữ liệu mẫu tương ứng theo thiết kế trong ảnh của Chí
  const doiTuong = [
    { title: "TIKTOKER / REVIEWER", desc: "Kiếm hoa hồng từ nội dung review, giới thiệu sản phẩm", icon: "📱" },
    { title: "SELLER ONLINE", desc: "Bán trên Shopee, Facebook, TikTok Shop, Lazada...", icon: "👜" },
    { title: "SPA / SHOP MỸ PHẨM", desc: "Nhập sỉ sản phẩm thiên nhiên chất lượng cho spa, cửa hàng", icon: "💆‍♀️" },
    { title: "CTV BÁN HÀNG", desc: "Không cần vốn lớn, không cần kinh nghiệm, hỗ trợ từ A-Z", icon: "👩‍💻" },
    { title: "SINH VIÊN / NỘI TRỢ", desc: "Tăng thêm thu nhập dễ dàng với nguồn hàng uy tín", icon: "📝" },
  ];

  const sanPhamSiu = [
    { name: "Bột Đậu Đỏ", price: "48.000đ", img: "/images/banners/banner-donsi.jpg" }, // Chí đổi thành link ảnh sản phẩm thật nhé
    { name: "Bột Cám Gạo", price: "45.000đ", img: "/images/banners/banner-donsi.jpg" },
    { name: "Bột Cam Thảo", price: "55.000đ", img: "/images/banners/banner-donsi.jpg" },
    { name: "Bột Diếp Cá", price: "48.000đ", img: "/images/banners/banner-donsi.jpg" },
    { name: "Bột Tía Tô", price: "48.000đ", img: "/images/banners/banner-donsi.jpg" },
  ];

  const faqs = [
    { q: "Có cần ôm hàng không?", a: "Dạ không bắt buộc ôm hàng số lượng lớn nhé ạ. Với chính sách CTV hoặc Sỉ Nhỏ, bạn có thể bắt đầu bằng số lượng cực ít để làm quen thị trường." },
    { q: "Nhập sỉ bao nhiêu sản phẩm?", a: "Dạ chỉ từ 50 sản phẩm bất kỳ là bạn đã được tính mức giá sỉ ưu đãi từ OBAXUA rồi nè." },
    { q: "Có hỗ trợ ship không?", a: "OBAXUA có chính sách hỗ trợ phí ship linh hoạt tùy theo giá trị đơn hàng sỉ của bạn, sẽ được tư vấn kỹ trong Zalo nha." },
    { q: "Hàng thiên nhiên như thế này thì hạn sử dụng được bao lâu và bảo quản ra sao?", a: "Các dòng bột thiên nhiên nguyên chất của OBAXUA có hạn sử dụng từ 12 tháng kể từ ngày sản xuất (luôn date mới nhất khi giao sỉ). Bạn chỉ cần bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp là được, không cần điều kiện kho bãi quá phức tạp." },
    { q: "Chính sách đổi trả như thế nào?", a: "Đổi trả 1-1 miễn phí nếu sản phẩm có lỗi từ nhà sản xuất hoặc hư hỏng trong quá trình vận chuyển." },
    { q: "Sản phẩm có đầy đủ giấy tờ công bố của Bộ Y Tế để bỏ sỉ vào các Spa/Shop lớn không?", a: "Toàn bộ sản phẩm thiên nhiên của OBAXUA đều có chứng nhận kiểm định, giấy công bố của Bộ Y Tế và hỗ trợ xuất hóa đơn rõ ràng, giúp bạn tự tin phân phối vào bất kỳ Spa hay shop mỹ phẩm lớn nào." },
  ];

  return (
    <div className="w-full min-h-screen text-obaxua-green font-sans pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <span className="
            bg-gradient-to-r from-orange-400 to-amber-500
            bg-clip-text text-transparent
            font-extrabold
            text-2xl md:text-4xl
            tracking-wide
          ">
            Hợp tác cùng Obaxua
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-sm">
            Đơn sỉ ổn định - Đồng hành lâu dài
          </h1>
          <p className="text-base text-obaxua-cream/90 max-w-md">
            Phù hợp cho TikToker, seller online, spa, shop mỹ phẩm và người muốn kinh doanh mỹ phẩm thiên nhiên.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="bg-[#2D4628] border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
              💬 CHAT ZALO TƯ VẤN
            </a>
            <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="bg-white text-obaxua-green font-bold px-6 py-3.5 rounded-xl shadow-md border border-obaxua-green/10 hover:bg-obaxua-cream transition-all">
              📄 NHẬN BẢNG GIÁ SỈ
            </a>
          </div>
          {/* Mấy cái icon nhỏ cam kết dưới nút */}
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/30">
            {[
              {
                icon: "🔥",
                title: "4000+ đơn",
                desc: "mỗi ngày trên TikTok",
              },
              {
                icon: "🌱",
                title: "Sản phẩm",
                desc: "thiên nhiên lành tính",
              },
              {
               icon: "♻️",
                title: "Đổi trả",
                desc: "linh hoạt miễn phí",
              },
              {
                icon: "🚚",
                title: "Giao hàng",
                desc: "toàn quốc linh hoạt",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-3xl
                  bg-[#f6ead7]/85
                  backdrop-blur-md
                  border border-white/60
                  px-4 py-5
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]
                "
              >
                {/* light glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-70"></div>

                {/* icon */}
                <div className="relative text-3xl mb-3">
                  {item.icon}
                </div>

                {/* title */}
                <h4 className="relative font-bold text-[#2f4b2f] text-base leading-tight">
                  {item.title}
                </h4>

                {/* desc */}
                <p className="relative text-sm text-[#4d4d4d] mt-1 leading-relaxed">
                  {item.desc}
                </p>

                {/* hover decoration */}
                <div className="
                  absolute -right-6 -top-6
                  w-20 h-20
                  bg-white/30
                  rounded-full blur-2xl
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                "></div>
              </div>
            ))}
          </div>
        </div>
        {/* Ảnh đống thùng hàng bự tổ chảng bên phải */}
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
          <img src="/images/banners/banner-donsi2.jpg" alt="Obaxua Kho Hàng" className="w-full h-auto object-cover aspect-[7/6]" />
        </div>
      </section>

      {/* 2. DÀNH CHO AI? */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-black relative after:content-[''] after:block after:w-12 after:h-1 after:bg-orange-500 after:mx-auto after:mt-3">
          DÀNH CHO AI?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {doiTuong.map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-5 rounded-3xl border border-white/20 shadow-md text-center hover:transform hover:-translate-y-1 transition-all">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-extrabold text-xs md:text-sm tracking-tight mb-2">{item.title}</h3>
              <p className="text-xs opacity-80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SẢN PHẨM BÁN CHẠY */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-black relative after:content-[''] after:block after:w-12 after:h-1 after:bg-orange-500 after:mx-auto after:mt-3">
          SẢN PHẨM BÁN CHẠY
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {sanPhamSiu.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-4 shadow-md border border-obaxua-green/5 text-center flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden mb-3 bg-gray-100 aspect-square">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-3">Giá sỉ từ: <span className="text-orange-600 font-bold">{item.price}</span></p>
              </div>
              <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-obaxua-cream hover:bg-obaxua-green hover:text-white transition-all text-xs font-bold py-2 rounded-xl border border-obaxua-green/10">
                Xem chi tiết
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-white/20 text-black font-bold text-xs px-6 py-2.5 rounded-xl border border-white/20 hover:bg-white/30 transition-all">
            Xem tất cả sản phẩm
          </a>
        </div>
      </section>

      {/* 4. QUY TRÌNH HỢP TÁC */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-black relative after:content-[''] after:block after:w-12 after:h-1 after:bg-orange-500 after:mx-auto after:mt-3">
          QUY TRÌNH HỢP TÁC
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-[2rem] border border-white/20 shadow-lg">
          <div className="p-4 text-center">
            <div className="font-black text-xl text-orange-600 mb-1">1. LIÊN HỆ</div>
            <p className="text-xs opacity-90">Chat Zalo để được tư vấn chính sách trực tiếp từ Admin.</p>
          </div>
          <div className="p-4 text-center md:border-l border-obaxua-green/10">
            <div className="font-black text-xl text-orange-600 mb-1">2. NHẬN BÁO GIÁ</div>
            <p className="text-xs opacity-90">Nhận file báo giá chi tiết từng cấp bậc chiết khấu cực cao.</p>
          </div>
          <div className="p-4 text-center md:border-l border-obaxua-green/10">
            <div className="font-bold text-xl text-orange-600 mb-1">3. TƯ VẤN</div>
            <p className="text-xs opacity-90">Lựa chọn các sản phẩm phù hợp với nhu cầu của bạn.</p>
          </div>
          <div className="p-4 text-center md:border-l border-obaxua-green/10">
            <div className="font-bold text-xl text-orange-600 mb-1">4. BẮT ĐẦU</div>
            <p className="text-xs opacity-90">Chốt đơn và bắt đầu kinh doanh.</p>
          </div>
        </div>
      </section>

      {/* 5. CÂU HỎI THƯỜNG GẶP (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-black relative after:content-[''] after:block after:w-12 after:h-1 after:bg-orange-500 after:mx-auto after:mt-3">
          CÂU HỎI THƯỜNG GẶP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-obaxua-green/5 overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-5 py-4 font-bold text-sm md:text-base flex justify-between items-center bg-white hover:bg-obaxua-cream transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-xl text-orange-600">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="px-5 pb-4 text-xs md:text-sm text-gray-600 border-t border-gray-50 pt-2 bg-obaxua-cream/20">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM BANNER CHỐT ĐƠN */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <div className="bg-gradient-to-br from-obaxua-green to-obaxua-green/90 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">BẮT ĐẦU HỢP TÁC CÙNG OBAXUA NGAY HÔM NAY!</h2>
          <p className="text-obaxua-cream/80 mb-8 max-w-lg mx-auto text-sm">
            Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Nhấp kết nối Zalo ngay.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all transform hover:scale-105">
              💬 CHAT ZALO NGAY
            </a>
            <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="bg-white text-obaxua-green hover:bg-obaxua-cream font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all transform hover:scale-105">
              📄 NHẬN BẢNG GIÁ SỈ
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}