import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'
import {parseColor} from 'tailwindcss/lib/util/color'


const toRGB = (value) => {
    return parseColor(value).color.join(' ')
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        transparent: 'transparent',
        current: 'currentColor',
        extend: {
            fontFamily: {
                satoshi: ['Satoshi']
            },
            fontSize: {
                xss: '0.6rem',
                'tremor-label': ['0.75rem', {lineHeight: '1rem'}],
                'tremor-default': ['0.875rem', {lineHeight: '1.25rem'}],
                'tremor-title': ['1.125rem', {lineHeight: '1.75rem'}],
                'tremor-metric': ['1.875rem', {lineHeight: '2.25rem'}]
            },
            container: {
                center: true
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%'
            },
            strokeWidth: {
                0.5: 0.5,
                1.5: 1.5,
                2.5: 2.5
            },
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                success: 'rgb(var(--color-success) / <alpha-value>)',
                info: 'rgb(var(--color-info) / <alpha-value>)',
                warning: 'rgb(var(--color-warning) / <alpha-value>)',
                pending: 'rgb(var(--color-pending) / <alpha-value>)',
                danger: 'rgb(var(--color-danger) / <alpha-value>)',
                light: 'rgb(var(--color-light) / <alpha-value>)',
                dark: 'rgb(var(--color-dark) / <alpha-value>)',
                theme: {
                    1: 'rgb(var(--color-theme-1) / <alpha-value>)',
                    2: 'rgb(var(--color-theme-2) / <alpha-value>)'
                },
                darkmode: {
                    50: 'rgb(var(--color-darkmode-50) / <alpha-value>)',
                    100: 'rgb(var(--color-darkmode-100) / <alpha-value>)',
                    200: 'rgb(var(--color-darkmode-200) / <alpha-value>)',
                    300: 'rgb(var(--color-darkmode-300) / <alpha-value>)',
                    400: 'rgb(var(--color-darkmode-400) / <alpha-value>)',
                    500: 'rgb(var(--color-darkmode-500) / <alpha-value>)',
                    600: 'rgb(var(--color-darkmode-600) / <alpha-value>)',
                    700: 'rgb(var(--color-darkmode-700) / <alpha-value>)',
                    800: 'rgb(var(--color-darkmode-800) / <alpha-value>)',
                    900: 'rgb(var(--color-darkmode-900) / <alpha-value>)'
                },
                accent: {
                    50: 'rgb(var(--color-accent-50) / <alpha-value>)',
                    100: 'rgb(var(--color-accent-100) / <alpha-value>)',
                    200: 'rgb(var(--color-accent-200) / <alpha-value>)',
                    300: 'rgb(var(--color-accent-300) / <alpha-value>)',
                    400: 'rgb(var(--color-accent-400) / <alpha-value>)',
                    500: 'rgb(var(--color-accent-500) / <alpha-value>)',
                    600: 'rgb(var(--color-accent-600) / <alpha-value>)',
                    700: 'rgb(var(--color-accent-700) / <alpha-value>)',
                    800: 'rgb(var(--color-accent-800) / <alpha-value>)',
                    900: 'rgb(var(--color-accent-900) / <alpha-value>)'
                },
                tremor: {
                    brand: {
                        faint: colors.blue[50],
                        muted: colors.blue[200],
                        subtle: colors.blue[400],
                        DEFAULT: colors.blue[500],
                        emphasis: colors.blue[700],
                        inverted: colors.white
                    },
                    background: {
                        muted: colors.gray[50],
                        subtle: colors.gray[100],
                        DEFAULT: colors.white,
                        emphasis: colors.gray[700]
                    },
                    border: {
                        DEFAULT: colors.gray[200]
                    },
                    ring: {
                        DEFAULT: colors.gray[200]
                    },
                    content: {
                        subtle: colors.gray[400],
                        DEFAULT: colors.gray[500],
                        emphasis: colors.gray[700],
                        strong: colors.gray[900],
                        inverted: colors.white
                    }

                },
                'dark-tremor': {
                    brand: {
                        faint: '#0B1229',
                        muted: colors.blue[950],
                        subtle: colors.blue[800],
                        DEFAULT: colors.blue[500],
                        emphasis: colors.blue[400],
                        inverted: colors.blue[950]
                    },
                    background: {
                        muted: '#131A2B',
                        subtle: colors.gray[800],
                        DEFAULT: colors.gray[900],
                        emphasis: colors.gray[300]
                    },
                    border: {
                        DEFAULT: colors.gray[800]
                    },
                    ring: {
                        DEFAULT: colors.gray[800]
                    },
                    content: {
                        subtle: colors.gray[600],
                        DEFAULT: colors.gray[500],
                        emphasis: colors.gray[200],
                        strong: colors.gray[50],
                        inverted: colors.gray[950]
                    }
                }
            },
            boxShadow: {
                // light
                'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'tremor-card':
                    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'tremor-dropdown':
                    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                // dark
                'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'dark-tremor-card':
                    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'dark-tremor-dropdown':
                    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            },
            borderRadius: {
                'tremor-small': '0.375rem',
                'tremor-default': '0.5rem',
                'tremor-full': '9999px'
            }
        }
    },
    safelist: [
        {
            pattern:
                /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ['hover', 'ui-selected']
        },
        {
            pattern:
                /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ['hover', 'ui-selected']
        },
        {
            pattern:
                /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ['hover', 'ui-selected']
        },
        {
            pattern:
                /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
        },
        {
            pattern:
                /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
        },
        {
            pattern:
                /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
        }
    ],
    plugins: [
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/forms'),
        plugin(function ({addBase}) {
            addBase({
                ':root': {
                    '--color-primary': toRGB(colors.neutral['900']),
                    '--color-theme-1': toRGB(colors.emerald['700']),
                    '--color-theme-2': toRGB(colors.emerald['700'])
                },
                '.dark': {
                    '--color-primary': toRGB(colors.slate['800']),
                    '--color-darkmode-50': '87 103 132',
                    '--color-darkmode-100': '74 90 121',
                    '--color-darkmode-200': '65 81 114',
                    '--color-darkmode-300': '53 69 103',
                    '--color-darkmode-400': '48 61 93',
                    '--color-darkmode-500': '41 53 82',
                    '--color-darkmode-600': '40 51 78',
                    '--color-darkmode-700': '35 45 69',
                    '--color-darkmode-800': '27 37 59',
                    '--color-darkmode-900': '15 23 42'
                },
                '.accent': {
                    '--color-primary': toRGB(colors.slate['800']),
                    '--color-accent-50': '87 103 132',
                    '--color-accent-100': '74 90 121',
                    '--color-accent-200': '65 81 114',
                    '--color-accent-300': toRGB(colors.amber['300']),
                    '--color-accent-400': toRGB(colors.amber['400']),
                    '--color-accent-500': toRGB(colors.amber['500']),
                    '--color-accent-600': '40 51 78',
                    '--color-accent-700': '35 45 69',
                    '--color-accent-800': '27 37 59',
                    '--color-accent-900': '15 23 42'
                },
                '.theme-1': {
                    '--color-primary': toRGB(colors.emerald['800']),
                    '--color-theme-1': toRGB(colors.emerald['900']),
                    '--color-theme-2': toRGB(colors.emerald['900']),
                    '--color-accent-500': toRGB(colors.amber['500'])
                },
                '.theme-2': {
                    '--color-primary': toRGB(colors.violet['500']),
                    '--color-theme-1': toRGB(colors.violet['600']),
                    '--color-theme-2': toRGB(colors.violet['900'])
                },
                '.theme-3': {
                    '--color-primary': toRGB(colors.orange['400']),
                    '--color-theme-1': toRGB(colors.amber['800']),
                    '--color-theme-2': toRGB(colors.amber['900'])
                },
                '.theme-4': {
                    '--color-primary': toRGB(colors.slate['800']),
                    '--color-theme-1': toRGB(colors.slate['900']),
                    '--color-theme-2': toRGB(colors.slate['900'])
                },
                '.theme-5': {
                    '--color-primary': toRGB(colors.pink['400']),
                    '--color-theme-1': toRGB(colors.pink['500']),
                    '--color-theme-2': toRGB(colors.pink['500'])
                }
            })
        })
    ]
}

