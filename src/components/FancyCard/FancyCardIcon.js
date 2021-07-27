import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  Divider,
  Paper,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import useStyle from "./styles";
import { useTheme } from "@material-ui/core/styles";
import classNames from "classnames";
import { log } from "../../utils/app.debug";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

export default function FancyCardIcon({
  children,
  color = "primary",
  className,
  style,
  ...props
}) {
  const classes = useStyle();
  const theme = useTheme();
  return (
    <Card
      style={{
        ...style,
        width: 80,
        height:80,
        textAlign: "center",
        lineHeight: "80px",
        backgroundColor: theme.palette[color]?.light,
        color:theme.palette.text[color]
      }}
      {...props}
    >
      {children}
    </Card>
  );
}

FancyCardIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
  children: PropTypes.node,
  ...Box.propTypes,
};
