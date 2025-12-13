import {describe, it, expect} from "@jest/globals";
import {Test} from "@wocker/testing";
import DockerModule, {
    Fixtures,
    FixturesProvider
} from "./";
import {ROOT_DIR} from "./env";


describe("DockerModule", () => {
    const fixtures = Fixtures.fromPath(`${ROOT_DIR}/fixtures`);

    const getContext = async () => {
        return await Test
            .createTestingModule({
                imports: [
                    DockerModule.withFixtures(fixtures)
                ],
                exports: [
                    FixturesProvider
                ]
            })
            .build();
    };

    it("should...", async () => {
        const context = await getContext();

        const fixturesProvider = context.get(FixturesProvider);

        expect(fixturesProvider).toBeInstanceOf(FixturesProvider);
    });
});
