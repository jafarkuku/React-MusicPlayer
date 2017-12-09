module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
      'jsx-a11y/no-noninteractive-element-interactions': [
        'error',
        {
          handlers: [
            'onMouseDown',
            'onMouseUp',
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
            'onClick',
          ],
        },
      ],
      'jsx-a11y/click-events-have-key-events': [
        'error', 'never'
      ],
      'jsx-a11y/interactive-supports-focus': [
        'error', 'never'
      ]
    }
};
