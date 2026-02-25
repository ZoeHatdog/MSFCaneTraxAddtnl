import React from 'react';
import '../styles/dashstyle.css';
import { useState, useRef } from 'react';

const DUMMY_HARVESTERS = [
  { id: 1, harvestGroupNo: 'HG-001', contractTonnes: 12500, tonnesRemaining: 4200, tonnesHarvested: 8300, dailyTargetBinRate: 85, dailyTons: 420, actualBinHarvested: 8300, dateTime: '2025-02-24 06:15' },
  { id: 2, harvestGroupNo: 'HG-002', contractTonnes: 9800, tonnesRemaining: 2100, tonnesHarvested: 7700, dailyTargetBinRate: 72, dailyTons: 358, actualBinHarvested: 7700, dateTime: '2025-02-24 05:42' },
  { id: 3, harvestGroupNo: 'HG-003', contractTonnes: 15200, tonnesRemaining: 8900, tonnesHarvested: 6300, dailyTargetBinRate: 90, dailyTons: 445, actualBinHarvested: 6300, dateTime: '2025-02-24 07:00' },
  { id: 4, harvestGroupNo: 'HG-004', contractTonnes: 11200, tonnesRemaining: 5600, tonnesHarvested: 5600, dailyTargetBinRate: 78, dailyTons: 388, actualBinHarvested: 5600, dateTime: '2025-02-24 06:28' },
  { id: 5, harvestGroupNo: 'HG-005', contractTonnes: 8400, tonnesRemaining: 1200, tonnesHarvested: 7200, dailyTargetBinRate: 65, dailyTons: 322, actualBinHarvested: 7200, dateTime: '2025-02-24 05:55' },
  { id: 6, harvestGroupNo: 'HG-006', contractTonnes: 16800, tonnesRemaining: 10200, tonnesHarvested: 6600, dailyTargetBinRate: 95, dailyTons: 470, actualBinHarvested: 6600, dateTime: '2025-02-24 07:12' },
  { id: 7, harvestGroupNo: 'HG-007', contractTonnes: 7200, tonnesRemaining: 800, tonnesHarvested: 6400, dailyTargetBinRate: 58, dailyTons: 288, actualBinHarvested: 6400, dateTime: '2025-02-24 05:30' },
  { id: 8, harvestGroupNo: 'HG-008', contractTonnes: 13500, tonnesRemaining: 6100, tonnesHarvested: 7400, dailyTargetBinRate: 82, dailyTons: 406, actualBinHarvested: 7400, dateTime: '2025-02-24 06:45' },
  { id: 9, harvestGroupNo: 'HG-009', contractTonnes: 13500, tonnesRemaining: 6100, tonnesHarvested: 7400, dailyTargetBinRate: 82, dailyTons: 406, actualBinHarvested: 7400, dateTime: '2025-02-24 06:45' },
];




