import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const FluxenFooter = () => {
  return (
    <footer className="py-12 bg-[#0F172A] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="font-bold text-white text-lg">F</span>
              </div>
              <span className="font-bold text-xl text-white">Fluxen</span>
            </a>
            <p className="text-gray-400 text-sm max-w-md">
              Sistema de gestão de empréstimos simples, seguro e profissional. 
              Perfeito para autônomos e pequenos negócios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <div className="space-y-3">
              <a href="#inicio" className="block text-gray-400 text-sm hover:text-blue-400 transition-colors">
                Início
              </a>
              <a href="#funcionalidades" className="block text-gray-400 text-sm hover:text-blue-400 transition-colors">
                Funcionalidades
              </a>
              <a href="#planos" className="block text-gray-400 text-sm hover:text-blue-400 transition-colors">
                Planos
              </a>
              <a href="#faq" className="block text-gray-400 text-sm hover:text-blue-400 transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contato@fluxen.com.br" 
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@fluxen.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Fluxen. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FluxenFooter;
