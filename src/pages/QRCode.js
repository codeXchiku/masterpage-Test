import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeComponent = () => {
  const companyUrl = "https://bc-pl.com/";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Scan the QR Code to Visit Our Website</h1>
      <QRCodeCanvas
        value={companyUrl}
        size={200} // Size of the QR code
        fgColor="#000000"
        bgColor="#ffffff"
      />
    </div>
  );
};

export default QRCodeComponent;

