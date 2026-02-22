
import React, { useState } from 'react';
import { 
  Phone, MapPin, ShieldCheck, Scissors, Palette,
  Calendar, User, ChevronRight, Clock, Check, X,
  Instagram, MessageSquare, Menu
} from 'lucide-react';
import { SERVICES, Appointment, ServiceItem, MASTERS, Master } from '../types';

interface LandingPageProps {
  onAdminLogin: () => void;
  onBooking: (app: Appointment) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onAdminLogin, onBooking }) => {
  const [bookingStep, setBookingStep] = useState(0); 
  const [activeTab, setActiveTab] = useState<'Мужчинам' | 'Женщинам'>('Мужчинам');
  const [selectedMaster, setSelectedMaster] = useState<Master | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '' });
  const [bookingCount, setBookingCount] = useState(0);

  React.useEffect(() => {
    const count = parseInt(localStorage.getItem('vibe_booking_count') || '0');
    setBookingCount(count);
  }, []);

  const CONTACT_PHONE = "89991792895";
  const DISPLAY_PHONE = "+7 (999) 179-28-95";

  // Время записи с 9:00 до 19:00
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const handleFinalBooking = () => {
    if (!selectedMaster || !selectedService || !selectedDate || !selectedTime || !customerInfo.name || !customerInfo.phone) return;
    
    const newBooking: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      customerName: customerInfo.name,
      phone: customerInfo.phone,
      service: selectedService.name,
      master: selectedMaster.name,
      date: selectedDate,
      time: selectedTime,
      status: 'pending',
      createdAt: Date.now()
    };
    
    onBooking(newBooking);
    
    const newCount = bookingCount + 1;
    setBookingCount(newCount);
    localStorage.setItem('vibe_booking_count', newCount.toString());
    
    setBookingStep(5);
  };

  const resetBooking = () => {
    setBookingStep(0);
    setSelectedMaster(null);
    setSelectedService(null);
    setSelectedDate('');
    setSelectedTime('');
    setCustomerInfo({ name: '', phone: '' });
  };

  const renderServicesByCategory = (category: 'Основные стрижки' | 'Стиль и уход' | 'Дополнительно') => {
    const filteredServices = SERVICES.filter(s => s.category === category && s.target === activeTab);
    if (filteredServices.length === 0) return null;

    const icon = category === 'Дополнительно' ? <Palette size={18} /> : <Scissors size={18} />;
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
           <span className="text-yellow-500">{icon}</span>
           <h3 className="text-2xl font-black uppercase tracking-widest">{category}</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {filteredServices.map(service => (
            <div 
              key={service.id} 
              className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-yellow-500/30 transition-all cursor-pointer"
              onClick={() => { setSelectedService(service); setBookingStep(3); }}
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h4 className="text-lg font-bold group-hover:text-yellow-500 transition-colors">{service.name}</h4>
                  <div className="flex-1 border-b border-white/5 border-dotted mx-2 hidden sm:block"></div>
                  <span className="text-xl font-black whitespace-nowrap">{service.priceDisplay}</span>
                </div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">{service.duration}</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                   <ChevronRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] selection:bg-yellow-500 selection:text-black pb-24 md:pb-0">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-yellow-500">ВАЙБ</span>
            <div className="h-4 w-[1px] bg-white/20 mx-2"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hidden sm:inline">Парикмахерская</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT_PHONE}`} className="hidden md:flex items-center gap-2 text-sm font-bold hover:text-yellow-500 transition-colors">
              <Phone size={14} className="text-yellow-500" /> {DISPLAY_PHONE}
            </a>
            <button onClick={onAdminLogin} className="p-2 text-white/20 hover:text-yellow-500 transition-colors">
              <ShieldCheck size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-12 animate-fade-in">
            <Check size={14} /> Только качественный сервис
          </div>
          
          <h1 className="font-black uppercase leading-[0.8] mb-10 tracking-tighter flex flex-col">
            <span className="text-6xl md:text-9xl animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">ВАЙБ</span>
            <span className="text-3xl sm:text-5xl md:text-7xl text-yellow-500 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] mt-4">ПАРИКМАХЕРСКАЯ</span>
          </h1>
          
          <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            Сочетаем профессионализм, уют и стиль. Стрижем, красим и создаем идеальное настроение для каждого клиента.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
            {bookingCount >= 5 ? (
              <div className="px-8 py-5 bg-white/5 border border-yellow-500/30 text-white rounded-2xl text-sm font-bold max-w-md">
                Вы уже оставили заявки. Если вам нужно записать еще кого-то или изменить время, пожалуйста, позвоните нам.
              </div>
            ) : (
              <button 
                onClick={() => setBookingStep(1)}
                className="px-12 py-5 bg-yellow-500 text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-yellow-500/20"
              >
                Забронировать визит
              </button>
            )}
            <a 
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-bold text-sm uppercase tracking-widest"
            >
              <Phone size={18} className="text-yellow-500" /> {DISPLAY_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-[#0d0d0e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Прайс-лист</h2>
            <p className="text-yellow-500/50 font-bold uppercase tracking-[0.4em] text-xs">Прозрачные цены на все услуги</p>
          </div>
          
          <div className="flex justify-center gap-2 md:gap-4 mb-16">
            <button 
              onClick={() => setActiveTab('Мужчинам')}
              className={`px-6 md:px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all ${activeTab === 'Мужчинам' ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
            >
              Мужской зал
            </button>
            <button 
              onClick={() => setActiveTab('Женщинам')}
              className={`px-6 md:px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all ${activeTab === 'Женщинам' ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
            >
              Женский зал
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {renderServicesByCategory('Основные стрижки')}
            {renderServicesByCategory('Стиль и уход')}
            <div className="lg:col-span-2">
              {renderServicesByCategory('Дополнительно')}
            </div>
          </div>
        </div>
      </section>

      {/* Info & Footer */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <div className="text-4xl font-black text-yellow-500 tracking-tighter">ВАЙБ</div>
            <p className="text-white/40 text-base leading-relaxed">
              Мы верим, что хорошая прическа — это не просто стрижка, а способ самовыражения. Ждем вас в нашем уютном пространстве.
            </p>
            <div className="flex gap-4">
              {[Instagram, MessageSquare].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/20">Контакты</h4>
            <div className="space-y-6">
              <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Звоните</p>
                  <p className="font-bold text-white group-hover:text-yellow-500 transition-colors">{DISPLAY_PHONE}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center">
                  <MapPin size={20} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Адрес</p>
                  <p className="font-bold text-white">ТД '5 Звёзд' 1 этаж, г. Кызыл</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/20">График</h4>
            <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-sm">Ежедневно</span>
                <span className="text-white font-bold">09:00 — 19:00</span>
              </div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 text-center">
              Только качественный сервис
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Booking Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 z-40 bg-black/80 backdrop-blur-xl border-t border-white/5">
        {bookingCount >= 5 ? (
          <a 
            href={`tel:${CONTACT_PHONE}`}
            className="flex items-center justify-center gap-2 w-full py-5 bg-white/10 text-white font-black uppercase tracking-[0.1em] rounded-2xl shadow-2xl active:scale-95 transition-all text-sm"
          >
            <Phone size={18} /> Позвонить для записи
          </a>
        ) : (
          <button 
            onClick={() => setBookingStep(1)}
            className="w-full py-5 bg-yellow-500 text-black font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl active:scale-95 transition-all"
          >
            Записаться
          </button>
        )}
      </div>

      {/* Booking Drawer */}
      {bookingStep > 0 && (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#111112] w-full max-w-lg md:rounded-3xl border-t md:border border-white/10 shadow-2xl animate-in slide-in-from-bottom-full md:slide-in-from-bottom-12 duration-500">
            
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">Запись онлайн</h2>
                <div className="flex gap-1 mt-1">
                   {[1,2,3,4].map(i => <div key={i} className={`h-1 rounded-full transition-all ${bookingStep >= i ? 'w-5 bg-yellow-500' : 'w-2 bg-white/10'}`}></div>)}
                </div>
              </div>
              <button onClick={resetBooking} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 max-h-[75vh] overflow-y-auto">
              {bookingStep === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <p className="text-xs font-black text-white/20 uppercase tracking-widest mb-4">Выберите мастера</p>
                  {MASTERS.map(m => (
                    <button 
                      key={m.id}
                      onClick={() => { setSelectedMaster(m); setBookingStep(2); }}
                      className={`w-full p-5 rounded-2xl border text-left flex justify-between items-center transition-all ${
                        selectedMaster?.id === m.id ? 'bg-yellow-500 border-yellow-500 text-black' : 'bg-white/5 border-white/5 hover:border-yellow-500/30'
                      }`}
                    >
                      <div>
                        <p className="font-bold text-lg tracking-wide mb-1 uppercase">{m.name}</p>
                        <p className={`text-[10px] font-bold ${selectedMaster?.id === m.id ? 'text-black/60' : 'text-white/40'} tracking-widest uppercase`}>{m.specialty}</p>
                      </div>
                      <ChevronRight size={20} className={selectedMaster?.id === m.id ? 'text-black' : 'text-white/20'} />
                    </button>
                  ))}
                </div>
              )}

              {bookingStep === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <p className="text-xs font-black text-white/20 uppercase tracking-widest mb-4">Выберите услугу</p>
                  
                  <div className="flex gap-2 mb-6 p-1 bg-white/5 rounded-xl">
                    <button 
                      onClick={() => setActiveTab('Мужчинам')} 
                      className={`flex-1 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'Мужчинам' ? 'bg-yellow-500 text-black shadow-md' : 'text-white/40 hover:text-white'}`}
                    >
                      Мужчинам
                    </button>
                    <button 
                      onClick={() => setActiveTab('Женщинам')} 
                      className={`flex-1 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'Женщинам' ? 'bg-yellow-500 text-black shadow-md' : 'text-white/40 hover:text-white'}`}
                    >
                      Женщинам
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
                    {SERVICES.filter(s => s.target === activeTab).map(s => (
                      <button 
                        key={s.id}
                        onClick={() => { setSelectedService(s); setBookingStep(3); }}
                        className={`w-full p-5 rounded-2xl border text-left flex justify-between items-center transition-all ${
                          selectedService?.id === s.id ? 'bg-yellow-500 border-yellow-500 text-black' : 'bg-white/5 border-white/5 hover:border-yellow-500/30'
                        }`}
                      >
                        <div>
                          <p className="font-bold text-sm tracking-wide mb-1 uppercase">{s.name}</p>
                          <p className={`text-[10px] font-bold ${selectedService?.id === s.id ? 'text-black/60' : 'text-white/20'} tracking-widest uppercase`}>{s.category}</p>
                        </div>
                        <div className="text-lg font-black">{s.priceDisplay}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                  <div>
                    <label className="text-xs font-black text-white/20 uppercase tracking-widest mb-4 block">Дата визита</label>
                    <input 
                      type="date" 
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold focus:border-yellow-500 outline-none"
                      onChange={(e) => { setSelectedDate(e.target.value); setSelectedTime(''); }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-black text-white/20 uppercase tracking-widest mb-4 block">Время</label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map(t => {
                        let isPast = false;
                        if (selectedDate) {
                          const now = new Date();
                          const selectedDateTime = new Date(`${selectedDate}T${t}:00`);
                          if (selectedDateTime < now) {
                            isPast = true;
                          }
                        }

                        return (
                          <button 
                            key={t}
                            disabled={isPast || !selectedDate}
                            onClick={() => setSelectedTime(t)}
                            className={`py-4 rounded-2xl text-sm font-bold transition-all border ${
                              selectedTime === t ? 'bg-yellow-500 border-yellow-500 text-black' : 
                              isPast || !selectedDate ? 'bg-white/5 border-white/5 opacity-30 cursor-not-allowed' : 'bg-white/5 border-white/5 hover:border-yellow-500/30'
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <button 
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setBookingStep(4)}
                    className="w-full py-5 bg-white/5 hover:bg-yellow-500 hover:text-black disabled:opacity-30 rounded-2xl text-xs font-black uppercase tracking-[0.3em] transition-all"
                  >
                    Далее
                  </button>
                </div>
              )}

              {bookingStep === 4 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                   <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10">
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Ваша запись</p>
                      <p className="text-xl font-black uppercase text-yellow-500">{selectedService?.name}</p>
                      <p className="text-sm font-bold mt-2 text-white/80">Мастер: {selectedMaster?.name}</p>
                      <p className="text-sm font-bold mt-1 text-white/80">{selectedDate} в {selectedTime}</p>
                   </div>
                   
                   <div className="space-y-5">
                      <input 
                        type="text" 
                        placeholder="Ваше имя"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 focus:border-yellow-500 outline-none transition-all"
                      />
                      <input 
                        type="tel" 
                        placeholder="+7 (999) 000-00-00"
                        value={customerInfo.phone}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, '');
                          if (val.startsWith('7') || val.startsWith('8')) {
                            val = val.substring(1);
                          }
                          let formatted = '';
                          if (val.length > 0) {
                            formatted = '+7';
                            if (val.length > 0) formatted += ` (${val.substring(0, 3)}`;
                            if (val.length >= 4) formatted += `) ${val.substring(3, 6)}`;
                            if (val.length >= 7) formatted += `-${val.substring(6, 8)}`;
                            if (val.length >= 9) formatted += `-${val.substring(8, 10)}`;
                          }
                          setCustomerInfo({...customerInfo, phone: formatted});
                        }}
                        maxLength={18}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 focus:border-yellow-500 outline-none transition-all"
                      />
                   </div>
                   
                   <button 
                    disabled={!customerInfo.name || customerInfo.phone.length < 18}
                    onClick={handleFinalBooking}
                    className="w-full py-6 bg-yellow-500 text-black font-black uppercase tracking-[0.3em] rounded-2xl shadow-xl active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100"
                  >
                    Подтвердить
                  </button>
                </div>
              )}

              {bookingStep === 5 && (
                <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                  <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                    <Check className="text-green-500" size={48} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Готово!</h3>
                  <p className="text-white/40 text-base mb-10 px-6">Запись создана. Мы свяжемся с вами для подтверждения. До встречи!</p>
                  <button 
                    onClick={resetBooking}
                    className="w-full py-5 bg-white/5 hover:bg-white/10 rounded-2xl text-xs font-black uppercase tracking widest"
                  >
                    Закрыть
                  </button>
                </div>
              )}
            </div>

            {bookingStep > 1 && bookingStep < 5 && (
              <div className="px-6 pb-8 text-center">
                <button onClick={() => setBookingStep(prev => prev - 1)} className="text-[10px] font-black uppercase text-white/20 hover:text-white transition-colors tracking-widest">
                  Вернуться назад
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
