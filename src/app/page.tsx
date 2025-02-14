"use client";

import React, { useState } from "react";
import { isPalindrome } from "./helper/index";

const PalindromeChecker: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = () => {
    setResult(
      isPalindrome(input)
        ? "✅ Yes, it's a palindrome!"
        : "❌ No, it's not a palindrome."
    );
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
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a phrase"
          className="border border-gray-300 rounded-lg p-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleCheck}
          className="mt-4 w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300"
        >
          Check
        </button>
        {result && (
          <p className="mt-4 text-center text-xl font-semibold">{result}</p>
        )}
      </div>
    </div>
  );
};

export default PalindromeChecker;
