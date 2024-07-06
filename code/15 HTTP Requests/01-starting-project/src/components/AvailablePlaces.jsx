import Places from './Places.jsx';
import fetchAvailablePlaces from "../http/fetchAvailablePlaces.js";
import Error from "../../../../../attachments/15 HTTP Requests/Error.jsx";
import useLoadData from "../hooks/useLoadData.js";

export default function AvailablePlaces({onSelectPlace}) {
    const [places, loading, error] = useLoadData(fetchAvailablePlaces, []);

    return (
        <>
            {error
                ? <Error title="Some Error Title" message={error.message}/>
                : <Places
                    title="Available Places"
                    places={places}
                    loading={loading}
                    loadingText="Data is loading."
                    fallbackText="No places available."
                    onSelectPlace={onSelectPlace}/>}
        </>

    );
}
