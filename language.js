// Language handler module - wraps all i18n functionality
(function() {
  'use strict';

// Translations object - loaded from JSON file
let translations = null;

// Load translations from JSON file
async function loadTranslations() {
  try {
    const response = await fetch('translations.json');
    if (!response.ok) {
      throw new Error(`Failed to load translations: ${response.statusText}`);
    }
    translations = await response.json();
    return translations;
  } catch (error) {
    console.error('Error loading translations:', error);
    // Fallback: return empty object to prevent errors
    translations = {};
    return translations;
  }
}
// Method documentation with translations
const methodDocsEn = {
  // Array methods
  push: {
    desc: 'Adds one or more elements to the end of an array and returns the new length.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
  },
  pop: {
    desc: 'Removes the last element from an array and returns that element.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
  },
  unshift: {
    desc: 'Adds one or more elements to the beginning of an array and returns the new length.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
  },
  shift: {
    desc: 'Removes the first element from an array and returns that element.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
  },
  splice: {
    desc: 'Changes the contents of an array by removing or replacing existing elements and/or adding new elements.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
  },
  indexOf: {
    desc: 'Returns the first index at which a given element can be found in the array, or -1 if not present.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
  },
  lastIndexOf: {
    desc: 'Returns the last index at which a given element can be found in the array, or -1 if not present.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
  },
  includes: {
    desc: 'Determines whether an array includes a certain value, returning true or false.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
  },
  find: {
    desc: 'Returns the first element in the array that satisfies the provided testing function.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
  },
  findIndex: {
    desc: 'Returns the index of the first element in the array that satisfies the provided testing function.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
  },
  map: {
    desc: 'Creates a new array populated with the results of calling a provided function on every element.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
  },
  filter: {
    desc: 'Creates a new array with all elements that pass the test implemented by the provided function.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
  },
  reduce: {
    desc: 'Executes a reducer function on each element, resulting in a single output value.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
  },
  flat: {
    desc: 'Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
  },
  sort: {
    desc: 'Sorts the elements of an array in place and returns the sorted array.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
  },
  slice: {
    desc: 'Returns a shallow copy of a portion of an array into a new array object.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
  },
  concat: {
    desc: 'Merges two or more arrays, returning a new array without modifying existing arrays.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
  },
  join: {
    desc: 'Creates and returns a new string by concatenating all elements in an array, separated by a specified separator.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
  },
  every: {
    desc: 'Tests whether all elements in the array pass the test implemented by the provided function.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
  },
  some: {
    desc: 'Tests whether at least one element in the array passes the test implemented by the provided function.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
  },
  'Array.from': {
    desc: 'Creates a new, shallow-copied Array instance from an iterable or array-like object.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
  },
  // String methods
  charAt: {
    desc: 'Returns the character at the specified index in a string.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt',
  },
  charCodeAt: {
    desc: 'Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt',
  },
  toLowerCase: {
    desc: 'Returns the calling string value converted to lower case.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase',
  },
  trim: {
    desc: 'Removes whitespace from both ends of a string and returns a new string.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim',
  },
  replace: {
    desc: 'Returns a new string with some or all matches of a pattern replaced by a replacement.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
  },
  repeat: {
    desc: 'Constructs and returns a new string which contains the specified number of copies of the string.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat',
  },
  padStart: {
    desc: 'Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart',
  },
  startsWith: {
    desc: 'Determines whether a string begins with the characters of a specified string.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith',
  },
  endsWith: {
    desc: 'Determines whether a string ends with the characters of a specified string.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
  },
  split: {
    desc: 'Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
  },
  match: {
    desc: 'Retrieves the result of matching a string against a regular expression.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match',
  },
  search: {
    desc: 'Executes a search for a match between a regular expression and this String object.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search',
  },
  // Object methods
  'Object.keys': {
    desc: "Returns an array of a given object's own enumerable property names.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys',
  },
  'Object.values': {
    desc: "Returns an array of a given object's own enumerable property values.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values',
  },
  'Object.entries': {
    desc: "Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries',
  },
  'Object.fromEntries': {
    desc: 'Transforms a list of key-value pairs into an object.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
  },
  'Object.assign': {
    desc: 'Copies all enumerable own properties from one or more source objects to a target object.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign',
  },
  hasOwnProperty: {
    desc: 'Returns a boolean indicating whether the object has the specified property as its own property.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty',
  },
  // Map methods
  Map: {
    desc: 'The Map object holds key-value pairs and remembers the original insertion order of the keys.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
  },
  set: {
    desc: 'Sets the value for the key in the Map object. Returns the Map object.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set',
  },
  get: {
    desc: 'Returns the value associated with the key, or undefined if there is none.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get',
  },
  has: {
    desc: 'Returns a boolean indicating whether an element with the specified key exists or not.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has',
  },
  delete: {
    desc: 'Removes the specified element from a Map object by key.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete',
  },
  // Set methods
  Set: {
    desc: 'The Set object lets you store unique values of any type, whether primitive values or object references.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
  },
  add: {
    desc: 'Appends a new element with a specified value to the end of a Set object.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add',
  },
  // Math methods
  'Math.max': {
    desc: 'Returns the largest of zero or more numbers.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max',
  },
  'Math.min': {
    desc: 'Returns the smallest of zero or more numbers.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min',
  },
  'Math.abs': {
    desc: 'Returns the absolute value of a number.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs',
  },
  'Math.floor': {
    desc: 'Returns the largest integer less than or equal to a given number.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor',
  },
  'Math.ceil': {
    desc: 'Returns the smallest integer greater than or equal to a given number.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil',
  },
  'Math.round': {
    desc: 'Returns the value of a number rounded to the nearest integer.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
  },
  'Math.trunc': {
    desc: 'Returns the integer part of a number by removing any fractional digits.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc',
  },
  'Math.sqrt': {
    desc: 'Returns the square root of a number.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt',
  },
  'Math.pow': {
    desc: 'Returns the base to the exponent power, that is, base^exponent.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow',
  },
  'Math.random': {
    desc: 'Returns a floating-point, pseudo-random number in the range 0 to less than 1.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random',
  },
  // Number methods
  'Number.isInteger': {
    desc: 'Determines whether the passed value is an integer.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger',
  },
  'Number.isNaN': {
    desc: 'Determines whether the passed value is NaN and its type is Number.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN',
  },
  'Number.isFinite': {
    desc: 'Determines whether the passed value is a finite number.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite',
  },
  parseInt: {
    desc: 'Parses a string argument and returns an integer of the specified radix.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt',
  },
  parseFloat: {
    desc: 'Parses an argument and returns a floating point number.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat',
  },
};

// Turkish method documentation
const methodDocsTr = {
  push: {
    desc: 'Bir dizinin sonuna bir veya daha fazla öğe ekler ve yeni uzunluğu döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
  },
  pop: {
    desc: 'Bir diziden son öğeyi kaldırır ve o öğeyi döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
  },
  unshift: {
    desc: 'Bir dizinin başına bir veya daha fazla öğe ekler ve yeni uzunluğu döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
  },
  shift: {
    desc: 'Bir diziden ilk öğeyi kaldırır ve o öğeyi döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
  },
  splice: {
    desc: 'Mevcut öğeleri kaldırarak veya değiştirerek ve/veya yeni öğeler ekleyerek bir dizinin içeriğini değiştirir.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
  },
  indexOf: {
    desc: 'Bir dizide belirli bir öğenin bulunabileceği ilk dizini döndürür veya yoksa -1 döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
  },
  lastIndexOf: {
    desc: 'Bir dizide belirli bir öğenin bulunabileceği son dizini döndürür veya yoksa -1 döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
  },
  includes: {
    desc: 'Bir dizinin belirli bir değeri içerip içermediğini belirler, true veya false döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
  },
  find: {
    desc: 'Sağlanan test fonksiyonunu karşılayan dizideki ilk öğeyi döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
  },
  findIndex: {
    desc: 'Sağlanan test fonksiyonunu karşılayan dizideki ilk öğenin dizinini döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
  },
  map: {
    desc: 'Her öğe üzerinde sağlanan bir fonksiyonu çağırmanın sonuçlarıyla doldurulmuş yeni bir dizi oluşturur.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
  },
  filter: {
    desc: 'Sağlanan fonksiyon tarafından uygulanan testi geçen tüm öğelerle yeni bir dizi oluşturur.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
  },
  reduce: {
    desc: 'Her öğe üzerinde bir azaltıcı fonksiyon çalıştırır, tek bir çıktı değeriyle sonuçlanır.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
  },
  flat: {
    desc: 'Belirtilen derinliğe kadar tüm alt dizi öğelerini içine alarak yeni bir dizi oluşturur.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
  },
  sort: {
    desc: 'Bir dizinin öğelerini yerinde sıralar ve sıralanmış diziyi döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
  },
  slice: {
    desc: 'Bir dizinin bir bölümünün sığ bir kopyasını yeni bir dizi nesnesine döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
  },
  concat: {
    desc: 'İki veya daha fazla diziyi birleştirir, mevcut dizileri değiştirmeden yeni bir dizi döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
  },
  join: {
    desc: 'Bir dizideki tüm öğeleri belirtilen bir ayırıcıyla birleştirerek yeni bir dize oluşturur ve döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
  },
  every: {
    desc: 'Dizideki tüm öğelerin sağlanan fonksiyon tarafından uygulanan testi geçip geçmediğini test eder.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
  },
  some: {
    desc: 'Dizideki en az bir öğenin sağlanan fonksiyon tarafından uygulanan testi geçip geçmediğini test eder.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
  },
  'Array.from': {
    desc: 'Yinelenebilir veya dizi benzeri bir nesneden yeni, sığ kopyalanmış bir Dizi örneği oluşturur.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
  },
  charAt: {
    desc: 'Bir dizgede belirtilen dizindeki karakteri döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt',
  },
  charCodeAt: {
    desc: 'Verilen dizindeki UTF-16 kod birimini temsil eden 0 ile 65535 arasında bir tam sayı döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt',
  },
  toLowerCase: {
    desc: 'Çağrılan dize değerini küçük harfe dönüştürür ve döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase',
  },
  trim: {
    desc: 'Bir dizgenin her iki ucundaki boşlukları kaldırır ve yeni bir dize döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim',
  },
  replace: {
    desc: 'Bir desenle eşleşenlerin bazılarını veya tamamını bir değiştirme ile değiştirerek yeni bir dize döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
  },
  repeat: {
    desc: 'Belirtilen sayıda kopya içeren yeni bir dize oluşturur ve döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat',
  },
  padStart: {
    desc: 'Mevcut dizeyi başka bir dizeyle (gerekirse birden çok kez) doldurur, sonuçlanan dize verilen uzunluğa ulaşana kadar.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart',
  },
  startsWith: {
    desc: 'Bir dizgenin belirtilen bir dizenin karakterleriyle başlayıp başlamadığını belirler.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith',
  },
  endsWith: {
    desc: 'Bir dizgenin belirtilen bir dizenin karakterleriyle bitip bitmediğini belirler.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
  },
  split: {
    desc: 'Bir Dizeyi sıralı bir alt dize listesine böler, bunları bir dizye koyar ve diziyi döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
  },
  match: {
    desc: 'Bir dizeyi düzenli bir ifadeyle eşleştirmenin sonucunu alır.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match',
  },
  search: {
    desc: 'Bir düzenli ifade ile bu Dize nesnesi arasında bir eşleşme araması yürütür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search',
  },
  'Object.keys': {
    desc: 'Belirli bir nesnenin kendi numaralandırılabilir özellik adlarının bir dizisini döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys',
  },
  'Object.values': {
    desc: 'Belirli bir nesnenin kendi numaralandırılabilir özellik değerlerinin bir dizisini döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values',
  },
  'Object.entries': {
    desc: 'Belirli bir nesnenin kendi numaralandırılabilir dize anahtarlı özellik [anahtar, değer] çiftlerinin bir dizisini döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries',
  },
  'Object.fromEntries': {
    desc: 'Anahtar-değer çiftleri listesini bir nesneye dönüştürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
  },
  'Object.assign': {
    desc: 'Bir veya daha fazla kaynak nesneden tüm numaralandırılabilir kendi özelliklerini bir hedef nesneye kopyalar.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign',
  },
  hasOwnProperty: {
    desc: 'Nesnenin belirtilen özelliği kendi özelliği olarak sahip olup olmadığını gösteren bir boolean döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty',
  },
  Map: {
    desc: 'Map nesnesi anahtar-değer çiftlerini tutar ve anahtarların orijinal ekleme sırasını hatırlar.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
  },
  set: {
    desc: 'Map nesnesindeki anahtar için değeri ayarlar. Map nesnesini döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set',
  },
  get: {
    desc: 'Anahtarla ilişkili değeri döndürür veya yoksa undefined döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get',
  },
  has: {
    desc: 'Belirtilen anahtara sahip bir öğenin var olup olmadığını gösteren bir boolean döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has',
  },
  delete: {
    desc: 'Bir Map nesnesinden anahtara göre belirtilen öğeyi kaldırır.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete',
  },
  Set: {
    desc: 'Set nesnesi, ilkel değerler veya nesne referansları olsun, herhangi bir türden benzersiz değerleri saklamanıza izin verir.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
  },
  add: {
    desc: 'Belirtilen bir değere sahip yeni bir öğeyi bir Set nesnesinin sonuna ekler.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add',
  },
  'Math.max': {
    desc: 'Sıfır veya daha fazla sayının en büyüğünü döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max',
  },
  'Math.min': {
    desc: 'Sıfır veya daha fazla sayının en küçüğünü döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min',
  },
  'Math.abs': {
    desc: 'Bir sayının mutlak değerini döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs',
  },
  'Math.floor': {
    desc: 'Belirli bir sayıdan küçük veya ona eşit en büyük tam sayıyı döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor',
  },
  'Math.ceil': {
    desc: 'Belirli bir sayıdan büyük veya ona eşit en küçük tam sayıyı döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil',
  },
  'Math.round': {
    desc: 'Bir sayının en yakın tam sayıya yuvarlanmış değerini döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
  },
  'Math.trunc': {
    desc: 'Herhangi bir kesirli basamağı kaldırarak bir sayının tam sayı kısmını döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc',
  },
  'Math.sqrt': {
    desc: 'Bir sayının karekökünü döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt',
  },
  'Math.pow': {
    desc: 'Tabanı üs kuvvetine döndürür, yani taban^üs.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow',
  },
  'Math.random': {
    desc: "0 ile 1'den küçük aralıkta kayan noktalı, sözde rastgele bir sayı döndürür.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random',
  },
  'Number.isInteger': {
    desc: 'Geçirilen değerin bir tam sayı olup olmadığını belirler.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger',
  },
  'Number.isNaN': {
    desc: 'Geçirilen değerin NaN olup olmadığını ve türünün Number olup olmadığını belirler.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN',
  },
  'Number.isFinite': {
    desc: 'Geçirilen değerin sonlu bir sayı olup olmadığını belirler.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite',
  },
  parseInt: {
    desc: 'Bir dize argümanını ayrıştırır ve belirtilen tabanın bir tam sayısını döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt',
  },
  parseFloat: {
    desc: 'Bir argümanı ayrıştırır ve kayan noktalı bir sayı döndürür.',
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat',
  },
};

// Get method docs based on current language
function getMethodDocs(lang) {
  return lang === 'tr' ? methodDocsTr : methodDocsEn;
}

// Current language state
let currentLanguage = localStorage.getItem('language') || 'en';

// Language switching functions
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  updatePageContent();
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

function updatePageContent() {
  if (!translations) {
    console.warn('Translations not loaded yet');
    return;
  }
  const t = translations[currentLanguage];

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(t, key);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    const value = getNestedValue(t, key);
    if (value !== undefined) {
      el.setAttribute('aria-label', value);
    }
  });

  // Update titles
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    const value = getNestedValue(t, key);
    if (value !== undefined) {
      el.setAttribute('title', value);
    }
  });

  // Update code blocks
  document.querySelectorAll('pre[data-code]').forEach((pre) => {
    const codeKey = pre.getAttribute('data-code');
    const code = getNestedValue(t, `code.${codeKey}`);
    if (code !== undefined) {
      pre.innerHTML = code;
    }
  });

  // Update current language indicator
  const currentLangEl = document.getElementById('currentLang');
  if (currentLangEl) {
    currentLangEl.textContent = currentLanguage.toUpperCase();
  }

  // Update methodDocs reference (will be used by tooltips)
  window.currentMethodDocs = getMethodDocs(currentLanguage);
}

