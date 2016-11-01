/**
 * Created by sang on 2016/10/31.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    View
} from 'react-native';
export default class MyScene extends Component {
    static myProps = {
        title: '页面1'
    }

    render() {
        return (
            <View>
                <Text>Hello {this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>点我进入下一场景</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>点我进入上一场景</Text>
                </TouchableHighlight>
            </View>
        );
    }
}