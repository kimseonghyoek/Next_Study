import Link from "next/link"

/* eslint-disable react/no-unescaped-entities */
const Tomato = () => {
  return (
    <div>
      <h2>Link to '/' Page</h2>
      <Link href="/">
        <p>Move to '/'</p>
      </Link>
    </div>
  )
}

export default Tomato;