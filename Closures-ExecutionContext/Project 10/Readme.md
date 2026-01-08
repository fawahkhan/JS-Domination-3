# Toast Notifications (JS Closures)

**Overview**
- **Description:** A lightweight toaster that shows transient toast messages on the screen using a closure-based factory. It positions toasts, styles them with Tailwind CSS, and auto-dismisses them after a configurable duration.
- **Files:** See [index.html](index.html) and [script.js](script.js).

**link** - https://fawahkhan.github.io/Project-10-Toast-Notifications-JS-Closures-/ 

**How It Works**
- **Factory + Closure:** `createToaster(config)` returns a `toaster(message)` function. The returned function closes over `config` (lexical scope), so every toast uses the same configuration without passing it again.
- **DOM updates:** `toaster()` creates a `div`, sets `textContent`, assigns Tailwind classes based on `theme`, and appends it to the `.parent` container. After `duration` seconds, the toast is removed.

- **Timing:** Uses `setTimeout` to schedule removal, demonstrating JavaScript’s event loop and task scheduling.

**Features**
- **Positioning:** `left`/`right` and `top`/`bottom` via `positionX` and `positionY`.
- **Theming:** `dark` or `light` theme toggles text/background classes.
- **Auto-dismiss:** Removes each toast after `duration` seconds.

- **Sequential toasts:** Multiple calls queue naturally; each toast manages its own lifecycle.

**JavaScript Concepts Practiced**
- **Closures:** The `toaster()` function captures and uses `config` from `createToaster()`.
- **Higher-order functions:** A function that returns another function used later.
- **Lexical scope:** Inner function accesses variables defined in the outer scope.

- **`setTimeout` scheduling:** Delayed execution and cleanup, understanding the event loop.
- **DOM manipulation:** `document.createElement`, `appendChild`, `removeChild`, `querySelector`, `textContent`, `className`.
- **Conditional rendering:** Ternary operators inside template literals for dynamic classes.

- **Template literals:** Easier string composition for Tailwind classnames.
- **Config-driven design:** Behavior and style controlled by a single `config` object.
- **Side effects + cleanup:** Creating DOM nodes, then removing them to avoid leaks.

**Usage**
- **HTML:** Ensure a parent container exists as in [index.html](index.html):

```html
<div class="fixed parent p-10 flex flex-col gap-2"></div>
<script src="script.js"></script>
```

- **Tailwind:** This project uses Tailwind via CDN in the `<head>` of [index.html](index.html).

- **JavaScript:** Create a toaster and show messages as in [script.js](script.js):

```js
const toaster = createToaster({
	positionX: "right",   // "left" | "right"
	positionY: "bottom",  // "top" | "bottom"
	theme: "dark",        // "dark" | "light"
	duration: 3            // seconds
});

toaster("This is a dummy notification");

setTimeout(() => {
	toaster("This is the second notification");
}, 2000);
```

**API**
- **`createToaster(config)`**: Returns a `toaster(message)` function.
	- **`config.positionX`**: `"left"` or `"right"`
	- **`config.positionY`**: `"top"` or `"bottom"`
	- **`config.theme`**: `"dark"` or `"light"`
	- **`config.duration`**: Number of seconds before auto-dismiss
- **`toaster(message)`**: Shows a toast with the provided message string.

**Example**
- Full working example is already in [script.js](script.js) and [index.html](index.html). Open the HTML file in a browser to see toasts appear and auto-dismiss.

**Notes & Ideas**
- **Accessibility:** Consider adding `aria-live="polite"` on the parent for screen readers.
- **Variants:** Add icons (success/error/info), or support `maxToasts` and queueing.
- **Animations:** Use Tailwind transitions for fade/slide-in effects.
