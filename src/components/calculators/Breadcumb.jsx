import React from 'react';



export function Breadcrumb({ items }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && (
              <span className="text-gray-400">/</span>
            )}
            <li>
              <a
                href={item.href}
                className={`
                  text-sm hover:text-rose-600 transition-colors
                  ${index === items.length - 1 ? 'text-gray-700' : 'text-gray-500'}
                `}
              >
                {item.label}
              </a>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}