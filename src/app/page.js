"use client";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";
import Image from "next/image";

export default function Home() {
  let counter = 0;

  const handleclick = () => {};
  return (
    <div>
      {counter}
      <button onClick={handleclick}>click here</button>
    </div>
  );
}

// function husnegt() {
//   return (
//     <div>
//       <div
//         style={{
//           width: 1000,
//           height: 200,
//           backgroundColor: "white",
//           marginLeft: 500,
//           marginTop: 200,
//           display: "flex",
//           gap: 200,
//           border: "5px,solid,yellowgreen",
//         }}
//       >
//         <h1 style={{ color: "black" }}>
//           husnegt1
//           <h1>utga1</h1>
//         </h1>
//       </div>
//     </div>
//   );
// }
// <husnegt />;
