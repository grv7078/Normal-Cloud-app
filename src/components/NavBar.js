import { Item, Home, Add, List } from "./NavBar.Style";

export default function NavBar() {
  return (
    <>
      <List>
        <Item>
          <Home href="/">A Simple Crud App</Home>
        </Item>
        <Add href="/add">Add User</Add>
      </List>
    </>
  );
}
