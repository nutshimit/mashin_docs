---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
description: Get started with Mashin.
keywords: [introduction, getting started, what is mashin, why mashin]
slug: ../getting-started
---

:::info Welcome to the Mashin Wiki

The Mashin Wiki serves as the central source of truth for Mashin. 

The Wiki has two main sections: **Learn** (for learners) and **Build** (for people that want to build
providers).

:::

## What is Mashin?

In this section, we will introduce you to Mashin, an infrastructure-as-code engine designed to simplify the management of resources and providers. We will also guide you through the installation process, and provide an overview of what to expect from Mashin, as it is still in its alpha stage.

Mashin is an open-source project that allows you to manage your infrastructure components in a flexible and efficient way. It provides a powerful engine for managing resources and providers in the infrastructure-as-code domain. With Mashin, you can easily create, update, and delete resources, as well as integrate with various infrastructure components.

Mashin not only offers a powerful infrastructure-as-code engine, but it also supports remote modules and providers. This means that you can store your code in a Git repository or a private CDN, making it easily accessible and maintainable for your team. The Mashin engine then seamlessly consumes these remote modules and providers, providing a flexible and distributed approach to infrastructure management.

Just like Deno, Mashin enables you to import and use remote modules directly in your code without any additional configuration or setup. This empowers you to leverage the vast ecosystem of existing libraries and resources while maintaining the security and isolation provided by the V8 runtime.

In conclusion, with remote module and provider support, Mashin takes the convenience and flexibility of infrastructure management to the next level, offering an efficient and distributed solution for managing your infrastructure components, no matter where they reside.

### Key Features

- **Isolated V8 Runtime**: Mashin takes advantage of the Deno core to provide a secure and isolated V8 runtime. This ensures that your code runs in a controlled environment, free from external interference or security vulnerabilities.

- **TypeScript Support**: With built-in TypeScript support, Mashin makes it easy to work with typed resources and providers. You'll enjoy the benefits of autocompletion, type checking, and code navigation, without the need for any third-party tools or extensions.

- **Rust-based Providers**: All providers in Mashin, which expose different resources, are built using the Rust programming language. By leveraging Rust's powerful FFI capabilities, Mashin ensures that the providers are both efficient and reliable, resulting in a stable and high-performance infrastructure management experience.

- **Encrypted State**: Mashin always transits state in an encrypted form, ensuring that your infrastructure data remains secure and confidential throughout the entire management process.

- **Built-in JavaScript Capabilities**: The V8 engine in Mashin comes with a range of built-in JavaScript capabilities, such as fetch and crypto. This allows you to manage your infrastructure with familiar JavaScript features and libraries, making the development process more intuitive and enjoyable.

## Installation

To install Mashin, follow the steps below:

Shell (Mac, Linux)
```bash
curl -fsSL https://get.mashin.land | sh
```

## Alpha Stage

Mashin is currently in its alpha stage, which means that the project is still under active development and not yet feature-complete. As a result, you may encounter bugs or incomplete features. However, this also presents an excellent opportunity to contribute to the project and help shape its future. We encourage you to report any issues you encounter and consider contributing to the project as it grows and matures.
