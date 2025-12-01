# JavaScript DSA Cheatsheet

A comprehensive, interactive cheatsheet for JavaScript methods and Data Structures & Algorithms patterns. Perfect for technical interviews and quick reference.

![JavaScript DSA Cheatsheet](https://img.shields.io/badge/JavaScript-DSA%20Cheatsheet-yellow?style=for-the-badge&logo=javascript)

## 📋 Overview

This is a single-page HTML application that provides a beautiful, interactive reference for essential JavaScript methods and DSA patterns. It's designed to help developers quickly look up methods, understand their time complexities, and copy code snippets during coding interviews or daily development.

## ✨ Features

### 🎨 Modern Design
- **Dark theme** with carefully chosen color palette
- **Responsive layout** that works on all devices
- **Smooth animations** and transitions
- **Noise texture overlay** for a premium feel
- **Glassmorphism effects** on navigation

### 📚 Comprehensive Content
- **Arrays**: Adding/removing, searching, transforming, sorting, iteration
- **Strings**: Accessing, searching, extracting, transforming, regex
- **Objects**: Static methods, property manipulation
- **Map & Set**: Key-value pairs, unique values, set operations
- **Math & Number**: Mathematical operations, number parsing
- **DSA Patterns**: Stack, Queue, Two Pointers, Sliding Window, Binary Search, BFS, DFS, Frequency Counter
- **Quick Reference Table**: Time complexity overview

### 🚀 Interactive Features
- **Copy to Clipboard**: One-click code copying for all code blocks
- **Interactive Tooltips**: Hover over methods to see descriptions and MDN links
- **Active Navigation**: Auto-highlights current section while scrolling
- **Syntax Highlighting**: Color-coded code for better readability
- **Time Complexity Badges**: Visual indicators for algorithm efficiency

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No dependencies, pure JS
- **Google Fonts**: JetBrains Mono & Outfit

## 📖 Usage

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies needed.

```bash
# Simply open the file
open index.html

# Or use a local server (optional)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Sections

Navigate through the cheatsheet using the top navigation bar:

- **Arrays** - Array manipulation methods
- **Strings** - String operations and regex
- **Objects** - Object utilities
- **Map** - Map data structure
- **Set** - Set data structure
- **Math** - Mathematical operations
- **Patterns** - Common DSA patterns
- **Reference** - Quick complexity reference table

## 🎯 Key Features Explained

### Copy to Clipboard
- Hover over any code block to reveal the "Copy" button
- Click to copy the entire code snippet
- Visual feedback confirms successful copy

### Interactive Tooltips
- Hover over any method name (highlighted in cyan/purple)
- See method description and link to MDN documentation
- Tooltips are smartly positioned to avoid screen edges

### Time Complexity Badges
Each code card includes a badge indicating:
- **O(1)**: Constant time operations
- **O(n)**: Linear time operations
- **O(n log n)**: Linearithmic operations (e.g., sorting)
- **O(log n)**: Logarithmic operations (e.g., binary search)
- **O(V+E)**: Graph operations (vertices + edges)

## 📊 Content Structure

### Arrays Section
- Adding/Removing (push, pop, unshift, shift, splice)
- Searching (indexOf, lastIndexOf, includes, find, findIndex)
- Transforming (map, filter, reduce, flat)
- Sorting & Slicing (sort, slice, concat, join)
- Iteration & Utilities (every, some, Array.from)

### Strings Section
- Accessing & Searching (charAt, charCodeAt, indexOf, includes, startsWith, endsWith)
- Extracting & Transforming (slice, split, toLowerCase, trim, replace, repeat, padStart)
- Regex (match, search, replace with patterns)

### Objects Section
- Object Methods (keys, values, entries, fromEntries, assign)
- Property checking (hasOwnProperty, in operator)
- Cloning and merging

### Map & Set
- Map operations (set, get, has, delete, iteration)
- Set operations (add, has, delete, union, intersection, difference)
- Converting between Map/Object and Set/Array

### Math & Number
- Math methods (max, min, abs, floor, ceil, round, trunc, sqrt, pow, random)
- Number utilities (isInteger, isNaN, isFinite)
- Parsing (parseInt, parseFloat)
- BigInt support

### DSA Patterns
- **Stack & Queue**: LIFO and FIFO implementations
- **Frequency Counter**: Using Map for counting
- **Two Pointers**: Palindrome check, Two Sum
- **Sliding Window**: Maximum sum subarray
- **Binary Search**: Sorted array search
- **BFS & DFS**: Graph traversal algorithms

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0a0a0f`
- **Secondary Background**: `#12121a`
- **Card Background**: `#16161f`
- **Code Background**: `#1a1a24`
- **Accent Colors**: Yellow, Cyan, Pink, Purple, Orange, Green

### Typography
- **Body**: Outfit (sans-serif)
- **Code**: JetBrains Mono (monospace)

## 📱 Responsive Design

The cheatsheet is fully responsive:
- **Desktop**: Full navigation, multi-column grid
- **Tablet**: Adjusted spacing, single column on smaller screens
- **Mobile**: Hidden navigation, optimized tooltips, horizontal scroll for tables

## 🔧 Customization

All styles are in the `<style>` tag within `index.html`. You can easily:
- Change color scheme by modifying CSS variables in `:root`
- Add new sections by following the existing structure
- Modify tooltip content in the `methodDocs` object
- Adjust animations and transitions

## 📝 Adding New Content

To add a new method or pattern:

1. **Add to HTML**: Create a new card in the appropriate section
2. **Add to tooltips** (if applicable): Add entry to `methodDocs` object
3. **Style**: Use existing badge colors and card structure

Example card structure:
```html
<div class="card">
  <div class="card-header">
    <span class="card-title">Your Title</span>
    <span class="card-badge yellow">O(1)</span>
  </div>
  <div class="code-block">
    <button class="copy-btn">Copy</button>
    <pre>Your code here</pre>
  </div>
</div>
```

## 🌟 Best Practices

This cheatsheet follows:
- **Semantic HTML5** for accessibility
- **CSS Custom Properties** for maintainability
- **Vanilla JavaScript** for zero dependencies
- **Mobile-first** responsive design
- **Performance**: Single file, no external resources (except fonts)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new methods or patterns
- Improve documentation
- Fix bugs or improve UX
- Suggest new features

## 🚀 Future Enhancements

Potential improvements:
- [ ] Search functionality
- [ ] Dark/Light theme toggle
- [ ] Export to PDF
- [ ] Print-friendly styles
- [ ] More DSA patterns (Dynamic Programming, Backtracking, etc.)
- [ ] Code examples with test cases

## 📞 Support

If you find this cheatsheet helpful, consider giving it a star! ⭐

---

**Made with ❤️ for developers preparing for technical interviews**

Good luck with your interviews! 🚀

