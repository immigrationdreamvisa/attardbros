import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Building2, ShieldCheck } from 'lucide-react';
import { DIVISIONS } from '../../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    divisionId: DIVISIONS[0].id,
    projectScale: '€1M - €5M',
    timeframe: 'Next 3 - 6 Months',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid corporate email is required.';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide brief details of your tender or project.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-2xl bg-white text-[#252525] border border-gray-200 shadow-2xl rounded-sm overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-gray-200 bg-[#002147] text-white">
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-wider uppercase font-semibold">
              Attard Bros Group
            </span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-gray-200 font-mono">
              DIRECTORATE CONSULTATION
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 bg-[#002147] text-white flex items-center justify-center mx-auto rounded-full shadow-md">
                <CheckCircle2 className="w-7 h-7 text-[#00C853]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#002147]">
                Consultation Brief Received
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you. A senior director from our executive estimating team will connect with your office within 24 hours to arrange an introductory technical briefing.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#002147] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#003366] transition-colors cursor-pointer rounded-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-[#002147]">
                  Request Private Tender Consultation
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Connect directly with our pre-construction directors, structural estimators, and division heads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Marcus Borg"
                    className={`w-full px-3.5 py-2.5 text-xs bg-gray-50 border ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
                    } text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs`}
                  />
                  {errors.fullName && (
                    <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1">
                    Organization / Architectural Firm
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Studio Foster & Partners"
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1">
                    Corporate Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="m.borg@firm.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-gray-50 border ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
                    } text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1">
                    Direct Telephone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+356 2141 5332"
                    className={`w-full px-3.5 py-2.5 text-xs bg-gray-50 border ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
                    } text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs`}
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1">
                    Primary Division
                  </label>
                  <select
                    value={formData.divisionId}
                    onChange={(e) => setFormData({ ...formData, divisionId: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 text-gray-900 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs cursor-pointer"
                  >
                    {DIVISIONS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1">
                    Estimated Project Budget / Scale
                  </label>
                  <select
                    value={formData.projectScale}
                    onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 text-gray-900 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs cursor-pointer"
                  >
                    <option>Under €1M (Specialist Joinery/Precast)</option>
                    <option>€1M - €5M (Commercial / Residential)</option>
                    <option>€5M - €20M (Major Contracting / Turnkey)</option>
                    <option>€20M+ (Landmark Infrastructure / EPC)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1">
                  Project Outline & Objectives <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the development location, stage of architectural drawings, and key requirements..."
                  className={`w-full px-3.5 py-2.5 text-xs bg-gray-50 border ${
                    errors.message ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
                  } text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs`}
                />
                {errors.message && (
                  <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 text-xs font-semibold uppercase tracking-wider text-gray-700 hover:bg-gray-100 transition-colors rounded-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#002147] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#003366] transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-60 rounded-xs shadow-xs"
                >
                  {isSubmitting ? (
                    <span>Scheduling Consultation...</span>
                  ) : (
                    <>
                      <span>Transmit Request</span>
                      <Send className="w-3.5 h-3.5 text-white/90" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
