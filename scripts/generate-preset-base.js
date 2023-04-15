const path = require('path')
const tailwindColors = require('tailwindcss/colors')

const colorKeys = Object.keys(tailwindColors)
const colorObject = {}

const hexToRGB = (hex) => {
  hex = hex.replace('#', '')

  let r = parseInt(hex.substring(0, 2), 16)
  let g = parseInt(hex.substring(2, 4), 16)
  let b = parseInt(hex.substring(4, 6), 16)

  return `${r}, ${g}, ${b}`
}

const deprecatedColorKeyMap = {
  lightBlue: 'sky',
  warmGray: 'stone',
  trueGray: 'neutral',
  coolGray: 'gray',
  blueGray: 'slate',
}
for (const key of colorKeys) {
  if (typeof tailwindColors[key] === 'object') {
    if (deprecatedColorKeyMap[key]) {
      colorObject[deprecatedColorKeyMap[key]] = tailwindColors[key]
      continue
    }

    colorObject[key] = tailwindColors[key]
  }
}

const cloneDeep = (obj) => JSON.parse(JSON.stringify(obj))

const transformColorObjectOfDarkmode = () => {
  const baseColorObject = cloneDeep(colorObject)
  const darkColorObject = cloneDeep(colorObject)

  for (const colorKey of Object.keys(colorObject)) {
    const color = colorObject[colorKey]

    if (typeof color === 'object') {
      for (const colorNumberKey of Object.keys(color)) {
        baseColorObject[colorKey][colorNumberKey] = `rgba(${hexToRGB(
          colorObject[colorKey][colorNumberKey],
        )} / <alpha-value>)`
        const reverseColorNumberKey = 1000 - parseInt(colorNumberKey)

        darkColorObject[colorKey][colorNumberKey] = `rgba(${hexToRGB(
          colorObject[colorKey][reverseColorNumberKey],
        )} / <alpha-value>)`
      }
    }
  }

  baseColorObject.white = 'rgba(255, 255, 255 / <alpha-value>)'
  baseColorObject.black = 'rgba(0, 0, 0 / <alpha-value>)'
  darkColorObject.black = 'rgba(255, 255, 255 / <alpha-value>)'
  darkColorObject.white = 'rgba(0, 0, 0 / <alpha-value>)'

  for (const object of [baseColorObject, darkColorObject]) {
    Object.assign(object, {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
    })
  }

  return [baseColorObject, darkColorObject]
}

const [baseColorObject, darkColorObject] = transformColorObjectOfDarkmode()

const config = [
  {
    name: 'base',
    selectors: ['html.light'],
    mediaQuery: '@media (prefers-color-scheme: light)',
    theme: {
      colors: baseColorObject,
    },
  },
  {
    name: 'dark',
    selectors: ['html.dark'],
    mediaQuery: '@media (prefers-color-scheme: dark)',
    theme: {
      colors: darkColorObject,
    },
  },
]

require('fs').writeFileSync(
  path.resolve(__dirname, '../presets/built-in.js'),
  JSON.stringify(config, null, 2),
  'utf-8',
)
