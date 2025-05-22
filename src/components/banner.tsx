'use client';

import React from 'react';

export default function Banner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-2 bg-red-500 px-2 py-0.5">
      <span>Banner</span>
      <button className="font-bold" onClick={() => setIsVisible(false)}>
        X
      </button>
    </div>
  );
}
