import React from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
// import Posts from './components/Posts/Posts';
// import Form from './components/Form/Form';
// import { getPosts } from './actions/posts';
// import useStyles from './styles';
// import memories from './images/memories.png';
import Signup from './auth/signup';
import Login from './auth/login';
import PrivateRoute from "./ProtectRoute.js"; 
import {SignupProvider} from './context/SignupContext';
import Main from './Main.js';
import Homepage from './Homepage/Homepage';

const App = () => {
  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  // const classes = useStyles();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  return (


<SignupProvider>
    <Router>
      
        <Switch>
        <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/main"> */}
            {/* <Main/> */}
            <PrivateRoute exact path="/main" component={Main} />
          {/* <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container> */}

          {/* </Route> */}
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
    
    </Router>
    </SignupProvider>
  );
};

export default App;
