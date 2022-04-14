import { useState } from "react";

const Search = () => {

    const [city, setCity] = useState('');


    const handleSubmit = (e) => {

        e.preventDefault();
        // setCity(city);

    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city-weather">city</label>
                    <input type="text" name="city" id="city-weather" value={city}
                        onChange={(e) => setCity(e.target.value)} />
                    <input type="submit" value="search" />
                </form>
            </div>
        </>

    );
};


export default Search;