import * as axios from "axios";

describe("HTTP Client", () => {
  it("should be supported by axios", async () => {
    const httpClient = axios.create();
    expect(httpClient).toBeDefined();
  });
});
