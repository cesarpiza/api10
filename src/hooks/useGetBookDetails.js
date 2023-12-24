import { useEffect, useRef, useState } from "react";
import { bookDetailsUrl } from '../store/api';

export function useGetBookDetails() {
    const [data, setData] = useState({});
    const [progress, setProgress] = useState(false);
    let controller = useRef(new AbortController());

    async function getBookDetails(id) {
        setProgress(true);
        controller.current = new AbortController();
        const signal = controller.current.signal;

        try {
            const response = await fetch(`${bookDetailsUrl}${id}.json`, { signal });
            const data = await response.json();

            if (data) {
                const { description, title, subject_places, subject_times, subjects } = data;

                const newBookDetails = {
                    description: description?.value ? description.value : 'No description found',
                    title: title,
                    subjectPlaces: subject_places ? (Array.isArray(subject_places) ? subject_places.join(', ') : subject_places) : 'No subject places found',
                    subjectTimes: subject_times ? subject_times.join(', ') : 'No subject times found',
                    subjects: subjects ? subjects.join(', ') : 'No subjects found',
                }

                setData(newBookDetails);
            }
        } catch (error) {
            console.error(error?.message);
        } finally {
            setProgress(false);
        }
    }

    useEffect(() => {
        return () => {
            controller.current.abort();
        }
    }, []);

    return { data, progress, getBookDetails };
}