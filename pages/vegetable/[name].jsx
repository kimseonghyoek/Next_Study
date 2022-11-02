/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { useRouter } from "next/router";

const name = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>Hello!</h2>
      <Link href="/">Move to '/'</Link>
    </div>
  )
}

export default name;