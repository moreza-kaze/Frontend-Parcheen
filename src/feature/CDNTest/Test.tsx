import { BaseButton } from "@/components/ui/baseButton";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import TestData from "./TestData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUserStore } from "@/store/userStore";
// import { create } from "zustand";

const Test = () => {
  //   const { users, setUsers } = useStore();
  const setUser = useUserStore((state) => state.setUser);
  const [tableData, setTableData] = useState();
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todo", page],
    queryFn: async () => {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ic3MuYXNpYXRlY2guY2xvdWRcL2FwaVwvdXNlcnNcL2F1dGhcL2xvZ2luXC92ZXJpZnkiLCJpYXQiOjE3NDAyMTIyNDMsImV4cCI6MTc0MDU3MjI0MywibmJmIjoxNzQwMjEyMjQzLCJqdGkiOiJRWUxtQmhSZDFoOUZ0OXZKIiwic3ViIjo0NDk0NiwicHJ2IjoiNTI2ZmZkZGU0MjJkNGFkNWJkZTVhMzY0ZDVmOGMwNmRkZjNlMTMyOSJ9.eIGt4AMXDHTKpIkI-qg6npYsiqD0f9wxgLYaLTDCr80";
      const res = await fetch(
        `https://bss.asiatech.cloud/api/v3/infrastructure/vcenter/vm?projects=`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (isLoading) return <div>بارگذاری...</div>;
      if (isError) return <div>خطا!</div>;
      if (!data) return <div>دیتا خالی</div>;
      // console.log("ggggggggggggggg", res.json());
      // setTableData(res.json())
      return res.json();
    },
  });

  // !isLoading && data && data.response && setTableData(data);

  useEffect(() => {
    if (data) {
      setTableData(data?.response);
    }
  }, [data]);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between">
              <span>Components</span>
              <BaseButton
                variant={"destructive"}
                size={"lg"}
                className="!bg-red-300"
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                Click me
              </BaseButton>
            </div>
          </CardTitle>
          <CardDescription>test table in card</CardDescription>
        </CardHeader>
        <CardContent>
          <TestData isLoading={isLoading} />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Test;
