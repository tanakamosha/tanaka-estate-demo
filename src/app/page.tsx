import React from 'react';
import { Building, MapPin, Phone, Mail, ArrowRight, Home, CheckCircle } from 'lucide-react';

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building className="text-blue-700 h-8 w-8" />
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">田中不動産</h1>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#featured" className="hover:text-blue-700 transition">おすすめ物件</a>
            <a href="#about" className="hover:text-blue-700 transition">私たちについて</a>
            <a href="#access" className="hover:text-blue-700 transition">アクセス</a>
          </nav>
          <a href="#contact" className="bg-blue-700 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-800 transition shadow-md">
            お問い合わせ
          </a>
        </div>
      </header>

      {/* メインビジュアル */}
      <section className="relative h-[500px] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10"></div>
        {/* 背景画像エリア（色は仮） */}
        <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            あなたに寄り添う<br/>一生モノの住まい探し。
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            地域密着10年。デザインと機能性を兼ね備えた<br className="hidden md:block"/>
            最適な物件を、プロの視点でご提案します。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition flex items-center justify-center">
              物件を探す <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-blue-700/80 text-white border-2 border-transparent px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition backdrop-blur-sm">
              無料相談予約
            </button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-bold tracking-wider uppercase text-sm">Our Features</span>
            <h3 className="text-3xl font-bold mt-2 text-slate-900">田中不動産が選ばれる理由</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "地域No.1の情報量", desc: "未公開物件を含め、エリア内の物件情報を網羅。独自のネットワークで最適な提案をします。" },
              { title: "デザインへのこだわり", desc: "元デザイナーの視点から、内装やリノベーションの可能性まで含めた「住まいの価値」を助言します。" },
              { title: "安心のサポート体制", desc: "購入後も安心。資金計画から契約、引越し後のアフターフォローまで専任スタッフが伴走します。" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50">
                <CheckCircle className="text-blue-600 h-10 w-10 mb-4" />
                <h4 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめ物件 */}
      <section id="featured" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-700 font-bold tracking-wider uppercase text-sm">Featured</span>
              <h3 className="text-3xl font-bold mt-2 text-slate-900">おすすめ物件</h3>
            </div>
            <div className="hidden md:flex items-center text-blue-700 font-bold hover:underline">
              すべての物件を見る <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { price: "4,280万円", layout: "3LDK / 85.4㎡", name: "グランドメゾン田中", tag: "新着" },
              { price: "3,580万円", layout: "2LDK / 62.1㎡", name: "サニーハイツ駅前", tag: "リノベ済" },
              { price: "5,100万円", layout: "4LDK / 98.2㎡", name: "パークサイドテラス", tag: "南向き" },
            ].map((house, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="h-48 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                  <Home className="h-12 w-12 text-gray-400" />
                  <span className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {house.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-slate-900">{house.name}</h4>
                  <p className="text-blue-700 font-bold text-2xl mb-4">{house.price}</p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4 mb-6">
                    <span className="flex items-center"><Home className="h-4 w-4 mr-1"/> {house.layout}</span>
                    <span className="flex items-center"><MapPin className="h-4 w-4 mr-1"/> 徒歩5分</span>
                  </div>
                  <button className="w-full py-3 border border-blue-700 text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition">
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Building className="text-blue-500 h-6 w-6" />
            <span className="text-xl font-bold">田中不動産</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Tanaka Real Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
