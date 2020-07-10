import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

const Discount = () => {
  const [disCountStart, setDisCountStart] = useState(0);
  const [disCountEnd] = useState(30);
  function procentage() {
    if (disCountStart < disCountEnd) {
      setDisCountStart(disCountStart + 1);
    }
  }

  useEffect(() => {
    const setCount = setTimeout(() => {
      procentage();
    }, 30);
    return () => {
      clearTimeout(setCount);
    };
  });
  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade onReveal={() => procentage()}>
          <div className="discount_porcentage">
            <span>{disCountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 20th JUNE</h3>
            <p>
              Sed up perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eque ipsa
              quae illo inventore verritatis et quasi archiecto beatae vitae
              dicta sunt explocabo.
            </p>
            <MyButton
              text="Purchase tickets"
              bck="#ffa800"
              color="#fff"
              link=""
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
