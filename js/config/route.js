import React from 'react';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';

//Component
import Login from '../Components/Login'
import Tabkjnknvksjnv1 from '../Components/Tab1'
import Tab2 from '../Components/Tab2'
import Tab3 from '../Components/Tab3'
import Tab4 from '../Components/Tab4'

export const Root = StackNavigator({
    Login:{
        screen: Login,
    },
    MainScreen:{
        screen: TabNavigator({
            Tab1:{screen:Tabkjnknvksjnv1},
            Tab2:{screen:Tab2},
            Tab3:{screen:Tab3},
            Tab4:{screen:Tab4}
        },{
                tabBarPosition: 'bottom',
            }
        )
    },

})