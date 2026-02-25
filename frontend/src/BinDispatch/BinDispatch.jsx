import React from 'react';
import TotalBins from '../dashboard/cards/TotalBins';
import LeftTotalBins from '../dashboard/cards/LeftTotalBins';
import BinTable from './tables/BinTable';
import List1 from './cards&list/list1';
import NumberPads from './cards&list/NumberPads';
import ConsignmentProcess from './tables/ConsignmentProcess';

function BinDispatch() {
    return (
        <div>
            <header className="dashboard-group-header"> Bins awaiting dispatch</header>
            <div className="flex items-center justify-center gap-4">
                <TotalBins />
                <LeftTotalBins />
                <NumberPads />
                <List1 />
                
            </div>

            <main className="dashboard-content">
                <p className="dashboard-group-header">Current Bin List at the Factory </p>
                
                    
                        <BinTable />
                  
               
                <p className="dashboard-group-header pt-5">Consignment in Process</p>
                
                    
                        <ConsignmentProcess />
                  
                
            </main>
           
        </div>
    )
}

export default BinDispatch;