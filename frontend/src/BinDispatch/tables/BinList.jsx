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
          <p className="py-2">Last Seen: {selectedRow?.LastSeen}</p>
          <p className="py-2">Previous Truck: {selectedRow?.PreviousTruck}</p>
          <p className="py-2">Bin Type: {selectedRow?.TRUCKNUMBER}</p>
          <p className="py-2">Driver Name: {selectedRow?.DriverName}</p>
          <p className="py-2">Last Updated by: {selectedRow?.["Last Updated by:"]}</p>
          <div className="modal-action"></div>
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

export default BinList;
