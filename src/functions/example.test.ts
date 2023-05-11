import { Example } from "../types";
import { example } from "./example";


test("example func", () => {
    let ex:Example = {example:"example"}
    let res = example(ex)
    expect(res).toBe("example how to register functions with types: example")
})
