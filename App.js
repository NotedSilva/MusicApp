import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PlayerScreen } from './screens/Player';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, fontWeight: 'bold', }}>
      <Text>
        bem-vindo ao meu mundo musical
      </Text>
      {[1,2,3,4,5].map((item) => {
        return (
          <TouchableOpacity
            key={item}
            onPress={() => {
              navigation.navigate('PlayerScreen'),
              navigation.navigate('Music2'),
              navigation.navigate('Music3'),
              navigation.navigate('Music4'),
              navigation.navigate('Music5')
            }}
          >
            <Text>
              Música: 0{item}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

function DiscoverScreen() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, fontWeight: 'bold', fontSize: 50, }}>
      <Text>
        Um mundo de descoberta musical!
      </Text>
    </View>
  )
}

// ===============================================================
// ===============================================================
// ===============================================================

const PodcastsStack = createStackNavigator();

function PodcastsTabStack() {
  return (
    <PodcastsStack.Navigator>
      <PodcastsStack.Screen name="HomeScreen" component={HomeScreen} />
      <PodcastsStack.Screen name="PlayerScreen" component={PlayerScreen} />
    </PodcastsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Página Inicial" component={PodcastsTabStack} />
      <Tab.Screen name="Descoberta" component={DiscoverScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <PlayerScreen />
//   );
// }