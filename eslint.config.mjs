import antfu from "@antfu/eslint-config";

export default antfu(
  {
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    rules: {
      "no-console": "off",
    },
  },
);
