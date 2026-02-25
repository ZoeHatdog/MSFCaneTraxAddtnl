import React from 'react';
import '../styles/dashstyle.css';

const BinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
    style={{ color: 'var(--color-primary)' }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    />
  </svg>
);

function TotalBins() {
  const totalBins = 0; // This will be replace, placed holder only for now hehehe

  return (
    <div className="dash-card overflow-hidden min-w-[200px] max-w-[260px]">
      <div className="flex flex-col items-center text-center gap-3 p-5">
        <h2 className="text-base font-semibold m-0" style={{ color: 'var(--color-near-black)' }}>
          Total Number of Bins (Mill)
        </h2>
        <div className="flex items-center justify-center w-20 h-20 rounded-full dash-card-icon-wrap">
          <BinIcon />
        </div>
        <div className="dash-card-value text-2xl">{totalBins}</div>
        <p className="text-sm m-0" style={{ color: 'var(--color-dark-slate)' }}>
          Total Bins inside the Mill
        </p>
      </div>
    </div>
  );
}

export default TotalBins;
