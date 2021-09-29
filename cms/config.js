module.exports = {
  // We want to manually init the config file
  cms_manual_init: true,

  // Backend configuration, in this case with git
  backend: {
    name: "git-gateway",
    branch: "master",
    squash_merges: true,
  },

  media_folder: "public/images",
  public_folder: "/images",
  publish_mode: "editorial_workflow",
  local_backend: true,

  i18n: {
    structure: "single_file",
    locales: ["en", "fr"],
    default_locale: "en",
  },

  // The Pages collection
  collections: [
    {
      name: "Pages",
      label: "Page",
      editor: { preview: false },
      label_singular: "Page",
      folder: "content/pages",
      create: true,
      slug: "{{slug}}",
      extension: "md",
      format: "yaml-frontmatter",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
          required: true,
        },
      ],
    },
  ],
};
