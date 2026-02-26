import React from "react";


export default function ConsignmentCard() {
   
    const ConsignmentNumber = 5; // This will be replace, placed holder only for now hehehe
      
    return (
        <div className="dash-card overflow-hidden min-w-[200px] max-w-[260px] h-full flex flex-col">
            <div className="flex flex-col items-center justify-center text-center gap-3 p-5 flex-1">
                <h2 className="text-base font-semibold m-0" style={{ color: 'var(--color-near-black)' }}>
                    Total # of Consignments 
                </h2>
            
                <div className="dash-card-value text-2xl">{ConsignmentNumber}</div>
                <p className="text-sm m-0" style={{ color: 'var(--color-dark-slate)' }}>
                    Consignments on the way ( OTW, not checked by the WB)
                </p>
            </div>
        </div>
        );
      
};
