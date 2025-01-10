```javascript
//Correctly configure purge option in tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './src/**/*.{js,jsx,ts,tsx}', //This line is important to include all the components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

//In your component
<div className="bg-red-500 p-4">
  <p>This text should be red and have padding.</p>
</div>
```