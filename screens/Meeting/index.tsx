import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Carproject from '../../components/Carproject';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../slices/themeSlice';
import { data } from '../../utils/data';
import { selectLanguage } from './../../slices/languageSlice';
import { translations } from '../../utils/translations'; 
import { Icon } from '@rneui/themed';
import _Icon_MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { doc, getFirestore, onSnapshot, collection, orderBy } from 'firebase/firestore';
import useAuth from './../../hooks/useAuth';
import { style } from './style'
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';
import { setSelectedRoom } from '../../slices/selectedRoomSlice';
import { query } from 'firebase/firestore';

const widthScreen = Dimensions.get('screen').width


const MeetingScreen = () => {
  const { warningText } = translations.screens.MeetingScreen
  const navigation:any = useNavigation()
  const theme = useSelector(selectTheme)
  const [meetings, setMeetings] = useState<any>([])
  const language = useSelector(selectLanguage)
  const {user}:any = useAuth()
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    navigation.setOptions({
       headerBackVisible:false,
       headerTitle: () => <Text style={{ marginLeft:5, fontSize:20, letterSpacing:1, fontWeight:'500', color:theme.fontColor}}>
          Meetings 
       </Text>,
    })  
  }, [theme])

  const db = getFirestore()

  useEffect(() => {
    const getMeetings = () => {
      const meetingsRef = collection(db, 'meetings')
      const meetingsQuery = query(meetingsRef, orderBy("date"));

       onSnapshot(meetingsQuery, (snapchot) => {      
        setMeetings(snapchot.docs.map((doc, i)=> {
          return doc.data()
        }))      
      })
    }
    if(user.name!=='Tester'){
      getMeetings()
    }
  }, [])
  
   
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: () => <TextInput placeholder={language==="en"?_translations.en:_translations.pl} placeholderTextColor="#444" style={{fontSize: 17, color:theme.fontColor}} />,
      // headerLeft: () => <Image style={style.logo} source={require('../../assets/cars_projects_IconV2.png')}/>,

      headerRight: () => 
        <TouchableOpacity style={{paddingHorizontal:20, paddingVertical:5, marginRight:5}} onPress={() => navigation.navigate('CreateMeeting')}>
          <_Icon_MaterialCommunityIcons name={'account-multiple-plus-outline'} size={27} color={theme.fontColor} style={{ marginRight: 0 }}/>
        </TouchableOpacity>
    })
  }, [theme])

  
  return (
    <View style={{flex:1, justifyContent:'flex-start', backgroundColor:theme.background}}>   
      <View style={style.roomsContainer}>
        {meetings?
            <FlatList
                ItemSeparatorComponent={()=><View style={{height:10}}/>}
                contentContainerStyle={{ width:widthScreen}}
                data={meetings}
                renderItem={({item}) => {
                    return (                        
                    <TouchableOpacity activeOpacity={.5} onPress={()=> (navigation.navigate('MeetingRoom', item), dispatch(setSelectedRoom(item)))}>
                        <View style={style.dateContainer}>
                            <Icon type='entypo' name="clock" size={14} color={theme.fontColor}/>
                            <Text style={{color:theme.fontColor, marginLeft:7}}>za 2 dni...</Text>
                        </View>
                        <View style={[style.meetingRoom, {backgroundColor: theme.backgroundContent}]}>
                            <MapView          
                                scrollEnabled={false}          
                                style={style.miniMap}
                                initialRegion={{
                                    latitude: item.place.latitude,
                                    longitude: item.place.longitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                
                            />
                            <View style={{flex:1, marginHorizontal: 10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>                
                                <View style={style.textContainer}>
                                    <Text style={[style.nameText, {color: 'white'}]}>{item.name}</Text>
                                    <Text style={[style.placeText, {color: '#5f9'}]}>{item.place.city}</Text>
                                </View>  
                                <View style={style.countPeople}>
                                    <Text style={[{color: theme.fontColor, marginRight:8, fontSize:15, fontWeight:'bold'}]}>{item.people.length}</Text>
                                    <Icon type='ionicon' name="people-outline" size={18} color={theme.fontColor}/>
                                </View>        
                            </View>                                 
                            <Icon style={{alignSelf:'center', marginRight:10}} type='materialicon' name="arrow-forward-ios" size={14} color={theme.fontColor}/> 
                        </View>
                    </TouchableOpacity>
                    )
                }}
            />:
            <Text style={[style.warningText]}>
                {warningText[language as keyof typeof warningText]}
            </Text>
        }
      </View>
    </View>
  )
}
  
export default MeetingScreen