import { Wifi, Tv, Utensils, Coffee, MapPin, Bus, Calendar, Phone, Globe } from 'lucide-react';

export const CONTACT_INFO = {
  phone: "381-2479521",
  whatsappUrl: "https://wa.me/5493812479521",
  address: "Av. 24 de Septiembre y Salta",
  city: "San Miguel de Tucumán",
  website: "www.MiDestinoviajes.com"
};

export const PRICING = {
  apartment: "$450.000",
  hotel: "$450.000"
};

export const AMENITIES_APT = [
  { icon: Wifi, label: "WiFi de alta velocidad" },
  { icon: Tv, label: "TV por cable" },
  { icon: Utensils, label: "Cocina equipada" },
  { icon: Coffee, label: "Heladera y Microondas" },
];

export const AMENITIES_HOTEL = [
  { icon: Coffee, label: "Desayuno incluido" },
  { icon: Wifi, label: "WiFi en zonas comunes" },
  { icon: MapPin, label: "Ubicación céntrica" },
  { icon: Tv, label: "Habitaciones confortables" },
];

export const LOGISTICS = [
  { 
    icon: Calendar, 
    title: "Salidas", 
    desc: "Todos los Miércoles y Domingos" 
  },
  { 
    icon: Bus, 
    title: "Transporte", 
    desc: "Ida y vuelta desde Terminal de Tucumán" 
  },
  { 
    icon: MapPin, 
    title: "Destino", 
    desc: "Mar del Plata, Costa Atlántica" 
  }
];