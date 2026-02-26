import React from 'react';
import { useState, useRef } from 'react';


const DummyTrucks = [
    { id: 1, truckName: 'TRUCK 1', DriverName: 'John Doe', truckLocation: 'TO X PAD' },
    { id: 2, truckName: 'TRUCK 2', DriverName: 'Jane Doe', truckLocation: 'TO X PAD' },
    { id: 3, truckName: 'TRUCK 3', DriverName: 'Jim Beam', truckLocation: 'TO X PAD' },
    { id: 4, truckName: 'TRUCK 4', DriverName: 'Mistle Doe', truckLocation: 'TO X PAD' },
    { id: 5, truckName: 'TRUCK 5', DriverName: 'Mary Jane', truckLocation: 'TO X PAD' },
]


function List1() {
    const ViewTruckInfo = useRef(null);  
    const [selectedTruck, setSelectedTruck] = useState(null);
    
    const handleViewTruckInfo = (truck) => {
        setSelectedTruck(truck);
        ViewTruckInfo.current.showModal();
    }



    return (
        

       
        <div className="max-h-80  rounded-box">
                 
            <dialog ref = {ViewTruckInfo} id = "ViewTruckInfo" className = "modal">
                    <div className="modal-box">
                        <form method = "dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    <h3 className="font-bold text-lg">
                        {selectedTruck?.truckName}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: 'var(--color-dark-slate)' }}>
                        Location: {selectedTruck?.truckLocation}
                    </p>
                    {selectedTruck?.DriverName && (
                      <p className="text-sm mt-2 pt-2 border-t border-base-200" style={{ color: 'var(--color-dark-slate)' }}>
                        Driver: {selectedTruck.DriverName}
                      </p>
                    )}
                    <div className="modal-action">
                        
                    </div>
                </div>
            </dialog>
            



            
            <ul className="list bg-base-100 rounded-box shadow-md max-h-60 overflow-y-auto">
            
            <li className="p-4 pb-2 text-md font-bold tracking-wide">Trucks en route to Pads</li>
            {/* Will fetch API for trucks en route to Mill or Pad when ready */}



            
            {DummyTrucks.map((truck) => (
                <li key={truck.id} className="list-row">
                    <div className="flex-shrink-0 w-10 text-center text-2xl font-thin tabular-nums" style={{ color: 'var(--color-dark-slate)', opacity: 0.5 }}>
                        {String(truck.id).padStart(2, '0')}
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg" style={{ background: 'rgba(0, 108, 69, 0.08)' }}>
                        <span className="material-symbols-outlined text-2xl" style={{ color: '#006c45' }}>local_shipping</span>
                    </div>
                    <div className="list-col-grow min-w-0">
                        <div className="font-semibold truncate" style={{ color: 'var(--color-near-black)' }}>{truck.truckName}</div>
                        <div className="text-xs uppercase font-medium truncate" style={{ color: 'var(--color-dark-slate)', opacity: 0.85 }}>{truck.truckLocation}</div>
                    </div>
                    <div className="flex-shrink-0 hidden sm:block max-w-[140px] min-w-0">
                        <div className="text-[10px] uppercase tracking-wide font-semibold opacity-70" style={{ color: 'var(--color-dark-slate)' }}>Driver</div>
                        <div className="text-sm truncate" style={{ color: 'var(--color-near-black)' }} title={truck.DriverName}>{truck.DriverName}</div>
                    </div>
                    <button type="button" className="btn btn-primary-theme btn-sm flex-shrink-0" onClick={() => handleViewTruckInfo(truck)}>View</button>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default List1;   