---
id: learn-state
title: Mashin State Engine
sidebar_label: State Engine
description: An explanation of Mashin State.
keywords: [mashin, state, iac]
slug: ../learn-state
---

Mashin manages the state of each resource to ensure consistency and reliability across the infrastructure. The state is a representation of the actual configuration and properties of a resource in the infrastructure, and it is stored in a secure, encrypted format.

Mashin includes a built-in local state storage, which stores the state information on the local filesystem. Additionally, the system supports a plugin architecture that allows you to add custom state engines built by the community. This flexibility enables you to store the state in your preferred storage solution, such as a remote database or cloud storage, while still maintaining the same state management features provided by Mashin.

The state always transits in an encrypted form, ensuring the security and privacy of your infrastructure information. Moreover, resources in Mashin only receive the state of their own specific resource. This means that a resource cannot access the state of other resources in the infrastructure, providing an additional layer of security and isolation.

The state management process in Mashin involves the following steps:

**State Initialization**: When a new resource is created, Mashin initializes its state and stores it securely.

**State Comparison**: During the Read and Update phases of the lifecycle, Mashin compares the stored state with the desired state and the actual state of the resource retrieved from the provider.

**State Update**: If changes are detected and applied during the Update phase, Mashin updates the stored state to reflect the new actual state of the resource.

**State Deletion**: When a resource is deleted, Mashin removes its associated state information.

In summary, resources are the fundamental building blocks of infrastructure management in Mashin. They provide a declarative, consistent, and secure way to manage the lifecycle and state of your infrastructure components. By leveraging the power of the Mashin engine, you can efficiently maintain and manage your infrastructure, keeping it in line with your desired configuration and requirements. The flexible state management system, along with encryption and resource isolation, further enhances the security and adaptability of your infrastructure management process.