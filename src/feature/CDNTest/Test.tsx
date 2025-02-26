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
import { getData } from "./helper/controller";
import { CacheProvider } from "@emotion/react";
// import { create } from "zustand";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import DataGridDemo from "./DataGridDemo";

const Test = () => {
  //   const { users, setUsers } = useStore();

  const [page, setPage] = useState(1);
  const { data: sag, isLoading } = useQuery({
    queryKey: ["todo", page],
    queryFn: getData,
  });
  const theme = (outerTheme: Theme) =>
    createTheme({
      direction: "rtl",
      palette: {
        // mode: outerTheme.palette.mode,
      },
    });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
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
            <TestData isLoading={isLoading} tableData={sag?.response} />
            {/* <hr/>
            <DataGridDemo/> */}
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default Test;
