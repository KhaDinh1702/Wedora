import React from 'react';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-neutral-950 text-neutral-100">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Wedora Frontend
        </h1>
        <p className="mt-4 text-neutral-400">
          Clean blank template ready for development.
        </p>
      </div>
    </main>
  );
}
