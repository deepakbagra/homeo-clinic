import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        display: 'flex',
        marginLeft: '10px',
      },
      aboutUs: {
          
        marginLeft: '500px',
          
      }
}));