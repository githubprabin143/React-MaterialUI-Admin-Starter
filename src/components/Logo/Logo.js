import React from "react";
import logoImg from '../../assets/images/logo_placeholder.jpeg'

export default function Logo({ ...props }) {
  return (
    <img
      style={{ width: "30%", ...props.style }}
      src={logoImg}
      alt="logo"
      {...props}
    />
  );
}
