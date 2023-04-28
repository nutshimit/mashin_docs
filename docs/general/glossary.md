---
id: glossary
title: Glossary
sidebar_label: Glossary
description: Common terms and concepts you may come across in the Mashin ecosystem.
keywords: [glossary, questions, definitions]
slug: ../glossary
---

This glossary contains key terms and concepts related to the Mashin project. Use it as a quick reference when exploring Mashin's documentation and participating in community discussions. 

If you encounter any additional terms that warrant inclusion, please feel free to share your suggestions.

## Mashin 
An open-source infrastructure as code (IaC) engine designed to manage and provision resources across various cloud platforms, built using the Rust programming language.

## Provider
A Rust library (cdylib) that connects Mashin to external APIs, services, or platforms. Providers define resources and enable users to manage infrastructure components on their respective platforms.

## Resource
A Rust module that represents an individual infrastructure component, such as a virtual machine, storage bucket, or network. Resources are managed by providers and have a defined lifecycle (CRUD operations).

## URN
A Uniform Resource Name that uniquely identifies a resource within Mashin. URNs are used to reference resources and their states.

## MashinScript
A TypeScript-based scripting language used to write Mashin configuration files. MashinScript is used to define and configure resources, as well as specify provider settings.

## State
The state of a resource or provider represents the current configuration and status of the infrastructure component. State management in Mashin includes built-in local state storage and support for community-built state engines.

## Config 
A configuration struct that defines the schema for provider or resource configuration options. These options are exposed in MashinScript, enabling users to configure providers and resources with a strongly-typed and validated schema.

## Resource Lifecycle (CRUD)
The Create, Read, Update, and Delete operations that define a resource's lifecycle. These operations are implemented in the resource code to manage the infrastructure component throughout its lifecycle.

## Community
The group of developers, DevOps professionals, and enthusiasts who contribute to the Mashin project by submitting code, sharing ideas, and collaborating on improvements.
