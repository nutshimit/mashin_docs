---
id: build-edit-resource
title: Edit Resource
sidebar_label: Edit Resource
description: How to expose a resource.
keywords: [build, how to build, develop, mashin]
slug: ../build-edit-resource
---

To add a new resource to your provider, you'll need to create a Rust module for it and define the resource using the `mashin_sdk::resource` attribute. 

A resource includes a `Config` struct for configuration options, a `Resource` struct to represent the resource itself, and an implementation of the `mashin_sdk::Resource` trait for managing the resource's lifecycle.

The name should be concise, easy to understand, and reflect the purpose of the resource. Follow the guidelines below to ensure you select the appropriate name for your resource:

**Use snake_case**: In Rust, it is conventional to use snake_case (all lowercase letters separated by underscores) for naming modules. Stick to this convention when naming your resource.

**Be descriptive**: Choose a name that accurately reflects the purpose and functionality of the resource. It should provide a clear indication of what the resource does or represents.

**Keep it concise**: While being descriptive is important, avoid using overly long names. Aim for a balance between descriptiveness and brevity to ensure the name is easy to read and understand.

**Avoid using reserved words**: Make sure not to use any Rust reserved words or any words that could cause confusion with other parts of the Mashin ecosystem.

Here's an example of how to create a new resource:

```rust
#[mashin_sdk::resource]
pub mod my_new_resource {
   
   #[mashin::config]
   pub struct Config {}

   #[mashin::resource]
   pub struct Resource {}

   #[mashin::calls]
   impl mashin_sdk::Resource for Resource {
      async fn get(&mut self, _state: Arc<Mutex<ProviderState>>) -> Result<()> {
         // ... Implement the get function
      }

      async fn create(&mut self, _state: Arc<Mutex<ProviderState>>) -> Result<()> {
            // ... Implement the create function
      }

      async fn delete(&mut self, _state: Arc<Mutex<ProviderState>>) -> Result<()> {
            // ... Implement the delete function
      }

      async fn update(
            &mut self,
            _state: Arc<Mutex<ProviderState>>,
            _diff: &ResourceDiff,
        ) -> Result<()> {
            // ... Implement the update function
      }
    }
}
```

***

### #\[mashin::config\]
This attribute is used to generate the configuration schema for the resource. Similar to the provider config, the schema will be exposed in the Typescript environment, allowing users to configure the resource based on the struct defined by the developer. 

The Typescript bindings are automatically generated, and the resource config can be accessed within the CRUD operations using `self.config()`.

### #\[mashin::resource\]
This attribute is where the resource schema is defined. To avoid exporting specific fields to the Typescript environment, use the `#[sensitive]` attribute on those fields. 

As a result, sensitive data will only exist within the encrypted state and will not be accessible in the Typescript environment. 

Typescript bindings are automatically generated for all fields, excluding sensitive ones.

### #\[mashin::calls\]
This attribute is used to define the CRUD operations. Developers can implement the required methods for creating, reading, updating, and deleting resources.

### #\[mashin::ts\]
If an external struct is used within a resource or its configuration, this attribute can be added to generate bindings for that struct as well. 

This can be useful in various scenarios when additional structs are needed within the resource or configuration.