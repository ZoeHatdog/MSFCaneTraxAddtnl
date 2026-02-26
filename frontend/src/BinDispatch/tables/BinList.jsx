import React from "react";
import "../../dashboard/styles/dashstyle.css";
import { useState, useRef } from "react";

const DummyBins = [
  { BinNo: "01", Connote: "491231", TipTime: "2026-10-13 04:53:02", TruckNumber: "TRUCK 1", DriverName: "Tony Stark" ,  HarvestGroupNo: "HG-001"   },
  { BinNo: "02", Connote: "591232", TipTime: "2026-09-13 03:41:02", TruckNumber: "TRUCK 2", DriverName: "Peter Parker", HarvestGroupNo: "HG-002" },
  { BinNo: "03", Connote: "115233", TipTime: "2026-11-13 02:42:02", TruckNumber: "TRUCK 3", DriverName: "Larry Bird" , HarvestGroupNo: "HG-003" },
  { BinNo: "04", Connote: "564234", TipTime: "2026-10-13 07:44:02", TruckNumber: "TRUCK 4", DriverName: "Chuck Norris" , HarvestGroupNo: "HG-004" },
  { BinNo: "05", Connote: "463790", TipTime: "2026-02-13 10:42:02", TruckNumber: "TRUCK 5", DriverName: "Bruce Banner" , HarvestGroupNo: "HG-005" },
];

function BinList() {
  const modal = useRef(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const addModal = useRef(null);

  const [selectedBinNo, setSelectedBinNo] = useState(null);
  const dropdownDetailsRef = useRef(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
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


//THIS IS FOR THE LIST OF BINS HISTORY THAT WENT TO THE FACTORY/MILL
// NEED TO FINALIZED WHAT SHOULD BE PUT IN HERE 
// GOT A LITTLE BIT OF IDEA AND CONFUSION ON WHAT SHOULD BE PUT IN HERE
// SO BASICALLY TIME & DATE IS ESSENTIAL TO PUT IN HERE COS ITS HISTORY BRUHhh
// AMSDSADLSADMASDASMLDSAL I WANT TO EXPLODE LOLOLOL


  return (
    <div className="harvester-table-wrap">
      
      {/* ========================================== VIEW/UPDATE MODAL ========================================== */}
      <dialog ref={modal} id="bin_view_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Bin {selectedRow?.BinNo}</h3>
          <p className="py-2">Bin Status: {selectedRow?.BinStatus}</p>
          <p className="py-2">Tip Time: {selectedRow?.TipTime}</p>
          <p className="py-2">Truck Number: {selectedRow?.TruckNumber}</p>
          <p className="py-2">Driver Name: {selectedRow?.DriverName}</p>
          <p className="py-2">Harvest Group No: {selectedRow?.HarvestGroupNo}</p>
          <div className="modal-action"></div>
        </div>
      </dialog>

      <table className="harvester-table">
        <thead>
          <tr>
            <th className="text-center justify-center items-center" >Bin No.</th>
            <th className="text-center justify-center items-center">Connote</th>
            <th className="text-center justify-center items-center">Tip Time</th>
            <th className="text-center justify-center items-center">Truck Number</th>
            <th className="text-center justify-center items-center">Driver Name</th>
            <th className="text-center justify-center items-center">Harvest Group No</th>
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
              <td>{row.Connote}</td>
              <td className="col-datetime">{row.TipTime}</td>
              <td className="text-center justify-center items-center">{row.TruckNumber}</td>
              <td className="text-center justify-center items-center">{row.DriverName}</td>
              <td className="text-center justify-center items-center">{row.HarvestGroupNo}</td>
              <td className="text-right"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BinList;
