import React from 'react';
import { View,SafeAreaView,StatusBar} from 'react-native';

import Lottie from 'lottie-react-native';
import ilustr from './lf30_editor_wk2imig8.json'
const App = () => {

  return (
    <>
  <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <StatusBar barStyle="dark"/> 

    <Lottie
    resize="contain"
     autoSize
    source={ilustr}
    autoPlay loop
     />

  </SafeAreaView>
  </>
)
}

export default App;