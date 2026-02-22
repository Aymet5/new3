
export interface Appointment {
  id: string;
  customerName: string;
  phone: string;
  service: string;
  master: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: number;
}

export interface Master {
  id: string;
  name: string;
  specialty: string;
}

export const MASTERS: Master[] = [
  { id: '1', name: 'Айдыс', specialty: 'Мастер мужских и женских стрижек' },
  { id: '2', name: 'Кежик', specialty: 'Мастер мужских стрижек' },
  { id: '3', name: 'Айдемир', specialty: 'Мастер мужских стрижек' },
  { id: '4', name: 'Менги', specialty: 'Мастер мужских стрижек' },
  { id: '5', name: 'Сулде', specialty: 'Мастер мужских стрижек' },
];

export interface ServiceItem {
  id: string;
  target: 'Мужчинам' | 'Женщинам';
  category: 'Основные стрижки' | 'Стиль и уход' | 'Дополнительно';
  name: string;
  priceDisplay: string;
  priceValue: number;
  duration: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  // МУЖСКИЕ - ОСНОВНЫЕ СТРИЖКИ
  { id: 'm1', target: 'Мужчинам', category: 'Основные стрижки', name: 'Спортивная', priceDisplay: '500 р', priceValue: 500, duration: '30 мин', description: 'Короткая и практичная мужская стрижка.' },
  { id: 'm2', target: 'Мужчинам', category: 'Основные стрижки', name: 'Бокс', priceDisplay: '500 р', priceValue: 500, duration: '30 мин', description: 'Классическая короткая стрижка с открытым затылком.' },
  { id: 'm3', target: 'Мужчинам', category: 'Основные стрижки', name: 'Полубокс', priceDisplay: '500 р', priceValue: 500, duration: '40 мин', description: 'Плавный переход и удлиненная челка.' },
  { id: 'm4', target: 'Мужчинам', category: 'Основные стрижки', name: 'Наголо', priceDisplay: '250 р', priceValue: 250, duration: '15 мин', description: 'Стрижка машинкой под ноль.' },
  { id: 'm5', target: 'Мужчинам', category: 'Основные стрижки', name: 'Под одну насадку', priceDisplay: '350 р', priceValue: 350, duration: '20 мин', description: 'Равномерная длина волос по всей голове.' },
  { id: 'm6', target: 'Мужчинам', category: 'Основные стрижки', name: 'Модельная', priceDisplay: '600 р', priceValue: 600, duration: '45 мин', description: 'Стрижка с учетом индивидуальных особенностей.' },

  // МУЖСКИЕ - СТИЛЬ И УХОД
  { id: 'm10', target: 'Мужчинам', category: 'Стиль и уход', name: 'Теннис', priceDisplay: '600 р', priceValue: 600, duration: '45 мин', description: 'Аккуратная стрижка средней длины.' },
  { id: 'm11', target: 'Мужчинам', category: 'Стиль и уход', name: 'Канадка', priceDisplay: '600 р', priceValue: 600, duration: '45 мин', description: 'Объемная челка и короткие виски.' },
  { id: 'm12', target: 'Мужчинам', category: 'Стиль и уход', name: 'Кроп', priceDisplay: '600 р', priceValue: 600, duration: '45 мин', description: 'Текстурная стрижка с ровной челкой.' },
  { id: 'm13', target: 'Мужчинам', category: 'Стиль и уход', name: 'Маллет', priceDisplay: '700 р', priceValue: 700, duration: '60 мин', description: 'Стильная стрижка с удлиненным затылком.' },
  { id: 'm14', target: 'Мужчинам', category: 'Стиль и уход', name: 'Каре', priceDisplay: '700 р', priceValue: 700, duration: '60 мин', description: 'Классическое каре для идеального силуэта.' },

