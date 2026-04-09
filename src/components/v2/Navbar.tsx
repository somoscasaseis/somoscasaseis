"use client";

export const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-[1300px] z-50">
      <div className="bg-[#EFECE9] border border-[#E3DFDA]/50 rounded-full px-4 py-3 flex items-center justify-between shadow-sm backdrop-blur-sm">

        {/* Logo - Izquierda con un poco más de aire */}
        <div className="pl-6 text-[20px] uppercase tracking-[0.25em] text-[#1D2A34] font-sans font-light">
          CASA SEIS
        </div>

        {/* Navegación y Botón - Derecha */}
        <div className="flex items-center gap-12">
          <nav className="hidden lg:flex gap-10 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1D2A34]/70 font-sans">
            <a href="#servicios" className="hover:text-[#1D2A34] transition-colors">
              NUESTROS SERVICIOS
            </a>
            <a href="#quienes-somos" className="hover:text-[#1D2A34] transition-colors">
              QUIENES SOMOS
            </a>
            <a href="#astrologia" className="hover:text-[#1D2A34] transition-colors">
              EN ASTROLOGÍA
            </a>
          </nav>

          {/* Botón de Contacto - Pixel Perfect */}
          <a
            href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 border border-[#1D2A34] text-[#1D2A34] px-8 py-2.5 rounded-full text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-[#1D2A34] hover:text-white transition-all duration-500 font-sans"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </header>
  );
};
