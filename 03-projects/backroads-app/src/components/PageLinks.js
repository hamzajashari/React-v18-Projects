import { pageLinks } from "../data";
import { PageLink } from "./Index/PageLink";
export const PageLinks = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass} id={parentClass}>
    {pageLinks.map((link) => {
      return <PageLink key={link.id} link={link} itemClass={itemClass} />
    })}
  </ul>
  );
};
