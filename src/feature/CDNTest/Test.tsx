import { BaseButton } from "@/components/ui/baseButton";
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
import { useUserStore } from "@/store/userStore";
// import { create } from "zustand";

const Test =  () => {
  //   const { users, setUsers } = useStore();
  const setUser = useUserStore((state) => state.setUser);
  const [page, setPage] = useState(1);
  const { data, isLoading, error} = useQuery({
    queryKey: ["todo", page],
    queryFn: async () => {
      const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ic3MuYXNpYXRlY2guY2xvdWRcL2FwaVwvdXNlcnNcL2F1dGhcL2xvZ2luXC92ZXJpZnkiLCJpYXQiOjE3Mzk3NzE0MDksImV4cCI6MTc0MDEzMTQwOSwibmJmIjoxNzM5NzcxNDA5LCJqdGkiOiIwZU9naUxpV25sNTJrZkRZIiwic3ViIjoxMTMyLCJwcnYiOiI1MjZmZmRkZTQyMmQ0YWQ1YmRlNWEzNjRkNWY4YzA2ZGRmM2UxMzI5In0.bLYjeSgUvVkMOyp158_GKJNVWPuTtQZBGHvSjoW_ayg"
      const res = await fetch(`https://bss.asiatech.cloud/api/users/sms-logs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.json();
    },
    
  });
  // console.log("jkjkjkjkjk",data);
  // if()
  // setUser({})
  !isLoading && setUser(data?.data?.data?.data);

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
              <BaseButton
                variant={"destructive"}
                size={"lg"}
                className="!bg-red-300"
                onClick={() => {
                  console.log("ggggg", data);
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
          <TestData isLoading={isLoading}/>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Test;
