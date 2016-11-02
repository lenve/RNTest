/**
 * Created by sang on 2016/10/31.
 */
/**
 * Created by sang on 2016/10/31.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    BackAndroid,
    TouchableOpacity,
    View
} from 'react-native';
//props属性
export default class SayHello extends Component {
    goBack() {
        const {navigator} = this.props;
        if (navigator) {
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
        return (
            <View>
                < Text > Hello {this.props.name}</Text>
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