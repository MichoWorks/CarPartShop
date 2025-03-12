import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  // קטגוריה: חלקי חילוף
  {
    id: 1,
    name: 'פילטר שמן Bosch',
    price: 60,
    description: 'פילטר שמן איכותי מבית Bosch לשמירה על מנוע נקי וביצועים גבוהים',
    image: 'assets/oil-filter-bosch.jpg',
    category: 'חלקי חילוף',
  },
  {
    id: 2,
    name: 'רפידות בלם Brembo',
    price: 250,
    description: 'רפידות בלם מבית Brembo המציעות בלימה שקטה ובטיחותית',
    image: 'assets/brake-pads-brembo.jpg',
    category: 'חלקי חילוף',
  },
  {
    id: 3,
    name: 'משאבת מים Aisin',
    price: 320,
    description: 'משאבת מים מקורית מבית Aisin לשמירה על מערכת הקירור ברכב',
    image: 'assets/water-pump-aisin.jpg',
    category: 'חלקי חילוף',
  },

  // קטגוריה: שמנים ונוזלים
  {
    id: 4,
    name: 'שמן מנוע Mobil 1 5W-30',
    price: 140,
    description: 'שמן מנוע סינטטי מלא מבית Mobil 1, מתאים לביצועים גבוהים',
    image: 'assets/engine-oil-mobil1.jpg',
    category: 'שמנים ונוזלים',
  },
  {
    id: 5,
    name: 'נוזל קירור Prestone',
    price: 55,
    description: 'נוזל קירור ירוק מבית Prestone להגנה על המנוע בכל תנאי מזג האוויר',
    image: 'assets/coolant-prestone.jpg',
    category: 'שמנים ונוזלים',
  },
  {
    id: 6,
    name: 'נוזל בלמים Castrol DOT-4',
    price: 45,
    description: 'נוזל בלמים מבית Castrol, מתאים לכלי רכב מודרניים',
    image: 'assets/brake-fluid-castrol.jpg',
    category: 'שמנים ונוזלים',
  },

  // קטגוריה: אקססוריז
  {
    id: 7,
    name: 'כיסוי מושבים Sparco',
    price: 280,
    description: 'כיסוי מושבים מבית Sparco, מעוצב ונוח לכל סוגי הרכבים',
    image: 'assets/seat-covers-sparco.jpg',
    category: 'אקססוריז',
  },
  {
    id: 8,
    name: 'שטיחים לרכב WeatherTech',
    price: 180,
    description: 'שטיחים עמידים מבית WeatherTech, מותאמים אישית לכל דגם רכב',
    image: 'assets/mats-weathertech.jpg',
    category: 'אקססוריז',
  },
  {
    id: 9,
    name: 'מחזיק טלפון מגנטי Baseus',
    price: 90,
    description: 'מחזיק טלפון מגנטי מבית Baseus, מושלם לשימוש בטוח ונוח בזמן נהיגה',
    image: 'assets/phone-holder-baseus.jpg',
    category: 'אקססוריז',
  },

  // קטגוריה: מצברים
  {
    id: 10,
    name: 'מצבר Exide 55Ah',
    price: 420,
    description: 'מצבר אמין מבית Exide עם קיבולת 55Ah לשימוש ברוב סוגי הרכבים',
    image: 'assets/battery-exide.jpg',
    category: 'מצברים',
  },
  {
    id: 11,
    name: 'מצבר Varta 72Ah',
    price: 630,
    description: 'מצבר מבית Varta עם קיבולת 72Ah לעמידות בתנאי שטח קשים',
    image: 'assets/battery-varta.jpg',
    category: 'מצברים',
  },

  // קטגוריה: רמקולים ומערכות שמע
  {
    id: 12,
    name: 'רמקולים Pioneer TS-G1620F',
    price: 320,
    description: 'רמקולים קדמיים מבית Pioneer עם סאונד איכותי ונקי',
    image: 'assets/speakers-pioneer.jpg',
    category: 'רמקולים ומערכות שמע',
  },
  {
    id: 13,
    name: 'סאב-וופר JBL Stage 1210',
    price: 850,
    description: 'סאב-וופר מבית JBL לחוויית שמע עוצמתית ומלאה',
    image: 'assets/subwoofer-jbl.jpg',
    category: 'רמקולים ומערכות שמע',
  },
  {
    id: 14,
    name: 'מגבר Alpine S-A32F',
    price: 780,
    description: 'מגבר 4 ערוצים מבית Alpine להגברת איכות השמע ברכב',
    image: 'assets/amplifier-alpine.jpg',
    category: 'רמקולים ומערכות שמע',
  },
];
