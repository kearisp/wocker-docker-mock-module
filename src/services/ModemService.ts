import {
    Injectable,
    LogService
} from "@wocker/core";
import {
    ModemService as BaseModemService,
    ProtoService
} from "@wocker/docker-module";
import type Modem from "docker-modem";
import {ModemMock} from "../modem";
import {FixturesProvider} from "./FixturesProvider";


@Injectable("DOCKER_MODEM_SERVICE")
export class ModemService extends BaseModemService {
    public constructor(
        protoService: ProtoService,
        logService: LogService,
        protected readonly fixturesProvider: FixturesProvider
    ) {
        super(protoService, logService);
    }

    public get modem(): Modem {
        if(!this._modem) {
            this._modem = new ModemMock({
                mockFixtures: this.fixturesProvider.fixtures
            });
        }

        return this._modem;
    }
}
