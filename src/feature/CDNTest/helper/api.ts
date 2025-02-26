import axios from "axios";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ic3MuYXNpYXRlY2guY2xvdWRcL2FwaVwvdXNlcnNcL2F1dGhcL2xvZ2luXC92ZXJpZnkiLCJpYXQiOjE3NDAzOTc5MjksImV4cCI6MTc0MDc1NzkyOSwibmJmIjoxNzQwMzk3OTI5LCJqdGkiOiJobXhSaWFxVEJBMmpLMUg1Iiwic3ViIjoxMTMyLCJwcnYiOiI1MjZmZmRkZTQyMmQ0YWQ1YmRlNWEzNjRkNWY4YzA2ZGRmM2UxMzI5In0.aQyffsMSm0bc5Z5jzKpmkCefzUb6IBureCVvXkynqBs";
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ic3MuYXNpYXRlY2guY2xvdWRcL2FwaVwvdXNlcnNcL2F1dGhcL2xvZ2luXC92ZXJpZnkiLCJpYXQiOjE3NDAyMTIyNDMsImV4cCI6MTc0MDU3MjI0MywibmJmIjoxNzQwMjEyMjQzLCJqdGkiOiJRWUxtQmhSZDFoOUZ0OXZKIiwic3ViIjo0NDk0NiwicHJ2IjoiNTI2ZmZkZGU0MjJkNGFkNWJkZTVhMzY0ZDVmOGMwNmRkZjNlMTMyOSJ9.eIGt4AMXDHTKpIkI-qg6npYsiqD0f9wxgLYaLTDCr80";
export const AgetData = async () => {
  return axios.get(
    `https://bss.asiatech.cloud/api/v3/infrastructure/vcenter/vm?projects=`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
