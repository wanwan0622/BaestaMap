import React, { useState } from "react";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Tooltip } from "@mui/material";

const cardStyle = {
  width: "95%",
  height: "170px",
  border: "3px solid #FC9CFC",
  padding: "8px",
  margin: "auto auto 12px auto",
};

export function SliderView() {
  const [activePage, setActivePage] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "50px",
    infinite: false,
    draggable: true,
    speed: 500,
    customPaging: (pageNum: number) => {
      if (pageNum === 0) {
        const color = activePage === 0 ? "disabled" : "action";
        return (
          <Tooltip arrow title={"ページ1"}>
            <ChevronLeftIcon color={color} />
          </Tooltip>
        );
      } else {
        const color = activePage === 1 ? "disabled" : "action";
        return (
          <Tooltip arrow title={"ページ2"}>
            <ChevronRightIcon color={color} />
          </Tooltip>
        );
      }
    },
    beforeChange: (_current: number, next: number) => setActivePage(next),
  };

  return (
    <div style={{ width: "50%" }}>
      <Slider {...settings}>
        <div>
          <div style={cardStyle}>1</div>
        </div>
        <div>
          <div style={cardStyle}>2</div>
        </div>
      </Slider>
    </div>
  );
}
