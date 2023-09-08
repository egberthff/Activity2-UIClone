import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {React} from 'react';

 

const LookAndFeel = StyleSheet.create({
    container: {
        
            flex: 1,
            width: '400px',
            backgroundColor: 'black',
            marginVertical: "20px",
            
           // color: 'white'
          //  alignItems: 'center',
           // justifyContent: 'center',
     },
     setFontColor:{
        fontWeight: '100',
        //color: 'white',
        color: '#CED5E4',
        fontSize: '12px'
     },

     setFontColor2:{
      fontWeight: '100',
      color: 'white',
     // color: '#757575',
      fontSize: '12px'
   },
    
   ChatListDesign:{
        flex: 1,
       flexDirection: 'row',
       justifyContent: 'flex-start', 
       alignItems: 'center',
       width: '400px',
      backgroundColor: 'black',
       borderTopRightRadius: 10,
       borderTopLeftRadius: 10,
       borderBottomRightRadius: 10,
       borderBottomLeftRadius: 10,
       marginBottom:'8px',
       marginTop:'8px',
         

     },

    ChatListContainer:{
      width: '400px',
        justifyContent: 'flex-end',
        marginLeft: '15px',
        marginTop: '17px',
        backgroundColor: 'black',
         
      },

     IconsListContainer:{
      //  marginLeft: '10px',
      //  marginRight: '10px',
        backgroundColor: '',
        alignItems: 'center',
    },
     
    
     AccountsListDesign:{
        flex: 1,
       flexDirection: 'row',
       justifyContent: 'flex-start',
       alignItems: 'center',
       with: 150,
       backgroundColor: '',
       borderTopRightRadius: 10,
       borderTopLeftRadius: 10,
       borderBottomRightRadius: 10,
       borderBottomLeftRadius: 10,
       marginBottom:'8px',
       marginTop:'45px',
       //marginLeft: '10px',
       marginVertical: '20px'
       
       
        
       },

     SearchBarContainer:{
        borderRadius: 50,
        backgroundColor: '#757575', //asbestos
      //backgroundColor: 'red',
        marginTop: '10px',
        margin: '10px',
        width: '360px'
         
        
     }  
})

export default LookAndFeel
//export default ChatListDesign 
