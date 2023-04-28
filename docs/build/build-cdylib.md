---
id: build-cdylib
title: Build a Provider
sidebar_label: Build a Provider
description: How to build and consume a provider.
keywords: [build, how to build, develop, mashin]
slug: ../build-cdylib
---

Building a provider consists of compiling the Rust code into a cdylib and generating the corresponding TypeScript bindings. 

Here's a step-by-step guide on how to build your provider:

To compile your provider, navigate to the root of your project directory and run the following command:

```bash
cargo build --release
```

This command compiles your provider as a cdylib, creating a shared library in the `target/release` directory.

The [mashin_provider_starter](https://github.com/nutshimit/mashin_provider_starter/blob/dev/.github/workflows/build.yml) includes a sample GitHub Actions workflow that you can use as a reference to automate the build process.

Before you can use the provider in the Mashin environment, you need to generate the corresponding TypeScript bindings. First, install mashin_bindgen by running:

```bash
cargo install mashin_bindgen
```

Next, navigate to your project directory and generate the bindings using the following command:

```bash
mashin_bindgen ts ./bindings.json
```

You can customize the output directory of the generated bindings using the --out option:

```bash
mashin_bindgen ts ./bindings.json --out <output_directory>
```

Make sure the mashin_bindgen command successfully generates a `mod.ts` file. 
This file can be used within the Mashin engine with the following import statement:

```ts
import * as myProvider from "../mod.ts";
```

After generating the TypeScript bindings, you can publish your provider as a [release on GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).

:::warning 

Ensure that the repository field in your `Cargo.toml` file matches the URL of your GitHub repository, as this is used to determine the download URL for the provider library.
:::

By following these steps, you'll successfully build your provider and make it available for use in Mashin projects.
