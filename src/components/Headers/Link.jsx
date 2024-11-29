import React from 'react';

function Link({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-rose-600 transition-colors"
    >
      {children}
    </a>
  );
}

export default Link;