function HarvesterTable() {

    // use State for Modals
    const modal = useRef(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const addModal = useRef(null);



    // use State for Dropdown in Modal will improve later 
    const [selectedHarvestGroupNo, setSelectedHarvestGroupNo] = useState(null);
    const dropdownDetailsRef = useRef(null);



    // functions for Button Clicks
    const handleRowClick = (row) => {
        
        console.log(selectedRow);
        setSelectedRow(row);
        modal.current.showModal();
    }
    const handleAdd = () => {
        setSelectedHarvestGroupNo(null);
        setShowAddModal(true);
        addModal.current.showModal();
    }

    const handleSelectHarvestGroup = (value) => {
        setSelectedHarvestGroupNo(value);
        dropdownDetailsRef.current?.removeAttribute('open');
    };

  return (

    
   
    <div className="harvester-table-wrap">

      {/* ==========================================ADD MODAL ========================================== */}
     <dialog ref={addModal} id="my_modal_3" className="modal">
        <div className="modal-box add-form-modal max-h-[90vh] flex flex-col max-w-2xl p-0 overflow-hidden">
            <form method="dialog" className="flex flex-col flex-1 min-h-0">
                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 z-10" aria-label="Close" onClick={() => addModal.current?.close()}>✕</button>

                <div className="add-form-header flex-shrink-0">
                    <h3 className="add-form-title">Add Harvest Group</h3>
                    <p className="add-form-description">All fields are required unless marked optional.</p>
                </div>

                <div className="add-form-body flex-1 overflow-y-auto">
                    <section className="add-form-section">
                        <h4 className="add-form-section-title">Harvest group</h4>
                        <div className="add-form-field">
                            <details ref={dropdownDetailsRef} className="dropdown dropdown-end w-full">
                                <summary className="add-form-select-trigger btn w-full justify-between">
                                    <span className={selectedHarvestGroupNo ? 'text-base-content' : 'text-base-content/60'}>{selectedHarvestGroupNo ?? 'Select harvest group'}</span>
                                    <span className="add-form-select-chevron">▼</span>
                                </summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[100] w-full min-w-[var(--radix-popper-anchor-width)] p-2 shadow-lg border border-base-300 mt-1">
                                    {DUMMY_HARVESTERS.map((row) => (
                                        <li key={row.id}>
                                            <a onClick={() => handleSelectHarvestGroup(row.harvestGroupNo)}>{row.harvestGroupNo}</a>
                                        </li>
                                    ))}
                                    <li className="border-t border-base-300 mt-1 pt-1">
                                        <a onClick={() => handleSelectHarvestGroup(null)} className="text-base-content/70">Clear selection</a>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </section>

                    <section className="add-form-section">
                        <h4 className="add-form-section-title">Contract & tonnes</h4>
                        <div className="add-form-grid add-form-grid-3">
                            <div className="add-form-field">
                                <label htmlFor="contractTonnes" className="add-form-label">Contract Tonnes</label>
                                <input type="number" id="contractTonnes" placeholder="0" min="0" className="input input-bordered w-full input-sm" />
                            </div>
                            <div className="add-form-field">
                                <label htmlFor="tonnesRemaining" className="add-form-label">Tonnes Remaining</label>
                                <input type="number" id="tonnesRemaining" placeholder="0" min="0" className="input input-bordered w-full input-sm" />
                            </div>
                            <div className="add-form-field">
                                <label htmlFor="tonnesHarvested" className="add-form-label">Tonnes Harvested</label>
                                <input type="number" id="tonnesHarvested" placeholder="0" min="0" className="input input-bordered w-full input-sm" />
                            </div>
                        </div>
                    </section>

                    <section className="add-form-section">
                        <h4 className="add-form-section-title">Daily targets</h4>
                        <div className="add-form-grid add-form-grid-2">
                            <div className="add-form-field">
                                <label htmlFor="dailyTargetBinRate" className="add-form-label">Daily Target Bin Rate</label>
                                <input type="number" id="dailyTargetBinRate" placeholder="0" min="0" className="input input-bordered w-full input-sm" />
                            </div>
                            <div className="add-form-field">
                                <label htmlFor="dailyTons" className="add-form-label">Daily Tons</label>
                                <input type="number" id="dailyTons" placeholder="0" min="0" className="input input-bordered w-full input-sm" />
                            </div>
                        </div>
                    </section>

                    <section className="add-form-section">
                        <h4 className="add-form-section-title">Date & time</h4>
                        <div className="add-form-field">
                           
                            <input type="datetime-local" id="dateTime" className="input input-bordered w-full input-sm" />
                        </div>
                    </section>
                </div>

                <div className="add-form-actions flex-shrink-0">
                    <button type="button" className="btn btn-ghost" onClick={() => addModal.current?.close()}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Add Harvest Group</button>
                </div>
            </form>
        </div>
     </dialog>





     {/* ==========================================VIEW/UPDATE MODAL ========================================== */}
     <dialog ref = {modal} id = "my_modal_2" className = "modal">
        <div className="modal-box">
            <form method = "dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          <h3 className="font-bold text-lg">
            Harvest Group {selectedRow?.harvestGroupNo}
          </h3>
          <p className="py-2">
            Contract Tonnes: {selectedRow?.contractTonnes?.toLocaleString()}
          </p>

          <div className="modal-action">
            
          </div>
       </div>
     </dialog>
        
        
      <table className="harvester-table">
        <thead>
          <tr>
            <th></th>
            <th>HG No.</th>
            <th>Contract Tonnes</th>
            <th>Tonnes Remaining</th>
            <th>Tonnes Harvested</th>
            <th>Daily Target Bin Rate</th>
            <th>Daily Tons</th>
            <th>Bin Rate</th>
            <th>Actual Bin Harvested</th>
            <th>Date Time</th>
            <th className="text-right">
            <button
                className="btn btn-sm btn-circle btn-primary"
                onClick={handleAdd}
            >
                +
            </button>
            </th>
          </tr>
          
        </thead>
        
        <tbody>
          {DUMMY_HARVESTERS.map((row) => (
            <tr key={row.id}
                onClick={ () => handleRowClick(row) }
            >
              <th>{row.id}</th>
              <td className="text-value">{row.harvestGroupNo}</td>
              <td className="col-number">{row.contractTonnes.toLocaleString()}</td>
              <td className="col-number">{row.tonnesRemaining.toLocaleString()}</td>
              <td className="col-number">{row.tonnesHarvested.toLocaleString()}</td>
              <td className="col-number">{row.dailyTargetBinRate}</td>
              <td className="col-number">{row.dailyTons}</td>
              <td className="col-number">{row.dailyTargetBinRate}</td>
              <td className="col-number">{row.actualBinHarvested}</td>
              <td className="col-datetime">{row.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HarvesterTable;
