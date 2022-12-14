import { StyleSheet, ScrollView, Dimensions, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NavigationHeaderTabs } from './NavigationHeaderTabs';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../slices/themeSlice';

const ChatTab = () => {
  const navigationTab:any = useNavigation()
  const windowWidth = Dimensions.get('window').width;
  const theme = useSelector(selectTheme)

  return (
    <SafeAreaView style={[style.mainContainer, { backgroundColor:theme.background}]}>
        <NavigationHeaderTabs navigationTab={navigationTab} tabName="Chat"/>
        <ScrollView style={{flex:1}}>
          
        </ScrollView>
        <KeyboardAvoidingView style={style.chatFunctions}>
          {/* <ChatFunctionsConatiner   modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
        </KeyboardAvoidingView>
    </SafeAreaView> 
  )
}

export default ChatTab

const style = StyleSheet.create({
  mainContainer: {
    position:'relative',
    flex:1,
  },
  chatFunctions: {
    paddingHorizontal:15,
    width:'100%',
    //position: 'absolute',
    bottom:5
  }
})