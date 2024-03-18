import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((i) => {
        return <MenuItem key={i.id} {...i} />;
      })}
    </div>
  );
};
export default Menu;
