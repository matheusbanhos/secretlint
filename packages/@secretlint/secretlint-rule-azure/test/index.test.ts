import { snapshot } from "@secretlint/tester";
import path from "path";
import { creator as rule } from "../src/index";

describe("@secretlint/secretlint-rule-azure", () => {
    snapshot({
        defaultConfig: {
            rules: [
                {
                    id: require("../package.json").name,
                    rule,
                },
            ],
        },
        updateSnapshot: !!process.env.UPDATE_SNAPSHOT,
        snapshotDirectory: path.join(__dirname, "snapshots"),
    }).forEach((name, test) => {
        it(name, async function () {
            const status = await test();
            if (status === "skip") {
                this.skip();
            }
        });
    });
});
