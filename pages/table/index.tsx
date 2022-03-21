import { Box } from "@mui/system";
import { NextPage } from "next";
import { useMemo } from "react";
import Table from "../../components/Table";
import { useAppSelector } from "../../hooks";

const TablePage: NextPage = () => {
  const users = useAppSelector((state) => state.users.users);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  return (
    <Box>
      <Table data={users} columns={columns} />
    </Box>
  );
};

export default TablePage;
