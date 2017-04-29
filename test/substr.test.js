import assert from "assert";
import { substr } from "../src/index";

describe("Substr", () => {
    const string = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
    const unicodeString = "دانشگاهی که دانشگاه نباشد، دانشگاه نیست.";
    const emojiString = "Emojis 👍🏽 are 🍆 poison. 🌮s are bad.";

    it("Substrs latin text correctly", () => {
        assert.strictEqual(substr("Iñtërnâtiônàlizætiøn☃", 0, 10), "Iñtërnâtiô");
        assert.strictEqual(substr(string, 25, 32), "the universe and human stupidity");
    });

    it("Substrs unicode text correctly", () => {
        assert.strictEqual(substr(unicodeString, 0, 11), "دانشگاهی که");
        assert.strictEqual(substr(emojiString, 7, 7), "👍🏽 are 🍆");
    });

    it("Substrs if arguments are unspecified", () => {
        assert.strictEqual(substr(string, 10), string.substr(10));
        assert.strictEqual(substr(string), string);
    });

    it("Substrs even with negative arguments", () => {
        assert.strictEqual(substr(string, 0, -10), string.substr(0, -10));
        assert.strictEqual(substr(string, -10, -10), string.substr(-10, -10));
    });

    it("Throws an error if wrong arguments are specified.", () => {
        assert.throws(() => substr(12, 1, 2), Error);
    });
});
