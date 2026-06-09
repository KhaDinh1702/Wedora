import React from 'react';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <div className="z-10 max-w-lg w-full p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl text-center">
        
        {/* Dynamic Glowing Accent */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-pulse flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Wedora Frontend
        </h1>

        <p className="mt-3 text-sm text-slate-400">
          Cấu trúc Next.js đã được thiết lập thành công.
        </p>

        {/* Action Button for interaction */}
        <div className="mt-8">
          <button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all shadow-md shadow-indigo-600/20">
            Khám phá ngay
          </button>
        </div>
      </div>
    </main>
  );
}
