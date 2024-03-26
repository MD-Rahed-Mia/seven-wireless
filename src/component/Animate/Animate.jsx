import React, { useEffect, useRef } from "react";
import "./Animate.scss";

export default function Animate({ children, dir }) {
  const currRef = useRef();

  useEffect(() => {
    function scrollTrigger() {
      const para = currRef.current;
      const elem = para.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const minus = windowHeight - elem.top;
      if (minus > 200) {
        para.classList.add(dir);
      }
    }

    window.onload = function () {

      window.addEventListener("scroll", scrollTrigger);
    }


  }, [children]);
  return (
    <div>
      <div ref={currRef}>{children}</div>
    </div>
  );
}
