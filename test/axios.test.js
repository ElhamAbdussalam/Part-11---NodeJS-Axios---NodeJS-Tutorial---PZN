import * as axios from "axios";

describe("HTTP Client", () => {
  it("should be supported by axios", async () => {
    const httpClient = axios.create({
      baseUrl: "https://eni8o9s68oq1q.x.pipedream.net/",
      timeout: 5000,
    });
    expect(httpClient).toBeDefined();
  });
});
