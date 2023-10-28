import { useEffect, useState } from "react";

const useFetchHook = (apiUrl:string, hold = false) => {
  const [responseData, setResponseData] = useState()
  const [error, setError] = useState<string>()

  useEffect(() => {
    // Use the fetch API to make a GET request
    if(hold) return;
    fetch(apiUrl)
      .then((response) => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
          setError('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        setResponseData(data);
      })
      .catch((_error) => {
        setError('There was a problem with the fetch operation');
      });
  }, [apiUrl]); // The empty dependency array ensures the effect runs only once

  return {
    responseData,
    error
  }
}

export default useFetchHook;