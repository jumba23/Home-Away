import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <Input
      placeholder="find a property..."
      type="text"
      className="max-w-xs dark:bg-muted"
    />
  );
};

export default NavSearch;
