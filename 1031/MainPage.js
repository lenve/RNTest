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
    BackAndroid,
    TouchableOpacity,
    View
} from 'react-native';
import NetImage from './NetImage'
import SayHello from './SayHello'
import ShowOrHide from './ShowOrHide'
import SimpleNavigationApp from './SimpleNavigationApp'
import MyScene from './MyScene'
import GetJson from './GetJson'
import ListView from './ListView'

export default class Test2 extends Component {
    constructor(props) {
        super(props);
    }

    loadNetImage() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: "NetImage",
                component: NetImage
            });
        }
    }

    aboutProps(name) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: "SayHello",
                component: SayHello,
                params: {
                    name: name
                }
            });
        }
    }

    aboutState(name) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: "ShowOrHide",
                component: ShowOrHide,
                params: {
                    text: name
                }
            });
        }
    }

    getInternetData() {
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.push({
                name:"GetJson",
                component:GetJson
            });
        }
    }

    getListView(){
        const {navigator} = this.props;
        if(navigator) {
            navigator.push({
                name:"ListView",
                component:ListView
            });
        }
    }

    componentDidMount() {
        const {navigator} = this.props;
        BackAndroid.addEventListener('hardwareBackPress', function () {
            return false;
        });
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.loadNetImage.bind(this)}>
                    <Text>加载网络图片</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.aboutProps.bind(this, ["sang"])}>
                    <Text>关于props属性</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.aboutState.bind(this, ["老王"])}>
                    <Text>关于state属性</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>进入页面跳转场景1</Text>
                </TouchableOpacity>
                {/*//另外一种方法的调用方式*/}
                <TouchableOpacity onPress={()=>this.getInternetData()}>
                    <Text>获取网络数据</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.getListView.bind(this)}>
                    <Text>ListView加载数据</Text>
                </TouchableOpacity>
            </View>
        );
    }
}