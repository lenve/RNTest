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
    StyleSheet,
    ToastAndroid,
    View
} from 'react-native';
import DetailPage from './DetailPage'


export default class Test2 extends Component {
    constructor(props) {
        super(props);
    }

    goDetailPage(id) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'DetailPage',
                component: DetailPage,
                params:{
                    id:id
                }
            });
        } else {
            ToastAndroid.show("123", ToastAndroid.SHORT);
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.container} onPress={this.goDetailPage.bind(this,[this.props.id])}>
                    <Image source={this.props.imgUri} style={{width: 100, height: 100}}></Image>
                    <View style={styles.textStyle}>
                        <Text ellipsizeMode={'tail'} numberOfLines={3}
                              style={styles.descriptionStyle}>{this.props.description}</Text>
                        <Text>关键词:【{this.props.keywords}】</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        padding: 6
    },
    textStyle: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    descriptionStyle: {}
});