import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
         
    image: {
      display: 'flex',
      marginLeft: '10px',
    },

    header: {
        flexGrow: 1,
        marginLeft: '8px',
        //color: 'lightgreen',
    },
    
    linkWrap: {
        marginLeft: '24px',
        color: 'white',
        textDecoration: 'none',        
    },
    bottomWrap: {
        backgroundColor: 'red',
        fontSize: 'small',
        textAlign: 'center',
    },
    mapWrap: {
        marginLeft: '0px',
        
               
    },

}));