// Create tooltip element
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

let tooltipTimeout = null;
let hideTooltipTimeout = null;
let currentElement = null;

// Function to get method name from element
function getMethodName(element) {
  const text = element.textContent.trim();

  // Get the parent pre element to check context
  const pre = element.closest('pre');
  if (!pre) return text;

  // Get all text up to this element
  const range = document.createRange();
  range.setStart(pre, 0);
  range.setEnd(element, 0);
  const beforeText = range.toString();

  // Check for Object., Math., Number., Array. prefixes
  const match = beforeText.match(/(Object|Math|Number|Array)\.\s*$/);
  if (match) {
    return match[1] + '.' + text;
  }

  // Check for "new Map" or "new Set"
  if (text === 'Map' || text === 'Set') {
    const newMatch = beforeText.match(/new\s+$/);
    if (newMatch) {
      return text;
    }
  }

  return text;
}

// Function to show tooltip
function showTooltip(element, methodName) {
  const methodDocs = window.currentMethodDocs || methodDocsEn;
  const doc = methodDocs[methodName];
  if (!doc) return;

  if (!translations) return;
  const t = translations[currentLanguage];
  const mdnText = currentLanguage === 'tr' ? "MDN'de Görüntüle" : 'View on MDN';

  const rect = element.getBoundingClientRect();
  tooltip.innerHTML = `
        <div class="tooltip-title">${methodName}()</div>
        <div class="tooltip-desc">${doc.desc}</div>
        <a href="${doc.mdn}" target="_blank" rel="noopener noreferrer" class="tooltip-link">${mdnText}</a>
      `;

  // Position tooltip with smaller gap for easier mouse movement
  const tooltipRect = tooltip.getBoundingClientRect();
  let top = rect.top - tooltipRect.height - 4;
  let left = rect.left + rect.width / 2 - tooltipRect.width / 2;

  // Adjust if tooltip goes off screen
  if (top < 0) {
    top = rect.bottom + 4;
  }
  if (left < 0) {
    left = 8;
  } else if (left + tooltipRect.width > window.innerWidth) {
    left = window.innerWidth - tooltipRect.width - 8;
  }

  tooltip.style.top = `${top + window.scrollY}px`;
  tooltip.style.left = `${left}px`;
  tooltip.classList.add('show');
}

