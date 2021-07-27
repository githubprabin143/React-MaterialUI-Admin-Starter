import {
  CardHeader,
  Paper
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import useStyle from "./styles";
import { useTheme } from "@material-ui/core/styles";
import classNames from "classnames";
import { log } from "../../utils/app.debug";

export default function FancyCardHeader({
  children,
  color = "primary",
  className,
  icon,
  style,
  ...props
}) {
  const classes = useStyle();
  const theme = useTheme();

  if (Boolean(icon)) {
    return (
      <Paper
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "transparent",
        }}
      >
        {icon}
        <CardHeader
          style={{ ...style }}
          titleTypographyProps={{
            style: {
              marginTop: 10,
              fontSize: 13,
              color: theme.palette.other.grey[700],
            },
            variant: "h6",
          }}
          subheaderTypographyProps={{
            style: {
              color: theme.palette.black,
              textAlign: "right",
            },
            variant: "h5",
          }}
          {...props}
        />
      </Paper>
    );
  }

  return (
    <Paper>
      <CardHeader
        style={{ ...style, backgroundColor: theme.palette[color]?.light }}
        titleTypographyProps={{
          style: {
            color: theme.palette.white,
          },
          variant: "h4",
        }}
        subheaderTypographyProps={{
          style: {
            fontSize: 13,
            color: theme.palette.white,
          },
          variant: "h6",
        }}
        {...props}
      />
    </Paper>
  );
}

FancyCardHeader.propTypes = {
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
  icon: PropTypes.node,
  children: PropTypes.node,
  ...CardHeader.propTypes,
};
