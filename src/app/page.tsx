"use client";

import React, { useState } from "react";
import { isPalindrome } from "./helper/index";

const PalindromeChecker: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handle the result of checking if input is a palindrome
  const handleCheck = () => {
    const trimmedInput = input.trim(); // Trim input to remove leading/trailing spaces
    if (trimmedInput === "") {
      setError("Please enter a valid text.");
      setResult(null);
      return;
    }

    setError(null); // Clear the error if input is valid

    const palindromeResult = isPalindrome(trimmedInput)
      ? "✅ Yes, it's a palindrome!"
      : "❌ No, it's not a palindrome.";
    setResult(palindromeResult);
  };

  // Handle key press event (Enter key to trigger palindrome check)
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCheck();
    }
  };

  // Handle input change for real-time feedback
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value.trim() === "") {
      setError("Please enter a valid text.");
      setResult(null);
    } else {
      setError(null);
      setResult(
        isPalindrome(value.trim())
          ? "✅ Yes, it's a palindrome!"
          : "❌ No, it's not a palindrome."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-gray-900">
        <h1 className="text-3xl font-extrabold text-center mb-6">
          Palindrome Checker
        </h1>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Added key press event
          placeholder="Enter a phrase"
          className="border border-gray-300 rounded-lg p-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {error && (
          <p className="mt-4 text-center text-xl font-semibold text-red-600">
            {error}
          </p>
        )}
        {result && !error && (
          <p className="mt-4 text-center text-xl font-semibold">{result}</p>
        )}
      </div>
    </div>
  );
};

export default PalindromeChecker;
