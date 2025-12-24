import type { Component } from 'vue'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

export function useRender() {
    const renderIcon = (icon: Component) => {
        return () => {
            return h(NIcon, null, {
                default: () => h(icon)
            })
        }
    }
    return {
        renderIcon
    }
}