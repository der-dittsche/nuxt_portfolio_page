import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "@nuxt/content"
    ],
    tailwindcss: {
        configPath: 'tailwind.config',
        config: {
            plugins: [tailwindTypography]
        }
    },
    colorMode: {
        classSuffix: ''
    },
    content: {
        highlight: {
            theme: {
                // weitere Themen findet man unter:
                // https://github.com/shikijs/textmate-grammars-themes/tree/main/packages/tm-themes
                default: 'catppuccin-latte',
                // dark: 'solarized-dark'
            }
        }
    },
});