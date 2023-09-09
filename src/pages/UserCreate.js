import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserBegin } from "../redux/actions/users";
import { toast } from "react-toastify";

import UserForm from "../components/UserForm";

export default function UserCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = (formValue) => {
    dispatch(createUserBegin(formValue));
    toast.success("User Added Successfully");
    navigate("/");
  };

  return (
    <UserForm
      editMode={false}
      handleFormSubmit={handleFormSubmit}
      buttonLabel="Add User"
    />
  );
}
