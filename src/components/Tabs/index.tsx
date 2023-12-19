import { styles } from './styles';
import { ITabs } from './interface';
import { FC, useState } from 'react';
import { pomoTabs } from '../../utils';
import { Text, TouchableOpacity, View } from 'react-native';

export const Tabs: FC<ITabs> = ({ tab, setTab, setTime }) => {
    // Handlers
    const handlePress = (index: number) => {
        setTab(index)
        setTime(pomoTabs[index].time * 60)
    }

    return (
        <View style={styles.container}>
            {pomoTabs.map((item, i) => (
                <TouchableOpacity
                    key={`${item.name}-${i}`}
                    onPress={() => handlePress(i)}
                    style={[styles.tab, tab === i && styles.activeTab]}
                >
                    <Text style={{ fontWeight: 'bold' }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
