module.exports = {
  "extends": ["taro"],

  "plugins": ["prettier", "react"],

  "rules": {
    'prettier/prettier': 'warn', // 对于prettier报错进行warn提醒
    
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],

    "react/sort-comp": "off",

    "jsx-quotes": ["error", "prefer-double"], // jsx语法属性双引号

    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],

    'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时，可以省略参数的括号，否则error提示

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境中不允许使用debugger

    'no-console': 'off', // 允许使用console

    'react/jsx-no-target-blank': 'off', // a链接允许直接使用_blank

    'jsx-a11y/anchor-has-content': 'off',

    "react-hooks/rules-of-hooks": "error",

    "react-hooks/exhaustive-deps": "warn",

    'jsx-a11y/anchor-is-valid': 'off',

    'import/no-commonjs': 'off',

    'react/no-string-refs': 'off'
  },

  "parser": "babel-eslint",
}
