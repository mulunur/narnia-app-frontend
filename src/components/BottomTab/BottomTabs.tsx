import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RecommendsScreen } from '../../screens/RecommendsScreen';
import { SkapScreen } from '../../screens/ClosetScreen';
import { LooksScreen } from '../../screens/LooksScreen';
import { BottomIcon } from './BottomIcon';

const skapName = "Шкаф"
const looksName = "Образы"
const recommendsName = "Рекоммендации"

export function BottomTabs ({navigation}) {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator 
        initialRouteName={looksName} 
        screenOptions={({route}) => ({
            
            //tapBarShowLabel: false,
            headerShown:true,
            // tabBarLabel(props) {
            //     focused: false
            // },
            tabBarIcon: ({focused, color, size}) => {
                let iconPath = './img/sweater.png'
                let rn = route.name
                //console.log(rn)

                // if (rn == skapName) {
                //     iconPath = focused ? './img/sweater.png' : './img/sweater-outline.png'
                // }
                // if (rn == looksName) {
                //     iconPath = focused ? './img/clothes.png' : './img/clothes-outline.png'
                // }

                return <BottomIcon name={rn} size={2} color={color}/>
               
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray'
        })}
        >
            <Tab.Screen name={skapName} component={SkapScreen}/>
            <Tab.Screen name={looksName} component={LooksScreen} />
            <Tab.Screen name={recommendsName} component={RecommendsScreen} />
        </Tab.Navigator>
    )
}