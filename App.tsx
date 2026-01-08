import React from 'react';
import { Section } from './components/Section';
import { CONTACT_INFO, PRICING, AMENITIES_APT, AMENITIES_HOTEL, LOGISTICS } from './constants';
import { MapPin, Phone, Printer, Star, CheckCircle2, Waves, Building2, BedDouble, Calendar, Bus } from 'lucide-react';

const App: React.FC = () => {
  
  return (
    <div className="w-full bg-white overflow-hidden print:max-w-none">
      
      {/* --- PAGE 1: COVER --- */}
      <Section className="bg-brand-dark text-white print:break-after-page">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/86000/86497-Mar-Del-Plata-And-Vicinity.jpg" 
            alt="Mar del Plata Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark opacity-90"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-8 py-12 h-full justify-between">
          
          {/* Header/Logo Area */}
          <div className="w-full flex justify-between items-center border-b border-white/20 pb-6">
            <div className="flex items-center gap-6">
               {/* Logo Image - Standalone */}
               <img 
                 src="https://i.imgur.com/ejxb9to.jpeg" 
                 alt="Logo Mi Destino" 
                 className="h-24 w-auto object-contain rounded-xl shadow-lg"
               />
              <div className="text-left">
                <h3 className="text-3xl font-bold tracking-widest uppercase">Mi Destino</h3>
                <p className="text-brand-lightBlue text-sm tracking-wider">VIAJES & TURISMO</p>
              </div>
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-lg font-semibold">{CONTACT_INFO.city}</p>
              <p className="text-brand-orange">{CONTACT_INFO.phone}</p>
            </div>
          </div>

          {/* Main Title */}
          <div className="flex-grow flex flex-col justify-center items-center py-20">
            <span className="text-brand-orange text-xl md:text-2xl font-semibold tracking-[0.5em] uppercase mb-4">Temporada 2026</span>
            <h1 className="text-7xl md:text-9xl font-serif font-bold mb-6 tracking-tight text-brand-sand drop-shadow-lg">
              Mar del<br/>Plata
            </h1>
            <div className="h-2 w-32 bg-brand-orange mb-8 rounded-full"></div>
            <p className="text-xl md:text-3xl max-w-2xl font-light text-gray-200 leading-relaxed">
              La perla del atlántico te espera. <br/>
              <strong className="text-white font-semibold">10 Días y 7 Noches</strong> de pura experiencia.
            </p>
          </div>

          {/* Footer Info */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-white/20 pt-8">
            {LOGISTICS.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <item.icon className="text-brand-orange mb-2" size={32} />
                <h4 className="font-bold text-lg uppercase">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- PAGE 2: ACCOMMODATION --- */}
      <Section className="bg-white text-gray-800 print:break-after-page">
        <div className="h-full flex flex-col">
          
          {/* Section Header */}
          <div className="bg-brand-sand py-12 px-8 text-center border-b border-brand-lightBlue/30">
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-2">Alojamiento Exclusivo</h2>
            <p className="text-gray-600 text-lg">Seleccionamos las mejores opciones para tu confort</p>
          </div>

          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* Departments */}
            <div className="relative group border-b md:border-b-0 md:border-r border-gray-200 p-8 md:p-12 flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Building2 size={120} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-brand-blue mb-2 flex items-center gap-3">
                  <Building2 size={32} /> Departamentos
                </h3>
                <p className="text-gray-500 mb-6 italic">Ideales para familias y grupos</p>
                
                <div className="bg-brand-blue text-white p-6 rounded-2xl shadow-lg mb-8 inline-block transform -rotate-1">
                  <p className="text-sm uppercase tracking-wide opacity-90">Precio por persona</p>
                  <p className="text-5xl font-bold">{PRICING.apartment}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="text-brand-orange" /> Capacidad 4, 5 o 6 Personas
                  </li>
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="text-brand-orange" /> Zona Colón y La Perla
                  </li>
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="text-brand-orange" /> Cerca de las playas
                  </li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-700 mb-3 uppercase text-sm tracking-wider">Comodidades incluidas</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {AMENITIES_APT.map((am, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <am.icon size={16} className="text-brand-lightBlue" /> {am.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hotels */}
            <div className="relative group p-8 md:p-12 flex flex-col justify-center bg-brand-sand/30">
              <div className="absolute bottom-0 right-0 p-6 opacity-10">
                <BedDouble size={120} />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-brand-orange mb-2 flex items-center gap-3">
                  <BedDouble size={32} /> Hoteles 2 <Star size={24} fill="currentColor" />
                </h3>
                <p className="text-gray-500 mb-6 italic">Confort y servicio garantizado</p>

                <div className="bg-white text-brand-dark border-2 border-brand-orange p-6 rounded-2xl shadow-lg mb-8 inline-block transform rotate-1">
                  <p className="text-sm uppercase tracking-wide opacity-70">Base Doble desde</p>
                  <p className="text-5xl font-bold">{PRICING.hotel}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="text-brand-blue" /> Habitaciones Dobles y Triples
                  </li>
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="text-brand-blue" /> Servicio de mucama
                  </li>
                  <li className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="text-brand-blue" /> Baño Privado
                  </li>
                </ul>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-700 mb-3 uppercase text-sm tracking-wider">Servicios Destacados</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {AMENITIES_HOTEL.map((am, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <am.icon size={16} className="text-brand-orange" /> {am.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* --- PAGE 3: EXPERIENCE & CONTACT --- */}
      <Section className="bg-white print:break-after-auto">
        
        {/* Visual Break */}
        <div className="h-64 md:h-80 w-full relative">
          <img 
            src="https://picsum.photos/seed/mdqbeach/1920/600" 
            alt="La Playa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/80 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold text-center px-4">
              "El placer de viajar, <br/><span className="text-brand-orange italic">la alegría de llegar.</span>"
            </h2>
          </div>
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2">
           
           {/* Detailed Logistics */}
           <div className="p-12 bg-gray-50 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-brand-dark mb-8 border-l-8 border-brand-orange pl-4">
                Información de Salida
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md text-brand-blue">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-800">Días de Salida</h4>
                    <p className="text-gray-600 text-lg">Todos los <span className="font-bold text-brand-orange">Miércoles</span> y <span className="font-bold text-brand-orange">Domingos</span>.</p>
                    <p className="text-sm text-gray-500 mt-1">Temporada Verano 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md text-brand-blue">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-800">Punto de Encuentro</h4>
                    <p className="text-gray-600 text-lg">Terminal de Ómnibus de Tucumán</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md text-brand-blue">
                    <Bus size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-800">El Viaje</h4>
                    <p className="text-gray-600 text-lg">Unidades Semi-Cama de última generación.</p>
                    <p className="text-sm text-gray-500 mt-1">Coordinación permanente a bordo.</p>
                  </div>
                </div>
              </div>
           </div>

           {/* Contact Card */}
           <div className="p-12 bg-brand-dark text-white flex flex-col justify-center items-center text-center">
              <div className="mb-8">
                <Waves className="text-brand-lightBlue mx-auto mb-4" size={64} />
                <h3 className="text-4xl font-serif font-bold">Reserva tu Lugar</h3>
                <p className="text-brand-lightBlue mt-2 text-lg">Cupos limitados. Congela el precio hoy.</p>
              </div>

              <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-widest text-brand-orange mb-1">WhatsApp & Celular</p>
                  <p className="text-3xl font-bold">{CONTACT_INFO.phone}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm uppercase tracking-widest text-brand-orange mb-1">Dirección Comercial</p>
                  <p className="text-xl">{CONTACT_INFO.address}</p>
                  <p className="text-gray-300">{CONTACT_INFO.city}</p>
                </div>

                <div className="pt-6 border-t border-white/10">
                   <p className="text-sm text-gray-400">Aceptamos todos los medios de pago</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-brand-sand text-sm">Mi Destino Viajes</p>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default App;