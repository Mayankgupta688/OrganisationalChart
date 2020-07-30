google.charts.load('current', { packages: ["orgchart"] });
google.charts.setOnLoadCallback(drawChart);

var accountData = [
  {
      "self": {
          "href": "https://web/scc/api/accounts/86a28e3b-9096-442a-9e7c-e987e9b9a42d",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "86a28e3b-9096-442a-9e7c-e987e9b9a42d",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.097",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Hix-1",
          "currency": "USD",
          "accountType": "0b157ae0-ea43-4626-8e63-8a1bd9c67650",
          "accountTypeValue": "DDA",
          "accountTypeDescription": "DDA",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "ee6a088a-b9cc-477d-a3dd-c93a7b5e64b1"
          },
          "duplicateBankStatementAddress": {
              "id": "5cbaec22-3a0b-4a6e-9e25-548895bbd495"
          },
          "balances": [
              {
                  "id": "3991e51c-df5e-482c-8026-b5f854173c60",
                  "balanceDate": "2014-05-01",
                  "bankAmount": 2000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "54ab36ef-cd9a-4c39-b74f-07c84051ee65",
                  "balanceDate": "2013-12-31",
                  "bankAmount": 2000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "815cd8ca-911b-4885-9047-ce399d291234",
                  "balanceDate": "2014-01-01",
                  "bankAmount": 22014.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "be294a49-3d3d-4d1a-a22d-b7195f806620",
                  "balanceDate": "2014-03-01",
                  "bankAmount": 15000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "cd4a2905-eb3a-4ef0-b948-f7d0d14608bb",
                  "balanceDate": "2013-07-01",
                  "bankAmount": 15000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "e0e7e0b8-c6d5-4969-b598-c4bc86838f8f",
                  "balanceDate": "2013-01-01",
                  "bankAmount": 22013.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Hix-1"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Hix-1"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Hix-1",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "91a99907-6be0-4405-8cf4-83677e05ba08",
              "href": "https://web/scc/api/internalentities/91a99907-6be0-4405-8cf4-83677e05ba08",
              "description": "Blue Dog FBAR - Tadd Hix",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.927"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/8fc70157-6e01-46b7-bafe-6be33aad8492",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "8fc70157-6e01-46b7-bafe-6be33aad8492",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.05",
          "createdAt": "2020-07-29T06:24:01.657",
          "accountName": "Blue K9 Manufacturing",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Payroll",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "d4fd6702-3c12-4fd8-a59f-a931a5b07ffa"
          },
          "duplicateBankStatementAddress": {
              "id": "bd5fd226-4afe-45aa-b368-56feee1d589e"
          },
          "balances": [
              {
                  "id": "4c0de4c1-c2b5-40a8-afae-d1e0a6b28b40",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10010.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "161085"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "90022600"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "161085"
              ],
              "ACCNUM": [
                  "90022600"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "90022600",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "IE1",
              "href": "https://web/scc/api/internalentities/IE1",
              "description": "Blue K9 Manufacturing",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:24:30.31"
          },
          "businessUnit": {
              "id": "bu1",
              "href": "https://web/scc/api/businessunits/bu1",
              "description": "Green Cat - Sports",
              "type": "businessunit",
              "externalId": "7d358a67-d9ef-4ddb-a05c-d0e7a0b0498b",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.593"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/13cadd5d-de05-460f-9f22-0d956cd5956e",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "13cadd5d-de05-460f-9f22-0d956cd5956e",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.3",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Renjifo-2",
          "currency": "EUR",
          "accountType": "27818ecd-1d98-47b1-9106-332917927972",
          "accountTypeValue": "FX",
          "accountTypeDescription": "FX",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "18d813c8-c142-4803-a304-58e5bec3a7d5"
          },
          "duplicateBankStatementAddress": {
              "id": "5a6951d5-c044-4994-b00f-76e6123f13f6"
          },
          "balances": [
              {
                  "id": "00077582-3c11-4c26-af44-c7168efde283",
                  "balanceDate": "2013-12-31",
                  "bankAmount": 9000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "EUR",
                  "glCurrency": "EUR"
              },
              {
                  "id": "529e29c7-dd14-4a98-b42c-b9c3a72c87a7",
                  "balanceDate": "2013-01-01",
                  "bankAmount": 32013.000,
                  "glAmount": 0.000,
                  "bankCurrency": "EUR",
                  "glCurrency": "EUR"
              },
              {
                  "id": "5cff690a-8165-4110-b4c0-fb52d083f288",
                  "balanceDate": "2013-07-01",
                  "bankAmount": 25000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "EUR",
                  "glCurrency": "EUR"
              },
              {
                  "id": "62a9d697-5d90-4bb8-81d1-7361cf08a9ee",
                  "balanceDate": "2014-01-01",
                  "bankAmount": 32014.000,
                  "glAmount": 0.000,
                  "bankCurrency": "EUR",
                  "glCurrency": "EUR"
              },
              {
                  "id": "7d45eaeb-de26-4991-857a-b9f7f40e5f7e",
                  "balanceDate": "2014-03-01",
                  "bankAmount": 25000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "EUR",
                  "glCurrency": "EUR"
              },
              {
                  "id": "bd7a8ada-a4d4-47e5-a83f-3675266fd6d6",
                  "balanceDate": "2014-05-01",
                  "bankAmount": 9000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "EUR",
                  "glCurrency": "EUR"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Renjifo-2"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Renjifo-2"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Renjifo-2",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "32386400-e279-4f7c-a5a9-3800722ee27f",
              "href": "https://web/scc/api/internalentities/32386400-e279-4f7c-a5a9-3800722ee27f",
              "description": "Blue Dog FBAR - Mikol Renjifo",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.62"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/full-acc-1",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "full-acc-1",
          "externalId": "full-acc-ext-1",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:09.343",
          "createdAt": "2020-07-29T06:24:01.637",
          "accountName": "full-acc-name",
          "currency": "USD",
          "erp": "erp",
          "sector": "sector",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Payroll",
          "specialInstructions": "this is a random instructions, for testing purposes",
          "paymentMethod": "BCS",
          "tradingNamePrimary": "full-acc-trading-name-1",
          "tradingNameSecondary": "full-acc-trading-name-2",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "monthlyPaymentAvg": 1.000,
          "monthlyTransactionAvg": 1,
          "monthlyBalanceAvg": 1.000,
          "accedeToMasterAgreement": "Yes",
          "nonSweep": true,
          "nonSweepReason": "No reason",
          "internal": true,
          "replicateToTMS": true,
          "transferBalancesAccount": {
              "id": "full-transfer-bal-acc-1",
              "href": "https://web/scc/api/accounts/full-transfer-bal-acc-1",
              "description": "full-transfer-bal-acc-num",
              "type": "account",
              "externalId": "full-transfer-bal-acc-ext-1",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:24:06.443"
          },
          "primaryBankStatementAddress": {
              "id": "ab69e59a-8877-40a2-a238-6e73970e95fd",
              "fullName": "IBAM Support",
              "email": "ibam.support@iongroup.com",
              "phone": "111-111-1111",
              "address1": "primary-add-1",
              "address2": "primary-add-2",
              "city": "primary-add-3",
              "state": "primary-add-4",
              "postalCode": "primary-add-5",
              "country": {
                  "id": "9cf2bdc6-9fbf-41cf-b305-28a6e2f5373b",
                  "countryName": "ITALY",
                  "isoCode": "ITA",
                  "isoShortCode": "IT",
                  "isoNumericCode": "380"
              }
          },
          "duplicateBankStatementAddress": {
              "id": "2b5222d7-d372-4f65-a382-efd0bf3e4a1b",
              "fullName": "dup support",
              "email": "dup.support@iongroup.com",
              "phone": "222-222-2222",
              "address1": "dup-add-1",
              "address2": "dup-add-2",
              "city": "dup-add-3",
              "state": "dup-add-4",
              "postalCode": "dup-add-5",
              "country": {
                  "id": "435bd51c-da00-4e7a-8ce7-c63c960b4394",
                  "countryName": "UNITED STATES",
                  "isoCode": "USA",
                  "isoShortCode": "US",
                  "isoNumericCode": "840"
              }
          },
          "selectedAttributes": [
              {
                  "id": "6ade423b-e56f-4017-9159-bf14d2ff6310",
                  "attribute": {
                      "id": "e84d53db-6346-4ba6-8d71-b40c83bd5206",
                      "name": "Avg Check $ Amount",
                      "description": "Avg Check $ Amount",
                      "attributeType": "TEXT",
                      "serviceType": {
                          "id": "8c8ec007-9644-472b-b818-d35ca01b3d16",
                          "name": "LOCKBOX SERVICES - Retail - Avg Check $ Amount",
                          "displayValue": "LOCKBOX SERVICES - Retail - Avg Check $ Amount",
                          "description": "LOCKBOX SERVICES - Retail - Avg Check $ Amount"
                      }
                  },
                  "value": "10"
              }
          ],
          "balances": [
              {
                  "id": "ab8a917a-d88a-430f-b217-88480ef5b23f",
                  "balanceDate": "2018-03-20",
                  "bankAmount": 1000.000,
                  "glAmount": 100.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "af638e0c-0e22-4d97-af8a-fc16259c9385",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 500.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "fees": [
              {
                  "id": "9ddcb487-f5d2-4731-9dd6-d3c62153a2a1",
                  "feeDate": "2018-03-20",
                  "internalCode": "Internal Fee Code",
                  "bankCode": "Bank Fee Code 1",
                  "description": "fee2",
                  "currency": "USD",
                  "volume": 100,
                  "price": 100.000
              }
          ],
          "contacts": [
              {
                  "id": "4098628f-238c-4941-8eb0-d8afc450cdd3",
                  "contactType": {
                      "id": "6194db88-8ce9-4d8d-94f6-a6763613356a",
                      "displayValue": "Technical Contact",
                      "description": "Technical Contact",
                      "shortDescription": "Technical Contact",
                      "status": "ACTIVE"
                  },
                  "associate": {
                      "id": "935fbf8d-03b3-440b-a818-0f9a40cb648c",
                      "href": "https://web/scc/api/people/935fbf8d-03b3-440b-a818-0f9a40cb648c",
                      "description": "bluedog.jatinder.virdee@wallstreetsystems.com",
                      "type": "person",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T06:23:49.317"
                  },
                  "internal": true
              }
          ],
          "sweeps": [
              {
                  "id": "f5571ef6-a432-4854-97b7-d5db571bbd15",
                  "sweepMethod": "ACH - Automated",
                  "sweepAccount": {
                      "id": "full-transfer-bal-acc-1",
                      "href": "https://web/scc/api/accounts/full-transfer-bal-acc-1",
                      "description": "full-transfer-bal-acc-num",
                      "type": "account",
                      "externalId": "full-transfer-bal-acc-ext-1",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T06:24:06.443"
                  },
                  "direction": "Both",
                  "intraDayLimit": "1000.00",
                  "accountType": {
                      "id": "8765033f-535e-4bed-89a0-de06b71ea64f",
                      "displayValue": "Child",
                      "description": "Child",
                      "shortDescription": "Child",
                      "status": "ACTIVE"
                  },
                  "fundName": "CS",
                  "tickerSymbol": "Ticker Symbol",
                  "goLiveDate": "2018-03-21",
                  "frequency": {
                      "id": "5e89bce4-2ef2-4048-ad87-4ed973b59b4f",
                      "displayValue": "As Needed",
                      "description": "As Needed",
                      "shortDescription": "As Needed",
                      "status": "ACTIVE"
                  },
                  "sweepAccountId": "full-transfer-bal-acc-1",
                  "status": "ACTIVE"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "111111"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "full-acc-number"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "111111"
              ],
              "ACCNUM": [
                  "full-acc-number"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "full-acc-number",
          "institution": {
              "id": "full-fi",
              "href": "https://web/scc/api/financialinstitutions/full-fi",
              "description": "Full Financial Institution",
              "type": "financialinstitution",
              "externalId": "EI-FFI",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.64"
          },
          "location": {
              "id": "a816bf17-0b28-44ec-83b8-0928954b7747",
              "href": "https://web/scc/api/financialinstitutionlocations/a816bf17-0b28-44ec-83b8-0928954b7747",
              "description": "FFI-Location",
              "type": "financialinstitutionlocation"
          },
          "bankUnit": {
              "id": "full-bank-unit-1",
              "href": "https://web/scc/api/businessunits/full-bank-unit-1",
              "description": "Full Bank Unit",
              "type": "businessunit",
              "externalId": "full-bank-unit-ext-1",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.58"
          },
          "owner": {
              "id": "full-ie",
              "href": "https://web/scc/api/internalentities/full-ie",
              "description": "Full Internal Entity",
              "type": "internalentity",
              "externalId": "EI-FIE",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.853"
          },
          "businessUnit": {
              "id": "full-bu-1",
              "href": "https://web/scc/api/businessunits/full-bu-1",
              "description": "Full Business Unit",
              "type": "businessunit",
              "externalId": "full-bu-ext-1",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.43"
          },
          "businessRegion": {
              "id": "5c812351-245a-4dfe-953f-ec7c25052530",
              "regionName": "Asia"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "treasuryManager": {
              "id": "935fbf8d-03b3-440b-a818-0f9a40cb648c",
              "href": "https://web/scc/api/people/935fbf8d-03b3-440b-a818-0f9a40cb648c",
              "description": "bluedog.jatinder.virdee@wallstreetsystems.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.317"
          },
          "requestedOpened": "2011-01-01T00:00:00",
          "targetOpenDate": "2011-01-01T00:00:00",
          "openRequestEffectiveDate": "2011-01-01T00:00:00",
          "opened": "2011-01-01T00:00:00",
          "notes": [
              {
                  "id": "be768ce5-c42e-46ae-aaa0-ef8a55fcf60a",
                  "note": "full acc note"
              }
          ],
          "accountKind": [
              "Commodity",
              "Cash",
              "Security"
          ],
          "additionalProperties": [
              {
                  "id": "afc7ff45-d7ed-48ef-b2af-e487fc091b93",
                  "name": "AccPropertyName3",
                  "value": "32112"
              },
              {
                  "id": "0e5d29af-901c-4d1b-9ce3-4dccde3d6665",
                  "name": "AccPropertyName2",
                  "value": "true"
              },
              {
                  "id": "137d62c5-6742-4e03-bd34-582dd9f2e368",
                  "name": "AccPropertyName1",
                  "value": "EUR"
              },
              {
                  "id": "72c779f0-db80-4ee8-89f6-0640e436345b",
                  "name": "AccPropertyName4",
                  "value": "March 06, 2018"
              }
          ],
          "accountReportingGroup": [
              "Bluedog Europe",
              "Bluedog North America"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/ebb824be-83f3-4648-8638-b084d1543426",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "ebb824be-83f3-4648-8638-b084d1543426",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.083",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Elder-2",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "546c67a1-1bab-450f-8447-1785ee2ed183"
          },
          "duplicateBankStatementAddress": {
              "id": "c975c18d-9250-4c98-bdcc-049081451fc4"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Elder-2"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Elder-2"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Elder-2",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "4a54cc3b-1e30-4c1f-8693-889115eb497b",
              "href": "https://web/scc/api/internalentities/4a54cc3b-1e30-4c1f-8693-889115eb497b",
              "description": "Blue Dog FBAR - Trista Elder 50",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.717"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/90872a35-2446-4d29-add7-db16ddfeb019",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "90872a35-2446-4d29-add7-db16ddfeb019",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.257",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "BD Singapore LTD",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "General Operations",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "c593674b-c0bd-4746-9bb8-8553ee3edb7a"
          },
          "duplicateBankStatementAddress": {
              "id": "dc481f8a-fd4d-4c5a-8b3c-f3687ff9a9a9"
          },
          "balances": [
              {
                  "id": "4856320b-7ccb-4c42-b58f-edcaa059b695",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 1001500.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "161131"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "8100585601"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "161131"
              ],
              "ACCNUM": [
                  "8100585601"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "8100585601",
          "institution": {
              "id": "3ce946a4-9b8b-4980-b51e-c321d162c1ad",
              "href": "https://web/scc/api/financialinstitutions/3ce946a4-9b8b-4980-b51e-c321d162c1ad",
              "description": "HSBC",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.56"
          },
          "location": {
              "id": "0d1b243c-d26e-44fd-bf29-83ad285e1a15",
              "href": "https://web/scc/api/financialinstitutionlocations/0d1b243c-d26e-44fd-bf29-83ad285e1a15",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "40920f15-fa69-4458-8a5a-77ec53e3c706",
              "href": "https://web/scc/api/internalentities/40920f15-fa69-4458-8a5a-77ec53e3c706",
              "description": "BD Singapore LTD",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.997"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/25388bd8-1427-4273-8523-0f3fd51c85fd",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "25388bd8-1427-4273-8523-0f3fd51c85fd",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.253",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Lindsey-1",
          "currency": "USD",
          "accountType": "e0036acf-1371-442e-aed4-57edbb81be27",
          "accountTypeValue": "Deposits",
          "accountTypeDescription": "Deposits",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "71ed5814-00e8-484c-a6ec-3c1873258866"
          },
          "duplicateBankStatementAddress": {
              "id": "3432b031-94fd-4b72-80c6-d4e5c66e82b5"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Lindsey-1"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Lindsey-1"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Lindsey-1",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "b502dcb5-52d5-44f7-a6b9-6f1cfa841887",
              "href": "https://web/scc/api/financialinstitutionlocations/b502dcb5-52d5-44f7-a6b9-6f1cfa841887",
              "description": "Domestic Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "10ec2259-7f5a-4f15-a990-2d4c39aa8f5a",
              "href": "https://web/scc/api/internalentities/10ec2259-7f5a-4f15-a990-2d4c39aa8f5a",
              "description": "Blue Dog FBAR - Peggy Lindsey",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.57"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/2a853dbf-210a-4175-850a-fb0b056c8dc3",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "2a853dbf-210a-4175-850a-fb0b056c8dc3",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.203",
          "createdAt": "2020-07-29T06:24:01.653",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "specialInstructions": "this is a random instructions, for testing purposes",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "410a9e54-3b9c-4ae6-98be-11c25532fc84"
          },
          "duplicateBankStatementAddress": {
              "id": "b29d1a66-4bd0-49b4-8de7-5df1e3876d0f"
          },
          "balances": [
              {
                  "id": "cecbed99-3491-44f5-b576-f61a4c5a8c91",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10006.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "162002"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "90091999"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "162002"
              ],
              "ACCNUM": [
                  "90091999"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "90091999",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "businessUnit": {
              "id": "0ded4c0f-1e14-4467-9748-15ee7883f6e3",
              "href": "https://web/scc/api/businessunits/0ded4c0f-1e14-4467-9748-15ee7883f6e3",
              "description": "Green Cat - Oil",
              "type": "businessunit",
              "externalId": "98c842fc-d874-48bb-9caa-21622d6b6074",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.73"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Commodity",
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/2e99466b-3c97-4380-9921-26527207a390",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "2e99466b-3c97-4380-9921-26527207a390",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.83",
          "createdAt": "2020-07-29T06:24:01.65",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Customer Deposits",
          "specialInstructions": "this is a random instructions, for testing purposes",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "d3b4ec8b-f4dc-45ab-9794-6c6a92d52ef7"
          },
          "duplicateBankStatementAddress": {
              "id": "51c6b3ff-70cc-4f2d-ad93-ca741160a9c0"
          },
          "balances": [
              {
                  "id": "dcc81756-1b19-4980-b6b1-75841d21bf3c",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 799.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "161230"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "90092966"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "161230"
              ],
              "ACCNUM": [
                  "90092966"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "90092966",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "businessUnit": {
              "id": "1da26a74-f1f2-4e42-a6ef-f9494361703c",
              "href": "https://web/scc/api/businessunits/1da26a74-f1f2-4e42-a6ef-f9494361703c",
              "description": "Green Cat - Software",
              "type": "businessunit",
              "externalId": "ce164e2e-5af6-4644-8206-0cb9b88c1c5e",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.387"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Commodity",
              "Cash"
          ],
          "additionalProperties": [
              {
                  "id": "a66df869-d2eb-4167-bec3-2a20ede0580a",
                  "name": "AccPropertyName2",
                  "value": "true"
              },
              {
                  "id": "675a305b-fdb1-4bab-9790-24eb5e630268",
                  "name": "AccPropertyName1",
                  "value": "USD"
              },
              {
                  "id": "309ae40f-4910-4795-b70b-4d4368bc82dd",
                  "name": "AccPropertyName4",
                  "value": "August 05, 2016"
              },
              {
                  "id": "61610dc4-b0bd-410e-a98e-592ab9d2c6cd",
                  "name": "AccPropertyName3",
                  "value": "my property value"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/cb7bc646-470f-437a-888e-6bef84fd4023",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "cb7bc646-470f-437a-888e-6bef84fd4023",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.043",
          "createdAt": "2020-07-29T06:24:01.657",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "a62cf674-154e-4987-a487-b123cc02e552"
          },
          "duplicateBankStatementAddress": {
              "id": "c03a93f4-ddca-4ecd-8a09-f11969fa9a0d"
          },
          "balances": [
              {
                  "id": "c5fe1836-1548-4f44-8356-06a19df84b65",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10014.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "160286"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "9009997371"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "160286"
              ],
              "ACCNUM": [
                  "9009997371"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "9009997371",
          "institution": {
              "id": "29b14325-93c3-4ec6-b199-c88736864339",
              "href": "https://web/scc/api/financialinstitutions/29b14325-93c3-4ec6-b199-c88736864339",
              "description": "Deutesche Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.483"
          },
          "location": {
              "id": "4dba83d1-4e5e-4a96-ba97-0e8c8173bc79",
              "href": "https://web/scc/api/financialinstitutionlocations/4dba83d1-4e5e-4a96-ba97-0e8c8173bc79",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/full-transfer-bal-acc-1",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "full-transfer-bal-acc-1",
          "externalId": "full-transfer-bal-acc-ext-1",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.443",
          "createdAt": "2020-07-29T06:24:01.63",
          "accountName": "full-transfer-bal-acc-name",
          "currency": "USD",
          "erp": "erp",
          "sector": "sector",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Payroll",
          "specialInstructions": "this is a random instructions, for testing purposes",
          "paymentMethod": "BCS",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "monthlyPaymentAvg": 1.000,
          "monthlyTransactionAvg": 1,
          "monthlyBalanceAvg": 1.000,
          "accedeToMasterAgreement": "Yes",
          "nonSweep": false,
          "internal": true,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "ac9ad18a-09a3-41b4-b624-aa19d2e50f7c"
          },
          "duplicateBankStatementAddress": {
              "id": "1b54fde6-c02d-4298-9574-f4ada23f7016"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "full-transfer-bal-acc-num"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "full-transfer-bal-acc-num"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "full-transfer-bal-acc-num",
          "institution": {
              "id": "full-fi",
              "href": "https://web/scc/api/financialinstitutions/full-fi",
              "description": "Full Financial Institution",
              "type": "financialinstitution",
              "externalId": "EI-FFI",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.64"
          },
          "location": {
              "id": "a816bf17-0b28-44ec-83b8-0928954b7747",
              "href": "https://web/scc/api/financialinstitutionlocations/a816bf17-0b28-44ec-83b8-0928954b7747",
              "description": "FFI-Location",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "full-ie",
              "href": "https://web/scc/api/internalentities/full-ie",
              "description": "Full Internal Entity",
              "type": "internalentity",
              "externalId": "EI-FIE",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.853"
          },
          "businessUnit": {
              "id": "full-bu-1",
              "href": "https://web/scc/api/businessunits/full-bu-1",
              "description": "Full Business Unit",
              "type": "businessunit",
              "externalId": "full-bu-ext-1",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.43"
          },
          "businessRegion": "5c812351-245a-4dfe-953f-ec7c25052530",
          "requestedOpened": "2011-01-01T00:00:00",
          "targetOpenDate": "2011-01-01T00:00:00",
          "openRequestEffectiveDate": "2011-01-01T00:00:00",
          "opened": "2011-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/full-acc-unicode-1",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "full-acc-unicode-1",
          "externalId": "full-acc-ext-ערן",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:09.343",
          "createdAt": "2020-07-29T06:24:01.663",
          "accountName": "Full Acc 天空",
          "currency": "EUR",
          "accountType": "b3aeeda4-fce7-4a9a-a2ca-42c182146c4c",
          "accountTypeValue": "Concentration",
          "accountTypeDescription": "Concentration",
          "purpose": "A & H Operations",
          "specialInstructions": "spec ערן",
          "tradingNamePrimary": "tn1 天空",
          "tradingNameSecondary": "tn2 天空",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "37236c43-bc2c-4205-b18e-9b6222495a23",
              "fullName": "cn ערן",
              "email": "ce.ceערן@fake.com",
              "address1": "add1 ערן",
              "address2": "add2 ערן",
              "city": "city ערן",
              "state": "state ערן",
              "postalCode": "pc ערן",
              "country": {
                  "id": "60699c1d-4690-4619-882c-20d878e53c8e",
                  "countryName": "ISRAEL",
                  "isoCode": "ISR",
                  "isoShortCode": "IL",
                  "isoNumericCode": "376"
              }
          },
          "duplicateBankStatementAddress": {
              "id": "23824332-3dcb-45e2-a81b-9a5dde6b2db0",
              "fullName": "dba-cn 天空",
              "email": "dba.ce.天空@fake.com",
              "address1": "dba-add1 天空",
              "address2": "dba-add2 天空",
              "city": "dba-city 天空",
              "state": "dba-state 天空",
              "postalCode": "dba-pc 天空",
              "country": {
                  "id": "8a1ebec9-cb71-437d-9edf-efbc2929cc60",
                  "countryName": "BAHRAIN",
                  "isoCode": "BHR",
                  "isoShortCode": "BH",
                  "isoNumericCode": "048"
              }
          },
          "selectedAttributes": [
              {
                  "id": "88f23626-097d-409f-81c1-2ce3dd919f4a",
                  "attribute": {
                      "id": "6602cfcb-7cc3-4158-b609-5341b63f3a8e",
                      "name": "Attr 天空",
                      "description": "Attr 天空",
                      "attributeType": "BOOLEAN",
                      "serviceType": {
                          "id": "afd25ca1-7542-469e-a186-fb5a25b3a425",
                          "name": "LOCKBOX SERVICES - Image Lockbox",
                          "displayValue": "LOCKBOX SERVICES - Image Lockbox",
                          "description": "LOCKBOX SERVICES - Image Lockbox"
                      }
                  },
                  "value": "Yes"
              }
          ],
          "fees": [
              {
                  "id": "5449363c-d068-4732-adae-168c55527ac8",
                  "feeDate": "2019-10-07",
                  "internalCode": "Internal Fee Code",
                  "bankCode": "Bank Fee Code 1",
                  "description": "desc ערן",
                  "currency": "EUR",
                  "volume": 100,
                  "price": 200.000
              }
          ],
          "contacts": [
              {
                  "id": "def724cb-3a09-4885-a74e-5174bcefe1a4",
                  "contactType": "6194db88-8ce9-4d8d-94f6-a6763613356a",
                  "associate": {
                      "id": "full-unicode-person-1",
                      "href": "https://web/scc/api/people/full-unicode-person-1",
                      "description": "fn-天空.ln-天空@fake.com",
                      "type": "person",
                      "externalId": "full-person-ext-天空",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T06:23:46.72"
                  },
                  "internal": true
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "full acc number 天空"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "full acc number 天空"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "full acc number 天空",
          "institution": {
              "id": "full-fi-unicode-1",
              "href": "https://web/scc/api/financialinstitutions/full-fi-unicode-1",
              "description": "Full FI ŞŞ",
              "type": "financialinstitution",
              "externalId": "full-fi-ext-ŞŞ",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.543"
          },
          "location": {
              "id": "65c5afed-af3f-4329-8c2a-df4684e82a1a",
              "href": "https://web/scc/api/financialinstitutionlocations/65c5afed-af3f-4329-8c2a-df4684e82a1a",
              "description": "Main Office 天空",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "full-ie-unicode-1",
              "href": "https://web/scc/api/internalentities/full-ie-unicode-1",
              "description": "Full IE ŞŞ",
              "type": "internalentity",
              "externalId": "full-ie-ext-ŞŞ",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.677"
          },
          "businessUnit": {
              "id": "full-bu-unicode-1",
              "href": "https://web/scc/api/businessunits/full-bu-unicode-1",
              "description": "Full BU ŞŞ",
              "type": "businessunit",
              "externalId": "full-bu-ext-Ş",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.77"
          },
          "reconciler": {
              "id": "full-unicode-person-1",
              "href": "https://web/scc/api/people/full-unicode-person-1",
              "description": "fn-天空.ln-天空@fake.com",
              "type": "person",
              "externalId": "full-person-ext-天空",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:46.72"
          },
          "cashManager": {
              "id": "full-unicode-person-1",
              "href": "https://web/scc/api/people/full-unicode-person-1",
              "description": "fn-天空.ln-天空@fake.com",
              "type": "person",
              "externalId": "full-person-ext-天空",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:46.72"
          },
          "treasuryManager": {
              "id": "full-unicode-person-1",
              "href": "https://web/scc/api/people/full-unicode-person-1",
              "description": "fn-天空.ln-天空@fake.com",
              "type": "person",
              "externalId": "full-person-ext-天空",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:46.72"
          },
          "notes": [
              {
                  "id": "5455c6e5-f4ce-480c-ae34-e5cc8330a5d4",
                  "note": "note 天空"
              }
          ],
          "additionalProperties": [
              {
                  "id": "82883b3f-a565-4930-8599-8479d89cfae1",
                  "name": "AccPropertyName3",
                  "value": "prop1 ערן"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/31a5f97a-ffb6-4982-b5b0-f1198062d1cb",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "31a5f97a-ffb6-4982-b5b0-f1198062d1cb",
          "status": "PENDING_EDIT",
          "lastModifiedAt": "2020-07-29T07:22:06.06",
          "createdAt": "2020-07-29T07:03:56.387",
          "accountName": "LevelTwoAccount",
          "currency": "USD",
          "accountType": "d941897b-e3f7-446b-8fb6-363bad861d97",
          "accountTypeValue": "CASH",
          "accountTypeDescription": "Account used for the payment of cash",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "d1c872f9-3cbb-4fbd-8fa2-9f69a44b0fa0"
          },
          "duplicateBankStatementAddress": {
              "id": "db0398c5-ac89-42a8-b0ff-aed76351a0cd"
          },
          "sweeps": [
              {
                  "id": "46aad1cc-55e2-4cc3-b942-45863fd85357",
                  "sweepAccount": {
                      "id": "8f04a29a-d9de-4380-89bb-ad3c9fff6667",
                      "href": "https://web/scc/api/accounts/8f04a29a-d9de-4380-89bb-ad3c9fff6667",
                      "description": "TEMP-ACCNUM-1596005635042",
                      "type": "account",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T06:58:01.767"
                  },
                  "accountType": "8765033f-535e-4bed-89a0-de06b71ea64f",
                  "goLiveDate": "2020-07-27",
                  "sweepAccountId": "8f04a29a-d9de-4380-89bb-ad3c9fff6667",
                  "status": "ACTIVE"
              },
              {
                  "id": "a84f851c-4f12-403d-ad2b-0473a504a3ee",
                  "sweepAccount": {
                      "id": "e327f2b5-e018-40bb-a2cf-6a080aa9e606",
                      "href": "https://web/scc/api/accounts/e327f2b5-e018-40bb-a2cf-6a080aa9e606",
                      "description": "TEMP-ACCNUM-1596005989143",
                      "type": "account",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T07:02:18.53"
                  },
                  "accountType": "8765033f-535e-4bed-89a0-de06b71ea64f",
                  "goLiveDate": "2020-07-27",
                  "sweepAccountId": "e327f2b5-e018-40bb-a2cf-6a080aa9e606",
                  "status": "ACTIVE"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "TEMP-ACCNUM-1596006236426"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "TEMP-ACCNUM-1596006236426"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "TEMP-ACCNUM-1596006236426",
          "institution": {
              "id": "933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "href": "https://web/scc/api/financialinstitutions/933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "description": "Citibank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.603"
          },
          "location": {
              "id": "d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "href": "https://web/scc/api/financialinstitutionlocations/d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "c18c8811-4440-46a5-9818-a494501002d1",
              "href": "https://web/scc/api/internalentities/c18c8811-4440-46a5-9818-a494501002d1",
              "description": "Blue Dog Barcelona, SA",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.7"
          },
          "requestedOpened": "2020-07-29T07:06:00",
          "requestedEdited": "2020-07-29T07:20:00",
          "additionalProperties": [
              {
                  "id": "cf9a650e-3e39-419b-b1df-c5ccb5a791bd",
                  "name": "AccPropertyName2",
                  "value": "false"
              },
              {
                  "id": "13ec7c69-d52d-462d-ba59-246c9c32dda7",
                  "name": "AccPropertyName3"
              },
              {
                  "id": "29c98dff-59d0-4230-8d26-d29217cf01b7",
                  "name": "AccPropertyName4"
              },
              {
                  "id": "797ad96e-ffdb-4524-9941-749912a05705",
                  "name": "AccPropertyName1"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/eb030be9-95f1-4b33-8f93-81049bf64574",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "eb030be9-95f1-4b33-8f93-81049bf64574",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.293",
          "createdAt": "2020-07-29T06:24:01.663",
          "accountName": "FBAR-Common",
          "currency": "USD",
          "accountType": "b3aeeda4-fce7-4a9a-a2ca-42c182146c4c",
          "accountTypeValue": "Concentration",
          "accountTypeDescription": "Concentration",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "d6997b13-5dae-48a0-bb3b-2458cda7a558"
          },
          "duplicateBankStatementAddress": {
              "id": "a66a321d-ef63-4766-bfb0-9be91133e6eb"
          },
          "balances": [
              {
                  "id": "3b958271-5a4f-4c1b-8d57-8b1fb151176c",
                  "balanceDate": "2014-01-01",
                  "bankAmount": 20000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "499b9cdb-0847-42b5-8715-d0b426b4b9b4",
                  "balanceDate": "2012-01-01",
                  "bankAmount": 20000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "daa68ad2-fceb-496c-9fe9-41337ae5878a",
                  "balanceDate": "2013-01-01",
                  "bankAmount": 20000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "FBAR-Common"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "FBAR-Common"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "FBAR-Common",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "b502dcb5-52d5-44f7-a6b9-6f1cfa841887",
              "href": "https://web/scc/api/financialinstitutionlocations/b502dcb5-52d5-44f7-a6b9-6f1cfa841887",
              "description": "Domestic Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "b2136c58-5ea5-4f16-87a3-281693c87003",
              "href": "https://web/scc/api/internalentities/b2136c58-5ea5-4f16-87a3-281693c87003",
              "description": "Blue Dog FBAR - Common",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.633"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/f796d6ae-9e15-4564-99c8-767b507b7513",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "f796d6ae-9e15-4564-99c8-767b507b7513",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.167",
          "createdAt": "2020-07-29T06:24:01.663",
          "accountName": "FBAR-NotOwnedIn13Or14",
          "currency": "USD",
          "accountType": "b3aeeda4-fce7-4a9a-a2ca-42c182146c4c",
          "accountTypeValue": "Concentration",
          "accountTypeDescription": "Concentration",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": true,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "77a2ad6d-3b7a-4e66-8d0e-a48f1d0a0572"
          },
          "duplicateBankStatementAddress": {
              "id": "c66117d1-c75a-4c5e-8920-7a709ecd144b"
          },
          "balances": [
              {
                  "id": "03439cef-df42-4b56-9f37-393ab089436b",
                  "balanceDate": "2013-01-01",
                  "bankAmount": 20000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "4889ae13-4b8a-41a1-b284-fd411b124622",
                  "balanceDate": "2014-01-01",
                  "bankAmount": 20000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "a784c8c6-6e2b-4f0c-9e9d-fc9b8326e75c",
                  "balanceDate": "2012-01-01",
                  "bankAmount": 20000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "FBAR-NotOwnedIn13Or14"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "FBAR-NotOwnedIn13Or14"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "FBAR-NotOwnedIn13Or14",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "b2136c58-5ea5-4f16-87a3-281693c87003",
              "href": "https://web/scc/api/internalentities/b2136c58-5ea5-4f16-87a3-281693c87003",
              "description": "Blue Dog FBAR - Common",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.633"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/5c62dd8d-6cf8-455e-94ca-42dded80220e",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "5c62dd8d-6cf8-455e-94ca-42dded80220e",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.133",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Cool-1",
          "currency": "USD",
          "accountType": "b3aeeda4-fce7-4a9a-a2ca-42c182146c4c",
          "accountTypeValue": "Concentration",
          "accountTypeDescription": "Concentration",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "2a8277cf-c644-46e6-a85e-0b9a31664b67"
          },
          "duplicateBankStatementAddress": {
              "id": "f2aeb450-d67a-4ae1-b5c1-0fea0d4acf52"
          },
          "balances": [
              {
                  "id": "81c8dcba-3f84-442c-9f09-a28b9aff2407",
                  "balanceDate": "2014-05-01",
                  "bankAmount": 9999.990,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "a28f415a-4dfd-4a76-a905-4d5837a78438",
                  "balanceDate": "2014-03-01",
                  "bankAmount": 4000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "d28e01e6-64c0-4bfc-9400-39b63118cb72",
                  "balanceDate": "2014-01-01",
                  "bankAmount": 3000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "e57bc82f-24ba-4f61-9f9e-6e01621361d3",
                  "balanceDate": "2013-01-01",
                  "bankAmount": 1000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "e8936184-e929-4ca9-9d8b-afaafc7aa615",
                  "balanceDate": "2013-07-01",
                  "bankAmount": 2000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "fcc4c491-37fb-4b00-b538-3c56178686ba",
                  "balanceDate": "2013-12-31",
                  "bankAmount": 9999.990,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Cool-1"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Cool-1"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Cool-1",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "00f79a5e-7899-40ce-90a8-f39c190e33c4",
              "href": "https://web/scc/api/internalentities/00f79a5e-7899-40ce-90a8-f39c190e33c4",
              "description": "Blue Dog FBAR - Elwin Cool",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.553"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/145af8da-0afe-462a-af6a-0caf98cc056e",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "145af8da-0afe-462a-af6a-0caf98cc056e",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:49:35.337",
          "createdAt": "2020-07-29T06:43:45.27",
          "accountName": "LevelFourAccountThree",
          "currency": "USD",
          "accountType": "d941897b-e3f7-446b-8fb6-363bad861d97",
          "accountTypeValue": "CASH",
          "accountTypeDescription": "Account used for the payment of cash",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "a8aa7f8d-68e2-4e1e-a9f9-442e591390d3"
          },
          "duplicateBankStatementAddress": {
              "id": "65a0c211-5530-469f-aa5c-74baceadf136"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "TEMP-ACCNUM-1596005025360"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "TEMP-ACCNUM-1596005025360"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "TEMP-ACCNUM-1596005025360",
          "institution": {
              "id": "933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "href": "https://web/scc/api/financialinstitutions/933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "description": "Citibank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.603"
          },
          "location": {
              "id": "d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "href": "https://web/scc/api/financialinstitutionlocations/d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "c18c8811-4440-46a5-9818-a494501002d1",
              "href": "https://web/scc/api/internalentities/c18c8811-4440-46a5-9818-a494501002d1",
              "description": "Blue Dog Barcelona, SA",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.7"
          },
          "requestedOpened": "2020-07-29T06:45:00",
          "requestedEdited": "2020-07-29T06:47:00",
          "additionalProperties": [
              {
                  "id": "8c3f7ce2-10c0-4de6-89db-b2ec23ca4f23",
                  "name": "AccPropertyName3"
              },
              {
                  "id": "c3fbef4d-11af-41d5-a458-8ad162fe823c",
                  "name": "AccPropertyName4"
              },
              {
                  "id": "9a2c9a90-1ac7-481d-a1dd-7efa7eee2d70",
                  "name": "AccPropertyName1"
              },
              {
                  "id": "7f9adec2-114d-418b-a7d9-23039604b0a1",
                  "name": "AccPropertyName2",
                  "value": "false"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/685a62a8-4e9d-44e7-a06b-dd5fd63ea824",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "685a62a8-4e9d-44e7-a06b-dd5fd63ea824",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.373",
          "createdAt": "2020-07-29T06:24:01.653",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "specialInstructions": "this is a random instructions, for testing purposes",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "b65bce20-235e-4306-b77a-c1eb1ff4786f"
          },
          "duplicateBankStatementAddress": {
              "id": "cdd86055-61cc-486b-9997-da51c797af42"
          },
          "balances": [
              {
                  "id": "3f42f1d9-e6f4-4846-a0a0-12488a19b721",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10003.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "160080"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "90095809"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "160080"
              ],
              "ACCNUM": [
                  "90095809"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "90095809",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "businessUnit": {
              "id": "bu1",
              "href": "https://web/scc/api/businessunits/bu1",
              "description": "Green Cat - Sports",
              "type": "businessunit",
              "externalId": "7d358a67-d9ef-4ddb-a05c-d0e7a0b0498b",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.593"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Commodity",
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/d9962cbd-97ee-4122-8a0d-fb691679c2ad",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "d9962cbd-97ee-4122-8a0d-fb691679c2ad",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.71",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Hix-2",
          "currency": "USD",
          "accountType": "0b157ae0-ea43-4626-8e63-8a1bd9c67650",
          "accountTypeValue": "DDA",
          "accountTypeDescription": "DDA",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "eeab334d-73fc-4cd0-a4f0-5d90fd2b322e"
          },
          "duplicateBankStatementAddress": {
              "id": "5920efd8-a1da-4051-b5c1-f48e186962ce"
          },
          "balances": [
              {
                  "id": "2d0009a2-0bab-427f-883e-24ba910efd77",
                  "balanceDate": "2013-07-01",
                  "bankAmount": 25000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "4b1ecd69-f12f-4cb4-a2b7-eec05ec7bf34",
                  "balanceDate": "2014-01-01",
                  "bankAmount": 32014.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "78c90ef2-1b78-4f5d-9feb-4da007f826a5",
                  "balanceDate": "2014-05-01",
                  "bankAmount": 9000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "afb7834f-6031-451c-b197-3e7ffabbe321",
                  "balanceDate": "2013-12-31",
                  "bankAmount": 9000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "cbc51a42-f334-4e6b-869b-99948eb635d8",
                  "balanceDate": "2013-01-01",
                  "bankAmount": 32013.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "f2c2f023-9492-42ed-a036-27c5e4f57975",
                  "balanceDate": "2014-03-01",
                  "bankAmount": 25000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Hix-2"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Hix-2"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Hix-2",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "91a99907-6be0-4405-8cf4-83677e05ba08",
              "href": "https://web/scc/api/internalentities/91a99907-6be0-4405-8cf4-83677e05ba08",
              "description": "Blue Dog FBAR - Tadd Hix",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.927"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/ee4ff391-6561-4982-a1b6-9f6142684383",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "ee4ff391-6561-4982-a1b6-9f6142684383",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.413",
          "createdAt": "2020-07-29T06:24:01.653",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "81ab3634-5e3d-4170-ab38-c03b88026acf"
          },
          "duplicateBankStatementAddress": {
              "id": "5e0743fc-c6f7-4ff5-bcd5-1029e21ea80a"
          },
          "balances": [
              {
                  "id": "b8fff968-a1b2-476c-b624-791e4ce870f9",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10005.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "162003"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "90098271"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "162003"
              ],
              "ACCNUM": [
                  "90098271"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "90098271",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "businessUnit": {
              "id": "0ded4c0f-1e14-4467-9748-15ee7883f6e3",
              "href": "https://web/scc/api/businessunits/0ded4c0f-1e14-4467-9748-15ee7883f6e3",
              "description": "Green Cat - Oil",
              "type": "businessunit",
              "externalId": "98c842fc-d874-48bb-9caa-21622d6b6074",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.73"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Commodity",
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/full-acc-up-1",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "full-acc-up-1",
          "externalId": "full-acc-up-ext-1",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.663",
          "createdAt": "2020-07-29T06:24:01.663",
          "accountName": "full-acc-up-name",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Payroll",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "e680866b-caae-4980-a8b5-2bfbffcb3ff3"
          },
          "duplicateBankStatementAddress": {
              "id": "f0ff5d4e-13b6-41f3-b921-5939061da0fe"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "full-acc-up-num"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "full-acc-up-num"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "full-acc-up-num",
          "institution": {
              "id": "full-fi-ultimate",
              "href": "https://web/scc/api/financialinstitutions/full-fi-ultimate",
              "description": "Full Financial Institution Ultimate Parent",
              "type": "financialinstitution",
              "externalId": "EI-FFI-UP",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.623"
          },
          "location": {
              "id": "d26715aa-6357-4308-be2a-c9d81e7ebe09",
              "href": "https://web/scc/api/financialinstitutionlocations/d26715aa-6357-4308-be2a-c9d81e7ebe09",
              "description": "FFI-UP-Location",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "full-ie",
              "href": "https://web/scc/api/internalentities/full-ie",
              "description": "Full Internal Entity",
              "type": "internalentity",
              "externalId": "EI-FIE",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.853"
          },
          "businessUnit": {
              "id": "full-bu-1",
              "href": "https://web/scc/api/businessunits/full-bu-1",
              "description": "Full Business Unit",
              "type": "businessunit",
              "externalId": "full-bu-ext-1",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.43"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/abc",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "abc",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.42",
          "createdAt": "2020-07-29T06:24:01.65",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "erp": "erp",
          "sector": "sector",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Concentration",
          "specialInstructions": "this is a random instructions, for testing purposes",
          "intradayReporting": true,
          "ebankingLinkage": true,
          "monthlyPaymentAvg": 1.000,
          "monthlyTransactionAvg": 1,
          "monthlyBalanceAvg": 1.000,
          "accedeToMasterAgreement": "Yes",
          "nonSweep": true,
          "nonSweepReason": "No reason",
          "internal": true,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "956115fe-d1cc-47c6-a77e-edc991367dd0"
          },
          "duplicateBankStatementAddress": {
              "id": "f7412247-9d13-4200-bf02-edd72a63407f"
          },
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "160020"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "900005515"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "160020"
              ],
              "ACCNUM": [
                  "900005515"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "900005515",
          "institution": {
              "id": "933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "href": "https://web/scc/api/financialinstitutions/933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "description": "Citibank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.603"
          },
          "location": {
              "id": "d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "href": "https://web/scc/api/financialinstitutionlocations/d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "businessUnit": {
              "id": "a79c386e-7bda-4839-aed8-144434f32e62",
              "href": "https://web/scc/api/businessunits/a79c386e-7bda-4839-aed8-144434f32e62",
              "description": "Green Cat - Television",
              "type": "businessunit",
              "externalId": "f111d7b1-5877-4a3f-aa86-d22b06d05c43",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.447"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "requestedOpened": "2010-01-01T00:00:00",
          "targetOpenDate": "2010-01-01T00:00:00",
          "openRequestEffectiveDate": "2010-01-01T00:00:00",
          "opened": "2010-01-01T00:00:00",
          "requestedEdited": "2010-01-01T00:00:00",
          "targetEditDate": "2010-01-01T00:00:00",
          "editRequestEffectiveDate": "2010-01-01T00:00:00",
          "edited": "2010-01-01T00:00:00",
          "requestedClosed": "2010-01-01T00:00:00",
          "targetCloseDate": "2010-01-01T00:00:00",
          "closeRequestEffectiveDate": "2010-01-01T00:00:00",
          "closed": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ],
          "additionalProperties": [
              {
                  "id": "c41915be-d15f-455c-a0bf-18b324b13d10",
                  "name": "AccPropertyName3",
                  "value": "my property value"
              },
              {
                  "id": "d285bb75-035a-4dc4-acf5-aceebea5820a",
                  "name": "AccPropertyName1",
                  "value": "USD"
              },
              {
                  "id": "d0891df5-bd44-4dd9-b1ab-dd498c91fc6c",
                  "name": "AccPropertyName2",
                  "value": "true"
              },
              {
                  "id": "a42fe143-96eb-451e-92aa-bd05b82a8742",
                  "name": "AccPropertyName4",
                  "value": "August 05, 2016"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/8f04a29a-d9de-4380-89bb-ad3c9fff6667",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "8f04a29a-d9de-4380-89bb-ad3c9fff6667",
          "status": "PENDING_EDIT",
          "lastModifiedAt": "2020-07-29T07:23:26.337",
          "createdAt": "2020-07-29T06:53:55.007",
          "accountName": "LevelThreeAccountOne",
          "currency": "USD",
          "accountType": "d941897b-e3f7-446b-8fb6-363bad861d97",
          "accountTypeValue": "CASH",
          "accountTypeDescription": "Account used for the payment of cash",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "414d3e60-cb65-4d55-88ae-ce28253a8108"
          },
          "duplicateBankStatementAddress": {
              "id": "6db97c34-8e0a-4ca1-a870-7b2239172057"
          },
          "sweeps": [
              {
                  "id": "7e0d3efd-2715-46a8-a51b-50c70f549cf7",
                  "sweepAccount": {
                      "id": "05c8f6aa-b882-4259-9dac-2ccefdc4c0c5",
                      "href": "https://web/scc/api/accounts/05c8f6aa-b882-4259-9dac-2ccefdc4c0c5",
                      "description": "TEMP-ACCNUM-1596004942123",
                      "type": "account",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T06:46:06.92"
                  },
                  "accountType": "8765033f-535e-4bed-89a0-de06b71ea64f",
                  "goLiveDate": "2020-07-28",
                  "sweepAccountId": "05c8f6aa-b882-4259-9dac-2ccefdc4c0c5",
                  "status": "ACTIVE"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "TEMP-ACCNUM-1596005635042"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "TEMP-ACCNUM-1596005635042"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "TEMP-ACCNUM-1596005635042",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "a97abb5f-79f8-4d18-b1dc-77ffcf274354",
              "href": "https://web/scc/api/internalentities/a97abb5f-79f8-4d18-b1dc-77ffcf274354",
              "description": "Blue Dog Capital Holdings Limited",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.947"
          },
          "requestedOpened": "2020-07-29T06:57:00",
          "requestedEdited": "2020-07-29T07:22:00",
          "additionalProperties": [
              {
                  "id": "7039a7f8-fc2c-4194-9947-941a9bc18cb8",
                  "name": "AccPropertyName3"
              },
              {
                  "id": "bd6383a3-2316-434f-991a-5e513adf44cf",
                  "name": "AccPropertyName2",
                  "value": "false"
              },
              {
                  "id": "af942598-42c1-458d-a626-7fe74104d021",
                  "name": "AccPropertyName1"
              },
              {
                  "id": "4120b57b-93d1-477e-8d65-9f73285e823e",
                  "name": "AccPropertyName4"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/4113d792-f750-4a3a-8aef-25dfb55cede5",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "4113d792-f750-4a3a-8aef-25dfb55cede5",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:49:50.68",
          "createdAt": "2020-07-29T06:43:01.53",
          "accountName": "LevelFourAccountTwo",
          "currency": "USD",
          "accountType": "d941897b-e3f7-446b-8fb6-363bad861d97",
          "accountTypeValue": "CASH",
          "accountTypeDescription": "Account used for the payment of cash",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "4a6c74d0-f269-4b2b-9bc8-0b651f1eb405"
          },
          "duplicateBankStatementAddress": {
              "id": "69aad529-6362-4ab4-851a-b45f2ec458a2"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "TEMP-ACCNUM-1596004981552"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "TEMP-ACCNUM-1596004981552"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "TEMP-ACCNUM-1596004981552",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "40920f15-fa69-4458-8a5a-77ec53e3c706",
              "href": "https://web/scc/api/internalentities/40920f15-fa69-4458-8a5a-77ec53e3c706",
              "description": "BD Singapore LTD",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.997"
          },
          "businessUnit": {
              "id": "c38bd23f-0a38-41a4-b691-b778b92512b7",
              "href": "https://web/scc/api/businessunits/c38bd23f-0a38-41a4-b691-b778b92512b7",
              "description": "Green Cat - Health Care",
              "type": "businessunit",
              "externalId": "504468a1-2875-4747-b1a3-a99225a76943",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.477"
          },
          "requestedOpened": "2020-07-29T06:45:00",
          "requestedEdited": "2020-07-29T06:47:00",
          "additionalProperties": [
              {
                  "id": "a29c325f-fcc2-4a39-851b-b73b82957034",
                  "name": "AccPropertyName2",
                  "value": "false"
              },
              {
                  "id": "29267c3b-4ed2-4e5b-a5bb-d4d2c95aa61d",
                  "name": "AccPropertyName1"
              },
              {
                  "id": "2b07d2ad-5365-4ce2-b672-d37d7187f827",
                  "name": "AccPropertyName3"
              },
              {
                  "id": "d02e3c3c-96d8-46ca-a42f-b667ab468f24",
                  "name": "AccPropertyName4"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/571a7ad6-a3c4-4445-851b-d19a75e8873c",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "571a7ad6-a3c4-4445-851b-d19a75e8873c",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.95",
          "createdAt": "2020-07-29T06:24:01.653",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "068573c5-f2e0-4e4b-a978-b4bcf795b7e6"
          },
          "duplicateBankStatementAddress": {
              "id": "f4df0e3f-5a68-4ab5-9218-5351aea4bd84"
          },
          "balances": [
              {
                  "id": "a48c6493-9216-4555-9830-d88fc4568c92",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10004.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "162004"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "90098182"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "162004"
              ],
              "ACCNUM": [
                  "90098182"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "90098182",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "businessUnit": {
              "id": "5963122b-4408-40f4-8784-27d2197acb06",
              "href": "https://web/scc/api/businessunits/5963122b-4408-40f4-8784-27d2197acb06",
              "description": "Green Cat - Aerospace",
              "type": "businessunit",
              "externalId": "a2c655e4-87d1-4241-b12b-00596a7a5ba7",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.61"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Commodity",
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/4c9a1548-5dfc-4132-9e2a-64a92bc43f63",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "4c9a1548-5dfc-4132-9e2a-64a92bc43f63",
          "status": "PENDING_EDIT",
          "lastModifiedAt": "2020-07-29T07:24:09.407",
          "createdAt": "2020-07-29T07:01:12.967",
          "accountName": "LevelThreeAccountThree",
          "currency": "USD",
          "accountType": "d941897b-e3f7-446b-8fb6-363bad861d97",
          "accountTypeValue": "CASH",
          "accountTypeDescription": "Account used for the payment of cash",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "a509ea1a-b947-434e-a11a-d61ad4ab6f32"
          },
          "duplicateBankStatementAddress": {
              "id": "c7c1a96c-25ff-4220-bdbd-154c0276fabf"
          },
          "sweeps": [
              {
                  "id": "e995d2b1-2723-4787-8be5-70ac21cd0047",
                  "sweepAccount": {
                      "id": "145af8da-0afe-462a-af6a-0caf98cc056e",
                      "href": "https://web/scc/api/accounts/145af8da-0afe-462a-af6a-0caf98cc056e",
                      "description": "TEMP-ACCNUM-1596005025360",
                      "type": "account",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T06:49:35.337"
                  },
                  "accountType": "8765033f-535e-4bed-89a0-de06b71ea64f",
                  "goLiveDate": "2020-07-27",
                  "sweepAccountId": "145af8da-0afe-462a-af6a-0caf98cc056e",
                  "status": "ACTIVE"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "TEMP-ACCNUM-1596006072995"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "TEMP-ACCNUM-1596006072995"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "TEMP-ACCNUM-1596006072995",
          "institution": {
              "id": "933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "href": "https://web/scc/api/financialinstitutions/933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "description": "Citibank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.603"
          },
          "location": {
              "id": "d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "href": "https://web/scc/api/financialinstitutionlocations/d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "c18c8811-4440-46a5-9818-a494501002d1",
              "href": "https://web/scc/api/internalentities/c18c8811-4440-46a5-9818-a494501002d1",
              "description": "Blue Dog Barcelona, SA",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.7"
          },
          "requestedOpened": "2020-07-29T07:02:00",
          "requestedEdited": "2020-07-29T07:23:00",
          "additionalProperties": [
              {
                  "id": "61fefd89-bc60-4031-badd-cd74492b6b51",
                  "name": "AccPropertyName3"
              },
              {
                  "id": "3d474c99-e4ec-4545-9c95-8b67dd1979cc",
                  "name": "AccPropertyName1"
              },
              {
                  "id": "080a0fe7-b5e6-4721-85bd-399b0cd855d7",
                  "name": "AccPropertyName4"
              },
              {
                  "id": "50efe6ef-0aa8-4fe0-b89e-8e30dae87a9e",
                  "name": "AccPropertyName2",
                  "value": "false"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/e783c68e-f895-4a5c-bd22-8274b3752594",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "e783c68e-f895-4a5c-bd22-8274b3752594",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.383",
          "createdAt": "2020-07-29T06:24:01.657",
          "accountName": "Blue Dog Barcelona, SA",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Regional Concentration",
          "specialInstructions": "this is a random instructions, for testing purposes",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "8769f46c-196f-41b5-84e0-ca1f136a3678"
          },
          "duplicateBankStatementAddress": {
              "id": "7ad89abc-5348-456f-b7f0-b640d0f2d6b0"
          },
          "balances": [
              {
                  "id": "2fcff107-d425-4c50-8411-a4cc2de4ed77",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10013.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "160315"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "9009997363"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "160315"
              ],
              "ACCNUM": [
                  "9009997363"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "9009997363",
          "institution": {
              "id": "29b14325-93c3-4ec6-b199-c88736864339",
              "href": "https://web/scc/api/financialinstitutions/29b14325-93c3-4ec6-b199-c88736864339",
              "description": "Deutesche Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.483"
          },
          "location": {
              "id": "4dba83d1-4e5e-4a96-ba97-0e8c8173bc79",
              "href": "https://web/scc/api/financialinstitutionlocations/4dba83d1-4e5e-4a96-ba97-0e8c8173bc79",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "c18c8811-4440-46a5-9818-a494501002d1",
              "href": "https://web/scc/api/internalentities/c18c8811-4440-46a5-9818-a494501002d1",
              "description": "Blue Dog Barcelona, SA",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.7"
          },
          "businessUnit": {
              "id": "a79c386e-7bda-4839-aed8-144434f32e62",
              "href": "https://web/scc/api/businessunits/a79c386e-7bda-4839-aed8-144434f32e62",
              "description": "Green Cat - Television",
              "type": "businessunit",
              "externalId": "f111d7b1-5877-4a3f-aa86-d22b06d05c43",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.447"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/05c8f6aa-b882-4259-9dac-2ccefdc4c0c5",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "05c8f6aa-b882-4259-9dac-2ccefdc4c0c5",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:46:06.92",
          "createdAt": "2020-07-29T06:42:22.097",
          "accountName": "LevelFourAccountOne",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "884c111f-4d43-4937-923e-10f41c4c9cea"
          },
          "duplicateBankStatementAddress": {
              "id": "11a118ac-f40f-498c-b60b-d26879cec109"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "TEMP-ACCNUM-1596004942123"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "TEMP-ACCNUM-1596004942123"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "TEMP-ACCNUM-1596004942123",
          "institution": {
              "id": "full-fi-unicode-1",
              "href": "https://web/scc/api/financialinstitutions/full-fi-unicode-1",
              "description": "Full FI ŞŞ",
              "type": "financialinstitution",
              "externalId": "full-fi-ext-ŞŞ",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.543"
          },
          "location": {
              "id": "65c5afed-af3f-4329-8c2a-df4684e82a1a",
              "href": "https://web/scc/api/financialinstitutionlocations/65c5afed-af3f-4329-8c2a-df4684e82a1a",
              "description": "Main Office 天空",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "40920f15-fa69-4458-8a5a-77ec53e3c706",
              "href": "https://web/scc/api/internalentities/40920f15-fa69-4458-8a5a-77ec53e3c706",
              "description": "BD Singapore LTD",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.997"
          },
          "businessUnit": {
              "id": "a79c386e-7bda-4839-aed8-144434f32e62",
              "href": "https://web/scc/api/businessunits/a79c386e-7bda-4839-aed8-144434f32e62",
              "description": "Green Cat - Television",
              "type": "businessunit",
              "externalId": "f111d7b1-5877-4a3f-aa86-d22b06d05c43",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.447"
          },
          "requestedOpened": "2020-07-29T06:45:00",
          "additionalProperties": [
              {
                  "id": "cd542da5-e11f-4701-b609-7208db4146b9",
                  "name": "AccPropertyName4"
              },
              {
                  "id": "7ac41274-8017-4114-9ff3-9598f319220c",
                  "name": "AccPropertyName2",
                  "value": "false"
              },
              {
                  "id": "dd30c47a-882a-4293-82fd-d1fde4311148",
                  "name": "AccPropertyName3"
              },
              {
                  "id": "3f588c9a-856d-47f6-915b-13684679fbb7",
                  "name": "AccPropertyName1"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/123",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "123",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:04.993",
          "createdAt": "2020-07-29T06:24:01.65",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Payroll",
          "specialInstructions": "this is a random instructions, for testing purposes",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "f7179abf-5fb9-40e8-b8dc-cb103b55b691"
          },
          "duplicateBankStatementAddress": {
              "id": "d0749773-af4e-4f29-87c2-99ffc6c57693"
          },
          "balances": [
              {
                  "id": "e1232a63-be4c-4b19-a05c-98d0e44bc7f7",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 600.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "160024"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "900009310"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "160024"
              ],
              "ACCNUM": [
                  "900009310"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "900009310",
          "institution": {
              "id": "933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "href": "https://web/scc/api/financialinstitutions/933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "description": "Citibank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.603"
          },
          "location": {
              "id": "d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "href": "https://web/scc/api/financialinstitutionlocations/d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "businessUnit": {
              "id": "c38bd23f-0a38-41a4-b691-b778b92512b7",
              "href": "https://web/scc/api/businessunits/c38bd23f-0a38-41a4-b691-b778b92512b7",
              "description": "Green Cat - Health Care",
              "type": "businessunit",
              "externalId": "504468a1-2875-4747-b1a3-a99225a76943",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.477"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ],
          "additionalProperties": [
              {
                  "id": "146aa719-02a8-4018-a1ae-370ccd71269f",
                  "name": "AccPropertyName1",
                  "value": "USD"
              },
              {
                  "id": "40072db2-a79b-4fb2-8941-fc0c42ed87b1",
                  "name": "AccPropertyName4",
                  "value": "August 05, 2016"
              },
              {
                  "id": "be9e67e0-45be-4711-8e45-e3d1b04b50c1",
                  "name": "AccPropertyName2",
                  "value": "true"
              },
              {
                  "id": "701d26f9-7782-47d5-a6ea-6567aeacf4d6",
                  "name": "AccPropertyName3",
                  "value": "my property value"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/5265294c-977c-4213-b5b9-5303e4b5a94e",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "5265294c-977c-4213-b5b9-5303e4b5a94e",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.17",
          "createdAt": "2020-07-29T06:24:01.663",
          "accountName": "AN-Unknown-2",
          "currency": "USD",
          "accountType": "48d8f38c-d701-461f-89fc-480b74de6663",
          "accountTypeValue": "Software",
          "accountTypeDescription": "Software",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "abceab3f-89a2-4fc6-bc1c-42366957999d"
          },
          "duplicateBankStatementAddress": {
              "id": "cebfb3f5-143f-48cb-8ab2-f721dbb2c569"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Unknown-2"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Unknown-2"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Unknown-2",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "915a4fb6-988e-45f3-9cde-9c95b8cb9f63",
              "href": "https://web/scc/api/internalentities/915a4fb6-988e-45f3-9cde-9c95b8cb9f63",
              "description": "Blue Dog FBAR - N/A Unknown",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.763"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/615b2e7e-2bf7-469a-8a8a-9cbc9189c5b9",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "615b2e7e-2bf7-469a-8a8a-9cbc9189c5b9",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T07:06:21.19",
          "createdAt": "2020-07-29T07:05:04.657",
          "accountName": "LevelTwoAccountTwo",
          "currency": "USD",
          "accountType": "d941897b-e3f7-446b-8fb6-363bad861d97",
          "accountTypeValue": "CASH",
          "accountTypeDescription": "Account used for the payment of cash",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "891369b1-5f31-42e6-ad38-47584568eeae"
          },
          "duplicateBankStatementAddress": {
              "id": "548a6254-8a7b-4a12-bc18-a7892fa80242"
          },
          "sweeps": [
              {
                  "id": "f6803662-2be4-4031-bf01-44cdf25ba2f6",
                  "sweepAccount": {
                      "id": "4c9a1548-5dfc-4132-9e2a-64a92bc43f63",
                      "href": "https://web/scc/api/accounts/4c9a1548-5dfc-4132-9e2a-64a92bc43f63",
                      "description": "TEMP-ACCNUM-1596006072995",
                      "type": "account",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T07:02:14.44"
                  },
                  "accountType": "8765033f-535e-4bed-89a0-de06b71ea64f",
                  "goLiveDate": "2020-07-27",
                  "sweepAccountId": "4c9a1548-5dfc-4132-9e2a-64a92bc43f63",
                  "status": "ACTIVE"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "TEMP-ACCNUM-1596006304689"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "TEMP-ACCNUM-1596006304689"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "TEMP-ACCNUM-1596006304689",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "c18c8811-4440-46a5-9818-a494501002d1",
              "href": "https://web/scc/api/internalentities/c18c8811-4440-46a5-9818-a494501002d1",
              "description": "Blue Dog Barcelona, SA",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.7"
          },
          "requestedOpened": "2020-07-29T07:06:00",
          "additionalProperties": [
              {
                  "id": "62429de2-aa88-4c32-90ae-9b8e850b5b43",
                  "name": "AccPropertyName2",
                  "value": "false"
              },
              {
                  "id": "26b519b7-d753-4a77-8f2f-ad1e8c9631ff",
                  "name": "AccPropertyName1"
              },
              {
                  "id": "6c9ee48e-413f-46a8-987e-290ef9f2512e",
                  "name": "AccPropertyName3"
              },
              {
                  "id": "a47c167f-d8d0-4806-8e43-f3af681d9015",
                  "name": "AccPropertyName4"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/8fa6b62b-9838-41be-8adb-1a3426b62667",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "8fa6b62b-9838-41be-8adb-1a3426b62667",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T07:19:55.723",
          "createdAt": "2020-07-29T07:07:49.873",
          "accountName": "LevelOneAccountOne",
          "currency": "USD",
          "accountType": "d941897b-e3f7-446b-8fb6-363bad861d97",
          "accountTypeValue": "CASH",
          "accountTypeDescription": "Account used for the payment of cash",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "d8916cba-ab8a-4a02-b152-139cce0baea3"
          },
          "duplicateBankStatementAddress": {
              "id": "7ca06fea-dd96-4e0e-aa32-c7b95f5ffaa9"
          },
          "sweeps": [
              {
                  "id": "5ca920cf-208b-40fc-9453-050c2279de57",
                  "sweepAccount": {
                      "id": "31a5f97a-ffb6-4982-b5b0-f1198062d1cb",
                      "href": "https://web/scc/api/accounts/31a5f97a-ffb6-4982-b5b0-f1198062d1cb",
                      "description": "TEMP-ACCNUM-1596006236426",
                      "type": "account",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T07:06:10.153"
                  },
                  "goLiveDate": "2020-07-27",
                  "sweepAccountId": "31a5f97a-ffb6-4982-b5b0-f1198062d1cb",
                  "status": "ACTIVE"
              },
              {
                  "id": "cd49c990-b88e-4ebb-ae4a-92aed1ff7985",
                  "sweepAccount": {
                      "id": "615b2e7e-2bf7-469a-8a8a-9cbc9189c5b9",
                      "href": "https://web/scc/api/accounts/615b2e7e-2bf7-469a-8a8a-9cbc9189c5b9",
                      "description": "TEMP-ACCNUM-1596006304689",
                      "type": "account",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T07:06:21.19"
                  },
                  "goLiveDate": "2020-07-27",
                  "sweepAccountId": "615b2e7e-2bf7-469a-8a8a-9cbc9189c5b9",
                  "status": "ACTIVE"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "TEMP-ACCNUM-1596006469913"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "TEMP-ACCNUM-1596006469913"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "TEMP-ACCNUM-1596006469913",
          "institution": {
              "id": "29b14325-93c3-4ec6-b199-c88736864339",
              "href": "https://web/scc/api/financialinstitutions/29b14325-93c3-4ec6-b199-c88736864339",
              "description": "Deutesche Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.483"
          },
          "location": {
              "id": "4dba83d1-4e5e-4a96-ba97-0e8c8173bc79",
              "href": "https://web/scc/api/financialinstitutionlocations/4dba83d1-4e5e-4a96-ba97-0e8c8173bc79",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "c18c8811-4440-46a5-9818-a494501002d1",
              "href": "https://web/scc/api/internalentities/c18c8811-4440-46a5-9818-a494501002d1",
              "description": "Blue Dog Barcelona, SA",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.7"
          },
          "requestedOpened": "2020-07-29T07:08:00",
          "requestedEdited": "2020-07-29T07:17:00",
          "additionalProperties": [
              {
                  "id": "5ff5237a-71ff-4055-894f-0d457e3b0b02",
                  "name": "AccPropertyName2",
                  "value": "false"
              },
              {
                  "id": "ba413d7e-4ff6-482a-b581-52c59d1fd5ca",
                  "name": "AccPropertyName1"
              },
              {
                  "id": "31a62fd5-b826-495d-879e-bbd36db46f6b",
                  "name": "AccPropertyName3"
              },
              {
                  "id": "1ae8b9fc-1ff8-4451-9fd7-8fe20aeff74e",
                  "name": "AccPropertyName4"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/13fdfaf2-0dd0-47cf-b4f1-67cecd376f8d",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "13fdfaf2-0dd0-47cf-b4f1-67cecd376f8d",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.617",
          "createdAt": "2020-07-29T06:24:01.663",
          "accountName": "AN-Unknown-1",
          "currency": "USD",
          "accountType": "48d8f38c-d701-461f-89fc-480b74de6663",
          "accountTypeValue": "Software",
          "accountTypeDescription": "Software",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "a92ae01a-0146-4b89-9bce-b9d14111b568"
          },
          "duplicateBankStatementAddress": {
              "id": "acf9dd23-4237-4333-92d6-7d267187ad4b"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Unknown-1"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Unknown-1"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Unknown-1",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "915a4fb6-988e-45f3-9cde-9c95b8cb9f63",
              "href": "https://web/scc/api/internalentities/915a4fb6-988e-45f3-9cde-9c95b8cb9f63",
              "description": "Blue Dog FBAR - N/A Unknown",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.763"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/aa05b609-cae5-468b-9857-66c238385a62",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "aa05b609-cae5-468b-9857-66c238385a62",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.577",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Cool-2",
          "currency": "USD",
          "accountType": "b3aeeda4-fce7-4a9a-a2ca-42c182146c4c",
          "accountTypeValue": "Concentration",
          "accountTypeDescription": "Concentration",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "2fa48b19-3490-4632-917b-534c9ba8694d"
          },
          "duplicateBankStatementAddress": {
              "id": "bb743328-fea6-47cf-a653-f0af5aa6c88d"
          },
          "balances": [
              {
                  "id": "3a4bb8f1-14c6-49af-a801-951a98322655",
                  "balanceDate": "2013-12-31",
                  "bankAmount": 10000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "3f764ea8-04dc-4244-aa3f-22ae79ac845a",
                  "balanceDate": "2014-05-01",
                  "bankAmount": 10000.010,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "5d38be00-0f6e-4bfd-b43c-c91aee7ad982",
                  "balanceDate": "2013-07-01",
                  "bankAmount": 2000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "6cfe3875-91f5-409f-9a36-9a429835e4a4",
                  "balanceDate": "2013-01-01",
                  "bankAmount": 1000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "722b567c-9a90-4276-89df-7391232d74a8",
                  "balanceDate": "2014-03-01",
                  "bankAmount": 4000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "adb3cda2-6719-4229-b991-77e50be17d5a",
                  "balanceDate": "2014-01-01",
                  "bankAmount": 3000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Cool-2"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Cool-2"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Cool-2",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "00f79a5e-7899-40ce-90a8-f39c190e33c4",
              "href": "https://web/scc/api/internalentities/00f79a5e-7899-40ce-90a8-f39c190e33c4",
              "description": "Blue Dog FBAR - Elwin Cool",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.553"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/0db3791b-ddd3-4eed-9ace-9a558f975318",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "0db3791b-ddd3-4eed-9ace-9a558f975318",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.347",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Elder-3",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "e63cf374-4c0f-40bd-959a-c2881010bdd5"
          },
          "duplicateBankStatementAddress": {
              "id": "00bf3aa0-fbe6-4abc-bb11-4c79e2ba6c94"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Elder-3"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Elder-3"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Elder-3",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "ec8adab7-881e-4e5d-8b5c-93f0a0f622c5",
              "href": "https://web/scc/api/internalentities/ec8adab7-881e-4e5d-8b5c-93f0a0f622c5",
              "description": "Blue Dog FBAR - Trista Elder GT 50",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.787"
          },
          "opened": "2010-01-01T00:00:00",
          "accountReportingGroup": [
              "Bluedog United Kingdom",
              "Bluedog North America"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/961d5db2-db18-49b1-aaf7-ff8bda00b963",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "961d5db2-db18-49b1-aaf7-ff8bda00b963",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.497",
          "createdAt": "2020-07-29T06:24:01.657",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "6fbd3f2e-2c89-4731-9031-5f103589fb81"
          },
          "duplicateBankStatementAddress": {
              "id": "de357ae0-aacc-471b-9b6d-d8fe19a29cf9"
          },
          "balances": [
              {
                  "id": "9a672f60-ac06-43c9-a645-01d2a938f97e",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 1001100.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "161180"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "800043307"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "161180"
              ],
              "ACCNUM": [
                  "800043307"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "800043307",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "businessUnit": {
              "id": "a79c386e-7bda-4839-aed8-144434f32e62",
              "href": "https://web/scc/api/businessunits/a79c386e-7bda-4839-aed8-144434f32e62",
              "description": "Green Cat - Television",
              "type": "businessunit",
              "externalId": "f111d7b1-5877-4a3f-aa86-d22b06d05c43",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.447"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/1999061a-92c8-4fe2-98dc-b0d5a9e1247e",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "1999061a-92c8-4fe2-98dc-b0d5a9e1247e",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:06.213",
          "createdAt": "2020-07-29T06:24:01.653",
          "accountName": "Blue Dog Capital Holdings Limited",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "a493005d-688b-4999-98da-8eca94022983"
          },
          "duplicateBankStatementAddress": {
              "id": "90d6f431-fb38-424c-a24a-d24ec6799ec1"
          },
          "balances": [
              {
                  "id": "a5d4bce3-fbff-47ed-8804-f04739646dfc",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 57823.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "160123"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "90029205"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "160123"
              ],
              "ACCNUM": [
                  "90029205"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "90029205",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "a97abb5f-79f8-4d18-b1dc-77ffcf274354",
              "href": "https://web/scc/api/internalentities/a97abb5f-79f8-4d18-b1dc-77ffcf274354",
              "description": "Blue Dog Capital Holdings Limited",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.947"
          },
          "businessUnit": {
              "id": "5963122b-4408-40f4-8784-27d2197acb06",
              "href": "https://web/scc/api/businessunits/5963122b-4408-40f4-8784-27d2197acb06",
              "description": "Green Cat - Aerospace",
              "type": "businessunit",
              "externalId": "a2c655e4-87d1-4241-b12b-00596a7a5ba7",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.61"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Commodity",
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/648dc121-6dd2-4068-9171-3bb677bd1ab0",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "648dc121-6dd2-4068-9171-3bb677bd1ab0",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.997",
          "createdAt": "2020-07-29T06:24:01.657",
          "accountName": "BD Singapore LTD",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "specialInstructions": "this is a random instructions, for testing purposes",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "affd2658-79b2-45f8-a140-5eb355288deb"
          },
          "duplicateBankStatementAddress": {
              "id": "3226617c-f9b6-453e-a1e4-e4f1fffc619e"
          },
          "balances": [
              {
                  "id": "5c97a1cd-7492-4027-9bff-fa41e0b1b989",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10009.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "160058"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "90022597"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "160058"
              ],
              "ACCNUM": [
                  "90022597"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "90022597",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "40920f15-fa69-4458-8a5a-77ec53e3c706",
              "href": "https://web/scc/api/internalentities/40920f15-fa69-4458-8a5a-77ec53e3c706",
              "description": "BD Singapore LTD",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.997"
          },
          "businessUnit": {
              "id": "a79c386e-7bda-4839-aed8-144434f32e62",
              "href": "https://web/scc/api/businessunits/a79c386e-7bda-4839-aed8-144434f32e62",
              "description": "Green Cat - Television",
              "type": "businessunit",
              "externalId": "f111d7b1-5877-4a3f-aa86-d22b06d05c43",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.447"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/1f3a25e2-6689-4417-9b3e-6620aee09914",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "1f3a25e2-6689-4417-9b3e-6620aee09914",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.893",
          "createdAt": "2020-07-29T06:24:01.663",
          "accountName": "AN-Chapple-1",
          "currency": "USD",
          "accountType": "b809e5e2-6c24-43b0-8477-0d338f0c2262",
          "accountTypeValue": "Payroll",
          "accountTypeDescription": "Payroll",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "d51ad757-9adb-4351-bd2d-a89882bb7da8"
          },
          "duplicateBankStatementAddress": {
              "id": "76e7b056-8f70-4d30-a397-fc91fcbaa5a6"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Chapple-1"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Chapple-1"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Chapple-1",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "6f8f4a44-0f91-4289-ab6d-5900464b8f65",
              "href": "https://web/scc/api/internalentities/6f8f4a44-0f91-4289-ab6d-5900464b8f65",
              "description": "Blue Dog FBAR - Vilhelmina Chapple",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.81"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/5b2a3cdb-b531-44c5-9940-b0960afcdf33",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "5b2a3cdb-b531-44c5-9940-b0960afcdf33",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.46",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Elder-1",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "6a210f8b-9b31-460c-b64b-dd320ad5e2d9"
          },
          "duplicateBankStatementAddress": {
              "id": "825247d6-3a1a-400f-83a6-faa010c8f850"
          },
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Elder-1"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Elder-1"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Elder-1",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "21eefb2f-9c07-42cf-b6d2-f1fb4f7a0090",
              "href": "https://web/scc/api/internalentities/21eefb2f-9c07-42cf-b6d2-f1fb4f7a0090",
              "description": "Blue Dog FBAR - Trista Elder LT 50",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.607"
          },
          "opened": "2010-01-01T00:00:00",
          "accountReportingGroup": [
              "Bluedog United Kingdom",
              "Bluedog North America"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/35489236-7a52-4bea-81a9-6d12cc946186",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "35489236-7a52-4bea-81a9-6d12cc946186",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:04.95",
          "createdAt": "2020-07-29T06:24:01.653",
          "accountName": "Blue Dog Capital Holdings Limited",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "ba2932dd-804c-496f-8247-113ab4a0bcb6"
          },
          "duplicateBankStatementAddress": {
              "id": "8f4b696b-0701-4a42-8ab8-c8413414993e"
          },
          "balances": [
              {
                  "id": "32617904-8704-4248-91c7-db8e6c2c5fdf",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10008.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "160124"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "90029868"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "160124"
              ],
              "ACCNUM": [
                  "90029868"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "90029868",
          "institution": {
              "id": "d2581596-70f2-4163-a13c-be1001dd9beb",
              "href": "https://web/scc/api/financialinstitutions/d2581596-70f2-4163-a13c-be1001dd9beb",
              "description": "BNYMellon",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.447"
          },
          "location": {
              "id": "4037aeaf-e540-48d8-b186-36c50c88ab39",
              "href": "https://web/scc/api/financialinstitutionlocations/4037aeaf-e540-48d8-b186-36c50c88ab39",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "a97abb5f-79f8-4d18-b1dc-77ffcf274354",
              "href": "https://web/scc/api/internalentities/a97abb5f-79f8-4d18-b1dc-77ffcf274354",
              "description": "Blue Dog Capital Holdings Limited",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.947"
          },
          "businessUnit": {
              "id": "0ded4c0f-1e14-4467-9748-15ee7883f6e3",
              "href": "https://web/scc/api/businessunits/0ded4c0f-1e14-4467-9748-15ee7883f6e3",
              "description": "Green Cat - Oil",
              "type": "businessunit",
              "externalId": "98c842fc-d874-48bb-9caa-21622d6b6074",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:30.73"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/e327f2b5-e018-40bb-a2cf-6a080aa9e606",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "e327f2b5-e018-40bb-a2cf-6a080aa9e606",
          "status": "PENDING_EDIT",
          "lastModifiedAt": "2020-07-29T07:23:44.847",
          "createdAt": "2020-07-29T06:59:49.107",
          "accountName": "LevelThreeAccountTwo",
          "currency": "USD",
          "accountType": "d941897b-e3f7-446b-8fb6-363bad861d97",
          "accountTypeValue": "CASH",
          "accountTypeDescription": "Account used for the payment of cash",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "7a0d59f5-c018-4f5b-a001-654e60a244ab"
          },
          "duplicateBankStatementAddress": {
              "id": "882c03bc-0d44-4b48-bf5b-79eead0f370a"
          },
          "sweeps": [
              {
                  "id": "891367b5-efb7-4196-9a18-04d4c1908393",
                  "sweepAccount": {
                      "id": "4113d792-f750-4a3a-8aef-25dfb55cede5",
                      "href": "https://web/scc/api/accounts/4113d792-f750-4a3a-8aef-25dfb55cede5",
                      "description": "TEMP-ACCNUM-1596004981552",
                      "type": "account",
                      "status": "ACTIVE",
                      "lastModifiedAt": "2020-07-29T06:49:50.68"
                  },
                  "accountType": "8765033f-535e-4bed-89a0-de06b71ea64f",
                  "goLiveDate": "2020-07-27",
                  "sweepAccountId": "4113d792-f750-4a3a-8aef-25dfb55cede5",
                  "status": "ACTIVE"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "TEMP-ACCNUM-1596005989143"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "TEMP-ACCNUM-1596005989143"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "TEMP-ACCNUM-1596005989143",
          "institution": {
              "id": "933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "href": "https://web/scc/api/financialinstitutions/933a77c3-edf6-4c13-8666-3afcf653e9cf",
              "description": "Citibank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.603"
          },
          "location": {
              "id": "d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "href": "https://web/scc/api/financialinstitutionlocations/d91cb1e9-a5e2-4889-905d-b7fd37134efc",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "c18c8811-4440-46a5-9818-a494501002d1",
              "href": "https://web/scc/api/internalentities/c18c8811-4440-46a5-9818-a494501002d1",
              "description": "Blue Dog Barcelona, SA",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.7"
          },
          "requestedOpened": "2020-07-29T07:02:00",
          "requestedEdited": "2020-07-29T07:23:00",
          "additionalProperties": [
              {
                  "id": "5648ff8f-27e3-4139-94cf-24eef29812ba",
                  "name": "AccPropertyName4"
              },
              {
                  "id": "8003ff84-487b-47ff-9d0b-b9c74be7c63a",
                  "name": "AccPropertyName1"
              },
              {
                  "id": "9f592040-f7df-4256-ac95-e56090f15240",
                  "name": "AccPropertyName2",
                  "value": "false"
              },
              {
                  "id": "4381be09-2d68-4a93-b4a5-b8b657c6452b",
                  "name": "AccPropertyName3"
              }
          ]
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/80993087-246f-4184-8935-07d3096a7bf3",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "80993087-246f-4184-8935-07d3096a7bf3",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.127",
          "createdAt": "2020-07-29T06:24:01.66",
          "accountName": "AN-Renjifo-1",
          "currency": "USD",
          "accountType": "27818ecd-1d98-47b1-9106-332917927972",
          "accountTypeValue": "FX",
          "accountTypeDescription": "FX",
          "purpose": "Concentration",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "dfca69ca-cf81-4ab8-9ceb-f2767cca0a63"
          },
          "duplicateBankStatementAddress": {
              "id": "e1fd6782-7bee-4685-989d-a7c2206e831e"
          },
          "balances": [
              {
                  "id": "10b1e84c-de2d-454b-afa2-5a8307a39072",
                  "balanceDate": "2013-01-01",
                  "bankAmount": 22013.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "3b3f3758-aff1-4e4e-927b-6e94183d2b91",
                  "balanceDate": "2014-05-01",
                  "bankAmount": 2000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "4fe7ad76-e195-489b-bf5f-7c72eea0cc56",
                  "balanceDate": "2014-03-01",
                  "bankAmount": 15000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "54c60874-b952-4a7a-8acc-ba92f6afa03d",
                  "balanceDate": "2013-07-01",
                  "bankAmount": 15000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "c43c7af5-40ca-4511-aa90-b0093e6eeb82",
                  "balanceDate": "2013-12-31",
                  "bankAmount": 2000.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              },
              {
                  "id": "c614b4f4-9ec7-4750-a77d-25a49702ac79",
                  "balanceDate": "2014-01-01",
                  "bankAmount": 22014.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "AN-Renjifo-1"
              ]
          },
          "identifierValues": {
              "ACCNUM": [
                  "AN-Renjifo-1"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "AN-Renjifo-1",
          "institution": {
              "id": "ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "href": "https://web/scc/api/financialinstitutions/ecbf7c43-6e65-4575-a116-65d8c186bca1",
              "description": "Blue Dog FBAR Bank",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:56.81"
          },
          "location": {
              "id": "5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "href": "https://web/scc/api/financialinstitutionlocations/5ae484a5-246a-497c-96ed-bcc8d54eafcc",
              "description": "Foreign Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "32386400-e279-4f7c-a5a9-3800722ee27f",
              "href": "https://web/scc/api/internalentities/32386400-e279-4f7c-a5a9-3800722ee27f",
              "description": "Blue Dog FBAR - Mikol Renjifo",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.62"
          },
          "opened": "2010-01-01T00:00:00"
      }
  },
  {
      "self": {
          "href": "https://web/scc/api/accounts/5c5ab890-3845-4d47-8939-3c44c3ad8907",
          "customer": "bluedog",
          "metaInfo": "application/json; version=1; ION Group IBAM, 2019",
          "asOfDateTime": "2020-07-29T15:53:52.81"
      },
      "account": {
          "id": "5c5ab890-3845-4d47-8939-3c44c3ad8907",
          "status": "ACTIVE",
          "lastModifiedAt": "2020-07-29T06:24:05.533",
          "createdAt": "2020-07-29T06:24:01.657",
          "accountName": "Blue Dog Corporation",
          "currency": "USD",
          "accountType": "d90250c0-c2d1-4913-bcba-64b92453f723",
          "accountTypeValue": "CACC",
          "accountTypeDescription": "Account used to post debits and credits when no specific account has been nominated",
          "purpose": "Controlled Disbursement",
          "intradayReporting": false,
          "ebankingLinkage": false,
          "nonSweep": false,
          "internal": false,
          "replicateToTMS": true,
          "primaryBankStatementAddress": {
              "id": "d2ecac35-ad4e-4ebd-aea6-8595a325c1a8"
          },
          "duplicateBankStatementAddress": {
              "id": "596ee8cf-3978-4ab2-90e8-74f443a66800"
          },
          "balances": [
              {
                  "id": "82a156b4-23b1-4e27-9c14-b91bb023463e",
                  "balanceDate": "2010-01-01",
                  "bankAmount": 10012.000,
                  "glAmount": 0.000,
                  "bankCurrency": "USD",
                  "glCurrency": "USD"
              }
          ],
          "identifiers": {
              "8301d8ac-6d86-422c-ad13-002affc6f943": [
                  "163650"
              ],
              "c5832d3e-f570-4b4d-9f0d-8f7164e34b62": [
                  "9000144133"
              ]
          },
          "identifierValues": {
              "General Ledger Code": [
                  "163650"
              ],
              "ACCNUM": [
                  "9000144133"
              ]
          },
          "defaultIdentifierType": "c5832d3e-f570-4b4d-9f0d-8f7164e34b62",
          "defaultIdentifierTypeValue": "ACCNUM",
          "defaultIdentifierValue": "9000144133",
          "institution": {
              "id": "FI1",
              "href": "https://web/scc/api/financialinstitutions/FI1",
              "description": "Bank of America",
              "type": "financialinstitution",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:33.417"
          },
          "location": {
              "id": "2e482057-a042-4408-a5a3-d8254bf1acdf",
              "href": "https://web/scc/api/financialinstitutionlocations/2e482057-a042-4408-a5a3-d8254bf1acdf",
              "description": "Main Office",
              "type": "financialinstitutionlocation"
          },
          "owner": {
              "id": "d3491b08-2de4-4c21-a580-ffa069a5805a",
              "href": "https://web/scc/api/internalentities/d3491b08-2de4-4c21-a580-ffa069a5805a",
              "description": "Blue Dog Corporation",
              "type": "internalentity",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:58.877"
          },
          "reconciler": {
              "id": "0343a3f8-9965-4c83-8513-75f0857986fb",
              "href": "https://web/scc/api/people/0343a3f8-9965-4c83-8513-75f0857986fb",
              "description": "paula.reconciler@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:50.303"
          },
          "cashManager": {
              "id": "9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "href": "https://web/scc/api/people/9c4bc960-80f9-476e-a64c-c327d8a5b00e",
              "description": "thomas.cashman@protective.com",
              "type": "person",
              "status": "ACTIVE",
              "lastModifiedAt": "2020-07-29T06:23:49.417"
          },
          "opened": "2010-01-01T00:00:00",
          "accountKind": [
              "Cash"
          ]
      }
  }
]

var selectedAccountId = "8fa6b62b-9838-41be-8adb-1a3426b62667";

var accountRelationship = [];
var accountNumbers = [];
accountNumbers.push(selectedAccountId)

var parentAccountObject = accountData.filter((accountDetails) => {
  return accountDetails["account"]["id"] == currentSelectedAccount;
});

accountRelationship.push({
  accountId: selectedAccountId,
  parentId: "",
  account: parentAccountObject[0]
})

while(accountNumbers.length > 0) {
  var currentSelectedAccount = accountNumbers[0];
  accountNumbers.shift();


  var selectedAccountObject = accountData.filter((accountDetails) => {
      return accountDetails["account"]["id"] == currentSelectedAccount;
  });

  accountRelationship = accountRelationship.map(accountObject => {
      if(accountObject["accountId"] == currentSelectedAccount) {
          accountObject.account = selectedAccountObject;
      }
      return accountObject;
  })

  var sweepAccount = selectedAccountObject[0].account.sweeps;

  if(sweepAccount && sweepAccount.length) {
      console.log(sweepAccount.length)
      sweepAccount.map((sweepAccountDetails) => {
          accountRelationship.push({
              accountId: sweepAccountDetails["sweepAccountId"],
              parentId: currentSelectedAccount
          })

          accountNumbers.push(sweepAccountDetails["sweepAccountId"]);
      })
  }
}

var idMapping = accountRelationship.reduce((acc, el, i) => {
acc[el.accountId] = i;
return acc;
}, {});

let root;
accountRelationship.forEach(el => {
// Handle the root element
if (el.parentId === "") {
  root = el;
  return;
}
// Use our mapping to locate the parent element in our data array
var data = idMapping[el.parentId]
const parentEl = accountRelationship[data];
// Add our current el to its parent's `children` array
parentEl.children = [...(parentEl.children || []), el];
});

console.dir(root)


function drawChart() {

  var data = new google.visualization.DataTable();

  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');


  var tableData = [];

  accountRelationship.forEach((value) => {
    tableData.push([
      {
        'v': value.accountId,
        'f': `
          <div>
            <h3>${value.account[0]["account"]["accountName"]}</h3>
            <div style="font-style:italic">Group Rules: Group Rule</div>
            <div style="font-style:italic">Effective Date: October 06, 2019</div>
            <div style="font-style:italic">Purpose: Legal</div>
          <div>`
      }, value.parentId, ""
    ])
  })

  data.addRows(tableData)

  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));

  chart.draw(data, { 'allowHtml': true });

}