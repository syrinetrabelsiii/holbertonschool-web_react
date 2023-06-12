import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
  };

  componentDidMount() {
    window.addEventListener(onkeydown, this.handleLogout);
  }

  componentWillUnmount() {
    window.removeEventListener(onkeydown, this.handleLogout);
  }

  handleLogout(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];

    const htmlObj = {
      __html: getLatestNotification(),
    };

    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New course available'},
      {id: 3, type: 'urgent', html: htmlObj}
    ];

    return (
      <Fragment>
        <Notifications listNotifications={listNotifications}/>
        <div className="App">
          <Header />
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>some random text</p>
          </BodySection>
          <Footer className='App-footer' />
        </div>
      </Fragment>
    );
  }
}

export default App;
