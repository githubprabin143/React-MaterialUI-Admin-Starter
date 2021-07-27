import { Grid } from "@material-ui/core";
import React from "react";
import Icon from "@material-ui/core/Icon";
import useStyles from "./styles";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FancyCard from "../../components/FancyCard/FancyCard";
import { Link } from 'react-router-dom';
import { getRouteNames } from '../../routes/routes.data';

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <FancyCard
            cardHeader={
              <FancyCard.CardHeader
                title="License Keys"
                subheader="1000"
                icon={
                  <FancyCard.CardIcon color="warning">
                    <VpnKeyIcon />
                  </FancyCard.CardIcon>
                }
              />
            }
          >
            <FancyCard.CardContent>
              <FancyCard.Divider />
              <Link to={getRouteNames()["km:licensekeys"]} >
                Add new key
              </Link>
            </FancyCard.CardContent>
          </FancyCard>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FancyCard
            cardHeader={
              <FancyCard.CardHeader
                title="Api Keys"
                subheader="800"
                color="warning"
                icon={
                  <FancyCard.CardIcon color="warning">
                    <VpnKeyIcon />
                  </FancyCard.CardIcon>
                }
              />
            }
          >
            <FancyCard.CardContent>
              <FancyCard.Divider />
              <Link to={getRouteNames()["km:apikeys"]}>
                Add new key
              </Link>
            </FancyCard.CardContent>
          </FancyCard>
        </Grid>
      </Grid>
    </div>
  );
}
