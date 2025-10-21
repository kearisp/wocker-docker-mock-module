import {
    Module,
    DynamicModule
} from "@wocker/core";
import {
    ContainerService,
    DockerService,
    ImageService,
    ProtoService
} from "@wocker/docker-module";
import {ModemService} from "./services/ModemService";
import {FixturesProvider} from "./services/FixturesProvider";
import {Fixtures} from "./modem";


@Module({
    providers: [
        ContainerService,
        DockerService,
        ImageService,
        ModemService,
        ProtoService
    ],
    exports: [
        ContainerService,
        DockerService,
        ImageService,
        ModemService,
        ProtoService
    ]
})
export default class DockerModule {
    public static withFixtures(fixtures: Fixtures): DynamicModule {
        return {
            module: DockerModule,
            providers: [
                {
                    provide: FixturesProvider,
                    useValue: new FixturesProvider(fixtures)
                }
            ],
            exports: [
                FixturesProvider
            ]
        };
    }
}

export {
    FixturesProvider,
    ContainerService,
    DockerService,
    ImageService,
    ModemService,
    ProtoService
};

export * from "./modem";
