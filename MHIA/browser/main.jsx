'use strict'
//REACT SETUP
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

//IMPORT COMPONENTS
import Root from './components/Root';
import CampusesContainer from './containers/CampusesContainer';
import StudentsContainer from './containers/StudentsContainer';
import Students from './components/Students';
import ViewCampusContainer from './containers/ViewCampusContainer';
import ViewStudentContainer from './containers/ViewStudentContainer';

//MANAGE STORE
import axios from 'axios';
import store from './store';
import {receiveCampuses, getCampusById} from './action-creators/campus'
import {receiveStudents, getStudentById} from './action-creators/student'

const NotFound = () => (<h1>404.. This page is not found!</h1>)

const onRootEnter = function(){
  Promise.all([
    axios.get('/api/campus'),
    axios.get('/api/student')
  ])
    .then(responses => responses.map(res => res.data))
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveStudents(students));
    });
}

const onCampusEnter = function(nextState){
  const campusId = nextState.params.campusId;
  store.dispatch(getCampusById(campusId));
}

const onStudentEnter = function(nextState){
  const studentId = nextState.params.studentId;
  store.dispatch(getStudentById(studentId));
}


render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root} onEnter={onRootEnter}>
        <Route path="/campus" component={CampusesContainer} />
        <Route path ="/campus/:campusId" component={ViewCampusContainer} onEnter = {onCampusEnter} />
          <Route path="/student" component={Students} />
        <Route path = "/student" component = {StudentsContainer} />
        <Route path = "/student/:studentId" component={ViewStudentContainer} onEnter = {onStudentEnter} />
        <Route path="*" component={NotFound} />
        <IndexRedirect to="/campus" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
