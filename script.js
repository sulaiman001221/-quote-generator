const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best. – St. Jerome",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Don't count the days, make the days count. - Muhammad Ali",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}

document
  .getElementById("new-quote-btn")
  .addEventListener("click", generateQuote);

generateQuote();
