import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Faisal = () => {
  const [firstbtn, setFirstbtn] = useState(false);
  const [secondBtn, setSecondBtn] = useState(false);

  const handleFirstBtn = () => {
    setFirstbtn(true);
    setSecondBtn(false);
  };

  const handleSecondBtn = () => {
    setSecondBtn(true);
    setFirstbtn(false);
  };

  useGSAP(() => {
    gsap.to("#first-div", { opacity: 1, y: 0, x: 0 });
    gsap.to("#second-div", { opacity: 1, y: 0, x: 0 });
  }, [firstbtn]);
  return (
    <div className=" absolute h-full w-full bg-gray-800">
      <button
        className="bg-blue mr-10 ml-[45vw] mt-10"
        onClick={handleFirstBtn}
      >
        First
      </button>
      <button className="bg-blue" onClick={handleSecondBtn}>
        Second
      </button>
      <div className=" h-full w-full flex justify-center items-center">
        {firstbtn && (
          <div
            id="first-div"
            className="opacity-0 -translate-x-[100rem] -translate-y-[100rem]"
          >
            <h2>Item 1 </h2>
            <h2>Item 2 </h2>
            <h2>Item 3 </h2>
          </div>
        )}
        {secondBtn && (
          <div
            id="second-div"
            className="opacity-0 -translate-x-[100rem] -translate-y-[100rem] "
          >
            <h2>Item 4 </h2>
            <h2>Item 5 </h2>
            <h2>Item 6 </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faisal;

// <div>
//         <div>
//           <h2>Item 1</h2>
//           <h2>Item 2</h2>
//           <h2>Item 3</h2>
//         </div>

//         {firstbtn ? (
//           <div id="first-div" className="-translate-y-16">
//             <h2>Item 4</h2>
//             <h2>Item 5</h2>
//             <h2>Item 6</h2>
//           </div>
//         ) : (
//           secondBtn && (
//             <div id="second-div" className="-translate-y-16">
//               <h2>Item 7</h2>
//               <h2>Item 8</h2>
//               <h2>Item 9</h2>
//             </div>
//           )
//         )}
//       </div>
