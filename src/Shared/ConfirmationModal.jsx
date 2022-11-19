import React from "react";

export default function ConfirmationModal({
  setDeletingDoctor,
  handleDeleteDoctors,
  title,
  message,
  deletingDoctor
}) {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
            {message}
          </p>
          <div className="modal-action">
            <button onClick={() => {
                handleDeleteDoctors(deletingDoctor)
                setDeletingDoctor(null)
            }} htmlFor="confirmation-modal" className="btn btn-error">
              Delete
            </button>
            <button
              className="btn btn-error btn-outline"
              onClick={() => setDeletingDoctor(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
