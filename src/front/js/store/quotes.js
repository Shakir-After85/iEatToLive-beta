import React, { useState, useEffect } from "react";

function quotes() {
  const [quotes, setQuotes] = useSate("");
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let randomQuote = math.floor(Math.random() * data.length);
        setQuotes(data[randomQuote]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quote">
      <p>{quotes.text}</p>
      <p>{quote.author}</p>
    </div>
  );
}

export default quotes;
