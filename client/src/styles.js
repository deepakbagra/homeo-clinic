import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({   
         
    image: {
      display: 'flex',
      marginLeft: '10px',
    },

    header: {
        flexGrow: 1,
        marginLeft: '8px',
        color: 'white',        
        fontFamily: 'Poppins',
        textTransform: 'none',
        fontSize: '23px'        
    },
    
    linkWrap: {
        marginLeft: '24px',
        color: 'white',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontSize: 'large'        
    },
    
    bottomWrap: {
        backgroundColor: 'red',
        fontSize: 'small',
        textAlign: 'center',
    },
    addressWrap: {
        fontSize: '20px',
        paddingLeft: '150px',
                     
    },
    queryFormWrap: {
        marginLeft: '10%'       
       
    },
    formWrap: {        
        '& .MuiFormControl-root': {
        width:'30%',
        margin:theme.spacing(1),
        marginLeft: '10%',        
        backgroundColor:'white'
        },
       '& .MuiTypography-root': {
           marginLeft: '10%'
       },
       '& .MuiButtonBase-root': {
           marginLeft: '10%'
       }      
    },
    formPageWrap: {
        margin: theme.spacing(14),
        padding: theme.spacing(1),
        backgroundColor: '#F4F5F7',
        alignItems: 'center'
        
    },
    formButton: {
        marginTop: '1%',
        marginRight: '10%'
    }
    
   

}));