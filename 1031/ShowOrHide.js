/**
 * Created by sang on 2016/10/31.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

// state属性
export default class ShowOrHide extends Component {
    constructor(props) {
        super(props);
        // 初始化方式
        this.state = {showText: true};
        setInterval(()=> {
            // 修改方式
            this.setState({showText: !this.state.showText})
        }, 1000);
    }

    goBack(){
        const {navigator} = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    render() {
// 访问方式
        let display = this.state.showText ? this.props.text : '';
        return (
            <View>
                <Text>Hello {display}</Text>
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