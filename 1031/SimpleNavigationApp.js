/**
 * Created by sang on 2016/10/31.
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
import MyScene from './MyScene'
export default class SimpleNavigationApp extends Component {
    static myProps = {
        title: '页面1'
    }

    render() {
        return (
            <Navigator
                initialRoute={{title: 'MyScene', index: 0}}
                renderScene={(route, navigator)=>
                    <MyScene title={route.title}
                             onForward={()=> {
                                 const nextIndex = route.index + 1;
                                 navigator.push({
                                     title: 'MyScene' + nextIndex,
                                     index: nextIndex
                                 })
                             }}
                             onBack={()=> {
                                 if (route.index > 0) {
                                     navigator.pop();
                                 }
                             }}/>
                }></Navigator>
        );
    }
}