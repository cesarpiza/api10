import React, { useEffect, useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { Styles } from '../../styles/theme';

export default function Header(props) {

    const textInputRef = useRef(null);

    const {
        getBooks,
        inputValue,
        setInputValue
    } = props;

    useEffect(() => {
        setTimeout(() => {
            textInputRef.current.focus();
        }, 500);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>find your book of choice.</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    ref={textInputRef}
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                    style={styles.textInput}
                    placeholder='Search'
                    placeholderTextColor={Styles.colors.defaultColor2}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            getBooks(inputValue);
                        }}
                    >
                        <Feather name="search" size={30} color={Styles.colors.defaultColor2} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}