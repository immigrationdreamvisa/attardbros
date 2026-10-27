import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-3xl bg-[#F5F2EC] text-[#252525] border border-[#D9D3C8] shadow-2xl overflow-hidden my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9D3C8] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#A58B65]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#243B32]">
              {isPrivacy ? 'Corporate Privacy & GDPR Policy' : 'Terms & Conditions of Engagement'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#252525]/70 hover:text-[#243B32] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-[#252525]/85 leading-relaxed">
          {isPrivacy ? (
            <>
              <div>
                <h3 className="font-serif-title text-2xl text-[#243B32] mb-2 font-normal">
                  Privacy Policy & Data Protection Notice
                </h3>
                <p className="text-[#A58B65] text-xs font-mono">Last updated: October 2026</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#243B32] uppercase tracking-wider text-xs">
                  1. Data Collection & Processing
                </h4>
                <p>
                  Valmont Group Holdings Ltd and its subsidiaries collect information provided via our online tender inquiries, recruitment portal, and consultation requests. We process personal details solely for project evaluation, engineering correspondence, and statutory obligations.
                </p>

                <h4 className="font-semibold text-[#243B32] uppercase tracking-wider text-xs">
                  2. Commercial Confidentiality
                </h4>
                <p>
                  All project drawings, tenders, and site specifications submitted to Valmont Group are bound by strict corporate confidentiality in compliance with European GDPR standards and international engineering governance.
                </p>

                <h4 className="font-semibold text-[#243B32] uppercase tracking-wider text-xs">
                  3. Contacting the Data Protection Officer
                </h4>
                <p>
                  For inquiries regarding your personal data or to request record deletion, please contact: <span className="font-semibold text-[#243B32]">dpo@valmontgroup.com</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="font-serif-title text-2xl text-[#243B32] mb-2 font-normal">
                  Terms & Conditions of Commercial Engagement
                </h3>
                <p className="text-[#A58B65] text-xs font-mono">Last updated: October 2026</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-[#243B32] uppercase tracking-wider text-xs">
                  1. Scope of Corporate Information
                </h4>
                <p>
                  Content published on this website is for informational and preliminary commercial purposes. Detailed engineering specifications, batch certifications, and contractual scopes are governed strictly by formal FIDIC or standard European construction contracts executed between the parties.
                </p>

                <h4 className="font-semibold text-[#243B32] uppercase tracking-wider text-xs">
                  2. Intellectual Property & Architectural Rights
                </h4>
                <p>
                  All architectural photography, structural calculations, BIM render models, and brand assets of Valmont Group remain the exclusive intellectual property of Valmont Group Holdings Ltd.
                </p>

                <h4 className="font-semibold text-[#243B32] uppercase tracking-wider text-xs">
                  3. Tender Submissions & Preliminary Estimates
                </h4>
                <p>
                  Preliminary budget estimations and online consultation requests do not constitute binding tender guarantees until formal site surveys and verified bill of quantities (BOQ) are finalized.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center justify-end px-6 py-4 border-t border-[#D9D3C8] bg-[#EBE7DF]">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#243B32] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider hover:bg-[#192A23] transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
