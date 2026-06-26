interface Props {
  onUpload: (file: File) => void;
}

const DesignUploader = ({ onUpload }: Props) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onUpload(file);
  };

  return (
    <label
      style={{
        padding: "14px",
        borderRadius: "14px",
        background: "#222",
        color: "white",
        textAlign: "center",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      Subir diseño

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        hidden
      />
    </label>
  );
};

export default DesignUploader;