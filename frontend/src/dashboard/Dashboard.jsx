import React, { useState, useEffect } from 'react';
import './styles/dashstyle.css';
import TotalBins from './cards/TotalBins';
import LeftTotalBins from './cards/LeftTotalBins';
import MillSpeed from './cards/MillSpeed';
import Chart1 from './charts/chart-1';
import CrushRate from './cards/CrushRate';
import AvgMillThr from './cards/AvgMillThr';
import HarvesterTable from './tables/HarvesterTable';
import Chart2 from './charts/chart-2';
import Chart3 from './charts/chart-3';
function Dashboard() {
  const [testmessage, setTestmessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then((response) => response.json())
      .then((data) => setTestmessage(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1 className="dashboard-header-title">CaneSupply Mill Dashboard</h1>
        <p className="dashboard-group-header">Key metrics</p>
        <div className="flex flex-wrap gap-4 justify-center items-center md:justify-start">
          <TotalBins />
          <LeftTotalBins />
          {/* <MillSpeed /> */}
          <CrushRate />
          <AvgMillThr />
        </div>
      </header>

      <main className="dashboard-content">
        <p className="dashboard-group-header">Bins crushed (last 7 days)</p>
        <section className="dashboard-chart-section flex flex-col items-center gap-6">
          <div className="w-full max-w-3xl">
            <Chart1 />
          </div>
        </section>

        <p className="dashboard-group-header pt-5 w-full">Bins Expected & Actual</p>
        <section className="dashboard-chart-section flex flex-col items-center gap-6">
          
            <Chart2 />
        
        </section>

        <p className="dashboard-group-header pt-5 w-full"> Harvester Group Bins Expected & Actual</p>
        <section className="dashboard-chart-section flex flex-col items-center gap-6">
          
            <Chart3 />
        
        </section>

        <p className="dashboard-group-header pt-5 w-full">Harvester Group Pad and Target Bin Rates</p>
        <section className="dashboard-chart-section flex flex-col items-center gap-6">
          
            <HarvesterTable />
          
        </section>

        

        {testmessage && (
          <p className="text-sm mt-4" style={{ color: 'var(--color-dark-slate)' }}>
            {testmessage}
          </p>
        )}
      </main>

      <footer className="dashboard-footer">
        <p className="text-sm m-0">Mill Dashboard · Footer</p>
      </footer>
    </div>
  );
}

export default Dashboard;
