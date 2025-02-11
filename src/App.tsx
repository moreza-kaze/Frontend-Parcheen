import { Button } from "@/components/ui/button";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient=new QueryClient
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Button onClick={()=>{console.log("abcdefghijklmnop")}}>Click me</Button>
      </QueryClientProvider>
    </>
  );
}

export default App;
