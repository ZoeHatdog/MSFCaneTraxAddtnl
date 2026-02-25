import React from 'react';
import '../styles/dashstyle.css';

function AvgMillThr() {
  const avgMillThr = 0; 

  return (
    <div className="dash-card overflow-hidden min-w-[200px] max-w-[280px]">
      <div className="flex flex-col items-center text-center gap-3 p-5">
        <h2 className="text-base font-semibold m-0" style={{ color: 'var(--color-near-black)' }}>
          Average Mill Throughput
        </h2>
        <div className="flex items-center justify-center w-20 h-20 rounded-full dash-card-icon-wrap">
          <span className="material-symbols-outlined">speed</span>
        </div>
        <div className="dash-card-value text-2xl">{avgMillThr}</div>
        <p className="text-sm m-0" style={{ color: 'var(--color-dark-slate)' }}>
          Average Mill Throughput
        </p>
      </div>
    </div>
  );
}

export default AvgMillThr;
