import React, { useState } from 'react';
import {
    ActivityIndicator,
    Image,
    View,
} from 'react-native';
import { styles } from '../books/styles';
import { Styles } from '../../styles/theme';

export default function ImageProgress(props) {

    const [loading, setLoading] = useState(true);
    const {
        cover_id,
        image,
    } = props;

    const onLoadEnd = () => {
        setLoading(false);
    };

    return (
        <View style={styles.imageContainer}>
            <ActivityIndicator size={33} animating={loading} color={Styles.colors.background2} style={{
                position: 'absolute',
            }} />
            <Image
                style={styles.image}
                source={cover_id ? { uri: image } : require('../../assets/cover_not_found.jpg')}
                onLoadEnd={onLoadEnd}
            />
        </View>
    );
}