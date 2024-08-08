import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from "three";
const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro In Natural Titanium",
    color: ["8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  //camera controll for model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // the models
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation valuse
  const [smallRotation,setSmallRotation] = useState(0)
  const [largeRotation,setLargeRotation] = useState(
  useGSAP(() => {
    gsap.to("#heading", { opacity: 1, y: 0 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width ">
        <h1 id="heading" className="section-heading">
          Take closer look
        </h1>

        <div className="flex flex-col items-center mt-5 ">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
