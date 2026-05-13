obaxua-affiliate/
├── public/                 # Chứa hình ảnh sản phẩm, logo, favicon
│   └── images/
│       ├── products/       # Ảnh hũ bột, thảo dược...
│       └── banners/        # Ảnh hero section, khuyến mãi
├── src/
│   ├── app/                # Thư mục chính của Next.js (App Router)
│   │   ├── layout.js       # Layout tổng cho toàn bộ web (Header/Footer)
│   │   ├── page.js         # Trang chủ (Hiển thị sản phẩm & Blog)
│   │   ├── cach-dung/      # Trang danh sách bài viết hướng dẫn
│   │   │   └── [slug]/     # Chi tiết từng bài hướng dẫn (Dynamic Route)
│   │   ├── gioi-thieu/     # Trang giới thiệu thương hiệu
│   │   └── don-si/         # Trang thông tin khách sỉ
│   ├── components/         # Các thành phần giao diện tái sử dụng
│   │   ├── Header.js       # Thanh điều hướng (Header mới của bạn)
│   │   ├── Footer.js       
│   │   ├── ProductCard.js  # Thẻ sản phẩm gắn link TikTok Shop
│   │   └── BlogCard.js     # Thẻ bài viết hướng dẫn
│   ├── data/               # Nơi thay thế Database
│   │   └── products.json   # Lưu thông tin sản phẩm (Tên, Giá, Link TikTok)
│   ├── lib/                # Các hàm tiện ích (utils)
│   │   └── getProducts.js  # Hàm đọc dữ liệu từ file JSON
│   └── styles/             # Cấu hình CSS
│       └── globals.css     # Tailwind CSS directives
├── .env.local              # Lưu biến môi trường (như link API nếu sau này cần)
├── tailwind.config.js      # Cấu hình màu sắc (Xanh lá, Kem đất)
└── package.json