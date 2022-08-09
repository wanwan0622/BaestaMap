import React, { useState } from 'react';
import Slider from "react-slick";
import {ArrowCircleLeftOutlined, ArrowCircleRightOutlined} from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export function SliderView() {

  const [activePage, setActivePage] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: false,
    draggable: true,
    speed: 500,
    customPaging: (pageNum: number) => {
      if (pageNum === 0) {
        const color = activePage === 0 ? "disabled" : "action";
        return (
          <Tooltip arrow title={"ページ1"}>
            <ArrowCircleLeftOutlined color={color} />
          </Tooltip>
        );
      } else {
        const color = activePage === 1 ? "disabled" : "action";
        return (
          <Tooltip arrow title={"ページ2"}>
            <ArrowCircleRightOutlined color={color} />
          </Tooltip>
        );
      }
    },
    beforeChange: (_current: number, next: number) =>
      setActivePage(next),
  };

  return (
    <div  style={{width: "50%"}}>
      <Slider {...settings}>
      <div style={{width: "50%"}}>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
    </Slider>
    </div>
  );
}
