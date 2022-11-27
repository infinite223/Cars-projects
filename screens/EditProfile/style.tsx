import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    containerModal: {
        width:"100%", 
        flex:1,
        paddingHorizontal:20,
        paddingVertical:15,
        justifyContent:'space-between'
    },
    headerText: {
        fontSize:20,
        letterSpacing:1,
        alignSelf:'center'
    },
    mainData: {
        marginVertical:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderWidth:1,
        borderColor:'rgba(50, 50, 50, 1)',
        borderRadius:15,
        paddingBottom:20,
        paddingTop:10
    },
    imageProfile: {
        width:100,
        height:100,      
    },
    imageProfileLabel: {
        fontSize:12,
        marginTop:5
    },
    nameInput: {
        fontSize:18,
        marginTop:10,
        borderRadius:10,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:'rgba(50, 50, 50, 1)',
        // height:100,
        paddingVertical:5
    },
    descriptionInput: {
        fontSize:16,
        borderRadius:10,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:'rgba(50, 50, 50, 1)',
        // height:100,
        paddingVertical:5
        // borderWidth:1,
    },
    placeContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10,
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:8,
        backgroundColor: '#273'
    },
    placeText: {
        fontSize:14,
        letterSpacing:1,
        color:'white'
    },
    deleteButton: {
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:8,
        backgroundColor: 'rgb(100, 20, 30)'
    //    justifyContent:'flex-end'
    },
    deleteText: {
        fontSize:13,
        letterSpacing:1,
        color:'#bbb'
    }
})