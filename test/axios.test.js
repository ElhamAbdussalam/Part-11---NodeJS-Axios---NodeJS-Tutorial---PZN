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

describe("HTTP Method", () => {
  const httpClient = axios.create({
    baseURL: "https://elhamabdussalam.vercel.app/",
    timeout: 5000,
  });

  it("should support GET Method", async () => {
    const response = await httpClient.get("/");
    expect(response.status).toBe(200);
  });
});
