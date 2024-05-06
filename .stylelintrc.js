const getPropertyWithTRBL = (property) => {
  const rules = [];
  let prefix = '';

  if (property) {
    rules.push(property);
    prefix = property + '-';
  }

  return [...rules, prefix + 'top', prefix + 'right', prefix + 'bottom', prefix + 'left'];
};

const getPropertyWithMinMax = (property) => {
  const rules = [];
  let postfix = '';

  if (property) {
    rules.push(property);
    postfix = '-' + property;
  }

  return [...rules, 'min' + postfix, 'max' + postfix];
};

const getPropertyWithBorder = (infix) => {
  if (infix) {
    infix = '-' + infix;
  } else {
    infix = '';
  }

  return ['border' + infix, 'border' + infix + '-width', 'border' + infix + '-style', 'border' + infix + '-color'];
};

const resetProperties = ['all'];
const positionProperties = ['z-index', 'position', 'transform-origin', 'transform', ...getPropertyWithTRBL()];

const appearanceProperties = [
  'appearance',
  'visibility',
  'accent-color',
  'opacity',
  'object-fit',
  'object-position',
  'background',
  'background-color',
  'background-image',
  'background-repeat',
  'background-repeat-x',
  'background-repeat-y',
  'background-attachment',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-clip',
  'background-origin',
  'background-size',
  'background-blend-mode',
  'clip',
  'clip-path',
  'filter',
  'backdrop-filter',
  ...getPropertyWithBorder(),
  ...getPropertyWithBorder('top'),
  ...getPropertyWithBorder('right'),
  ...getPropertyWithBorder('bottom'),
  ...getPropertyWithBorder('left'),
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',
  'outline',
  'outline-color',
  'outline-style',
  'outline-width',
  'outline-offset',
  'box-shadow',
  'mix-blend-mode',
  'caret-color',
];

const typographyProperties = [
  'writing-mode',
  'font-family',
  'font-size',
  'font-feature-settings',
  'font-weight',
  'font-style',
  'font-display',
  'font-smoothing',
  'line-height',
  'color',
  'text-align',
  'text-overflow',
  'text-overflow-ellipsis',
  'text-shadow',
  'text-transform',
  'text-wrap',
  'letter-spacing',
  'word-break',
  'word-spacing',
  'word-wrap',
  'line-break',
  'white-space',
];

const displayElementProperties = [
  'box-sizing',
  ...getPropertyWithMinMax('height'),
  ...getPropertyWithMinMax('width'),
  ...getPropertyWithTRBL('margin'),
  ...getPropertyWithTRBL('padding'),
  'direction',
  'overflow',
  'overflow-x',
  'overflow-y',
  'display',
  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-gap',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-gap',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'flex',
  'flex-flow',
  'flex-basis',
  'flex-direction',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'box-orient',
  'gap',
  'row-gap',
  'column-gap',
  'place-content',
  'place-items',
  'place-self',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'justify-items',
  'justify-self',
  'order',
];

module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: ['stylelint-order'],
  rules: {
    'block-no-empty': true,
    'color-hex-length': 'long',
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'declaration-no-important': true,
    'declaration-empty-line-before': ['never', {ignore: 'after-declaration'}],
    'declaration-block-no-duplicate-properties': true,
    'rule-empty-line-before': 'always',
    'property-disallowed-list': [['flex', 'grid'], {message: 'Используй более специфичные свойства'}],
    'unit-disallowed-list': [
      ['px', 'em'],
      {message: 'Используй rem для указания гибких размеров', ignoreProperties: {px: [/\$.*/]}},
    ],
    'order/properties-order': [
      [
        {
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: resetProperties,
        },
        {
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: positionProperties,
        },
        {
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: displayElementProperties,
        },
        {
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: typographyProperties,
        },
        {
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: appearanceProperties,
        },
      ],
      {
        unspecified: 'bottom',
      },
    ],
    'order/order': [
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      {
        type: 'rule',
        selector: '^&::(before|after)',
      },
      {
        type: 'rule',
        selector: '^&:\\w',
      },
      {
        type: 'rule',
        selector: '^.',
      },
    ],
  },
};
