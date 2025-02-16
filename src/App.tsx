

import {
  QueryClient,
  QueryClientProvider,
  
} from "@tanstack/react-query";
import Test from "./feature/CDNTest/Test";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
       <Test />
      </QueryClientProvider>
    </>
  );
}

export default App;
