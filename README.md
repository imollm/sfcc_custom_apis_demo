# Steps to run these Custom APIs

## Pre requisits

1. Create or reuse a SIG to build over it. Be sure that it has version 24.2 version.

2. Create a new code version to the SIG instance, and upload the local code vesion.

3. Assign the new cartridge app_helloworld_api to YOUR_SITE, to site cartridge path.

4. Add SLAS Organization Admin role of your SFCC account through Account Manager for the target tenants.

## Authorization with Public Client ID

1. Go to SLAS Admin UI (You can go to BM Administration > Site Development > Salesforce Commerce API Settings) and create a Public Client ID and add the properly scopes (in our case we added `c_helloWorld_r`).

2. Copy that Public Client ID to the Postman collection under collection variable slasPublicClientId.

### Make a request as a Guest User (Public Client ID)

1. Go to Postman collection

    1.1 Run SLAS - Public Client - Guest - Authorize request

    1.2 Run SLAS - Public Client - Guest - Access Token request

    1.3 Run Hello World v1, you should get
    ```json
        {
            "message": "Hello World!"
        }
    ```

    1.4 Run Hello World v2, you should get
    ```json
        {
            "message": "Hello <c_name> welcome to the World!"
        }
    ```

### Make a request as a B2C Commerce User (Public Client ID)

1. Create a Customer into BM, with Login (Postman: slasShopperID) and Password (Postman: slasShopperPassword), and set them into Postman collection.

2. Go to Postman collection

    1.1 SLAS - Public Client - Ecom User - Authorize request

    1.2 SLAS - Public Client - Ecom User - Access Token request

    1.3 Run Hello World v1, you should get
    ```json
        {
            "message": "Hello World!"
        }
    ```

    1.4 Run Hello World v2, you should get
    ```json
        {
            "message": "Hello <c_name> welcome to the World!"
        }
    ```

## Authorization with Private Client ID

1. Go to SLAS Admin UI (You can go to BM Administration > Site Development > Salesforce Commerce API Settings) and create a Private Client ID and add the properly scopes (in our case we added `c_helloWorld_rw`).

2. Copy that Private Client ID and Password to the Postman collection under collection variables slasPrivateClientId and slasPrivatePassword.

### Make a request as a Guest User (Private Client ID)

1. Go to Postman collection

    1.1 Run SLAS - Private Client - Guest - Access Token request

    1.2 Run Hello World v1, you should get
    ```json
        {
            "message": "Hello World!"
        }
    ```

    1.3 Run Hello World v2, you should get
    ```json
        {
            "message": "Hello <c_name> welcome to the World!"
        }
    ```

### Make a request as a B2C Commerce User (Private Client ID)

1. Create a Customer into BM, with Login (Postman: slasShopperID) and Password (Postman: slasShopperPassword), and set them into Postman collection.

2. Go to Postman collection

    1.1 SLAS - Private Client - Ecom User - Authorize request

    1.2 SLAS - Private Client - Ecom User - Access Token request

    1.3 Run Hello World v1, you should get
    ```json
        {
            "message": "Hello World!"
        }
    ```

    1.4 Run Hello World v2, you should get
    ```json
        {
            "message": "Hello <c_name> welcome to the World!"
        }
    ```

## Resources

[Custom APIs](https://developer.salesforce.com/docs/commerce/commerce-api/guide/custom-apis.html)
[Authorization for Shopper APIs](https://developer.salesforce.com/docs/commerce/commerce-api/guide/authorization-for-shopper-apis.html)
[Authentication and Authorization](https://developer.salesforce.com/docs/commerce/commerce-api/guide/custom-api-authentication.html)
[Shopper Login (SLAS) Overview](https://developer.salesforce.com/docs/commerce/commerce-api/guide/slas.html)
[Authorization for Admin APIs](https://developer.salesforce.com/docs/commerce/commerce-api/guide/authorization-for-admin-apis.html)
[Public SLAS Client Use Cases](https://developer.salesforce.com/docs/commerce/commerce-api/guide/slas-public-client.html)
[Troubleshooting](https://developer.salesforce.com/docs/commerce/commerce-api/guide/custom-api-troubleshooting.html)


Made it with ❤️ by [Ivan Moll](https://www.linkedin.com/in/ivan-moll-9bb5aa9b/)