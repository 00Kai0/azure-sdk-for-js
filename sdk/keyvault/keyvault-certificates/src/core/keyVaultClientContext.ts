/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

const packageName = "@azure/keyvault-certificates";
const packageVersion = "4.0.0-preview.12";

export class KeyVaultClientContext extends coreHttp.ServiceClient {
  apiVersion: string;
  credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials;

  /**
   * Initializes a new instance of the KeyVaultClientContext class.
   * @param apiVersion Client API version.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    apiVersion: string,
    options?: coreHttp.ServiceClientOptions
  ) {
    if (apiVersion == undefined) {
      throw new Error("'apiVersion' cannot be null.");
    }
    if (credentials == undefined) {
      throw new Error("'credentials' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.baseUri = "{vaultBaseUrl}";
    this.requestContentType = "application/json; charset=utf-8";
    this.apiVersion = apiVersion;
    this.credentials = credentials;
  }
}
