
import React, { useState } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  GraduationCap, 
  Users, 
  BrainCircuit, 
  BookOpen, 
  Globe, 
  Star, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Mail,
  Zap,
  LayoutDashboard
} from 'lucide-react';
import AIGeneratedImage from './components/AIGeneratedImage';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Trang Chủ', href: '#' },
    { label: 'Lớp Toán', href: '#toan' },
    { label: 'Lớp Tiếng Anh', href: '#tienganh' },
    { label: 'Về Chúng Tôi', href: '#ve-chung-toi' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-orange-200">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-gray-900 block leading-tight">KẾT NỐI GIA SƯ</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Trotuai.vn</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="tel:0961186142" className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all">
                <Phone className="w-4 h-4" />
                <span>0961186142</span>
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="block text-lg font-medium text-gray-800" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="tel:0961186142" className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold">
              <Phone className="w-5 h-5" />
              <span>0961186142</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 gradient-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold animate-bounce">
                <Star className="w-4 h-4 fill-blue-600" />
                <span>Tuyển sinh 2026 - 2027</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                KẾT NỐI GIA SƯ<br />
                <span className="text-primary italic">HỌC TIẾN BỘ,</span><br />
                DẠY TẬN TÂM
              </h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Chương trình đào tạo bổ trợ chuẩn quốc gia dành cho học sinh Tiểu học khối lớp 2, 3, 4. 
                Chúng tôi tập trung khơi gợi niềm đam mê học tập, giúp các con vững kiến thức và bứt phá điểm số.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
                  Đăng Ký Tư Vấn Ngay <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-all">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <AIGeneratedImage 
                prompt="A friendly male tutor helping a happy primary school girl student with homework in a bright cozy room"
                fallbackUrl="https://picsum.photos/800/800"
                className="w-full aspect-square relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Math Section */}
      <section id="toan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <LayoutDashboard className="w-4 h-4" />
              <span>Môn Toán • Khối 2-3-4</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">CHƯƠNG TRÌNH TOÁN TƯ DUY</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Bám sát chương trình Bộ Giáo dục, kết hợp phương pháp hiện đại giúp phát triển não bộ toàn diện.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-orange-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase">Lớp Toán A</span>
                <MapPin className="text-primary w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Phát Triển Tư Duy Toàn Diện</h3>
              <p className="text-gray-600 mb-6">Luyện toán tư duy, toán tiếng Anh và toán nâng cao dành cho học sinh khá giỏi. Mục tiêu chinh phục các kỳ thi chuyển cấp.</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-xl text-sm font-medium border border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Luyện thi lớp chuyên
                </div>
                <div className="bg-white p-3 rounded-xl text-sm font-medium border border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Toán Tiếng Anh
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-200 transform md:-translate-y-4 transition-all">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-blue-500/50 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase">Lớp Toán B</span>
                <Zap className="text-white w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Xây Dựng Nền Tảng Vững Chắc</h3>
              <p className="text-blue-100 mb-6">Củng cố nền tảng, xóa tan nỗi sợ hãi môn Toán. Tập trung vào phương pháp học trực quan giúp học sinh yếu kém lấy lại căn bản.</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-700/50 p-3 rounded-xl text-sm font-medium border border-blue-400 flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Lấy lại căn bản
                </div>
                <div className="bg-blue-700/50 p-3 rounded-xl text-sm font-medium border border-blue-400 flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Học vui - Nhớ lâu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods & Team */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight">Phương Pháp & Đội Ngũ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center text-white space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                <BrainCircuit className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Tư Duy Hình Ảnh</h3>
              <p className="text-blue-100 text-sm">Phương pháp trực quan sinh động giúp trẻ tiếp thu kiến thức một cách tự nhiên, kích thích khả năng sáng tạo.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center text-white space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Đội Ngũ Tinh Hoa</h3>
              <p className="text-blue-100 text-sm">Gia sư từ các trường ĐH Top đầu: Bách Khoa, Sư Phạm, Ngoại Thương với chứng chỉ nghiệp vụ sư phạm.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center text-white space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                <Star className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Lộ Trình Cá Nhân</h3>
              <p className="text-blue-100 text-sm">Mỗi học sinh có một giáo án riêng biệt dựa trên năng lực và tâm lý, đảm bảo sự tiến bộ vượt bậc qua từng tháng.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-5 h-5 text-primary" />, label: 'Kinh Nghiệm 5+ Năm' },
              { icon: <Users className="w-5 h-5 text-primary" />, label: 'Thấu Hiểu Tâm Lý' },
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, label: 'Cam Kết Đầu Ra' },
              { icon: <Star className="w-5 h-5 text-primary" />, label: 'Hỗ Trợ 24/7' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-white font-medium text-sm">
                {feature.icon}
                {feature.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English Section */}
      <section id="tienganh" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <Globe className="w-4 h-4" />
              <span>English • Khối 2-3-4</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">CHƯƠNG TRÌNH TIẾNG ANH TOÀN DIỆN</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Tự tin giao tiếp, vững chắc ngữ pháp với môi trường học tập chuẩn quốc tế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-2xl shadow-blue-50">
              <div className="h-4 bg-primary"></div>
              <div className="p-10 space-y-8">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-3xl font-extrabold text-secondary">LỚP PHÁ BĂNG</h3>
                    <p className="text-sm font-bold text-gray-400 italic">ICEBREAKER</p>
                  </div>
                  <BookOpen className="text-primary w-10 h-10" />
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" /> PHƯƠNG PHÁP
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-orange-100 text-primary flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      <p className="text-gray-600 text-sm">Xóa bỏ hoàn toàn nỗi sợ hãi khi tiếp xúc với ngôn ngữ mới qua các trò chơi vận động.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-orange-100 text-primary flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      <p className="text-gray-600 text-sm">Môi trường 100% tiếng Anh giúp hình thành phản xạ nghe nói tự nhiên ngay từ nhỏ.</p>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Sĩ Số</span>
                    <span className="text-lg font-bold text-gray-900">5 - 7 Bạn</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Mục Tiêu</span>
                    <span className="text-lg font-bold text-gray-900">Phản xạ tự tin</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-2xl shadow-blue-50">
              <div className="h-4 bg-secondary"></div>
              <div className="p-10 space-y-8">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-3xl font-extrabold text-secondary">LỚP PHẢN XẠ</h3>
                    <p className="text-sm font-bold text-gray-400 italic">ENGLISH REFLEX</p>
                  </div>
                  <Globe className="text-secondary w-10 h-10" />
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-secondary" /> PHƯƠNG PHÁP
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-secondary flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      <p className="text-gray-600 text-sm">Kết hợp hài hòa giữa luyện thi học thuật và giao tiếp thực tế đời sống (Active Learning).</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-secondary flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      <p className="text-gray-600 text-sm">Xây dựng nền tảng từ vựng và ngữ pháp vững chắc phục vụ các kỳ thi chuẩn quốc gia.</p>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Kỹ Năng</span>
                    <span className="text-lg font-bold text-gray-900">Nghe-Nói-Đọc-Viết</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Học Thuật</span>
                    <span className="text-lg font-bold text-gray-900">Bứt phá điểm số</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[50px] p-12 md:p-20 text-center text-white space-y-8 relative overflow-hidden shadow-2xl shadow-orange-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            
            <h2 className="text-4xl md:text-6xl font-black leading-tight relative z-10">
              SẴN SÀNG CHO NĂM HỌC MỚI<br />
              2026 - 2027?
            </h2>
            <p className="text-xl opacity-90 relative z-10 max-w-2xl mx-auto">
              Đăng ký ngay hôm nay để nhận tư vấn lộ trình học tập miễn phí và ưu đãi học phí lên đến 20% cho học sinh mới.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href="tel:0961186142" className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl">
                <Phone className="w-6 h-6" />
                GỌI: 0961186142
              </a>
              <a href="#" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl">
                <Globe className="w-6 h-6" />
                TROTUAI.VN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-gray-800">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <GraduationCap className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">KẾT NỐI GIA SƯ</span>
              </div>
              <p className="text-sm leading-relaxed">
                Hệ thống gia sư uy tín chuyên biệt cho khối Tiểu học. Chúng tôi tập trung vào chất lượng giảng dạy và sự tiến bộ thực sự của mỗi học sinh qua phương pháp cá nhân hóa.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Khóa Học
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Toán Tư Duy Lớp 2</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Toán Nâng Cao Lớp 3</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tiếng Anh Phản Xạ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Lớp Phá Băng Tiếng Anh</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Thông Tin
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Đội ngũ giáo viên</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Chính sách học phí</a></li>
                <li className="text-primary font-bold">Website: trotuai.vn</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Liên Hệ
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Trụ sở: Hà Nội, Việt Nam</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-bold text-white">0961186142</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>contact@trotuai.vn</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest">
            <p>© 2026 KẾT NỐI GIA SƯ (TROTUAI.VN). TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Zalo</a>
              <a href="#" className="hover:text-white">Youtube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