// Function to hide tooltip with delay
function hideTooltip(delay = 100) {
  if (hideTooltipTimeout) {
    clearTimeout(hideTooltipTimeout);
  }
  hideTooltipTimeout = setTimeout(() => {
    tooltip.classList.remove('show');
    currentElement = null;
  }, delay);
}

// Keep tooltip visible when hovering over it
tooltip.addEventListener('mouseenter', () => {
  if (hideTooltipTimeout) {
    clearTimeout(hideTooltipTimeout);
    hideTooltipTimeout = null;
  }
});

tooltip.addEventListener('mouseleave', () => {
  hideTooltip(100);
});

// Add event listeners to function and property elements
document.querySelectorAll('.function, .property').forEach((el) => {
  const methodName = getMethodName(el);
  const methodDocs = window.currentMethodDocs || methodDocsEn;

  if (methodDocs[methodName]) {
    el.addEventListener('mouseenter', (e) => {
      // Don't show tooltip if hovering over copy button
      if (e.target.closest('.copy-btn')) return;

      // Clear any existing timeouts
      if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
      }
      if (hideTooltipTimeout) {
        clearTimeout(hideTooltipTimeout);
        hideTooltipTimeout = null;
      }

      currentElement = el;

      // Show tooltip after a short delay
      tooltipTimeout = setTimeout(() => {
        showTooltip(el, methodName);
      }, 300);
    });

    el.addEventListener('mouseleave', () => {
      if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
        tooltipTimeout = null;
      }
      // Don't hide immediately - give time to move to tooltip
      hideTooltip(150);
    });

    el.addEventListener('mousemove', (e) => {
      // Don't update tooltip if hovering over copy button
      if (e.target.closest('.copy-btn')) {
        if (tooltipTimeout) {
          clearTimeout(tooltipTimeout);
          tooltipTimeout = null;
        }
        hideTooltip(0);
        return;
      }

      // Update position on mouse move for better UX
      if (tooltip.classList.contains('show')) {
        const rect = el.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        let top = rect.top - tooltipRect.height - 4;
        let left = rect.left + rect.width / 2 - tooltipRect.width / 2;

        if (top < 0) {
          top = rect.bottom + 4;
        }
        if (left < 0) {
          left = 8;
        } else if (left + tooltipRect.width > window.innerWidth) {
          left = window.innerWidth - tooltipRect.width - 8;
        }

        tooltip.style.top = `${top + window.scrollY}px`;
        tooltip.style.left = `${left}px`;
      }
    });
  }
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const codeBlock = btn.closest('.code-block');
    const pre = codeBlock.querySelector('pre');
    const text = pre.textContent;
    if (!translations) return;
    const t = translations[currentLanguage];

    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = t.buttons.copied;
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = t.buttons.copy;
        btn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      btn.textContent = t.buttons.failed;
      setTimeout(() => (btn.textContent = t.buttons.copy), 2000);
    }
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Popup functionality
const helpBtn = document.getElementById('helpBtn');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');

