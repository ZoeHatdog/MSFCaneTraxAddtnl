import React from 'react';
import '../../dashboard/styles/dashstyle.css';
import { useState, useRef } from 'react';

const DummyConsignment = [
  { ConsignmentNo: "01", ConsignmentStatus: "In Progress", AssignedToBin: "Bin 01", LastUpdated: "2025-12-13 04:53:02", SetBy: "John Doe" },
  { ConsignmentNo: "02", ConsignmentStatus: "In Progress", AssignedToBin: "Bin 02", LastUpdated: "2025-12-13 03:41:02", SetBy: "Isaac Newton" },
  { ConsignmentNo: "03", ConsignmentStatus: "In Progress", AssignedToBin: "Bin 03", LastUpdated: "2025-12-13 02:42:02", SetBy: "Kobe Bryant" },
  { ConsignmentNo: "04", ConsignmentStatus: "In Progress", AssignedToBin: "Bin 04", LastUpdated: "2025-12-13 07:44:02", SetBy: "Charles Babbage" },
  { ConsignmentNo: "05", ConsignmentStatus: "In Progress", AssignedToBin: "Bin 05", LastUpdated: "2025-12-13 10:42:02", SetBy: "Lorem Ipsum" },
];

function ConsignmentProcess() {
  const modal = useRef(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    modal.current.showModal();
  };

  return (
    <div className="harvester-table-wrap">

      {/* ========================================== VIEW MODAL ========================================== */}
      <dialog ref={modal} id="consignment_view_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Consignment {selectedRow?.ConsignmentNo}</h3>
          <p className="py-2">Consignment Status: {selectedRow?.ConsignmentStatus}</p>
          <p className="py-2">Assigned to Bin: {selectedRow?.AssignedToBin}</p>
          <p className="py-2">Last Updated: {selectedRow?.LastUpdated}</p>
          <p className="py-2">Set By: {selectedRow?.SetBy}</p>
          <div className="modal-action"></div>
        </div>
      </dialog>

      <table className="harvester-table">
        <thead>
          <tr>
            <th>Consignment No.</th>
            <th>Consignment Status</th>
            <th>Assigned to Bin</th>
            <th>Last Updated</th>
            <th>Set By</th>
          </tr>
        </thead>
        <tbody>
          {DummyConsignment.map((row) => (
            <tr key={row.ConsignmentNo} onClick={() => handleRowClick(row)}>
              <td className="text-value">{row.ConsignmentNo}</td>
              <td>{row.ConsignmentStatus}</td>
              <td>{row.AssignedToBin}</td>
              <td className="col-datetime">{row.LastUpdated}</td>
              <td>{row.SetBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsignmentProcess;
