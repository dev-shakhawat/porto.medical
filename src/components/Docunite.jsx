import React from "react";
import DocuniteCart from "./common/DocuniteCart";

// images
import docunite1 from "../assets/images/docunite1.png";
import docunite2 from "../assets/images/docunite2.png";
import docunite3 from "../assets/images/docunite3.png";

const Docunite = () => {
  const Unites = [
    {
      image: docunite1,
      heading: "Healthcare Center",
      pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor lacus tincidunt ut...",
    },
    {
      image: docunite2,
      heading: "Immediate Center",
      pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor lacus tincidunt ut...",
    },
    {
      image: docunite3,
      heading: "Diagnostic Center",
      pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor lacus tincidunt ut...",
    },
  ];
  return (
    <div className="relative  ">
      <div className="absolute top-[-200px] z-[1] left-0 w-full  ">
        <div className="container">
          <div className="flex gap-7">
            {Unites.map((item, index) => {
              return (
                <DocuniteCart
                  key={index}
                  image={item.image}
                  heading={item.heading}
                  pera={item.pera}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docunite;
