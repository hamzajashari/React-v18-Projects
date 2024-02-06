export const PageLink = ({link,itemClass}) => {
  return (
    <li>
    <a href={link.href} className={itemClass}>
      {link.text}
    </a>
  </li>
  )
}