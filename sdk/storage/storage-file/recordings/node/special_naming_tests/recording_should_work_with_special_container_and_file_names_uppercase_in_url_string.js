let nock = require('nock');

module.exports.testInfo = {"Upper file empty another":"Upper file empty another156599444398807275"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/1share-with-dash156599443605003202/dir156599443605100762/Upper%20file%20empty%20another156599444398807275')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 16 Aug 2019 22:27:24 GMT',
  'ETag',
  '"0x8D72298E96845C6"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '7835c520-301a-008c-1481-5437ca000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 16 Aug 2019 22:27:23 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/1share-with-dash156599443605003202/dir156599443605100762/Upper%20file%20empty%20another156599444398807275')
  .reply(200, "", [ 'Content-Length',
  '10',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Fri, 16 Aug 2019 22:27:24 GMT',
  'ETag',
  '"0x8D72298E96845C6"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'c8ffbecc-b01a-0073-3081-540a52000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Fri, 16 Aug 2019 22:27:24 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/1share-with-dash156599443605003202/dir156599443605100762')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"1share-with-dash156599443605003202\" DirectoryPath=\"dir156599443605100762\"><Prefix>Upper file empty another156599444398807275</Prefix><Entries><File><Name>Upper file empty another156599444398807275</Name><Properties><Content-Length>10</Content-Length></Properties></File></Entries><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'bf7034a6-f01a-0074-6781-54fcd7000000',
  'x-ms-version',
  '2018-11-09',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Fri, 16 Aug 2019 22:27:24 GMT',
  'Connection',
  'close' ]);

