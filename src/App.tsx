

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Test from "./pages/test";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
       <Test
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
