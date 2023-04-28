module.exports = {
  docs: [
    {
      type: "category",
      label: "General",
      items: ["general/getting-started", "general/faq"],
    },
    {
      type: "category",
      label: "Learn",
      items: [
        {
          type: "category",
          label: "Basis",
          items: [
            "learn/basis/learn-architecture",
            "learn/basis/learn-providers",
            "learn/basis/learn-resources",
            "learn/basis/learn-state",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Build",
      items: [
        "build/build-index",
        {
          type: "category",
          label: "Builders Starter's Guide",
          items: [
            "build/build-guide",
            "build/build-edit-provider",
            "build/build-edit-resource",
            "build/build-cdylib",
          ],
        },
      ],
    },
  ],
};
