// Method documentation and MDN links
const methodDocs = {
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
  const doc = methodDocs[methodName];
  if (!doc) return;

  const rect = element.getBoundingClientRect();
  tooltip.innerHTML = `
        <div class="tooltip-title">${methodName}()</div>
        <div class="tooltip-desc">${doc.desc}</div>
        <a href="${doc.mdn}" target="_blank" rel="noopener noreferrer" class="tooltip-link">View on MDN</a>
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

    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      btn.textContent = 'Failed';
      setTimeout(() => (btn.textContent = 'Copy'), 2000);
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

// Mobile Menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMobileMenu() {
  mobileMenuOverlay.setAttribute('aria-hidden', 'false');
  mobileMenuBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenuOverlay.setAttribute('aria-hidden', 'true');
  mobileMenuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Toggle menu on button click
mobileMenuBtn.addEventListener('click', () => {
  const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// Close menu when clicking overlay (outside menu)
mobileMenuOverlay.addEventListener('click', (e) => {
  if (e.target === mobileMenuOverlay) {
    closeMobileMenu();
  }
});

// Close menu when clicking a navigation link
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileMenu();
    // Update active state
    const sectionId = link.getAttribute('href').substring(1);
    mobileNavLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenuOverlay.getAttribute('aria-hidden') === 'false') {
    closeMobileMenu();
  }
});

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

