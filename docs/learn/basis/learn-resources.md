---
id: learn-resources
title: Mashin Resource's
sidebar_label: Resources
description: An explanation of Mashin Resources.
keywords: [mashin, resources, iac]
slug: ../learn-resources
---

A resource in Mashin represents an individual infrastructure component, such as a virtual machine, a network, a database, or any other piece of your infrastructure. Resources form the backbone of Mashin's infrastructure management capabilities, allowing you to define, configure, and manage each component of your infrastructure in a declarative and organized manner.

Mashin supports the full CRUD lifecycle for resources, providing a consistent way to manage their creation, updates, and deletion. 

The CRUD lifecycle consists of the following steps:

**Create**: A new resource is instantiated and configured based on the desired state provided in the Mashin script. The Mashin engine communicates with the corresponding provider to create the infrastructure component and stores its state.

**Read**: Mashin reads the current state of the resource from the provider and compares it with the desired state defined in the script. This allows the engine to detect any drifts or discrepancies between the actual and desired states.

**Update**: If changes are detected between the desired and current state, Mashin will update the resource to match the desired state. The engine coordinates with the provider to apply the necessary changes to the infrastructure component and updates the stored state accordingly.

**Delete**: When a resource is removed from the Mashin script, the engine will initiate the deletion process. It communicates with the provider to remove the corresponding infrastructure component and cleans up any associated state information.

Habitually a resource is defined as follow:
```ts
new myProvider.MyResource(
   /// resource name (unique)
   "myresource", {
      /// resource configuration
      myKey: "hi",
  }, {
      /// provider configuration
      provider: provider,
  }
);
```