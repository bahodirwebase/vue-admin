// theme.ts
import type { GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#5b3cc4',
        successColor: '#17c964',
        errorColor: '#f2135d',
        warningColor: '#ff8200',
        infoColor: '#00aaff',
        textColorBase: '#e5e7eb'
    },

    Layout: {
        // siderColor: '#0f172a',
        // headerColor: '#0f172a'
    },

    Menu: {
        // color: '#ffffff',

        // itemTextColor: '#374151',
        // itemTextColorHover: '#fff',
        // itemTextColorActive: '#fff',

        // itemIconColor: '#6b7280',
        // itemIconColorHover: '#fff',
        // itemIconColorActive: '#fff',

        // colorHover: '#eee',
        // itemColorActive: '#000',
        borderRadius: '16px',
        // itemColorHover : '#eee',
        // itemColorActiveHover : '#ddd',
        // itemTextColorActiveHover : '#fff',
        // itemIconColorActiveHover : '#fff'
    }
}
