import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { useForm, FormProvider } from "react-hook-form";

import TextBox from "../../components/TextBox";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IUser } from "../../interface/user.interface";
import { addUser } from "../../redux/reducer/usersSlice";
import isEmail from "../../util/isEmail";

const FormPage: NextPage = () => {
  const { ...methods } = useForm<IUser>();

  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  const onSubmit = (data: IUser) => {
    if (
      !users.find(
        (user: IUser) => user.name === data.name && user.email === data.email
      )
    ) {
      dispatch(addUser(data));
      methods.reset({ email: "", name: "" });
    } else {
      alert("Already registered User!");
      methods.reset({ email: "", name: "" });
    }
  };

  return (
    <FormProvider {...methods}>
      <Stack alignItems={"center"}>
        <Box sx={{ width: "50%" }}>
          <TextBox
            name="name"
            label="Name"
            variant="standard"
            rules={{ required: "Required Field" }}
          />
          <TextBox
            name="email"
            label="Email"
            variant="standard"
            type="email"
            rules={{ required: "Required Field", validate: isEmail }}
          />
          <Button
            onClick={methods.handleSubmit(onSubmit)}
            fullWidth
            variant="contained"
            sx={{ mt: 4 }}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default FormPage;
