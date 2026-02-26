import React from "react";
import "../../dashboard/styles/dashstyle.css";
import { useState, useRef } from "react";

const DummyBins = [
  { BinNo: "01", BinStatus: "Awaiting Dispatch", LastSeen: "2025-12-13 04:53:02", PreviousTruck: "TRUCK 1", TRUCKNUMBER: "01", DriverName: "Tony Stark" ,  "Last Updated by:": "John Doe" },
  { BinNo: "02", BinStatus: "Awaiting Dispatch", LastSeen: "2025-12-13 03:41:02", PreviousTruck: "TRUCK 2", TRUCKNUMBER: "02", DriverName: "Peter Parker", "Last Updated by:": "Isaac Newton" },
  { BinNo: "03", BinStatus: "Awaiting Dispatch", LastSeen: "2025-12-13 02:42:02", PreviousTruck: "TRUCK 3", TRUCKNUMBER: "03", DriverName: "Larry Bird" , "Last Updated by:": "Kobe Bryant" },
  { BinNo: "04", BinStatus: "Awaiting Dispatch", LastSeen: "2025-12-13 07:44:02", PreviousTruck: "TRUCK 4", TRUCKNUMBER: "04", DriverName: "Chuck Norris" , "Last Updated by:": "Charles Babbage" },
  { BinNo: "05", BinStatus: "Awaiting Dispatch", LastSeen: "2025-12-13 10:42:02", PreviousTruck: "TRUCK 5", TRUCKNUMBER: "05", DriverName: "Bruce Banner" , "Last Updated by:": "Lorem Ipsum" },
];

