import React from 'react';
import '../dashboard/styles/dashstyle.css';
import TotalBins from '../dashboard/cards/TotalBins';
import LeftTotalBins from '../dashboard/cards/LeftTotalBins';
import BinTable from './tables/BinTable';
import List1 from './cards&list/list1';
import NumberPads from './cards&list/NumberPads';
import ConsignmentProcess from './tables/ConsignmentProcess';
import BinList from './tables/BinList';
import NumberHG from './cards&list/NumberHG';


// FEATURES TO BE ADDED IN THE FUTURE 
// FILTERS??? FREAK THIS IS HARD TO IMPLEMENT LOLOLOL
// SORTING??? MAYBE NEXT TIME BUT NOT NOW XD LOLOLOL YOLO
// PAGINATION??? WHEN I GET THE API HAHAHAHA XD

function BinDispatch() {
  return (
    <div className="dashboard-page">
      <main className="dashboard-content">
        <p className="dashboard-group-header">Bins awaiting dispatch</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <TotalBins />
          </div>
          <div className="min-w-0">
            <LeftTotalBins />
          </div>
          <div className="min-w-0">
            <NumberPads />
          </div>
          <div className="min-w-0">
            <NumberHG />
          </div>
          <div className="col-span-2 col-start-2">
            <List1 />
          </div>
        </div>

        <p className="dashboard-group-header pt-6">Current Bin List at the Factory</p>
        <section className="w-full min-w-0">
          <BinTable />
        </section>
        {/* <ConsignmentProcess /> */}

        <p className="dashboard-group-header pt-6">Bin List History</p>
        <section className="w-full min-w-0">
          <BinList />
        </section>
      </main>
    </div>
  );
}

export default BinDispatch;