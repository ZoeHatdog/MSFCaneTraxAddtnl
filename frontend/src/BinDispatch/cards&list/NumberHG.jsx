import React from 'react';


export default function NumberHG() {

    const NumberOfHG = 5; 


    return (
        <div className="dash-card overflow-hidden min-w-[200px] max-w-[280px] h-full flex flex-col">
        <div className="flex flex-col items-center text-center gap-3 p-5 flex-1">
            <h2 className="text-base font-semibold m-0" style={{ color: 'var(--color-near-black)' }}>
            Number of Active HG
            </h2>
            <div className="flex items-center justify-center w-20 h-20 rounded-full dash-card-icon-wrap">
                <span className="material-symbols-outlined">agriculture</span>
            </div>
            <div className="dash-card-value text-2xl">{NumberOfHG}</div>
            <p className="text-sm m-0" style={{ color: 'var(--color-dark-slate)' }}>
            Number of Harvest Groups 
            </p>
        </div>
        </div>
    );
}