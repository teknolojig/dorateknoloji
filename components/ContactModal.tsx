'use client';

import { X, User, Phone, Mail, Building2, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#122942] to-[#1a3a5a] text-white px-8 py-6 rounded-t-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-2">Teklif Alın</h2>
            <p className="text-gray-200">Size en kısa sürede dönüş yapacağız</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Yetkili Adı *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#122942] transition-colors">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#122942] focus:outline-none transition-colors"
                placeholder="Adınız ve soyadınız"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Telefon *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#122942] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#122942] focus:outline-none transition-colors"
                placeholder="0555 123 45 67"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#122942] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#122942] focus:outline-none transition-colors"
                placeholder="ornek@email.com"
              />
            </div>
          </div>

          {/* Company Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Firma Adı *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#122942] transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#122942] focus:outline-none transition-colors"
                placeholder="Firma adınız"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mesajınız
            </label>
            <div className="relative">
              <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#122942] transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#122942] focus:outline-none transition-colors resize-none"
                placeholder="Projeniz hakkında detaylı bilgi verin..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-4 bg-[#122942] text-white rounded-lg font-semibold hover:bg-[#1a3a5a] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
