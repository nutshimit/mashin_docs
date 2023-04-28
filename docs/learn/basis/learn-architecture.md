---
id: learn-architecture
title: Mashin Architecture
sidebar_label: Architecture
description: An explanation of Mashin Architecture .
keywords: [mashin, architecture, iac]
slug: ../learn-architecture
---

Mashin is designed with a modular architecture, consisting of several core components implemented as Rust crates. These components include:

- `mashin`: The main command-line interface (CLI) for executing the runtime. This component serves as the entry point for users interacting with the Mashin engine.
- `mashin_core`: Provides the core functionality for the Mashin engine, simplifying the runtime.
- `mashin_runtime`: Creates a new JavaScript runtime on top of deno-core, which is consumed by the mashin crate.
- `mashin_macro`: Automatically generates TypeScript bindings for Rust code, allowing the JavaScript engine to consume Rust functions and structures.
- `mashin_sdk`: Exposes macros and traits to streamline the process of building and shipping new providers for the Mashin engine.

Mashin's runtime is built on top of [deno-core](https://crates.io/crates/deno_core) and provides a fully isolated V8 JavaScript runtime environment. This sandboxed environment ensures that the code executed within the Mashin engine is secure and cannot access resources or data outside its designated scope.

One of the key features of Mashin's isolation mechanism is its fine-grained permission system. 

By default, the engine restricts access to all external resources, such as environment variables. To grant access to a specific resource, users must explicitly allow it using command-line flags. For example, to access an environment variable, the user must use the `--allow-env=VARIABLE_NAME` flag:

```bash
mashin run --allow-env=API_KEY https://mashin.land/test/create_namespace.ts
```

This permission system significantly reduces the risk of data leakage and ensures that the execution environment remains secure and controlled.

Additionally, it is worth noting that the V8 engine used in Mashin is **not linked to the Node.js ecosystem**. This design choice further enhances the isolation and security of the runtime environment, as it avoids potential vulnerabilities and dependencies associated with the Node.js ecosystem.
