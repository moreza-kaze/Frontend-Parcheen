import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import TestData from "./TestData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { create } from "zustand";

const Test = () => {
  //   const { users, setUsers } = useStore();
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todo", page],
    queryFn: async () => {
      const token="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ic3MuYXNpYXRlY2guY2xvdWRcL2FwaVwvdXNlcnNcL2F1dGhcL2xvZ2luXC92ZXJpZnkiLCJpYXQiOjE3Mzk2MTAyMTgsImV4cCI6MTczOTk3MDIxOCwibmJmIjoxNzM5NjEwMjE4LCJqdGkiOiI0UFdjRFJGcE54OThyTGNpIiwic3ViIjoxMTMyLCJwcnYiOiI1MjZmZmRkZTQyMmQ0YWQ1YmRlNWEzNjRkNWY4YzA2ZGRmM2UxMzI5In0.kH01BZibCuROHcq_bVSyVfdvvUV6H98_wGoeze7F7i8"
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${page}`
      );
      return res.json();
    },
  });
  //   useEffect(() => {
  //     setUsers(data);
  //   }, [data]);
  return (
    <div>
      {/* <ul>{data?.map((todo:any) => <li key={todo.id}>{todo.title}</li>)}</ul> */}

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between">
              <span>Components</span>
              <Button
                variant={"destructive"}
                size={"lg"}
                className="!bg-red-300"
                onClick={() => {
                  console.log("ggggg", data);
                  setPage(page + 1);
                }}
              >
                Click me
              </Button>
            </div>
          </CardTitle>
          <CardDescription>test table in card</CardDescription>
        </CardHeader>
        <CardContent>
          <TestData />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Test;
