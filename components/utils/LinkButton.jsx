import Link from "next/link"

const LinkButton = ({children, link, classList}) => {

  let classes = classList ? classList : "btn";

  return (
    <Link href={link} className={classes}>{children}</Link>
  )
}

export default LinkButton