module.exports = {
    "env": {
      "browser": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/anchor-is-valid": ["error", {
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }],
      "no-underscore-dangle": "off"
    },
  };
  