import { useState } from "react";

export default function CertificateModal({ pngPath, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable text link */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        style={{
          cursor: "pointer",
        }}
      >
        Certification
      </a>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "var(--bckgrnd)",
              padding: "1rem",
              maxWidth: "90%",
              maxHeight: "90%",
              overflow: "auto",
              borderRadius: "8px",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                float: "right",
                background: "none",
                border: "none",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
            >
              ✖
            </button>

            {/* PNG displayed inside modal */}
            <img
              src={pngPath}
              alt={`${title} Certificate`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
