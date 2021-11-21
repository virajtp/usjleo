import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    // display: 'flex',
    maxWidth:'100%',
    alignItems: 'center',
    paddingBottom: '400px',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },

  viewHeader:{
    backgroundColor: 'black',
    textAlign: 'center',
  }
}));
