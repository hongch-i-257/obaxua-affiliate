import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="text-obaxua-green font-sans">
        {/* Gọi Component Header thật thay vì dùng text placeholder */}
        <Header />
        
        <main className="min-h-screen bg-transparent relative">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}