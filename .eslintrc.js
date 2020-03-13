module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "globals": {
        "window": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],

    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "prettier"
    ],
    "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true }],
        "prettier/prettier": "error",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off"
    }
};
