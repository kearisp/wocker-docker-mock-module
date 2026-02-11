import {
    Module,
    DynamicModule
} from "@wocker/core";
import {
    ComposeService,
    ContainerService,
    DockerService,
    ImageService,
    ProtoService
} from "@wocker/docker-module";
import {Fixtures} from "docker-modem-mock";
import {ModemService} from "./services/ModemService";
import {FixturesProvider} from "./services/FixturesProvider";


@Module({
    providers: [
        ComposeService,
        ContainerService,
        DockerService,
        ImageService,
        ModemService,
        ProtoService
    ],
    exports: [
        ComposeService,
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
    ComposeService,
    ContainerService,
    DockerService,
    ImageService,
    ModemService,
    ProtoService
};

export {
    Fixtures,
    ModemMock,
    ModemRecorder
} from "docker-modem-mock";
