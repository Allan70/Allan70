export default function Item(prop: { name: string; itm_id: number; img_url: string; apk_url: string }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = prop.apk_url; // URL of the APK file
    link.download = `${prop.name}.apk`; // Suggested download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM after the download
  };

  return (
    <div className="itm-ctn" id={String(prop.itm_id)}>
      <div className="itm-name">{prop.name}</div>
      <div className="img-ctn">
        <img src={prop.img_url} alt="item image" />
      </div>
      <div className="itm-btn-holder">
        <button onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
}
