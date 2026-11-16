/**
 * Centralized Configuration for The Quran Hub
 * 
 * To update the official WhatsApp phone number for the entire academy,
 * simply change the ACADEMY_CONFIG.whatsappNumber constant below.
 */

export const ACADEMY_CONFIG = {
  name: "The Quran Hub",
  arabicName: "مركز القرآن التعليمي",
  tagline: "Learn the Holy Quran with Confidence & Ease",
  
  // Official WhatsApp business number (country code + number, without + or spaces)
  whatsappNumber: "923059444336",
  
  // Default WhatsApp messages
  defaultWhatsAppMessage: "Assalamualaikum, I am interested in online Quran classes at The Quran Hub.",
  trialWhatsAppMessage: "Assalamualaikum, I would like to book a free 3-day Quran trial class with The Quran Hub.",
  
  email: "sabamumtazabbasi123@gmail.com",
  phoneDisplay: "+92 305 9444336",
  workingHours: "24/7 Global Time Zones (UK, USA, Canada, Europe, Middle East, Australia)",
  responseRate: "Average response within 15 minutes",
};

/**
 * Generates an encoded WhatsApp chat URL
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || ACADEMY_CONFIG.defaultWhatsAppMessage;
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${encodedText}`;
}

/**
 * Generates an encoded mailto URL for admissions inquiries
 */
export function getEmailUrl(subject: string, body: string): string {
  return `mailto:${ACADEMY_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
