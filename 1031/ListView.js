/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    Image,
    ListView,
    TouchableOpacity,
    ToastAndroid,
    BackAndroid,
    View
} from 'react-native';
import ListViewItem from './ListViewItem'
export default class Test2 extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        this.state = {
            dataSource: ds,
            data: ds.cloneWithRows([''])
        };
        this.getInternetData();
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
    getInternetData(){
        fetch("http://www.tngou.net/api/cook/list")
            .then((response)=>response.json())
            .then((responseText)=> {
                this.setState({
                    data:this.state.dataSource.cloneWithRows(responseText.tngou)
                });
            }).done();
    }



    render() {
        return (
            <View>
                <ListView
                    showsVerticalScrollIndicator={false}
                    dataSource={this.state.data}
                    renderRow={(rowData, rowId)=><ListViewItem navigator={this.props.navigator} id={rowData.id} imgUri={{uri:'http://tnfs.tngou.net/image'+rowData.img}} description={rowData.description} keywords={rowData.keywords}/>}></ListView>
            </View>
        );
    }
}