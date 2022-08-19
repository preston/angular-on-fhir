// Author: Preston Lee

export class SmartConfiguration {
    authorization_endpoint!: string;
    token_endpoint!: string;
    registration_endpoint!: string;
    scopes_supported: string[] = [];
    response_types_supported: string[] = [];
    management_endpoint!: string;
    introspection_endpoint!: string;
    revocation_endpoint!: string;
    capabilities: string[] = [];
}

