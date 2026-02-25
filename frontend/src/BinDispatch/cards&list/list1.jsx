import react from 'react';
import { useState, useRef } from 'react';


const DummyTrucks = [
    { id: 1, truckName: 'TRUCK 1', truckLocation: 'TO X PAD' },
    { id: 2, truckName: 'TRUCK 2', truckLocation: 'TO X PAD' },
    { id: 3, truckName: 'TRUCK 3', truckLocation: 'TO X PAD' },
    { id: 4, truckName: 'TRUCK 4', truckLocation: 'TO X PAD' },
    { id: 5, truckName: 'TRUCK 5', truckLocation: 'TO X PAD' },
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
                        Truck Name: {selectedTruck?.truckName}
                    </h3>
                    <p className="py-2">
                        Truck Location: {selectedTruck?.truckLocation}
                    </p>

                    <div className="modal-action">
                        
                    </div>
                </div>
            </dialog>
            



            
            <ul className="list bg-base-100 rounded-box shadow-md max-h-60 overflow-y-auto">
            
            <li className="p-4 pb-2 text-md font-bold tracking-wide">Trucks en route to Pads</li>
            {/* Will fetch API for trucks en route to Mill or Pad when ready */}



            
            {DummyTrucks.map((truck) => (
                <li key={truck.id} className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">
                        {String(truck.id).padStart(2, '0')}
                    </div>
                    <div><span className="material-symbols-outlined size-10 rounded-box justify-center items-center">local_shipping</span></div>
                    <div className="list-col-grow">
                        <div>{truck.truckName}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">{truck.truckLocation}</div>
                    </div>
                    <button className="btn btn-primary-theme btn-ghost" onClick={() => handleViewTruckInfo(truck)}> VIEW  </button>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default List1;   