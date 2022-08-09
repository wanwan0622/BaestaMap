import React, { useState } from "react";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Tooltip } from "@mui/material";
import { Instagram } from "../components/Instagram";

const cardStyle = {
  width: "200px",
  height: "170px",
  border: "3px solid #FC9CFC",
  padding: "12px",
  margin: "12px auto 12px auto",
  fontSize: "12px",
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
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        <div>
          <div style={cardStyle}>
            <p>1 パンケーキ東京</p>
            <p>2 おしゃれなCAFE</p>
            <p>3 いい感じのお洋服屋さん</p>
          </div>
        </div>
        <div>
          <div style={cardStyle}>
            <p>1 パンケーキ東京</p>
            <p>東京都渋谷区〇〇 1-2-3</p>
            <Instagram />
          </div>
        </div>
      </Slider>
    </div>
  );
}
