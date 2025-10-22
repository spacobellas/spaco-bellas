import { useEffect } from "react";
import { useLocation } from "wouter";
import { Loader2, MessageCircle, Users } from "lucide-react";

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_GRUPO_VIP = "https://chat.whatsapp.com/DWjdqaM1A0mGHFE0gnKVtb";

export default function WhatsAppRedirect() {
  const [location] = useLocation();
  
  // Detecta se é para o grupo VIP ou WhatsApp direto
  const isGrupoVIP = location.includes("grupo-vip");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isGrupoVIP) {
        // Redireciona para o Grupo VIP do pré-lançamento
        window.location.href = WHATSAPP_GRUPO_VIP;
      } else {
        // Redireciona para WhatsApp direto
        const message = "Olá! Vim pelo site do Spaço Bellas e quero conhecer o Spa das Celebridades! 💜";
        window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [isGrupoVIP]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-green-600 to-green-700 flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-300/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-400/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      
      <div className="relative z-10 text-center text-white max-w-md">
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-full animate-ping" />
          </div>
          {isGrupoVIP ? (
            <Users className="w-24 h-24 mx-auto relative z-10 drop-shadow-2xl" />
          ) : (
            <MessageCircle className="w-24 h-24 mx-auto relative z-10 drop-shadow-2xl" />
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          {isGrupoVIP 
            ? "Entrando no Grupo VIP..." 
            : "Redirecionando para o WhatsApp..."}
        </h1>
        <p className="text-green-100 text-lg mb-8 drop-shadow">
          Aguarde um momento 💜
        </p>

        <Loader2 className="w-8 h-8 mx-auto animate-spin opacity-80" />

        <div className="mt-12">
          <a
            href={isGrupoVIP ? WHATSAPP_GRUPO_VIP : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site")}`}
            className="text-sm text-white/80 hover:text-white underline transition-colors"
          >
            Clique aqui se não for redirecionado automaticamente
          </a>
        </div>
      </div>
    </div>
  );
}
