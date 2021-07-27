import {makeStyles } from '@material-ui/core/styles';
import {hexToRgb} from '../../utils/general.utils'
export default makeStyles((theme)=>({
    card:{
        zIndex:1,
        display:'flex',
        flexDirection:'column',
        width:'100%',
        marginTop:30
        
    },
    cardHeader: {
        margin:'-20px 10px 0px 10px',
        zIndex:2,
        minHeight:80,
        position: 'relative',
        backgroundColor: 'transparent',
        boxShadow: 'none'

      },

      cardIconContainer:{
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(theme.palette.black) + ", 0.14)",
      }
}))