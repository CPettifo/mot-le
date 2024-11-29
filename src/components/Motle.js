import React, { useState, useEffect } from "react";
import Board from "./Board";


const Motle = () => {
    const [randomWord, setRandomWord] = useState("");
    const [unaccentedWord, setUnaccentedWord] = useState("");
    const [error, setError] = useState(null);


    // PSUEDOCODE
    // Fetch the word from the backend and display the squares
    // Each box starts as "empty", and is numbered 1 - 5, when the user types a letter in, replace the "empty" with the letter the user entered
    // Display the entered letter and then move to the next box
    // backspace will remove the letter and move back one space
    // When the user enters a guess do the following (limited to the number of guesses)
    // Check each letter for a match against the back-end
    // If the user has all letters correct end the game and ask if they want to play again
    // Display the squares that the user got right with the appropriate colours
    // Go to the next row and reduce the number of guesses remaining

    useEffect(() => {
        const fetchWord = async () => {
        try {
            const response = await fetch(
                // I don't mind if you find the URI here, it's restricted to read-only
                "https://superb-bombolone-33f34b.netlify.app/.netlify/functions/fetchRandomWord"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch the word");
            }

            const data = await response.json();
            setRandomWord(data.mot); 
            setUnaccentedWord(data.unaccent);
        } catch (err) {
            setError(err.message);
        }
        };

        fetchWord();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
            <p>Word: {randomWord}</p>
            <p>Unaccented Word: {unaccentedWord}</p>
            <Board word={randomWord} />
        </div>
    );
};

export default Motle;