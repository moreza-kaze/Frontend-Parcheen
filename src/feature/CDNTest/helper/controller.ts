import { AgetData } from "./api";

export const getData = async () => {
  const datas: any = {
    response: [],
  };
  await AgetData().then(({ data }) => {
    datas.response = data?.response?.map((row: any) => {
      return {
        id: row?.id,
        name: row?.name,
        vmtitle: row?.vmtitle,
        power_state: row?.power_state,
        guest_OS: row?.guest_OS,
        cpu: row?.cpu?.count,
      };
    });
  });
  return datas;
};
