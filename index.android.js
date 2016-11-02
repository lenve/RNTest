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
    BackAndroid,
    Navigator,
    View
} from 'react-native';
import MainPage from './1031/MainPage'

export default class RNTest extends Component {
    // componentDidMount() {
    //     const {navigator} = this.props;
    //     BackAndroid.addEventListener('hardwareBackPress', function () {
    //         return false;
    //     });
    // }

    render() {
        let defaultName = 'MainPage';
        let defaultComponent = MainPage;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent, length: 1}}
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
