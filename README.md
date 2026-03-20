# React 19.2 - Lesson 1: Describing the UI and Creating your First React Component.

## Demo

<img width="1412" height="838" alt="image" src="https://github.com/user-attachments/assets/e47f5dba-570a-4dd7-bbdc-c35f410f5964" />

<img width="1256" height="449" alt="image" src="https://github.com/user-attachments/assets/83f041ca-269e-4adb-b92a-18cd38e68e3b" />

## Application features

### 1) Convert HTML to a reusable component
`MyFirstComponent` mirrors the provided HTML example in JSX.

```jsx
// src/lesson1/MyFirstComponent.jsx
export default function MyFirstComponent() {
  return (
    <article>
      <h1>My First Component</h1>
      <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
  )
}
```

### 2) Reuse the same component multiple times
`Page` renders two instances of `TableOfContents` to highlight reuse.

```jsx
// src/lesson1/Page.jsx
import TableOfContents from './TableOfContents.jsx'

export default function Page() {
  return (
    <div>
      <div className="grid">
        <div className="card">
          <TableOfContents />
        </div>
        <div className="card">
          <TableOfContents />
        </div>
      </div>
    </div>
  )
}
```

### 3) Compose components inside other components
`Gallery` nests a `Profile` component multiple times to form a section.

```jsx
// src/lesson1/Gallery.jsx
import Profile from './Profile.jsx'

export default function Gallery() {
  return (
    <section className="gallery">
      <h1>Amazing Scientists</h1>
      <div className="profiles">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  )
}
```

## How to run

### Option A: npm
```bash
npm install
npm run dev
```

### Option B: pnpm
```bash
pnpm install
pnpm dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Build
```bash
npm run build
npm run preview
```

## File purposes

- `index.html` - HTML shell with the `#root` element and module script.
- `vite.config.js` - Vite config that enables the React plugin.
- `eslint.config.js` - ESLint rules for React, hooks, and refresh.
- `package.json` - project metadata, scripts, and dependencies.
- `src/main.jsx` - app entry point that mounts `<App />`.
- `src/App.jsx` - page layout that renders the Lesson 1 demos.
- `src/styles.css` - global styling for layout, cards, and typography.
- `src/lesson1/MyFirstComponent.jsx` - basic JSX component converted from HTML.
- `src/lesson1/TableOfContents.jsx` - reusable list component.
- `src/lesson1/Page.jsx` - example that reuses `TableOfContents` twice.
- `src/lesson1/Profile.jsx` - avatar component with a default name prop.
- `src/lesson1/Gallery.jsx` - composite component that renders multiple profiles.
