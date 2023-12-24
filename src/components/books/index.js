import React, { memo, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import ImageProgress from '../imageProgress';
import { styles } from './styles';
import { Styles } from '../../styles/theme';

function Books(props) {

    const { data, progress } = props;
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            {progress ?
                <ActivityIndicator size={54} color={Styles.colors.background2} />
                :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{
                        width: '100%',
                    }}
                    contentContainerStyle={{
                        padding: Styles.spacing.defaultSpacing / 1.5,
                        paddingRight: 0,
                        rowGap: Styles.spacing.defaultSpacing / 1.5,
                    }}
                    numColumns={2}
                    data={data}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => {

                        const id = item.id
                        const cover_id = item.cover_id
                        const image = `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`;

                        const imageItems = {
                            cover_id,
                            image,
                        }

                        return (
                            <TouchableOpacity
                                style={styles.bookContainer}
                                onPress={() => {
                                    navigate('Details', { id, image, cover_id })
                                }}
                            >
                                <View>
                                    <ImageProgress {...imageItems} />
                                </View>
                                <Text numberOfLines={1} style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text numberOfLines={1} style={styles.text}>
                                    <Text style={styles.subTitle}>
                                        author: </Text>
                                    {item.authorName}
                                </Text>
                                <Text style={styles.text}>
                                    <Text style={styles.subTitle}>
                                        total editions: </Text>
                                    {item.editionCount}
                                </Text>
                                <Text style={styles.text}>
                                    <Text style={styles.subTitle}>
                                        first publish year: </Text>
                                    {item.firstPublishYear}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            }
        </View>
    );
}

export default memo(Books);