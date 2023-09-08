import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {Image} from 'react-native';
import LookAndFeel from './src-lf/lookAndFeel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faBars, faCamera,faPencil,faMagnifyingGlass,faPen,faComment, faVideo,faUser, faBook } from '@fortawesome/free-solid-svg-icons';
//import{faBars,faEnvelope , faCamera,faPencil,faPen,faMessage, faVideoCamera, faBook} from '@fortawesome/free-regular-svg-icons';
  
 
const ChatsList = () => {
  
  return (

  <View style = {LookAndFeel.ChatListContainer} >

    <View style = {LookAndFeel.ChatListDesign} > 
     <View>
     <Image
             source={ require('./assets/bsitGC.png' )} style={{ width: 50, height: 50 }} />
        
         </View>
       <View> 
          <Text style ={LookAndFeel.setFontColor}>BSIT - 3B</Text>
          <Text style ={LookAndFeel.setFontColor}> Mj sent a photo. - 8:05 AM </Text>
       </View>
        </View>

   
        <View style = {LookAndFeel.ChatListDesign} > 
       <View>
       <Image
             source={ require('./assets/AGCgc.png' )} style={{ width: 50, height: 50 }} />
        
          </View>
         <View>
          <Text style ={LookAndFeel.setFontColor}>AGC SCHOLARSHIP PROGRAM</Text>
          <Text style ={LookAndFeel.setFontColor}> Alturas: Good day! Kinsay bagong occupants s... -1:26 PM</Text>
      </View>
        </View>

        <View style = {LookAndFeel.ChatListDesign} > 
       <View>
       <Image
           source={ require('./assets/bsit.png' )} style={{ width: 50, height: 50 }} />
            </View>
         <View>
          <Text style ={LookAndFeel.setFontColor}>BSIT - 3B ADVISORY ❤️</Text>
         <Text style ={LookAndFeel.setFontColor}>Ira Jane L. Renoblas reacted 😥 to your message - Tue  </Text>
      </View>
        </View>

        <View style = {LookAndFeel.ChatListDesign} > 
       <View>
       <Image
             source={ require('./assets/logicGC.png' )} style={{ width: 50, height: 50 }} />
        
          </View>
         <View>
          <Text style ={LookAndFeel.setFontColor}>LOGIC 3B</Text>
          <Text style ={LookAndFeel.setFontColor}>Jhon Mark unsent a message. - Mon </Text>
      </View>
        </View>

        <View style = {LookAndFeel.ChatListDesign} > 
       <View>
       <Image
             source={ require('./assets/quantittive.png' )} style={{ width: 50, height: 50 }} />
        
          </View>
         <View>
          <Text style ={LookAndFeel.setFontColor}>BSIT 3B - QUANTITATIVE METHODS </Text>
          <Text style ={LookAndFeel.setFontColor}>Karl: Noted ma'am - Mon </Text>
      </View>
        </View>

        <View style = {LookAndFeel.ChatListDesign} > 
       <View>
       <Image
             source={ require('./assets/AGCBalilihan.png' )} style={{ width: 50, height: 50 }} />
        
          </View>
         <View>
          <Text style ={LookAndFeel.setFontColor}>BISU Balilihan AGC Scholar </Text>
          <Text style ={LookAndFeel.setFontColor}>Kristine Vine: okay lang te. salamat - Jul 27</Text>
      </View>
        </View>
   
    </View>

);
}

const AccountsList = () => {
      return(
         <View style = {LookAndFeel.AccountsListDesign}>

              <View style = {[LookAndFeel.IconsListContainer, {margin: '5px'}] } >

              <View> 
       <Image
         source={ require('./assets/nilson.png' )} style={{ width: 50, height: 50 }} />
        
        </View>
         <View>
          <Text style ={LookAndFeel.setFontColor2}>Nilson Liguid </Text>
          <Text style ={[LookAndFeel.setFontColor2, {textAlign: 'center'}]}>Rabanes</Text>
      </View>
        </View>

        <View style = {[LookAndFeel.IconsListContainer, { }] } >

         <View>
         <Image
             source={ require('./assets/almarie.png' )} style={{ width: 50, height: 50 }} />
        
          </View>
         <View>
          <Text style ={[LookAndFeel.setFontColor2, {textAlign: 'center'}]}>Almarie </Text>
          <Text style ={LookAndFeel.setFontColor2}>Cemine Buaya</Text>
      </View>
        </View>

        <View style = {[LookAndFeel.IconsListContainer, {margin: '5px'}] } >

         <View>
         <Image
             source={ require('./assets/karl.png' )} style={{ width: 50, height: 50 }} />
        
          </View>
         <View>
          <Text style ={[LookAndFeel.setFontColor2,{textAlign: 'center'}]}>Karl </Text>
          <Text style ={LookAndFeel.setFontColor2}>Loquias</Text>
      </View>
        </View>

        <View style = {[LookAndFeel.IconsListContainer, {margin: '1px'}] } >
 
         <View>  <Image
             source={ require('./assets/ira.png' )} style={{ width: 50, height: 50 }} />
          </View>
         <View>
          <Text style ={[LookAndFeel.setFontColor2,{textAlign: 'center'}]}>Ira L.</Text>
          <Text style ={LookAndFeel.setFontColor2}>Renoblas</Text>
      </View>

        </View> 

        <View style = {[LookAndFeel.IconsListContainer, {margin: '7px'}] } >

         <View>
         <Image
             source={ require('./assets/deserrie.png' )} style={{ width: 50, height: 50 }} />
        
          </View>
         <View>
          <Text style ={LookAndFeel.setFontColor2}>Deserrie</Text>
          <Text style ={LookAndFeel.setFontColor2}>Lumantas</Text>
      </View>
        </View>

       <View style = {[LookAndFeel.IconsListContainer, {margin: '5.8px'}] } >

         <View>
         <Image
             source={ require('./assets/jhannel.png' )} style={{ width: 50, height: 50 }} />
        
          </View>
         <View>
          <Text style ={[LookAndFeel.setFontColor2,{textAlign: 'end'}]}>Jhannel</Text>
          <Text style ={[LookAndFeel.setFontColor2,{textAlign: 'center'}]}>Navares Qu</Text>
      </View>
        </View>

         </View>

)}
const SearchBAr = () =>{
       return(
       
    <View style = {LookAndFeel.SearchBarContainer}>
      <View style ={[LookAndFeel.ChatListDesign, {backgroundColor: '#757575', width: '100px'}]}>
     <View> 
     <FontAwesomeIcon style={{color: "#efeff1",marginLeft: '15px'}} icon={faMagnifyingGlass}/>
     
     </View>
      <Text style ={{ marginLeft: '13px', color: 'white'}}> Search</Text>
     <View>
     </View>  
     </View>
    </View>

)
}
 
