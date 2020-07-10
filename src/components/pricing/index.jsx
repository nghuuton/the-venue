import React, { useState } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

const Pricing = () => {
  const [prices] = useState([100, 150, 250]);
  const [position] = useState(["Balcony", "Medium", "Star"]);
  const [desc] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sequi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sequi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sequi.",
  ]);
  const [linkTo] = useState(["", "", ""]);
  const [delay] = useState([500, 0, 500]);
  function showBox() {
    return prices.map((box, i) => (
      <Zoom delay={delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${prices[i]}</span>
              <span>{position[i]}</span>
            </div>
            <div className="pricing_description">{desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#fff"
                link={linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  }
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBox()}</div>
      </div>
    </div>
  );
};

export default Pricing;

// class Pricing extends Component {
//   state = {
//     prices: [100, 150, 250],
//     position: ["Balcony", "Medium", "Star"],
//     desc: [
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sequi.",
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sequi.",
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sequi.",
//     ],
//     linkTo: ["", "", ""],
//   };
//   showBox = () => {
//     return this.state.prices.map((box, i) => (
//       <div className="pricing_item">
//         <div className="pricing_inner_wrapper">
//           <div className="pricing-title">Title</div>
//           <div className="pricing_description">Desc</div>
//           <div className="pricing_button">Button</div>
//         </div>
//       </div>
//     ));
//   };
//   render() {
//     return (
//       <div className="bck_black">
//         <div className="center_wrapper pricing_section">
//           <h2>Pricing</h2>
//           <div className="pricing_wrapper">{this.showBox()}</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Pricing;
