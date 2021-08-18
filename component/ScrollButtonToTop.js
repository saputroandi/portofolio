import React, { useState } from 'react';

export default function ScrollButtonToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 514) {
      setVisible(true);
    } else if (scrolled <= 514) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible);
  }
  return (
    <div
      className="scroll"
      style={{ display: visible ? 'inline' : 'none' }}
      onClick={() => scrollToTop()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="scroll-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
        />
      </svg>
    </div>
  );
}
