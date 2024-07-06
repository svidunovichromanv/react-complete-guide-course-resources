export default async function fetchAvailablePlaces(settings) {
    const response = await fetch('http://localhost:3000/places', settings);
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message || 'Something went wrong');
    }

    return json.places;
}