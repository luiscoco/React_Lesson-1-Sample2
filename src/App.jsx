import MyFirstComponent from './lesson1/MyFirstComponent.jsx'
import Page from './lesson1/Page.jsx'
import Gallery from './lesson1/Gallery.jsx'

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <h1>React 19.2 – Lesson 1 Playground</h1>
        <span className="badge">Describing the UI</span>
        <span className="badge">Your First Component</span>
      </div>

      <p className="muted">
        This tiny repo mirrors the examples from Lesson 1: converting HTML to JSX,
        defining components, and reusing them.
      </p>

      <div className="grid">
        <div className="card">
          <h2>1) HTML → Component (MyFirstComponent)</h2>
          <MyFirstComponent />
        </div>

        <div className="card">
          <h2>2) Reuse components (Page + TableOfContents)</h2>
          <Page />
        </div>

        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h2>3) Nesting components (Gallery + Profile)</h2>
          <Gallery />
        </div>
      </div>

      <p className="muted" style={{ marginTop: 16 }}>
        Tip: All components are defined at the top level in their own files (no
        nested component definitions).
      </p>
    </div>
  )
}
