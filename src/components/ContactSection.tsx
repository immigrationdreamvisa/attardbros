import React, { useState } from 'react';
import { 
  ChevronDown, 
  CheckCircle2, 
  AlertCircle, 
  MoreHorizontal, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  Check
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    concern: '',
    name: '',
    surname: '',
    profile: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFormMenu, setShowFormMenu] = useState(false);

  const concernOptions = [
    'Materials (Concrete, Precast & Building Supplies)',
    'Projects (Civil, Commercial & Infrastructure Contracting)',
    'Properties (Residential & Commercial Living)',
    'Tenders & Project Estimations',
    'General Corporate Inquiry',
    'Careers & Human Resources'
  ];

  const profileOptions = [
    'Architect / Structural Engineer',
    'Property Developer / Real Estate Investor',
    'Main Contractor / Builder',
    'Private Client / Homeowner',
    'Commercial Enterprise / Business Owner',
    'Trade Supplier / Partner',
    'Other'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.concern) {
      newErrors.concern = 'Please select an option.';
    }
    if (!formData.name.trim()) {
      newErrors.name = 'This question is required.';
    }
    if (!formData.surname.trim()) {
      newErrors.surname = 'This question is required.';
    }
    if (!formData.profile) {
      newErrors.profile = 'Please select an option.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'This question is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'This question is required.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to the first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      concern: '',
      name: '',
      surname: '',
      profile: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] font-sans text-[#062746] min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Heading, Message, Head Office Info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#062746] tracking-tight leading-[1.05]">
                Contact
              </h1>
            </div>

            <div className="space-y-4 text-[16px] sm:text-[17px] text-[#344B62] leading-relaxed">
              <p>
                If you have any questions, don&rsquo;t hesitate to contact us.
              </p>
              <p>
                Kindly complete the form and we&rsquo;ll get in touch with you.
              </p>
            </div>

            {/* Head Office Details */}
            <div className="pt-4 space-y-4 border-t border-[#E8ECF0]">
              <h2 className="text-2xl sm:text-[26px] font-medium text-[#062746] tracking-tight">
                Head Office
              </h2>
              
              <div className="text-[15px] sm:text-[16px] text-[#344B62] leading-relaxed">
                <p>Attard Bros Group, Industrial Zone,</p>
                <p>Ta&rsquo; Qali, ATD 4000, Malta</p>
              </div>

              <div className="pt-2 space-y-1.5 text-[15px] sm:text-[16px] text-[#062746]">
                <p>
                  <a 
                    href="tel:+35621415332" 
                    className="hover:text-[#0055A5] transition-colors"
                  >
                    +356 21 415 332
                  </a>
                </p>
                <p>
                  <a 
                    href="mailto:info@attardbros.com" 
                    className="hover:text-[#0055A5] transition-colors"
                  >
                    info@attardbros.com
                  </a>
                </p>
              </div>

              {/* Quick Direction Badge */}
              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=Attard+Bros+Group+Ta+Qali+Malta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#547A9B] hover:text-[#062746] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card Exactly Matching Reference Screenshot */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#D5DCE2] rounded-[4px] shadow-sm overflow-hidden">
              
              {/* Form Card Header (Dark Navy with White Title and Three Dots) */}
              <div className="bg-[#002147] px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between relative">
                <h2 className="text-white text-lg sm:text-xl font-normal tracking-normal font-sans">
                  Contact Form
                </h2>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowFormMenu(!showFormMenu)}
                    className="text-white/80 hover:text-white p-1 rounded-sm transition-colors cursor-pointer"
                    aria-label="Form options"
                    title="Options"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </button>

                  {/* Form Options Dropdown */}
                  {showFormMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-xs py-1.5 z-20 text-xs text-[#062746]">
                      <div className="px-3 py-1.5 font-semibold text-gray-500 uppercase tracking-wider text-[10px]">
                        Attard Bros Group
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          handleReset();
                          setShowFormMenu(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-gray-100 transition-colors"
                      >
                        Clear form fields
                      </button>
                      <a
                        href="mailto:info@attardbros.com"
                        className="block px-3 py-1.5 hover:bg-gray-100 transition-colors"
                      >
                        Email support directly
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Form Body with Neutral Tint (#F0F2F5) */}
              <div className="bg-[#F0F2F5] p-6 sm:p-8 lg:p-10">
                {isSubmitted ? (
                  /* Success Confirmation Screen */
                  <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-14 h-14 bg-[#002147] text-white flex items-center justify-center mx-auto rounded-full shadow-md">
                      <Check className="w-8 h-8 text-[#00C853]" strokeWidth={3} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-medium text-[#062746]">
                        Thanks! Your response was submitted.
                      </h3>
                      <p className="text-sm text-[#344B62] max-w-md mx-auto leading-relaxed">
                        We have received your inquiry. Our team will review your details and contact you shortly.
                      </p>
                    </div>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 bg-[#002147] hover:bg-[#062746] text-white text-sm font-medium transition-colors cursor-pointer rounded-[3px] shadow-xs"
                      >
                        Submit another response
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-7">
                    
                    {/* Top Disclaimer from Reference */}
                    <div className="space-y-2">
                      <p className="text-xs sm:text-[13px] text-[#4A5568] leading-relaxed">
                        When you submit this form, it will not automatically collect your details like name and email address unless you provide it yourself.
                      </p>
                      <p className="text-xs text-[#E53E3E] font-medium">
                        * Required
                      </p>
                    </div>

                    {/* Question 1: My request concerns: * */}
                    <div id="field-concern" className="space-y-2">
                      <label className="block text-[15px] font-normal text-[#1A202C]">
                        1. My request concerns: <span className="text-[#E53E3E]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={formData.concern}
                          onChange={(e) => {
                            setFormData({ ...formData, concern: e.target.value });
                            if (errors.concern) setErrors({ ...errors, concern: '' });
                          }}
                          className={`w-full px-4 py-2.5 text-[14px] bg-white border ${
                            errors.concern ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'
                          } rounded-[2px] text-[#1A202C] focus:outline-hidden focus:border-[#002147] focus:ring-1 focus:ring-[#002147] appearance-none pr-10 cursor-pointer shadow-2xs transition-colors`}
                        >
                          <option value="" disabled>Select your answer</option>
                          {concernOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.concern && (
                        <p className="text-xs text-[#E53E3E] font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.concern}</span>
                        </p>
                      )}
                    </div>

                    {/* Question 2: Name * */}
                    <div id="field-name" className="space-y-2">
                      <label className="block text-[15px] font-normal text-[#1A202C]">
                        2. Name <span className="text-[#E53E3E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Enter your answer"
                        className={`w-full px-4 py-2.5 text-[14px] bg-white border ${
                          errors.name ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'
                        } rounded-[2px] text-[#1A202C] placeholder:text-gray-400 focus:outline-hidden focus:border-[#002147] focus:ring-1 focus:ring-[#002147] shadow-2xs transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-xs text-[#E53E3E] font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Question 3: Surname * */}
                    <div id="field-surname" className="space-y-2">
                      <label className="block text-[15px] font-normal text-[#1A202C]">
                        3. Surname <span className="text-[#E53E3E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.surname}
                        onChange={(e) => {
                          setFormData({ ...formData, surname: e.target.value });
                          if (errors.surname) setErrors({ ...errors, surname: '' });
                        }}
                        placeholder="Enter your answer"
                        className={`w-full px-4 py-2.5 text-[14px] bg-white border ${
                          errors.surname ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'
                        } rounded-[2px] text-[#1A202C] placeholder:text-gray-400 focus:outline-hidden focus:border-[#002147] focus:ring-1 focus:ring-[#002147] shadow-2xs transition-colors`}
                      />
                      {errors.surname && (
                        <p className="text-xs text-[#E53E3E] font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.surname}</span>
                        </p>
                      )}
                    </div>

                    {/* Question 4: Choose the profile that better defines you: * */}
                    <div id="field-profile" className="space-y-2">
                      <label className="block text-[15px] font-normal text-[#1A202C]">
                        4. Choose the profile that better defines you: <span className="text-[#E53E3E]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={formData.profile}
                          onChange={(e) => {
                            setFormData({ ...formData, profile: e.target.value });
                            if (errors.profile) setErrors({ ...errors, profile: '' });
                          }}
                          className={`w-full px-4 py-2.5 text-[14px] bg-white border ${
                            errors.profile ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'
                          } rounded-[2px] text-[#1A202C] focus:outline-hidden focus:border-[#002147] focus:ring-1 focus:ring-[#002147] appearance-none pr-10 cursor-pointer shadow-2xs transition-colors`}
                        >
                          <option value="" disabled>Select your answer</option>
                          {profileOptions.map((prof) => (
                            <option key={prof} value={prof}>{prof}</option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.profile && (
                        <p className="text-xs text-[#E53E3E] font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.profile}</span>
                        </p>
                      )}
                    </div>

                    {/* Question 5: Email address * */}
                    <div id="field-email" className="space-y-2">
                      <label className="block text-[15px] font-normal text-[#1A202C]">
                        5. Email address <span className="text-[#E53E3E]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="Enter your answer"
                        className={`w-full px-4 py-2.5 text-[14px] bg-white border ${
                          errors.email ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'
                        } rounded-[2px] text-[#1A202C] placeholder:text-gray-400 focus:outline-hidden focus:border-[#002147] focus:ring-1 focus:ring-[#002147] shadow-2xs transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-[#E53E3E] font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Question 6: Phone number */}
                    <div className="space-y-2">
                      <label className="block text-[15px] font-normal text-[#1A202C]">
                        6. Phone number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your answer"
                        className="w-full px-4 py-2.5 text-[14px] bg-white border border-[#CBD5E0] rounded-[2px] text-[#1A202C] placeholder:text-gray-400 focus:outline-hidden focus:border-[#002147] focus:ring-1 focus:ring-[#002147] shadow-2xs transition-colors"
                      />
                    </div>

                    {/* Question 7: Company / Organization */}
                    <div className="space-y-2">
                      <label className="block text-[15px] font-normal text-[#1A202C]">
                        7. Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enter your answer"
                        className="w-full px-4 py-2.5 text-[14px] bg-white border border-[#CBD5E0] rounded-[2px] text-[#1A202C] placeholder:text-gray-400 focus:outline-hidden focus:border-[#002147] focus:ring-1 focus:ring-[#002147] shadow-2xs transition-colors"
                      />
                    </div>

                    {/* Question 8: Message / Inquiry details * */}
                    <div id="field-message" className="space-y-2">
                      <label className="block text-[15px] font-normal text-[#1A202C]">
                        8. Message <span className="text-[#E53E3E]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="Enter your answer"
                        className={`w-full px-4 py-2.5 text-[14px] bg-white border ${
                          errors.message ? 'border-[#E53E3E]' : 'border-[#CBD5E0]'
                        } rounded-[2px] text-[#1A202C] placeholder:text-gray-400 focus:outline-hidden focus:border-[#002147] focus:ring-1 focus:ring-[#002147] shadow-2xs transition-colors resize-y`}
                      />
                      {errors.message && (
                        <p className="text-xs text-[#E53E3E] font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-2.5 bg-[#002147] hover:bg-[#062746] text-white text-[15px] font-medium transition-all cursor-pointer rounded-[3px] shadow-sm flex items-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
