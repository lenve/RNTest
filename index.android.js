/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Navigator,
    View
} from 'react-native';
import NetImage from './1031/NetImage'
import SayHello from './1031/SayHello'
import ShowOrHide from './1031/ShowOrHide'
import SimpleNavigationApp from './1031/SimpleNavigationApp'
import MyScene from './1031/MyScene'
import MainPage from './1031/MainPage'

export default class RNTest extends Component {
    render() {
        let defaultName = 'MainPage';
        let defaultComponent = MainPage;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route)=> {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator)=> {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            ></Navigator>
        );
    }
}
AppRegistry.registerComponent('RNTest', () => RNTest);
