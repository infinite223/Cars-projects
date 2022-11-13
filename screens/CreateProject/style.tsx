import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    headerLeftContainer: {
        flexDirection:"row", 
        alignItems:'center', 
        width:65, 
        justifyContent:'space-around'
    },
    mainContainer: {
        flex:1, 
        paddingHorizontal:15, 
        position:'relative',
        alignItems:'center',
        justifyContent:'center'
    },
    renderItem: {
        paddingHorizontal:20
    },
    headerText: {
        color: '#2b3',
        fontSize:18,
        letterSpacing:3,
        fontWeight:'bold',
        textAlign:'center',
        flex:1,
    },
    headerContainer: {
        position:'relative',
        paddingHorizontal:15,
        paddingVertical:7,
        marginVertical:4,
        marginHorizontal:-15,
        borderRadius:0,
        flexDirection:'row',
        alignItems:'center',
        opacity:.7
    },
    backIcon: {
        paddingLeft:3,
        paddingRight:8
    },
    logo: {
        width:40,
        height:40,
        borderRadius:10,
        marginRight:10,
        marginVertical:10
    },
    nextStepButton: {
        position: 'absolute', 
        bottom: 20, 
        right: 10,
        backgroundColor: '#273', 
        paddingHorizontal:18, 
        borderRadius:50, 
        paddingVertical:17,
        alignItems:'center',
        justifyContent:'center',
        marginRight:-10
    },
    headerImages: {
        flexDirection:'row'
    },
    helpTextConteiner: {
        marginLeft:20
    },
    addImageButton: {
        borderWidth:1,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',

        width:120,
        height:120
    },
    chooseImageText: {
        maxWidth:"70%", 
        textAlign:'center', 
        marginBottom:10, 
        fontSize:12,
        letterSpacing:1
    },
    finishButton: {
        borderRadius:25,  
        paddingVertical:12, 
        flexDirection:'row',
        borderWidth:1,

    },
    finishButtonText: {
        fontSize:18,
        letterSpacing:3,
        paddingHorizontal:7,
        fontWeight:'600'
    },
    stageComponent: {
        flexDirection:'row',
        alignItems:'center',
        borderTopWidth:0,
        borderRadius:5,
        paddingVertical:7 
    },
    removeStage: {
        borderRadius:15,
        paddingHorizontal:10,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:0,  
        marginRight:10,
        marginLeft:10
    },
    stageContent:{
        borderRadius:15,
        paddingBottom:10,
        paddingHorizontal:10,
        paddingVertical:0,   
        marginVertical:5     
    },
    stageName: {
        paddingVertical:7, 
        paddingHorizontal:15,
        borderRadius:15,
        fontSize:16,
    },
    stageAddButton: {
        backgroundColor:'#273',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        marginVertical:10,
        borderRadius:15
    },
    addStageText: {
        textTransform:'uppercase',
        letterSpacing:1,
        marginLeft:15
    },
    componentsContainer: {
   
    },
    addComponentButton: {
      paddingHorizontal:20,
      paddingVertical:3,
      marginVertical:10,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:15  
    },
    component:{
      alignItems:'center',
      justifyContent:'space-around',
      width:100,
      height:110,
      //backgroundColor: 'rgba(1,1,1,.2)',
      paddingHorizontal:10,
      paddingVertical:6,
      borderRadius:15
    },
    typeComponent: {
      textTransform:'uppercase',
      fontSize:12,
      color:'#bbb',
      letterSpacing:1
    },
    nameComponent: {
      color:'white',
      fontWeight:'bold',
      letterSpacing:1
    },
    imageComponent: {
      width:35, 
      height:35,
    },
})