import {Injectable} from '@angular/core';
import {Server} from '../models/server.model';

@Injectable()
export class ServerService {
    public static servers: Array<Server> = [
		// new Server('Testing Ours', 'http://mongo-proxy.healthcreek.org'),
        new Server("Graham's STU3", 'http://test.fhir.org/r3')
        // new Server("AEGIS WildFHIR - STU 3 Ballot (v1.6.0-9810)", "http://wildfhir.aegis.net/fhir1-6-0"),
        // new Server("Epic's Sandbox", "http://open.epic.com/Interface/FHIR"),
        // new Server("HAPI / University Health Network test server DSTU3", " http://fhirtest.uhn.ca/baseDstu3"),
        // new Server("Allscripts Sandbox", "https://cloud.allscriptsunity.com/FHIRAnon"),
        // new Server("CareEvolution HIEBus", "http://fhir.careevolution.com/apitest/fhir")
    ]
}
