'use client';

import React from 'react';

type BannerProps = {
  id?: string;
};

export default function Banner({ id }: BannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const localStorageKey = id ? `banner-${id}` : null;

  React.useEffect(() => {
    if (localStorageKey) {
      setIsVisible(localStorage.getItem(localStorageKey) !== 'true');
    }
  }, [localStorageKey]);

  if (!isVisible) {
    return null;
  }

  const closeBanner = () => {
    if (localStorageKey) {
      localStorage.setItem(localStorageKey, 'true');
    }
    setIsVisible(false);
  };

  return (
    <>
      <div
        id={id}
        className="flex items-center justify-between gap-2 bg-red-500 px-2 py-0.5"
        style={{ display: isVisible ? 'flex' : 'none' }}
      >
        <span>Banner</span>
        {localStorageKey ? (
          <button className="font-bold" onClick={closeBanner}>
            X
          </button>
        ) : null}
      </div>
    </>
  );
}