const TopIcons =() =>{
           return(
  <View style ={LookAndFeel.ChatListDesign} >

  
      <View style = {LookAndFeel.IconsListContainer}>
        <View style = {{borderRadius: 50, marginLeft: '15px', backgroundColor: 'gray', width: '25px',height: '25px',justifyContent: 'center'}}> 
      <FontAwesomeIcon  style = {{color: 'white'}} icon={faBars} />
       </View>
       </View>

      <View style = {LookAndFeel.IconsListContainer}>
        <Text style ={[LookAndFeel.setFontColor,{marginLeft: '10px',color: 'white', fontSize: '17px', fontWeight: '300',fontFamily: 'Helvetica'}]}>Chats</Text>
      </View>

      <View style = {LookAndFeel.IconsListContainer}>
      <View style = {{borderRadius: 50, marginLeft: '220px', backgroundColor: 'gray', width: '25px',height: '25px',justifyContent: 'center'}}> 
      <FontAwesomeIcon  style = {{color: 'white'}} icon={faCamera} />
       </View>
      </View>

      <View style = {LookAndFeel.IconsListContainer}>
        
      <View style = {{borderRadius: 50, marginLeft: '15px', backgroundColor: 'gray', width: '25px',height: '25px',justifyContent: 'center'}}> 
      <FontAwesomeIcon  style = {{color: 'white'}} icon={faPen} />
       
       </View>     </View>
    


  </View>

)
}

const ButtomIcoms = () =>{
          return(
  <View style ={[LookAndFeel.ChatListDesign, {justifyContent : 'space-evenly' , marginTop: '50px'}]} >

 <View style = {LookAndFeel.IconsListContainer}>
   <View>
   <FontAwesomeIcon  style = {{color: '#2c3ec3'}} icon={faComment} />
           </View>
         <View>
          <Text style ={{ color: '#2c3ec3'}}>Chats</Text>
         
      </View>
        </View>
        
        <View style = {LookAndFeel.IconsListContainer} > 
         <View>
         <FontAwesomeIcon  style = {{color: '#757575'}} icon={faVideo} />

          </View>
         <View>
          <Text style ={LookAndFeel.setFontColor}>Calls</Text>
         
      </View>
        </View>

        <View style = {LookAndFeel.IconsListContainer} > 
       <View  style = {{flex: 1, flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center',}}>
         <View>
         <FontAwesomeIcon  style = {{color: '#757575'}} icon={faUser} />
            </View>
            <View>     
         <FontAwesomeIcon  style = {{color: '#757575',marginLeft: '-4px', paddingBlockStart: ''}} icon={faUser} />
         
          </View>
</View>
          
         <View>
          <Text style ={LookAndFeel.setFontColor}>People</Text>
         
      </View>
        </View>

        <View style = {LookAndFeel.IconsListContainer} > 
         <View>
         <Image
             source={ require('./assets/last.png' )} style={{ width: 20, height: 20 }} />
        
          </View>
         <View>
            <Text style ={LookAndFeel.setFontColor}>Stories</Text>
         
      </View>
        </View>

</View>
        
)
}

export default function App() {
   

  return (
    
  <View style={LookAndFeel.container}>

          <TopIcons/>
          <Text style ={[LookAndFeel.setFontColor,{textAlign: 'center', width: '400px', fontSize: '10px'}]}>Connecting...</Text>
       <SearchBAr/>
        <AccountsList/>
       <ChatsList/>
       
      <ButtomIcoms/>
      <StatusBar style="auto" />
       
    </View>
  );
};
