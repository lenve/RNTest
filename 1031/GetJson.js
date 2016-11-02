/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    Image,
    Navigator,
    TouchableOpacity,
    View
} from 'react-native';

export default class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            jsonData:''
        }
        this.getData();
    }
    getData(){
        fetch("	http://www.tngou.net/api/cook/classify").then((response)=>response.text())
            .then((responseText)=> {
                this.setState({
                    jsonData: responseText
                });
            })
            .catch((error)=>{
                console.warn(error);
            })
            .done();
    }
    render() {
        return (
            <View>
                <Text>{this.state.jsonData}</Text>
            </View>
        );
    }
}