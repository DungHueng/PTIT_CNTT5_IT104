import { useState } from "react";

export default function Bai_01() {
  const [name] = useState("Nguyễn Văn A");
  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  );
}