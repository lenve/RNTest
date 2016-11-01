/**
 * Created by sang on 2016/11/1.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    WebView
} from 'react-native';
export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
        this.getInternetData(this.props.id);
    }

    getInternetData(id) {
        fetch("http://www.tngou.net/api/cook/show?id=" + id)
            .then((response)=>response.json())
            .then((responseText)=> {
                this.setState({
                    data: responseText
                });
            }).done();
    }

    render() {
        return (
            <View>
                <WebView source={'<!DOCTYPE html><head></head><body>'+this.state.data.message+'</body></html>'}></WebView>
                {/*<WebView javaScriptEnabled={true} injectedJavaScript={this.state.data.message}></WebView>*/}
            </View>
        );
    }
}