import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily : 'Raleway',
  },
  heading: {
    color: 'orange',
  },
  image: {
    marginLeft: '15px',
  },
}));