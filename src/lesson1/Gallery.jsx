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
      <p className="muted">
        Lowercase tags like <span className="badge">{'<section>'}</span> are HTML
        elements. Uppercase tags like <span className="badge">{'<Profile />'}</span>{' '}
        are React components.
      </p>
    </section>
  )
}
