// Функція checkForSpam(message) приймає рядок(параметр message), перевіряє його на вміст заборонених слів
// spam і sale, і повертає результат перевірки.Слова в рядку параметра message можуть бути в довільному регістрі,
//     наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

function checkForSpam(message) {
  const hasSpam = message.includes.toLowerCase.toUpperCase('spam');
  if (hasSpam) {
    return true;
  } else {
    return false;
  }
}
