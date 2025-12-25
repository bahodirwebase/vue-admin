import type { Component } from 'vue'
import { NBadge, NIcon } from 'naive-ui'
import { h } from 'vue'

interface IOptionBadge {
    value : number | string,
    type  : 'default' | 'success' | 'info' | 'warning' | 'error'
}

export function useRender() {
    const renderIcon = (icon: Component) => {
        return () => {
            return h(NIcon, null, {
                default: () => h(icon)
            })
        }
    }
    const renderLabelWithBadge = (label : string, optionBadge : IOptionBadge) => {
        return () => {
            return h(
                'div',
                { class: 'menu-label ', style : { display: 'flex', justifyContent : 'space-between', alignItems : 'center' } },
                [
                    h('span',  label),
                    h(NBadge, { value: optionBadge.value, type: optionBadge.type, class: 'mr-1' })
                ]
            )
        }
    }
    return {
        renderIcon,
        renderLabelWithBadge
    }
}