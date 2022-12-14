import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../slices/themeSlice';
import { setSelectedTabInRoom } from '../../slices/selectedRoomSlice';
import { Icon } from '@rneui/base';

export const NavigationHeaderTabs: React.FC<{navigationTab:any, tabName:string}> = ({navigationTab, tabName}) => {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()
  return (
    <View style={[style.header, {backgroundColor:theme.background}]}> 
        <TouchableOpacity  onPress={() => (navigationTab.navigate("People"), dispatch(setSelectedTabInRoom({tab:"People"})))} style={style.item}>
            <Icon type='ionicon' name="people-outline" size={18} color={theme.fontColorContent}/>
            <Text style={[style.text, {color:tabName==="People"?theme.fontColor:theme.fontColorContent}]}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => (navigationTab.navigate("Chat"), dispatch(setSelectedTabInRoom({tab:"Chat"})))} style={style.item}>
            <Icon type='ionicon' name="chatbubbles-outline" size={18} color={theme.fontColorContent}/>
            <Text style={[style.text, {color:tabName==="People"?theme.fontColorContent:theme.fontColor}]}>Chat</Text>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'space-around', 
    paddingVertical:10
  },
  item: {
    alignItems:'center',
    paddingHorizontal:10, 
    paddingVertical:5,
  },
  text: {
    letterSpacing:1,
    fontWeight:'800'
  }
})