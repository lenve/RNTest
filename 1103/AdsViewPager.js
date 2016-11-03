/**
 * Created by sang on 2016/11/2.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ViewPagerAndroid,
    View
} from 'react-native';
export default class AdsViewPager extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ViewPagerAndroid initialPage={0} scrollEnabled={true} style={{height: 200}}>
                    <View style={styles.viewStyle}>
                        <Image style={styles.imageStyle} source={require('../img/p95.png')} resizeMode={Image.resizeMode.cover}></Image>
                    </View>
                    <View style={styles.viewStyle}>
                        <Image style={styles.imageStyle} source={require('../img/p96.png')} resizeMode={Image.resizeMode.cover}></Image>
                    </View>
                    <View style={styles.viewStyle}>
                        <Image style={styles.imageStyle} source={require('../img/p97.png')} resizeMode={Image.resizeMode.cover}></Image>
                    </View>
                    <View style={styles.viewStyle}>
                        <Image style={styles.imageStyle} source={require('../img/p98.png')} resizeMode={Image.resizeMode.cover}></Image>
                    </View>
                    <View style={styles.viewStyle}>
                        <Image style={styles.imageStyle} source={require('../img/p99.png')} resizeMode={Image.resizeMode.cover}></Image>
                    </View>
                    <View style={styles.viewStyle}>
                        <Image style={styles.imageStyle} source={require('../img/p100.png')} resizeMode={Image.resizeMode.cover}></Image>
                    </View>
                </ViewPagerAndroid>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
      flex:1
    },
    viewStyle:{
        alignItems:'center',
        backgroundColor:'#C0FF3E'
    },
    imageStyle: {
        height:200,
    }
});