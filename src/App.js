import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import CountrySearchBar from "./components/CountrySearchBar";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //FETCH ALL COUNTRIES FROM THE API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const sortedData = data.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
          );
          setCountries(sortedData);
          setFilteredCountries(sortedData);
        } else {
          console.error("Invalid data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  //FILTER COUNTRIES LIST
  const handleSearchCoutry = (event) => {
    const countryValue = event.target.value.toLowerCase();
    setSearchCountry(countryValue);
    const filtered = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(countryValue) ||
        country.name.official.toLowerCase().includes(countryValue)
    );
    setFilteredCountries(filtered);
  };

  const handleClearSearchBar = () => {
    setSearchCountry("");
    setFilteredCountries(countries);
    setExpandedIndex(-1);
  };

  //toggling the expansion state and preventing opening multiple cards at once
  const handleExpandClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="countryWrapper">
      <CountrySearchBar
        size="medium"
        label="Search country"
        onChange={handleSearchCoutry}
        onClear={handleClearSearchBar}
        value={searchCountry}
        style={{ width: "400px" }}
      />
      <div className="countryCardContent">
        {filteredCountries.map((country, index) => (
          <CountryCard
            key={index}
            countryData={country}
            index={index}
            expandedIndex={expandedIndex}
            onExpandClick={() => handleExpandClick(index)}
            expandedClass={expandedIndex === index ? "expandedCard" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
