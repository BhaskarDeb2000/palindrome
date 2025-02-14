  export const normalizeText = (text: string): string => {
    return text.toLowerCase().replace(/[^a-z0-9]/g, "");
  };

  export const isPalindrome = (text: string): boolean => {
    const normalized = normalizeText(text);
    return normalized === normalized.split("").reverse().join("");
  };