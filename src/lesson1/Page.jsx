import TableOfContents from './TableOfContents.jsx'

export default function Page() {
  return (
    <div>
      <p className="muted">
        This demonstrates reusing a custom component multiple times.
      </p>
      <div className="grid">
        <div className="card">
          <h2>
            <span className="badge">{'<TableOfContents />'}</span> instance #1
          </h2>
          <TableOfContents />
        </div>
        <div className="card">
          <h2>
            <span className="badge">{'<TableOfContents />'}</span> instance #2
          </h2>
          <TableOfContents />
        </div>
      </div>
    </div>
  )
}
