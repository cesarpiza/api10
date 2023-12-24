import React, { useEffect } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
import { ActivityIndicator } from 'react-native';
import { useGetBookDetails } from '../../hooks/useGetBookDetails';
import { Styles } from '../../styles/theme';

export default function Details({ route }) {

    const { id, image, cover_id } = route.params;
    const { data, progress, getBookDetails } = useGetBookDetails();

    useEffect(() => {
        getBookDetails(id);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {progress &&
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ActivityIndicator size={54} color={Styles.colors.background2} />
                </View>
            }
            {!progress && <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    padding: Styles.spacing.defaultSpacing * 2,
                    paddingTop: Styles.spacing.defaultSpacing * 9,
                }}
            >
                <View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={cover_id ? { uri: image } : require('../../assets/cover_not_found.jpg')}
                        />
                    </View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.text}>{data.description}</Text>
                    <Text style={styles.text}>
                        <Text style={styles.subTitle}>
                            subject places: </Text>
                        {data.subjectPlaces}
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.subTitle}>
                            subject times: </Text>
                        {data.subjectTimes}
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.subTitle}>
                            subjects: </Text>
                        {data.subjects}
                    </Text>
                </View>
            </ScrollView>
            }
        </SafeAreaView>
    );
}