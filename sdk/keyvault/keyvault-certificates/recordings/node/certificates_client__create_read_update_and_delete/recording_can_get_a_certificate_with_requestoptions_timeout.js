let nock = require('nock');

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/recoverCertificateName-cangetacertificatewithrequestOptionstimeout-/create')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '9b07d468-043e-4c73-a4d1-ed884c97504e',
  'x-ms-keyvault-service-version',
  '1.1.0.891',
  'x-ms-keyvault-network-info',
  'addr=52.250.15.99;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 09 Jan 2020 20:19:39 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [
  'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'caf2821d-81b8-4743-ae16-4053c3c17b00',
  'x-ms-ests-server',
  '2.1.9898.10 - WST ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AsQowV3gzGJBpslq0kOgY04_aSJHAQAAANuBqdUOAAAA; expires=Sat, 08-Feb-2020 20:19:39 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; SameSite=None; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; SameSite=None; secure; HttpOnly',
  'Date',
  'Thu, 09 Jan 2020 20:19:39 GMT',
  'Content-Length',
  '1231'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/recoverCertificateName-cangetacertificatewithrequestOptionstimeout-/create', {"policy":{"key_props":{},"secret_props":{},"x509_props":{"subject":"cn=MyCert","sans":{}},"issuer":{"name":"Self"},"attributes":{}},"attributes":{}})
  .query(true)
  .reply(202, {"id":"https://keyvault_name.vault.azure.net/certificates/recoverCertificateName-cangetacertificatewithrequestOptionstimeout-/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnrZnXDnSYCRrLj7jLV+geHquHSnmulOH/JRMrcSxQztrroje7HxucQPyF/qDsmyh9U7WbAMU9hNQ99uMMKrbr5e5nm3ioQ2XIn3EcKQ0lWMsRKu0KujGdSO0ar19P7l5mfAyDhLKgtdsKDaejoUOK6EceI/eyNia7+Qh2RppbZ313LLnUvX2fWW937H9C4PN9URKO4HMu4CTBpGYHsKkK1JLU+5yewy0bPsSxjSEGuaUj1k7Rl4YbpVheKsAe/YxYz0Jhwnmt/ted2jIicwtGDT4FHBXKDMRRqrMAdFWDivyF1zt3KgxFaiXaeFoWHBZbq0igSJWsJdkkXJtAsVXxQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAJflzUuCzd2cz2+A8jLJ8XeLXfgZlKax3xzq/g9ZnV1Q6hXIci50ox6e4+vvg/Y0lcZylsy17VR2XjvpRv9krxDLnlcU3p+AvkoQTm7d9h7xffMkPF4/uJX5s+uzJUgZSEwRe+jzQztGBQ+8a6m3iUWhj84jdNqlmLcXduIH7dArTmA/aaUq7TreUg0eRoOJtlPpG4xE8Cg6jZvkeq1fxcdz5oGcapvslc/VOdgG0/uwbjs1jhXrtLHsjWvS+4eBT/MmMh85+htp3kj+Axpr0ZRTcY6Nor1x9DkLhjhzXqMyiFyd1q0EpvvHftG4k0H5bhGLuvYktp+TjXseGKFl3g4=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"3d210cb53784451c830b1ca5cb84dea4"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://keyvault_name.vault.azure.net/certificates/recoverCertificateName-cangetacertificatewithrequestOptionstimeout-/pending?api-version=7.0&request_id=3d210cb53784451c830b1ca5cb84dea4',
  'Retry-After',
  '10',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'ea2545d1-70b9-472f-beaf-0665257a94f2',
  'x-ms-keyvault-service-version',
  '1.1.0.891',
  'x-ms-keyvault-network-info',
  'addr=52.250.15.99;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 09 Jan 2020 20:19:40 GMT',
  'Content-Length',
  '1352'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/recoverCertificateName-cangetacertificatewithrequestOptionstimeout-/pending')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'a8eb41f5-a33b-41c6-981b-14987ec230f5',
  'x-ms-keyvault-service-version',
  '1.1.0.891',
  'x-ms-keyvault-network-info',
  'addr=52.250.15.99;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 09 Jan 2020 20:19:40 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [
  'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'ed24e773-b32d-40a8-a7e5-0d9452306300',
  'x-ms-ests-server',
  '2.1.9898.10 - WST ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AsQowV3gzGJBpslq0kOgY04_aSJHAgAAANuBqdUOAAAA; expires=Sat, 08-Feb-2020 20:19:40 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=prod; path=/; SameSite=None; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=ests; path=/; SameSite=None; secure; HttpOnly',
  'Date',
  'Thu, 09 Jan 2020 20:19:40 GMT',
  'Content-Length',
  '1231'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/recoverCertificateName-cangetacertificatewithrequestOptionstimeout-/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/recoverCertificateName-cangetacertificatewithrequestOptionstimeout-/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnrZnXDnSYCRrLj7jLV+geHquHSnmulOH/JRMrcSxQztrroje7HxucQPyF/qDsmyh9U7WbAMU9hNQ99uMMKrbr5e5nm3ioQ2XIn3EcKQ0lWMsRKu0KujGdSO0ar19P7l5mfAyDhLKgtdsKDaejoUOK6EceI/eyNia7+Qh2RppbZ313LLnUvX2fWW937H9C4PN9URKO4HMu4CTBpGYHsKkK1JLU+5yewy0bPsSxjSEGuaUj1k7Rl4YbpVheKsAe/YxYz0Jhwnmt/ted2jIicwtGDT4FHBXKDMRRqrMAdFWDivyF1zt3KgxFaiXaeFoWHBZbq0igSJWsJdkkXJtAsVXxQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBAJflzUuCzd2cz2+A8jLJ8XeLXfgZlKax3xzq/g9ZnV1Q6hXIci50ox6e4+vvg/Y0lcZylsy17VR2XjvpRv9krxDLnlcU3p+AvkoQTm7d9h7xffMkPF4/uJX5s+uzJUgZSEwRe+jzQztGBQ+8a6m3iUWhj84jdNqlmLcXduIH7dArTmA/aaUq7TreUg0eRoOJtlPpG4xE8Cg6jZvkeq1fxcdz5oGcapvslc/VOdgG0/uwbjs1jhXrtLHsjWvS+4eBT/MmMh85+htp3kj+Axpr0ZRTcY6Nor1x9DkLhjhzXqMyiFyd1q0EpvvHftG4k0H5bhGLuvYktp+TjXseGKFl3g4=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"3d210cb53784451c830b1ca5cb84dea4"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '10',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '769a5204-84b8-4804-a110-4aa496b2d770',
  'x-ms-keyvault-service-version',
  '1.1.0.891',
  'x-ms-keyvault-network-info',
  'addr=52.250.15.99;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 09 Jan 2020 20:19:40 GMT',
  'Content-Length',
  '1352'
]);
