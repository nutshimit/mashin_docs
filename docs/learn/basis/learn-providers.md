---
id: learn-providers
title: Mashin Provider's
sidebar_label: Providers
description: An explanation of Mashin Providers system .
keywords: [mashin, providers, iac]
slug: ../learn-providers
---

Providers in Mashin are similar to Terraform providers and are implemented as Rust plugins. 

These plugins extend the engine's functionality and allow it to interact with various infrastructure resources. Providers are compiled to _cdylib_, which enables dynamic library loading on different operating systems (such as `.dll` on Windows and `.so` on macOS/Linux).

Mashin leverages proc-macros and an embedded domain-specific language (eDSL) to simplify the development of providers. 

Developers can create a new provider by defining a rust library with the necessary structures and implementations, such as the provider configuration, state, and resource management functions.

Providers are automatically registered with the Mashin runtime when they are imported into the JavaScript engine. Mashin supports remote module loading out-of-the-box, similar to Deno's implementation. To register a new provider, developers can simply import the provider in their TypeScript or JavaScript code:

```ts
import * as myProvider from "https://mashin.land/myProvider/mod.ts";
```

This import statement downloads the appropriate dynamic library for the operating system and loads it into the Mashin engine. Afterward, the provider can be consumed using JavaScript or TypeScript code:

```ts
new myProvider.Provider(
   /// provider name
   "sample_provider_name", {
      /// provider configuration
      myKey: "hi",
   }
);
```

All types are generated from the Rust structures, ensuring that validation, autocompletion, and overall development experience are seamless and efficient.
