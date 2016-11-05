/**
 * Created by sang on 2016/11/4.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TextInput,
    View
} from 'react-native';
export default class Ctrip extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        {/*搜索控件*/}
                        <View style={styles.searchViewStyle}>
                            <View style={styles.textInputStyle}>
                                <TextInput style={{height: 40, textAlignVertical: 'center', textAlign: 'left'}}
                                           underlineColorAndroid={'transparent'}
                                           placeholder={'搜索:目的地/酒店/景点/航班号'}></TextInput>
                            </View>
                            <View style={styles.searchBtnViewStyle}>
                                <Text>搜索</Text>
                            </View>
                        </View>
                        {/*酒店*/}
                        <View style={styles.v1Style}>
                            <View style={styles.v11Style}>
                                <Text style={styles.textStyle}>酒店</Text>
                            </View>
                            <View style={styles.v12Style}>
                                <View style={styles.v121Style}>
                                    <View style={styles.v1211Style}><Text style={styles.textStyle}>海外酒店</Text></View>
                                    <View style={styles.v1212Style}><Text style={styles.textStyle}>团购</Text></View>
                                </View>
                                <View style={styles.v122Style}>
                                    <View style={styles.v1211Style}><Text style={styles.textStyle}>特价酒店</Text></View>
                                    <View style={styles.v1222Style}><Text style={styles.textStyle}>民宿·客栈</Text></View>
                                </View>
                            </View>
                        </View>
                        {/*机票*/}
                        <View style={styles.v2Style}>
                            <View style={styles.v21Style}><Text style={styles.textStyle}>机票</Text></View>
                            <View style={styles.v22Style}>
                                <View style={styles.v221Style}>
                                    <View style={styles.v2211Style}><Text style={styles.textStyle}>火车票·抢票</Text></View>
                                    <View style={styles.v2212Style}><Text style={styles.textStyle}>汽车票·船票</Text></View>
                                </View>
                                <View style={styles.v222Style}>
                                    <View style={styles.v2221Style}><Text style={styles.textStyle}>特价机票</Text></View>
                                    <View style={styles.v2222Style}><Text style={styles.textStyle}>专车·租车</Text></View>
                                </View>
                            </View>
                        </View>
                        {/*旅游*/}
                        <View style={styles.v3Style}>
                            <View style={styles.v31Style}><Text style={styles.textStyle}>旅游</Text></View>
                            <View style={styles.v32Style}>
                                <View style={styles.v321Style}>
                                    <View style={styles.v3211Style}><Text style={styles.textStyle}>目的地攻略</Text></View>
                                    <View style={styles.v3212Style}><Text style={styles.textStyle}>邮轮</Text></View>
                                </View>
                                <View style={styles.v322Style}>
                                    <View style={styles.v3211Style}><Text style={styles.textStyle}>周边游</Text></View>
                                    <View style={styles.v3222Style}><Text style={styles.textStyle}>定制旅行</Text></View>
                                </View>
                            </View>
                        </View>
                        {/*景点*/}
                        <View style={styles.v4Style}>
                            <View style={styles.v41Style}>
                                <View style={styles.v411Style}>
                                    <Text style={styles.textStyle}>景点·玩乐</Text>
                                </View>
                                <View style={styles.v412Style}>
                                    <Text style={styles.textStyle}>礼品卡</Text>
                                </View>
                            </View>
                            <View style={styles.v42Style}>
                                <View style={styles.v421Style}>
                                    <Text style={styles.textStyle}>美食</Text>
                                </View>
                                <View style={styles.v422Style}>
                                    <Text style={styles.textStyle}>出境WIFI</Text>
                                </View>
                            </View>
                            <View style={styles.v43Style}>
                                <View style={styles.v431Style}>
                                    <Text style={styles.textStyle}>全球购·换汇</Text>
                                </View>
                                <View style={styles.v432Style}>
                                    <Text style={styles.textStyle}>保险·签证</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.v5Style}>
                            <View style={styles.v51Style}>
                                <View style={styles.v511Style}>
                                    <Image source={require('../img/p0.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>自由行</Text>
                                </View>
                                <View style={styles.v512Style}>
                                    <Image source={require('../img/p1.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>主题游</Text>
                                </View>
                                <View style={styles.v513Style}>
                                    <Image source={require('../img/p2.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>一日游</Text>
                                </View>
                                <View style={styles.v514Style}>
                                    <Image source={require('../img/p3.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>顶级游</Text>
                                </View>
                            </View>
                            <View style={styles.v52Style}>
                                <View style={styles.v521Style}>
                                    <Image source={require('../img/p4.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>酒店+景点</Text>
                                </View>
                                <View style={styles.v512Style}>
                                    <Image source={require('../img/p5.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>亲子·游学</Text>
                                </View>
                                <View style={styles.v513Style}>
                                    <Image source={require('../img/p6.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>外币兑换</Text>
                                </View>
                                <View style={styles.v513Style}>
                                    <Image source={require('../img/p7.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>加盟合作</Text>
                                </View>
                            </View>
                            <View style={styles.v53Style}>
                                <View style={styles.v531Style}>
                                    <Image source={require('../img/p8.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>拼车旅行</Text>
                                </View>
                                <View style={styles.v512Style}>
                                    <Image source={require('../img/p9.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>机场停车</Text>
                                </View>
                                <View style={styles.v513Style}>
                                    <Image source={require('../img/p10.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>行李寄送</Text>
                                </View>
                                <View style={styles.v534Style}>
                                    <Image source={require('../img/p11.png')} style={styles.imgStyle}
                                           resizeMode={Image.resizeMode.contain}></Image>
                                    <Text style={styles.textStyle2}>更多服务</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.v6Style}>
                            <View style={styles.v61Style}>
                                <Text style={{color: '#FE5569', padding: 10}}>特卖汇</Text>
                                <View style={{backgroundColor:'#FE5569',height:20,justifyContent:'center',margin:5,marginTop:10,borderRadius:20,paddingLeft:10,paddingRight:10}}>
                                    <Text style={{color: '#ffffff',fontSize:12}}>领红包再下单</Text>
                                </View>
                            </View>
                            <View style={styles.v62Style}>
                                <View style={styles.v621Style}>
                                    <Image source={require('../img/p100.png')} resizeMode={Image.resizeMode.cover} style={{justifyContent:'center',alignItems:'flex-start'}}></Image>
                                </View>
                                <View style={styles.v622Style}></View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    v621Style:{
        flex:1,
    },
    v622Style:{
        flex:1,
    },
    v62Style:{
      flexDirection:'row',
        justifyContent:'center'
    },
    v61Style: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    v6Style: {
        height: 200,
        backgroundColor: '#ffffff',
        marginTop: 5,
    },
    textStyle2: {
        fontSize: 10,
    },
    imgStyle: {
        width: 20,
        height: 20,
    },
    v531Style: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v534Style: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        borderBottomRightRadius: 5,
        marginLeft: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v521Style: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v511Style: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v512Style: {
        flex: 1,
        marginLeft: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    v513Style: {
        flex: 1,
        marginLeft: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    v514Style: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginLeft: 1,
        borderTopRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v51Style: {
        height: 50,
        flexDirection: 'row',
    },
    v52Style: {
        height: 50,
        marginTop: 1,
        flexDirection: 'row',
    },
    v53Style: {
        flexDirection: 'row',
        height: 50,
        marginTop: 1,
    },
    v5Style: {
        height: 153,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    v431Style: {
        backgroundColor: '#FC9720',
        height: 40,
        borderTopRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v432Style: {
        backgroundColor: '#FC9720',
        height: 40,
        marginTop: 1,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v421Style: {
        backgroundColor: '#FC9720',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v422Style: {
        backgroundColor: '#FC9720',
        height: 40,
        marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v412Style: {
        backgroundColor: '#FC9720',
        height: 40,
        marginTop: 1,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v411Style: {
        backgroundColor: '#FC9720',
        height: 40,
        borderTopLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v41Style: {
        flex: 1,
    },
    v42Style: {
        flex: 1,
        marginLeft: 1,
    },
    v43Style: {
        flex: 1,
        marginLeft: 1,
    },
    v4Style: {
        flexDirection: 'row',
        height: 81,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    v3222Style: {
        backgroundColor: '#44C522',
        marginLeft: 1,
        flex: 1,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v3211Style: {
        backgroundColor: '#44C522',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v3212Style: {
        backgroundColor: '#44C522',
        flex: 1,
        marginLeft: 1,
        borderTopRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v321Style: {
        height: 40,
        flexDirection: 'row',
    },
    v322Style: {
        height: 40,
        flexDirection: 'row',
        marginTop: 1,
    },
    v31Style: {
        backgroundColor: '#44C522',
        flex: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v32Style: {
        flex: 2,
        marginLeft: 1,
    },
    v3Style: {
        flexDirection: 'row',
        height: 81,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    v2221Style: {
        backgroundColor: '#3D98FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v2222Style: {
        backgroundColor: '#3D98FF',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v2212Style: {
        backgroundColor: '#3D98FF',
        flex: 1,
        marginLeft: 1,
        borderTopRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v2211Style: {
        backgroundColor: '#3D98FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v221Style: {
        height: 40,
        flexDirection: 'row'
    },
    v222Style: {
        height: 40,
        marginTop: 1,
        flexDirection: 'row',
    },
    v21Style: {
        backgroundColor: '#3D98FF',
        flex: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    v22Style: {
        flex: 2,
        marginLeft: 1,
        flexDirection: 'column',
    },
    v2Style: {
        flexDirection: 'row',
        height: 81,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    v1222Style: {
        borderBottomRightRadius: 5,
        backgroundColor: '#FF697A',
        flex: 1,
        marginLeft: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    v1211Style: {
        backgroundColor: '#FF697A',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // marginRight:1,
    },
    v1212Style: {
        backgroundColor: '#FF697A',
        flex: 1,
        marginLeft: 1,
        borderTopRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    v121Style: {
        height: 40,
        flexDirection: 'row'
    },
    v122Style: {
        height: 40,
        marginTop: 1,
        flexDirection: 'row'
    },
    v11Style: {
        height: 81,
        backgroundColor: '#FF697A',
        flex: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    v12Style: {
        marginLeft: 1,
        height: 81,
        flex: 2,
        flexDirection: 'column',
    },
    v1Style: {
        flexDirection: 'row',
        height: 81,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        flexWrap: 'nowrap',
        flex: 1,
    },
    searchViewStyle: {
        flexDirection: 'row',
        // flexWrap: 'nowrap',
        height: 27,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    textInputStyle: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        height: 27,
        alignItems: 'stretch',
        paddingLeft: 20,
        paddingRight: 10,
        borderColor: '#3D98FF',
    },
    searchBtnViewStyle: {
        justifyContent: 'center',
        height: 27,
        backgroundColor: '#3D98FF',
        width: 50,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: -20,
    },
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1,
    },
    textStyle: {
        color: '#ffffff'
    }
});