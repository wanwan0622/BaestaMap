import * as React from "react";
// @ts-ignore
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 1.5em;
`;
const Pin = styled.div<{
  lat: number;
  lng: number;
}>``;

const GoogleMapWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export function GoogleMap2() {
  return (
    <Wrapper>
      <GoogleMapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDxg5uo9mFsxZWJBI5cI1ssK-AOeaJuHpY",
          }}
          defaultCenter={{
            lat: 43.0582954,
            lng: 141.3466919,
          }}
          defaultZoom={15}
        >
          <Pin lat={43.0582954} lng={141.3466919}>
            おおおんどおり
          </Pin>
        </GoogleMapReact>
      </GoogleMapWrapper>
    </Wrapper>
  );
}
