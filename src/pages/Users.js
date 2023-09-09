import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserBegin, fetchUsersBegin } from "../redux/actions/users";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

import {
  Container,
  TableWrapper,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableData,
  TableAction,
} from "./Users.Style";

export default function Users() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsersBegin());
  }, [dispatch]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  if (loading) {
    return (
      <Container>
        <div style={{ fontSize: "30px" }}>Loading...</div>
      </Container>
    );
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact ?")) {
      dispatch(deleteUserBegin(id));
      toast.success("User deleted Successfully");
    }
  };

  return (
    <Container>
      <TableWrapper>
        <TableHeader>
          <TableHeaderItem>id</TableHeaderItem>
          <TableHeaderItem>name</TableHeaderItem>
          <TableHeaderItem>username</TableHeaderItem>
          <TableHeaderItem>email</TableHeaderItem>
          <TableHeaderItem>phone</TableHeaderItem>
          <TableHeaderItem>actions</TableHeaderItem>
        </TableHeader>
        {users &&
          users.map((user, idx) => (
            <TableRow key={idx}>
              <TableData>{user.id}</TableData>
              <TableData>{user.name}</TableData>
              <TableData>{user.username}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.phone}</TableData>
              <TableData>
                <TableAction>
                  <Link to={`/${user.id}`}>
                    <FaRegEdit color="blue" />
                  </Link>
                </TableAction>
                <TableAction>
                  <Link onClick={() => handleDelete(user.id)}>
                    <FiTrash2 color="red" />
                  </Link>
                </TableAction>
              </TableData>
            </TableRow>
          ))}
      </TableWrapper>
    </Container>
  );
}
