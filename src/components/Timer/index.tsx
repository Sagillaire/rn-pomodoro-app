import { FC } from 'react';
import { styles } from './styles';
import { Text, View } from 'react-native';

export const Timer: FC<{ time: number }> = ({ time }) => {
    const formattedTime = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTime}</Text>
        </View>
    )
}
