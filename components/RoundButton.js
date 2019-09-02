import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class RoundButton extends Component {

    static defaultProps = { 
        title:'Button',
        onPress:()=>{},
        color:'white'
    }

    render(){
        return(
            <TouchableOpacity 
            style={[styles.touchWrap , this.props.style]}
            onPress ={this.props.onPress}
            >
            <View style={styles.container}>
                {this.props.icoName && (
                    <Ionicons 
                        style={{marginRight :10}}
                        name={this.props.icoName}
                        color ={this.props.color}
                        size={25}
                    />
                )}
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchWrap :{
        flexDirection:'row',
        height:50
    },
    container : {
        flexGrow:1,
        flexDirection:'row',
        alignItems :'center',
        borderColor:'#aaa',
        backgroundColor:'tomato',
        justifyContent:'center',
        borderRadius:5
    },
    title:{
        color:'#fff',
        fontSize:20
    }
});