  // МУЖСКИЕ - ДОПОЛНИТЕЛЬНО
  { id: 'm20', target: 'Мужчинам', category: 'Дополнительно', name: 'Мытье', priceDisplay: '100 р', priceValue: 100, duration: '10 мин', description: 'Мытье головы с профессиональным шампунем.' },
  { id: 'm21', target: 'Мужчинам', category: 'Дополнительно', name: 'Окрашивание', priceDisplay: '500 р', priceValue: 500, duration: '60 мин', description: 'Базовое окрашивание волос.' },
  { id: 'm22', target: 'Мужчинам', category: 'Дополнительно', name: 'Пилинг головы', priceDisplay: '300 р', priceValue: 300, duration: '20 мин', description: 'Глубокое очищение кожи головы.' },
  { id: 'm23', target: 'Мужчинам', category: 'Дополнительно', name: 'Блондирование', priceDisplay: '1500 р', priceValue: 1500, duration: '120 мин', description: 'Осветление волос.' },
  { id: 'm24', target: 'Мужчинам', category: 'Дополнительно', name: 'Карвинг', priceDisplay: '1500 р', priceValue: 1500, duration: '120 мин', description: 'Долговременная укладка волос.' },

  // ЖЕНСКИЕ - ОСНОВНЫЕ СТРИЖКИ
  { id: 'w1', target: 'Женщинам', category: 'Основные стрижки', name: 'Модельная', priceDisplay: '700 р', priceValue: 700, duration: '45 мин', description: 'Стрижка с учетом индивидуальных особенностей.' },
  { id: 'w2', target: 'Женщинам', category: 'Основные стрижки', name: 'Каре', priceDisplay: '1000 р', priceValue: 1000, duration: '60 мин', description: 'Классическое каре для идеального силуэта.' },
  { id: 'w3', target: 'Женщинам', category: 'Основные стрижки', name: 'Каскад', priceDisplay: '1500 р', priceValue: 1500, duration: '60 мин', description: 'Стрижка слоями для объема.' },
  { id: 'w4', target: 'Женщинам', category: 'Основные стрижки', name: 'Подравнивание', priceDisplay: '500 р', priceValue: 500, duration: '20 мин', description: 'Подравнивание кончиков волос.' },
  { id: 'w5', target: 'Женщинам', category: 'Основные стрижки', name: 'Лесенка', priceDisplay: '1500 р', priceValue: 1500, duration: '60 мин', description: 'Стрижка с плавным переходом длины.' },
  { id: 'w6', target: 'Женщинам', category: 'Основные стрижки', name: 'Челка', priceDisplay: 'от 200 р', priceValue: 200, duration: '15 мин', description: 'Стрижка или коррекция челки.' },

  // ЖЕНСКИЕ - ДОПОЛНИТЕЛЬНО (ВИД УСЛУГИ)
  { id: 'w20', target: 'Женщинам', category: 'Дополнительно', name: 'Тонирование', priceDisplay: 'от 2000 р', priceValue: 2000, duration: '60 мин', description: 'Придание оттенка волосам.' },
  { id: 'w21', target: 'Женщинам', category: 'Дополнительно', name: 'Мелирование', priceDisplay: 'от 4000 р', priceValue: 4000, duration: '120 мин', description: 'Осветление отдельных прядей.' },
  { id: 'w22', target: 'Женщинам', category: 'Дополнительно', name: 'С техникой', priceDisplay: 'от 5000 р', priceValue: 5000, duration: '180 мин', description: 'Сложное окрашивание с использованием техник.' },
  { id: 'w23', target: 'Женщинам', category: 'Дополнительно', name: 'Блондирование', priceDisplay: 'от 4000 р', priceValue: 4000, duration: '120 мин', description: 'Осветление волос.' },
  { id: 'w24', target: 'Женщинам', category: 'Дополнительно', name: 'Покраска с вашей краской', priceDisplay: 'от 1500 р', priceValue: 1500, duration: '60 мин', description: 'Окрашивание краской клиента.' },
];
