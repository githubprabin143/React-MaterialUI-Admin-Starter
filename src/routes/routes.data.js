import DashboardIcon from "@material-ui/icons/Dashboard";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Dashboard from "../pages/Dashboard/Dashboard";

export const routesData = [
  {
    path: "/dashboard",
    icon: <DashboardIcon />,
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
    key:"dashboard" //unique to identify
  },
  {
    icon: <VpnKeyIcon />,
    name: "Keys Management",
    parentPath:'/keys-management',
    layout: "/admin",
    routes: [
      {
        path: "/keys-management/license-keys",
        name: "License Keys",
        component: Dashboard,
        layout: "/admin",
        key:"km:licensekeys"
      },
      {
        path: "/keys-management/api-keys",
        name: "Api Keys",
        component: Dashboard,
        layout: "/admin",
        key:"km:apikeys"
      },
    ],
  },
];


/**
 *Special function that will flat the nested array of object into top level route array of object
 * @param {Array} data
 * @returns {[]}
 */
 export const flattenRoutes = (data=routesData) => {
    return data.reduce((r, { routes, ...rest }) => {
      if (rest.path) {
        r.push(rest);
      }
      if (routes) r.push(...flattenRoutes(routes));
      return r;
    }, []);
  };

export const getRouteNames = ()=>{
    var result = flattenRoutes().reduce(function(map, obj) {
        map[obj.key] = obj.layout + obj.path;
        return map;
    }, {})
    return result
}
