import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
// import { create } from "zustand";


const Test = () => {
//   const { users, setUsers } = useStore();
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todo", page],
    queryFn: async () => {
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
  );
};
export default Test;
