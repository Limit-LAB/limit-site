import { defineConfig } from 'windicss/helpers'

// const chineseFont = [
//   'STHeiti',
//   'pingfang sc',
//   'wenquanyi micro hei',
//   'microsoft yahei'
// ]

const sans = [
  '-apple-system',
  'BlinkMacSystemFont',
  'helvetica neue',
  'Helvetica',
  'Tahoma',
  'Arial',
  'ui-sans-serif',
  'system-ui',
  'sans-serif'
]

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans,
        display: ['Red Hat Display', ...sans],
        mono: ['fira-mono', 'monospace']
      },
      boxShadow: {
        'main': 'rgba(1,1,1,.2) 0 10px 20px',
        'nav-active': 'rgba(0,0,0,.15) 0 10px 15px',
        'nav-hover': 'rgba(0,0,0,.2) 0 10px 15px'
      },
      colors: {
        primary: '#153CA9',
        background: '#EEEEEE',
        gray: '#868B8E',
        light: '#0080FB'
      }
    }
  },
  extract: {
    include: ['**/*.{html,jsx,tsx,js,ts}'],
    exclude: ['node_modules', '.git', '.next']
  },
  plugins: [
    require('windicss/plugin/filters'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp')
  ]
})