function openPopup() {
  popupOverlay.classList.add('show');
  popupOverlay.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  popupOverlay.classList.remove('show');
  popupOverlay.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

helpBtn.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

// Close popup when clicking outside
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    closePopup();
  }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popupOverlay.classList.contains('show')) {
    closePopup();
  }
});

// Mobile Menu functionality is handled in index.js

// Update active state for mobile nav links on scroll
function updateActiveMobileNav() {
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      mobileNavLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveMobileNav);
updateActiveMobileNav();

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', toggleBackToTop);
toggleBackToTop();

// Language selector functionality
function initLanguageSelector() {
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option');
  const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');

  // Toggle dropdown
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = langBtn.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;
      langBtn.setAttribute('aria-expanded', String(newState));
      langDropdown.setAttribute('aria-hidden', newState ? 'false' : 'true');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langBtn.setAttribute('aria-expanded', 'false');
        langDropdown.setAttribute('aria-hidden', 'true');
      }
    });

    // Handle language selection
    langOptions.forEach((option) => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        langBtn.setAttribute('aria-expanded', 'false');
        langDropdown.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Mobile language selector
  mobileLangBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      // Close mobile menu if function exists (defined in index.js)
      if (typeof window.closeMobileMenu === 'function') {
        window.closeMobileMenu();
      }
    });
  });
}

// Initialize language selector when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSelector);
} else {
  initLanguageSelector();
}

// Initialize language on page load
async function initializeLanguage() {
  // Load translations first
  await loadTranslations();
  
  // Set initial methodDocs
  window.currentMethodDocs = getMethodDocs(currentLanguage);
  // Update page content
  updatePageContent();
  // Set HTML lang attribute
  document.documentElement.lang = currentLanguage;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLanguage);
} else {
  initializeLanguage();
}

// Expose Language module on window
window.Language = {
  setLanguage: setLanguage,
  getMethodDocs: getMethodDocs,
  getNestedValue: getNestedValue,
  updatePageContent: updatePageContent,
  loadTranslations: loadTranslations
};

// Make translations accessible via getter
Object.defineProperty(window.Language, 'translations', {
  get: function() {
    return translations;
  },
  enumerable: true,
  configurable: true
});

// Make currentLanguage accessible via getter/setter
Object.defineProperty(window.Language, 'currentLanguage', {
  get: function() {
    return currentLanguage;
  },
  set: function(value) {
    currentLanguage = value;
  },
  enumerable: true,
  configurable: true
});

})();
