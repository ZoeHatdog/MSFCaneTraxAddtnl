import React from 'react';
import ConsignmentCard from './Cards/ConsignmentCard';
import NumberHG from '../BinDispatch/cards&list/NumberHG';
import NumberPads from '../BinDispatch/cards&list/NumberPads';
import ConsignmentProcess from '../BinDispatch/tables/ConsignmentProcess';
import NumOfTrucks from '../dashboard/cards/NumOfTrucks';

export default function Consignment() {
    return (
        <div className="dashboard-page">
          <main className="dashboard-content">
            <p className="dashboard-group-header">Consignments on the way</p>
        
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch justify-center">
              <div className="min-w-0 flex justify-center">
                <ConsignmentCard />
              </div>
              <div className="min-w-0 flex justify-center">
                <NumberHG />
              </div>
              <div className="min-w-0 flex justify-center">
                <NumberPads />
              </div>
              <div className="min-w-0 flex justify-center">
                <NumOfTrucks />
              </div>
            </div>
    
            <p className="dashboard-group-header pt-6">Current Bin List at the Factory</p>
            <section className="w-full min-w-0">
              <ConsignmentProcess />
            </section>
            
          </main>
        </div>
      );
}