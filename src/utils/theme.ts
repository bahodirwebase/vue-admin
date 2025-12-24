// theme.ts
import type { GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#6366f1',
        textColorBase: '#e5e7eb'
    },

    Layout: {
        // siderColor: '#0f172a',
        // headerColor: '#0f172a'
    },

    Menu: {
        // color: '#0f172a',
        itemTextColor: '#cbd5f5',
        itemTextColorActive: '#ffffff',
        itemIconColor: '#94a3b8',
        itemIconColorActive: '#ffffff',
        borderRadius : '16px',
        // itemColorActive: "linear-gradient(135deg,#1e1b4b,#312e81,#4f46e5)",
        // itemColorActiveHover: 'linear-gradient(135deg,#020617,#1e293b)'
    }
}
