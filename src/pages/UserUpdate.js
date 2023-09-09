import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import UserForm from "../components/UserForm";
import { editUserBegin } from "../redux/actions/users";

export default function UserUpdate() {
  const { id } = useParams();

  const { users } = useSelector((state) => state.users);
  const user = users.filter((user) => user.id === parseInt(id));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = (formValue) => {
    dispatch(editUserBegin(id, formValue));
    toast.success("User Updated Successfully");
    navigate("/");
  };

  return (
    <UserForm
      editMode={true}
      handleFormSubmit={handleFormSubmit}
      user={user}
      buttonLabel="Update User"
    />
  );
}
