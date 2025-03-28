function slugify(title) {
  const slugNormalize = title.toLowerCase();
  const slugArray = slugNormalize.split(' ');
  const slug = slugArray.join('-');
  return slug;
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .split(/\s+/) // Розбиваємо рядок у масив за пробілами (одним або кількома)
//     .join('-'); // Збираємо масив назад у рядок, вставляючи між елементами дефіс
// }
// console.log(slugify('  Hello   World  ')); // "hello-world"
