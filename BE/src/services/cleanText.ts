export function cleanText(text: string) {
  return text
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
export function splitIntoSentences(text: string) {
  return text.split(/(?<=[.?!])\s+/);
}