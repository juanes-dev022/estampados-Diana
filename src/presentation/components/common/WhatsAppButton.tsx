import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../../../shared/constants/contact";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "90px", // 👈 arriba del footer
        right: "16px",
        width: "56px",
        height: "56px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 2000,
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.1)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        style={{
          width: "28px",
          height: "28px",
        }}
      />
    </a>
  );
};

export default WhatsAppButton;