---
id: build-edit-provider
title: Edit Provider
sidebar_label: Edit Provider
description: How to customize a provider.
keywords: [build, how to build, develop, mashin]
slug: ../build-edit-provider
---

When customizing your provider, it's essential to know that the `version`, `name`, and `repository` are read from the `Cargo.toml` file, we'll cover it later.

These values are used to define the provider's name, version, and URL for distribution.

The primary configuration of the provider is done within the `construct_provider!` macro. It's highly recommended to refer to the [latest documentation](https://docs.rs/mashin_sdk/latest/mashin_sdk/macro.construct_provider.html) for the macro to ensure you are using it correctly.


In particular, pay attention to the resources configuration in the construct_provider! macro. This configuration is used to establish a clear link between the provider and its associated resources. 
