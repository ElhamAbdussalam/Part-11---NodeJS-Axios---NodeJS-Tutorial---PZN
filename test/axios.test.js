import * as axios from "axios";

// describe("HTTP Client", () => {
//   it("should be supported by axios", async () => {
//     const httpClient = axios.create({
//       baseURL: "https://eni8o9s68oq1q.x.pipedream.net/",
//       timeout: 5000,
//     });
//     expect(httpClient).toBeDefined();
//   });
// });

// describe("HTTP Method", () => {
//   const httpClient = axios.create({
//     baseURL: "https://elhamabdussalam.vercel.app/",
//     timeout: 5000,
//   });

//   it("should support GET Method", async () => {
//     const response = await httpClient.get("/");
//     expect(response.status).toBe(200);
//   });
// });

describe("Axios", () => {
  const httpClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
  });

  //   it("should support GET Method", async () => {
  //     const response = await httpClient.get("/posts/1");

  //     expect(response.status).toBe(200);
  //     expect(response.statusText).toBe("OK");
  //     expect(response.data.id).toBe(1); // ✅ sesuai API
  //   });

  it("should support POST method with JSON request body", async () => {
    const json = {
      username: "elham",
      password: "rahasia",
    };

    const response = await httpClient.post("/", json, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    expect(response.status).toBe(200);
  });
});
