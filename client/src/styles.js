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
        width:'35%',
        margin:theme.spacing(1),
        marginLeft: '10%',      
        backgroundColor:'white',                    
        },
       '& .MuiTypography-body1': {
           marginLeft: '10%',           
       },
       
       '& .MuiButtonBase-root': {
           marginLeft: '10%',
       }      
    },
    SignInFormWrap: {
        '& .MuiFormControl-root': {
            width:'70%',
            margin:theme.spacing(1),
            marginLeft: '10%',      
            backgroundColor:'white',                    
            },
           '& .MuiTypography-body1': {
               marginLeft: '10%',           
           },
           
           '& .MuiButtonBase-root': {
               marginLeft: '10%',
           }      
    },

    formPageWrap: {   
        marginTop: '2%',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '7%',
        padding: theme.spacing(1),
        backgroundColor: '#F4F5F7',
        alignItems: 'center'        
    },
    signInPageWrap: {
        marginTop: '5%',
        marginLeft: '32%',
        marginRight: '10%',
        marginBottom: '14%',
        padding: theme.spacing(1),
        backgroundColor: '#F4F5F7',
        width: '35%'        
    },
    formButton: {
        marginTop: '2%',
        marginRight: '10%',
        textTransform: 'none'
    },
    
    nextButton: {
        margin: '1% 49%',
        textTransform: 'none'
    },
    bookButton: {
        margin: '0% 49% 6.5%',
        textAlign: 'center',
        textTransform: 'none',        
    },
    footer: {
        height:'3em',
        background: '#2E3B55',
        color: 'white',
        textAlign:'center',
        marginTop: '24%',
        position: 'fixed',
        bottom: 0,
        justifyContent: 'center',
        paddingTop: '1.3%',
        width: '100%',
        
        [theme.breakpoints.down('xs')]: {
            height:'2em',
        }            
    },
    text: {
        fontSize: '80%',        
        [theme.breakpoints.down('xs')]: {
            fontSize: '60%',
            marginTop: '0.9%'            
        },       
    },
    bookingTimeSlot: {
        marginLeft: '10%',
        width: '30%'
    }

}));