/**
 * Created by sang on 2016/10/31.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    BackAndroid,
    View
} from 'react-native';
//加载一张网络图片
export default class NetImage extends Component {
    goBack(){
        const {navigator} = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    componentDidMount() {
        const {navigator} = this.props;
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (navigator) {
                navigator.pop();
                return true;
            }
        });
    }
    render() {
        let pic = {uri: 'http://img3.cache.netease.com/photo/0009/2016-09-29/C241FMT00AI20009.png'};
        return (
            <View>
                <Image source={pic} style={{width: 200, height: 200}}></Image>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Text>点我返回</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});