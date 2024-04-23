# Steps to run these Custom APIs

1. Create or reuse a SIG to build over it. Be sure that it has version 2X.X version.

2. Create a new code version to the SIG instance, and upload the local code vesion.

3. Assign the new cartridge app_helloworld_api to the RefArch site cartridge path.

4. Add SLAS Organization Admin role of your SFCC account through Account Manager for the target tenants.

5. Go to SLAS Admin UI (You can go to BM Administration > Site Development > Salesforce Commerce API Settings) and create a Public Client ID and add the properly scopes.

6. Copy that Public Client ID to the Postman collection under collection variable slasPublicClientId.

7. Go to Postman collection

    7.1 Run SLAS - Public Client - Guest - Authorize request

    7.2 Run SLAS - Public Client - Guest - Access Token request

    7.3 Run Hello World v1, you should get
    ```json
        {
            "message": "Hello World!"
        }
    ```

    7.4 Run Hello World v2
    ```json
        {
            "message": "Hello <c_name> welcome to the World!"
        }
    ```

