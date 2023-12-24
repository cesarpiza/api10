import { useEffect, useRef, useState } from "react";
import { baseUrl } from '../store/api';

export function useGetBooks() {
    const [data, setData] = useState([]);
    const [progress, setProgress] = useState(false);
    let controller = useRef(new AbortController());

    async function getBooks(inputValue) {
        if (inputValue === '') {
            alert('Please, enter!');
        } else {
            setProgress(true);
            controller.current = new AbortController();
            const signal = controller.current.signal;
            try {
                const response = await fetch(`${baseUrl}${inputValue}`, { signal });
                const data = await response.json();
                const { docs } = data;

                if (docs) {
                    if (docs.length === 0) {
                        alert(`"${inputValue}" not found!`);
                        return;
                    }

                    const newList = docs.slice(0, 20).map((book) => {
                        const { key, author_name, cover_i, edition_count, first_publish_year, title } = book;
                        return {
                            id: key.replace("/works/", ""),
                            authorName: Array.isArray(author_name) ? author_name.join(", ") : author_name,
                            cover_id: cover_i,
                            editionCount: edition_count,
                            firstPublishYear: first_publish_year,
                            title: title,
                        }
                    });

                    setData(newList);
                }
            } catch (error) {
                if (error?.message === 'Aborted') {
                    console.log(error.message);
                } else {
                    console.error(error?.message);
                }
            } finally {
                setProgress(false);
            }
        }
    }

    useEffect(() => {
        return () => {
            controller.current.abort();
        }
    }, []);

    return { data, getBooks, progress, controller };
}