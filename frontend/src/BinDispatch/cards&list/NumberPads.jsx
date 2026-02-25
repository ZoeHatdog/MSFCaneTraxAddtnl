import React from 'react';

function NumberPads() {

    const NumberOfPads = 10; 

    return (
        <div className="dash-card overflow-hidden min-w-[200px] max-w-[280px]">
        <div className="flex flex-col items-center text-center gap-3 p-5">
            <h2 className="text-base font-semibold m-0" style={{ color: 'var(--color-near-black)' }}>
            Number of Pads
            </h2>
            <div className="flex items-center justify-center w-20 h-20 rounded-full dash-card-icon-wrap">
            <span className="material-symbols-outlined">padding</span>
            </div>
            <div className="dash-card-value text-2xl">{NumberOfPads}</div>
            <p className="text-sm m-0" style={{ color: 'var(--color-dark-slate)' }}>
            Number of Pads 
            </p>
        </div>
        </div>
    );
};

export default NumberPads;