function BinTable() {
  const [selectedPadNo, setSelectedPadNo] = useState(null);
  const dropdownDetailsRef = useRef(null);
  const viewModalDropdownRef = useRef(null);

  const handleSelectPadNo = (value) => {
    setSelectedPadNo(value);
    viewModalDropdownRef.current?.removeAttribute("open");
  };

  const modal = useRef(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const addModal = useRef(null);

  const [selectedBinNo, setSelectedBinNo] = useState(null);
  

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setSelectedPadNo(null);
    modal.current.showModal();
  };

  const handleAdd = () => {
    setSelectedBinNo(null);
    setShowAddModal(true);
    addModal.current.showModal();
  };

  const handleSelectBinNo = (value) => {
    setSelectedBinNo(value);
    dropdownDetailsRef.current?.removeAttribute("open");
  };

  return (
    <div className="harvester-table-wrap">

      {/* ========================================== ADD MODAL ========================================== */}
      <dialog ref={addModal} id="bin_add_modal" className="modal">
        <div className="modal-box add-form-modal max-h-[90vh] flex flex-col max-w-2xl p-0 overflow-hidden">
          <form method="dialog" className="flex flex-col flex-1 min-h-0">
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 z-10" aria-label="Close" onClick={() => addModal.current?.close()}>✕</button>

            <div className="add-form-header flex-shrink-0">
              <h3 className="add-form-title">Search Bin</h3>
              <p className="add-form-description">All fields are required unless marked optional.</p>
            </div>

            <div className="add-form-body flex-1 overflow-y-auto">
              <section className="add-form-section">
                <h4 className="add-form-section-title">Bin</h4>
                <div className="add-form-field">
                  <details ref={dropdownDetailsRef} className="dropdown dropdown-end w-full">
                    <summary className="add-form-select-trigger btn w-full justify-between">
                      <span className={selectedBinNo ? "text-base-content" : "text-base-content/60"}>{selectedBinNo ?? "Select bin"}</span>
                      <span className="add-form-select-chevron">▼</span>
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[100] w-full min-w-[var(--radix-popper-anchor-width)] p-2 shadow-lg border border-base-300 mt-1">
                      {DummyBins.map((row) => (
                        <li key={row.BinNo}>
                          <a onClick={() => handleSelectBinNo(row.BinNo)}>{row.BinNo}</a>
                        </li>
                      ))}
                      <li className="border-t border-base-300 mt-1 pt-1">
                        <a onClick={() => handleSelectBinNo(null)} className="text-base-content/70">Clear selection</a>
                      </li>
                    </ul>
                  </details>
                </div>
              </section>

              <section className="add-form-section">
                <h4 className="add-form-section-title">Status & type</h4>
                <div className="add-form-grid add-form-grid-2">
                  <div className="add-form-field">
                    <label htmlFor="binStatus" className="add-form-label">Bin Status</label>
                    <input type="text" id="binStatus" placeholder="e.g. Awaiting Dispatch" className="input input-bordered w-full input-sm" />
                  </div>
                  <div className="add-form-field">
                    <label htmlFor="binType" className="add-form-label">Bin Type</label>
                    <input type="text" id="binType" placeholder="e.g. 23.5" className="input input-bordered w-full input-sm" />
                  </div>
                </div>
              </section>

              <section className="add-form-section">
                <h4 className="add-form-section-title">Truck & time</h4>
                <div className="add-form-grid add-form-grid-2">
                  <div className="add-form-field">
                    <label htmlFor="previousTruck" className="add-form-label">Previous Truck</label>
                    <input type="text" id="previousTruck" placeholder="e.g. X PAD" className="input input-bordered w-full input-sm" />
                  </div>
                  <div className="add-form-field">
                    <label htmlFor="lastSeen" className="add-form-label">Last Seen</label>
                    <input type="datetime-local" id="lastSeen" className="input input-bordered w-full input-sm" />
                  </div>
                </div>
              </section>
            </div>

            <div className="add-form-actions flex-shrink-0">
              <button type="button" className="btn btn-ghost" onClick={() => addModal.current?.close()}>Cancel</button>
              <button type="submit" className="btn btn-primary">Add Bin</button>
            </div>
          </form>
        </div>
      </dialog>

      {/* ========================================== VIEW/UPDATE MODAL ========================================== */}
      <dialog ref={modal} id="bin_view_modal" className="modal">
        <div className="modal-box view-modal-box max-w-lg p-0 overflow-y-auto">
          <form method="dialog" className="p-0">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <div className="view-modal-header">
            <h3 className="view-modal-title">Bin {selectedRow?.BinNo}</h3>
            <p className="view-modal-subtitle">View details and send to pad</p>
          </div>

          <div className="view-modal-body">
            <section className="add-form-section">
              <h4 className="add-form-section-title">Status &amp; info</h4>
              <div className="view-modal-grid">
                <div className="view-modal-field">
                  <span className="view-modal-label">Bin Status</span>
                  <span className="view-modal-value">{selectedRow?.BinStatus}</span>
                </div>
                <div className="view-modal-field">
                  <span className="view-modal-label">Last Seen</span>
                  <span className="view-modal-value view-modal-datetime">{selectedRow?.LastSeen}</span>
                </div>
                <div className="view-modal-field">
                  <span className="view-modal-label">Previous Truck</span>
                  <span className="view-modal-value">{selectedRow?.PreviousTruck}</span>
                </div>
                <div className="view-modal-field">
                  <span className="view-modal-label">Truck Number</span>
                  <span className="view-modal-value">{selectedRow?.TRUCKNUMBER}</span>
                </div>
                <div className="view-modal-field">
                  <span className="view-modal-label">Driver Name</span>
                  <span className="view-modal-value">{selectedRow?.DriverName}</span>
                </div>
                <div className="view-modal-field">
                  <span className="view-modal-label">Last Updated by</span>
                  <span className="view-modal-value">{selectedRow?.["Last Updated by:"]}</span>
                </div>
              </div>
            </section>

            <section className="add-form-section">
              <h4 className="add-form-section-title">Send to Pad</h4>
              <div className="add-form-field">
                <details ref={viewModalDropdownRef} className="dropdown dropdown-end w-full">
                  <summary className="add-form-select-trigger btn w-full justify-between">
                    <span className={selectedPadNo ? "text-base-content" : "text-base-content/60"}>{selectedPadNo != null ? `Pad ${selectedPadNo}` : "Select pad"}</span>
                    <span className="add-form-select-chevron">▼</span>
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[100] w-full min-w-[var(--radix-popper-anchor-width)] p-2 shadow-lg border border-base-300 mt-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <li key={n}>
                        <a onClick={() => handleSelectPadNo(String(n))}>Pad {n}</a>
                      </li>
                    ))}
                    <li className="border-t border-base-300 mt-1 pt-1">
                      <a onClick={() => handleSelectPadNo(null)} className="text-base-content/70">Clear selection</a>
                    </li>
                  </ul>
                </details>
              </div>
            </section>
          </div>

          <div className="view-modal-actions">
            <button type="button" className="btn btn-ghost" onClick={() => modal.current?.close()}>Close</button>
            <button type="button" className="btn btn-primary">Update</button>
          </div>
        </div>
      </dialog>

      <table className="harvester-table">
        <thead>
          <tr>
            <th className="text-center justify-center items-center" >Bin No.</th>
            <th className="text-center justify-center items-center">Bin Status</th>
            <th className="text-center justify-center items-center">Last Seen</th>
            <th className="text-center justify-center items-center">Previous Truck</th>
            <th className="text-center justify-center items-center">Truck Number</th>
            <th className="text-center justify-center items-center">Driver Name</th>
            <th className="text-center justify-center items-center">Last Updated by</th>
            <th className="text-right">
            

              <button className="btn btn-sm btn-circle btn-primary" onClick={handleAdd}>
                <span class="material-symbols-outlined">
                 search
                </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {DummyBins.map((row) => (
            <tr key={row.BinNo} onClick={() => handleRowClick(row)}>
              <td className="text-value">{row.BinNo}</td>
              <td>{row.BinStatus}</td>
              <td className="col-datetime">{row.LastSeen}</td>
              <td>{row.PreviousTruck}</td>
              <td>{row.TRUCKNUMBER}</td>
              <td>{row.DriverName}</td>
              <td>{row["Last Updated by:"]}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BinTable;
