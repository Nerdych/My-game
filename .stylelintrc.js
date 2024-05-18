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
  'content',
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
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'block-no-empty': true,
    'declaration-no-important': true,
    'declaration-block-no-duplicate-properties': true,
    'selector-class-pattern': '^[a-z]([a-zA-Z0-9]+)?$',
    'color-hex-length': 'long',
    'no-descending-specificity': [true, {ignore: ['selectors-within-list']}],
    'property-disallowed-list': [['flex', 'grid'], {message: 'Используй более специфичные свойства'}],

    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'unit-disallowed-list': [
      ['px', 'em'],
      {message: 'Используй rem для указания гибких размеров', ignoreProperties: {px: [/\$.*/]}},
    ],

    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/dollar-variable-empty-line-after': ['always', {except: ['before-dollar-variable']}],
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-first-in-block': true,

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
      'dollar-variables',
      'custom-properties',
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
        selector: '^.',
      },
      {
        type: 'rule',
        selector: '^&:\\w',
      },
    ],
  },
};
