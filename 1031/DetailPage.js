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
            data: ``
        }
        this.getInternetData(this.props.id);
    }

    getInternetData(id) {
        fetch("http://www.tngou.net/api/cook/show?id=" + id)
            .then((response)=>response.json())
            .then((responseText)=> {
                this.setState({
                    data: responseText.message
                });
            }).done();
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView source={{html: this.state.data}}></WebView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});