/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Workspace: msRest.CompositeMapper = {
  serializedName: "Workspace",
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      ...Resource.type.modelProperties,
      userStorageAccountId: {
        required: true,
        serializedName: "properties.userStorageAccountId",
        type: {
          name: "String"
        }
      },
      ownerEmail: {
        serializedName: "properties.ownerEmail",
        type: {
          name: "String"
        }
      },
      workspaceType: {
        readOnly: true,
        serializedName: "properties.workspaceType",
        type: {
          name: "Enum",
          allowedValues: [
            "Production",
            "Free",
            "Anonymous",
            "PaidStandard",
            "PaidPremium"
          ]
        }
      },
      workspaceState: {
        readOnly: true,
        serializedName: "properties.workspaceState",
        type: {
          name: "Enum",
          allowedValues: [
            "Deleted",
            "Enabled",
            "Disabled",
            "Migrated",
            "Updated",
            "Registered",
            "Unregistered"
          ]
        }
      },
      workspaceId: {
        readOnly: true,
        serializedName: "properties.workspaceId",
        type: {
          name: "String"
        }
      },
      creationTime: {
        readOnly: true,
        serializedName: "properties.creationTime",
        type: {
          name: "String"
        }
      },
      studioEndpoint: {
        readOnly: true,
        serializedName: "properties.studioEndpoint",
        type: {
          name: "String"
        }
      },
      keyVaultIdentifierId: {
        serializedName: "properties.keyVaultIdentifierId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceUpdateParameters: msRest.CompositeMapper = {
  serializedName: "WorkspaceUpdateParameters",
  type: {
    name: "Composite",
    className: "WorkspaceUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      workspaceState: {
        serializedName: "properties.workspaceState",
        type: {
          name: "Enum",
          allowedValues: [
            "Deleted",
            "Enabled",
            "Disabled",
            "Migrated",
            "Updated",
            "Registered",
            "Unregistered"
          ]
        }
      },
      keyVaultIdentifierId: {
        serializedName: "properties.keyVaultIdentifierId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceKeysResponse: msRest.CompositeMapper = {
  serializedName: "WorkspaceKeysResponse",
  type: {
    name: "Composite",
    className: "WorkspaceKeysResponse",
    modelProperties: {
      primaryToken: {
        serializedName: "primaryToken",
        type: {
          name: "String"
        }
      },
      secondaryToken: {
        serializedName: "secondaryToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceListResult: msRest.CompositeMapper = {
  serializedName: "WorkspaceListResult",
  type: {
    name: "Composite",
    className: "WorkspaceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Workspace"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};