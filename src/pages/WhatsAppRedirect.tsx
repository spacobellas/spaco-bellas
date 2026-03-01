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
        window.location.href = `https://wa.link/sekkom`;
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [isGrupoVIP]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        {/* Ícone do WhatsApp */}
        <div className="flex justify-center">
          {isGrupoVIP ? (
            <Users className="w-20 h-20 text-white" />
          ) : (
            <MessageCircle className="w-20 h-20 text-white" />
          )}
        </div>

        {/* Texto principal */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {isGrupoVIP 
              ? "VOCÊ SERÁ DIRECIONADO AO GRUPO VIP DO PRÉ-LANÇAMENTO..." 
              : "VOCÊ SERÁ DIRECIONADO PARA O WHATSAPP..."}
          </h1>
          <p className="text-xl text-white/90">
            Aguarde um momento 💜
          </p>
        </div>

        {/* Loading spinner */}
        <Loader2 className="w-8 h-8 text-white animate-spin mx-auto" />

        {/* Link manual caso não redirecione */}
        <p className="text-sm text-white/80 mt-8">
          Clique{" "}
          <a
            href={isGrupoVIP ? WHATSAPP_GRUPO_VIP : "https://wa.link/sekkom"}
            className="underline font-semibold hover:text-white transition-colors"
          >
            aqui
          </a>
          {" "}se não for redirecionado automaticamente
        </p>
      </div>
    </div>
  );
}
