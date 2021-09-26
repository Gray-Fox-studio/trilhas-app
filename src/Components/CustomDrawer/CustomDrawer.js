import React from 'react';
import { Text } from 'reeact-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) =>{
    return(
        <DrawerContentScrollView {...props}>
            <Text>Ola</Text>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;