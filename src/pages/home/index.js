import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { useGetBooks } from '../../hooks/useGetBooks';
import { styles } from './styles';
import Header from '../../components/header';
import Books from '../../components/books';

export default function Home() {

    const [inputValue, setInputValue] = useState('');
    const { data, getBooks, progress, controller } = useGetBooks();

    const headerItems = {
        getBooks,
        inputValue,
        setInputValue
    }

    const booksItems = {
        data,
        progress,
    }

    useEffect(() => {
        controller.current.abort();
    }, [inputValue]);

    return (
        <SafeAreaView style={styles.container}>
            <Header {...headerItems} />
            <Books {...booksItems} />
        </SafeAreaView>
    );
}