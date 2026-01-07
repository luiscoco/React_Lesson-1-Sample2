export default function Profile({ name = 'Katherine Johnson' }) {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt={name}
      title={name}
    />
  )
}
