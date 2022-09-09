/** @format */

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { Tooltip } from "@mui/material";
import { Instagram } from "../components/Instagram";
import { PlaceT } from "./GetAPI";

const cardStyle = {
  width: "350px",
  height: "250px",
  border: "3px solid #FC9CFC",
  padding: "15px",
  margin: "12px auto 4px auto",
  fontSize: "15px",
  overflowY: "scroll" as "scroll",
};

export function SliderView(props: { places: PlaceT[] }) {
  const [activePage, setActivePage] = useState(0);
  const [activePlace, setActivePlace] = useState(
    undefined as PlaceT | undefined
  );
  const [slider, setSlider] = useState(undefined as Slider | undefined);

  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "10px",
    infinite: false,
    draggable: true,
    speed: 500,
    customPaging: (pageNum: number) => {
      if (pageNum === 0) {
        const color = activePage === 0 ? "disabled" : "action";
        return (
          <Tooltip arrow title={"投稿一覧"}>
            <FiberManualRecordIcon color={color} sx={{ fontSize: "80%" }} />
          </Tooltip>
        );
      } else if (pageNum === 1) {
        const color = activePage === 1 ? "disabled" : "action";
        return (
          <Tooltip arrow title={"Instagram"}>
            <FiberManualRecordIcon color={color} sx={{ fontSize: "80%" }} />
          </Tooltip>
        );
      } else {
        const color = activePage === 2 ? "disabled" : "action";
        return (
          <Tooltip arrow title={"詳細"}>
            <FiberManualRecordIcon color={color} sx={{ fontSize: "80%" }} />
          </Tooltip>
        );
      }
    },
    beforeChange: (_current: number, next: number) => setActivePage(next),
  };

  return (
    <div style={{ width: "100%" }}>
      <Slider
        {...settings}
        ref={(slider) => {
          if (slider) {
            setSlider(slider);
          }
        }}
      >
        <div>
          <div style={cardStyle}>
            {props.places.length !== 0 ? (
              props.places.map((place: PlaceT, idx: number) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#FFCCFF",
                    padding: "10px",
                    margin: "4px",
                    borderRadius: "4px",
                  }}
                  onClick={() => {
                    setActivePlace(place);
                    if (slider) {
                      slider.slickGoTo(1);
                    }
                  }}
                >
                  {idx + 1} {place.location.name}
                </div>
              ))
            ) : (
              <>Now Loading...</>
            )}
          </div>
        </div>
        <div>
          <div style={cardStyle}>
            <div style={{ width: "80%" }}>
              {typeof activePlace !== "undefined" ? (
                <Instagram permalink={activePlace.permalink} />
              ) : (
                <>Now Loading...</>
              )}
            </div>
          </div>
        </div>
        <div>
          <div style={cardStyle}>
            {typeof activePlace !== "undefined" ? (
              <>
                <p style={{ color: "#FA45FA", fontSize: "16px" }}>
                  {activePlace.location.name}
                </p>
                <p>緯度: {activePlace.location.lat}</p>
                <p>経度: {activePlace.location.lng}</p>
                <p>最終更新日: {activePlace.timestamp}</p>
              </>
            ) : (
              <>Now Loading...</>
            )}
          </div>
        </div>
      </Slider>
    </div>
  );
}
