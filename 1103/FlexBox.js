/**
 * Created by sang on 2016/11/3.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
export default class FlexBox extends Component {
    render() {
        return (
            <View>
                <View style={styles.verticalStyle}>
                    <Text style={styles.textStyle}>竖直排列的控件</Text>
                    <Text style={styles.textStyle}>竖直排列的控件</Text>
                </View>
                <View style={styles.horizontalStyle}>
                    <Text style={{backgroundColor:'#CAFF70'}}>水平排列的控件</Text>
                    <Text style={{backgroundColor:'#BF3EFF'}}>水平排列的控件</Text>
                </View>
                <View style={styles.imageViewStyle}>
                    <Image source={require('../img/p96.png')} style={styles.imageStyle} resizeMode={Image.resizeMode.contain}></Image>
                </View>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    imageViewStyle:{
        alignItems:'center',
        flexDirection:'column',
    },
    imageStyle:{
      height:200
    },
    horizontalStyle:{
        backgroundColor:'#CDCD00',
        flexDirection:'row',
        height:100,
        //主轴上居中对齐，主轴为水平方向
        //另外还有四种取值：
        //1.flex-start向一行的起始位置靠齐
        //2.flex-end向一行的结束位置靠齐
        //3.space-between两端对齐，项目之间的间隔都相等
        //4.space-around  两端会保留一半的空隙，项目平均分配在行里
        justifyContent:'center',
        //如果不设置这个属性，则默认为stretch，此时item的高度会将父容器填满
        alignItems:'flex-start'
    },
    verticalStyle:{
        backgroundColor:'#FFFF00',
        flexDirection:'column',
        //在侧轴上居中对齐，侧轴为水平方向
        //还有四个取值，与justifyContent类似
        //1.flex-start
        //2.flex-end
        //3.baseline:基线对齐
        //stretch:缺省值，占满整个侧轴
        alignItems:'center'
    },
    textStyle:{
        backgroundColor:'#FF0000',
    }
});