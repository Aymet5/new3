
import React, { useState } from 'react';
// Fixed: Changed ServiceType to ServiceItem as suggested by the compiler error, correcting the import from '../types'
import { Appointment, ServiceItem } from '../types';
import { CheckCircle, XCircle, Clock, Search, LogOut, LayoutDashboard } from 'lucide-react';

interface AdminDashboardProps {
  appointments: Appointment[];
  onUpdate: (id: string, updates: Partial<Appointment>) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ appointments, onUpdate, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed'>('all');

  const filtered = appointments
    .filter(app => {
      if (filter !== 'all' && app.status !== filter) return false;
      return (
        app.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.phone.includes(searchTerm)
      );
    })
    .sort((a, b) => b.createdAt - a.createdAt);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-500';
      case 'completed': return 'text-blue-500';
      case 'cancelled': return 'text-red-500';
      default: return 'text-yellow-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-accent flex items-center justify-center rounded-xl">
              <LayoutDashboard className="text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tight">VIBE ADMIN</h1>
              <p className="text-[#666] text-sm font-bold tracking-widest uppercase">Управление записями</p>
            </div>
          </div>
          
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-6 py-2 border border-[#333] rounded-lg hover:border-red-500 hover:text-red-500 transition-all font-bold text-xs uppercase"
          >
            <LogOut size={16} /> Выйти
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
            <p className="text-[#666] text-xs font-bold uppercase mb-2">Всего записей</p>
            <p className="text-4xl font-black">{appointments.length}</p>
          </div>
          <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
            <p className="text-yellow-500 text-xs font-bold uppercase mb-2">Ожидают</p>
            <p className="text-4xl font-black">{appointments.filter(a => a.status === 'pending').length}</p>
          </div>
          <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
            <p className="text-green-500 text-xs font-bold uppercase mb-2">Подтверждено</p>
            <p className="text-4xl font-black">{appointments.filter(a => a.status === 'confirmed').length}</p>
          </div>
          <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
            <p className="text-blue-500 text-xs font-bold uppercase mb-2">Завершено</p>
            <p className="text-4xl font-black">{appointments.filter(a => a.status === 'completed').length}</p>
          </div>
        </div>

        <div className="bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444]" size={18} />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск по имени или телефону..."
                className="w-full bg-black border border-[#222] rounded-xl p-3 pl-10 focus:outline-none focus:border-yellow-accent"
              />
            </div>
            
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {(['all', 'pending', 'confirmed', 'completed'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    filter === f ? 'bg-yellow-accent text-black' : 'bg-[#222] text-[#666] hover:bg-[#333]'
                  }`}
                >
                  {f === 'all' ? 'Все' : f === 'pending' ? 'Ожидают' : f === 'confirmed' ? 'Одобрено' : 'Готово'}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#1a1a1a] text-[#666] text-xs font-black uppercase tracking-widest border-b border-[#222]">
                  <th className="px-6 py-4">Клиент</th>
                  <th className="px-6 py-4">Услуга</th>
                  <th className="px-6 py-4">Дата / Время</th>
                  <th className="px-6 py-4">Статус</th>
                  <th className="px-6 py-4 text-right">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222]">
                {filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-6">
                      <p className="font-bold text-lg">{app.customerName}</p>
                      <p className="text-[#666] font-mono">{app.phone}</p>
                    </td>
                    <td className="px-6 py-6">
                      <span className="bg-[#222] px-3 py-1 rounded-full text-xs font-bold text-gray-400 uppercase">
                        {app.service}
                      </span>
                      <p className="text-xs text-[#666] mt-2 font-bold uppercase">Мастер: <span className="text-white">{app.master}</span></p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock size={14} className="text-yellow-accent" />
                        <span>{new Date(app.date).toLocaleDateString('ru-RU')} • {app.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className={`text-xs font-black uppercase tracking-widest ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        {app.status === 'pending' && (
                          <button 
                            onClick={() => onUpdate(app.id, { status: 'confirmed' })}
                            className="p-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all"
                            title="Подтвердить"
                          >
                            <CheckCircle size={20} />
                          </button>
                        )}
                        {app.status === 'confirmed' && (
                          <button 
                            onClick={() => onUpdate(app.id, { status: 'completed' })}
                            className="p-2 bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                            title="Завершить"
                          >
                            <CheckCircle size={20} />
                          </button>
                        )}
                        {app.status !== 'cancelled' && (
                          <button 
                            onClick={() => onUpdate(app.id, { status: 'cancelled' })}
                            className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                            title="Отменить"
                          >
                            <XCircle size={20} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center text-[#444] font-bold uppercase tracking-widest">
                      Записей не найдено
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
