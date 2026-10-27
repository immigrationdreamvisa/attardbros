import React, { useState } from 'react';
import { X, Upload, CheckCircle2, AlertCircle, FileText, Send, MapPin, Briefcase } from 'lucide-react';
import { CareerOpportunity, CAREER_OPPORTUNITIES } from '../../data/companyData';

interface CareerModalProps {
  job: CareerOpportunity | null;
  onClose: () => void;
}

export const CareerModal: React.FC<CareerModalProps> = ({ job, onClose }) => {
  const [selectedJob, setSelectedJob] = useState<CareerOpportunity | null>(
    job || CAREER_OPPORTUNITIES[0]
  );

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '5-8 Years',
    portfolioUrl: '',
    coverNote: ''
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      if (errors.cv) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.cv;
          return next;
        });
      }
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email.';
    }
    if (!formData.phone.trim()) errs.phone = 'Contact number is required.';
    if (!uploadedFile) {
      errs.cv = 'Please attach your CV / Resume document (PDF, DOCX).';
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
    }, 850);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-3xl bg-white text-[#252525] border border-gray-200 shadow-2xl rounded-sm overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-gray-200 bg-[#002147] text-white">
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-wider uppercase font-semibold">
              Attard Bros Group
            </span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-gray-200 font-mono">
              TALENT & CAREERS
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {selectedJob && (
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-[#002147] uppercase tracking-wider">
                  {selectedJob.department}
                </span>
                <span className="text-xs font-mono text-gray-500">
                  {selectedJob.type} · {selectedJob.location}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#002147]">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {selectedJob.overview}
              </p>
            </div>
          )}

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-[#002147] text-white flex items-center justify-center mx-auto rounded-full shadow-md">
                <CheckCircle2 className="w-7 h-7 text-[#00C853]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#002147]">
                Application Submitted Successfully
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you for applying to Attard Bros Group. Our People & Culture team and Department Director will review your dossier and contact qualified candidates within 5 business days.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#002147] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#003366] transition-colors cursor-pointer rounded-xs"
                >
                  Return to Careers
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1.5">
                  Applying For Role
                </label>
                <select
                  value={selectedJob?.id}
                  onChange={(e) => {
                    const found = CAREER_OPPORTUNITIES.find((j) => j.id === e.target.value);
                    if (found) setSelectedJob(found);
                  }}
                  className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 text-gray-900 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs cursor-pointer"
                >
                  {CAREER_OPPORTUNITIES.map((j) => (
                    <option key={j.id} value={j.id}>
                      {j.title} ({j.department})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Helena Vance"
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
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1.5">
                    Corporate Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. h.vance@studio.com"
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1.5">
                    Direct Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +356 7912 3456"
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

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1.5">
                    LinkedIn / Portfolio (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs"
                  />
                </div>
              </div>

              {/* File Upload Box */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1.5">
                  Curriculum Vitae / Resume Dossier <span className="text-red-500">*</span>
                </label>
                <div
                  className={`border-2 border-dashed p-6 text-center transition-colors rounded-xs ${
                    errors.cv ? 'border-red-400 bg-red-50/20' : 'border-gray-300 hover:border-[#002147] bg-gray-50/60'
                  }`}
                >
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer block">
                    {uploadedFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <FileText className="w-7 h-7 text-[#002147]" />
                        <div className="text-left">
                          <div className="text-xs font-semibold text-[#002147]">
                            {uploadedFile.name}
                          </div>
                          <div className="text-[10px] text-gray-500">
                            {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB · Click to replace
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <Upload className="w-6 h-6 text-[#002147] mx-auto opacity-70" />
                        <div className="text-xs text-gray-700">
                          <span className="font-semibold text-[#002147]">Click to select CV document</span> or drag & drop
                        </div>
                        <p className="text-[10px] text-gray-500">
                          PDF, DOCX formats supported (Max 15MB)
                        </p>
                      </div>
                    )}
                  </label>
                </div>
                {errors.cv && (
                  <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.cv}</span>
                  </p>
                )}
              </div>

              {/* Cover Note */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#002147] mb-1.5">
                  Cover Note / Professional Highlights (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  placeholder="Share a brief overview of relevant major projects, certifications, or craftsmanship background..."
                  className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10 transition-all rounded-xs"
                />
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
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Transmit Application</span>
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
