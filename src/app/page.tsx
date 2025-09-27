'use client';
import React, { useState, useEffect } from 'react';
import { Instagram, ShoppingBag, Star, Gift, ExternalLink, MapPin, Phone, Award, Heart } from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const companyData = {
    name: "Look Bike",
    tagline: "Especialista em Vendas & Manutenção",
    bio: "Pedalar é liberdade, cuidar da bike é essencial 🚴‍♂️",
    location: "Alvorada",
    founded: "Desde 1994"
  };

  const mainLinks = [
    {
      title: "Catálogo",
      subtitle: "Veja toda nossa linha",
      url: "https://drive.google.com/drive/folders/10TPJQGp_RnVVyyfsaH5vHMZgP9M2SYtJ?fbclid=PAZXh0bgNhZW0CMTEAAafUQNdDzgDKgO9ctD8_FDTYQu_KS0xdLvXPrFBVVAGiuQ3Q6lRPBgBMDNkL-g_aem_bb6taNKVNviSHPEFyizsYw",
      icon: ShoppingBag,
      color: "from-red-500 to-red-600",
      stats: "500+ produtos",
      badge: "🛒"
    },
    {
      title: "WhatsApp",
      subtitle: "Fale conosco",
      url: "https://wa.me/5551981202215?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seus%20links",
      icon: Phone,
      color: "from-green-400 to-green-600",
      stats: "Resposta rápida",
      badge: "💬"
    },
    {
      title: "Look Brinquedos",
      subtitle: "Siga nosso perfil de brinquedos",
      url: "https://instagram.com/look_brinquedos/",
      icon: Gift,
      color: "from-pink-500 to-purple-500",
      stats: "2.2k seguidores",
      badge: "🧸"
    },
    {
      title: "Ofertas Especiais",
      subtitle: "Promoções imperdíveis",
      url: "/",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      stats: "Até 40% OFF",
      badge: "🔥",
      comingSoon: true
    },
    {
      title: "Localização",
      subtitle: "Encontre nossa loja",
      url: "https://maps.app.goo.gl/oDfhT65WMmJMP9XP7",
      icon: MapPin,
      color: "from-red-400 to-red-600",
      stats: "Alvorada/RS",
      badge: "📍"
    },
  ];

  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com//look_bike/", color: "hover:text-red-400", label: "Look Bike" },
    { icon: Instagram, url: "https://instagram.com/look_brinquedos/", color: "hover:text-purple-500", label: "Look Brinquedos" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div
        className="fixed inset-0 opacity-25 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(228, 52, 56, 0.15), rgba(44, 44, 44, 0.1), transparent 50%)`
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto space-y-8">

          {/* Company Header */}
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="relative inline-block mb-6">
              <div className="w-40 h-32 rounded-3xl bg-white p-3 shadow-2xl relative overflow-hidden">
                {/* Adicione sua imagem aqui - substitua o src pela URL da sua imagem */}
                <img
                  src="/logo-lookbike.png"
                  alt="Look Bike Logo"
                  className="w-full h-full object-contain"
                />
                {/* Fallback - texto estilizado caso a imagem não carregue */}
                <div className="w-full h-full hidden items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-black mb-1" style={{ color: '#e43438' }}>LOOK</div>
                    <div className="text-lg font-bold" style={{ color: '#2c2c2c' }}>BIKE</div>
                    <div className="text-xs" style={{ color: '#2c2c2c' }}>Desde 1994</div>
                  </div>
                </div>

                {/* Brilho animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </div>

              {/* Badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full text-white text-xs font-bold animate-bounce" style={{ backgroundColor: '#e43438' }}>
                ONLINE
              </div>
              <div className="absolute -bottom-2 -left-2 px-2 py-1 rounded-full text-white text-xs font-bold" style={{ backgroundColor: '#2c2c2c' }}>
                🚴‍♂️ BIKE
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-2">
              <span
                className="font-black"
                style={{ color: '#e43438' }}
              >
                {companyData.name}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-2">{companyData.tagline}</p>
            <p className="text-white/90 mb-6 text-lg">{companyData.bio}</p>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{companyData.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>{companyData.founded}</span>
              </div>
            </div>
          </div>

          {/* Main Links */}
          <div className="space-y-4">
            {mainLinks.map((link, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <a
                  href={link.url}
                  className={`group relative block p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:bg-white/15 ${link.comingSoon ? 'opacity-75 cursor-not-allowed' : ''}`}
                  onClick={link.comingSoon ? (e) => e.preventDefault() : undefined}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                  {/* Tag EM BREVE */}
                  {link.comingSoon && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                      EM BREVE
                    </div>
                  )}

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${link.color} shadow-lg`}>
                        <link.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-white font-bold text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                            {link.title}
                          </h3>
                          <span className="text-lg">{link.badge}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{link.subtitle}</p>
                        <p className="text-xs text-gray-400 mt-2 font-semibold">{link.stats}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Social Links com cores da marca */}
          <div className={`space-y-3 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <h3 className="text-center text-gray-400 text-sm font-semibold mb-4">SIGA NOSSOS PERFIS</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-white/40 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer com cores da marca */}
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <div className="flex items-center colun justify-center space-x-1 text-gray-500 text-sm mb-2">
              <p className="mt-2 text-sm">Feito com ❤️ por{" "}
                <a href="https://gomesdigitals.com" className="hover:text-red-300 hover:scale-105 transition-all duration-300">
                  Gomes Digital
                </a>
              </p>
            </div>
            <p className="text-gray-600 text-xs">
              <p className="mt-2 text-sm">Copyright &copy; {currentYear}. Todos os direitos reservados.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}