import {onBeforeUnmount, onMounted, ref, watchEffect} from 'vue'
import type {ComputedRef, Ref} from 'vue'

/**
 * @description 使用拖拽
 * @param targetRef 目标元素
 * @param triggerRef 触发器元素
 * @param draggable 是否可以被拖拽
 */
export const useDraggable = (
    targetRef: Ref<HTMLElement | undefined>,
    triggerRef: Ref<HTMLElement | undefined>,
    draggable: ComputedRef<boolean>
) => {
    let transform = {
        offsetX: 0,
        offsetY: 0,
    }
    if (targetRef instanceof HTMLElement) {
        targetRef = ref<HTMLElement | undefined>(targetRef)
    }


    const onMousedown = (e: MouseEvent) => {
        const downX = e.clientX
        const downY = e.clientY
        const {offsetX, offsetY} = transform

        const targetRect = targetRef.value!.getBoundingClientRect()
        const targetLeft = targetRect.left
        const targetTop = targetRect.top
        const targetWidth = targetRect.width
        const targetHeight = targetRect.height

        const clientWidth = document.documentElement.clientWidth
        const clientHeight = document.documentElement.clientHeight

        const minLeft = -targetLeft + offsetX
        const minTop = -targetTop + offsetY
        const maxLeft = clientWidth - targetLeft - targetWidth + offsetX
        const maxTop = clientHeight - targetTop - targetHeight + offsetY

        const onMousemove = (e: MouseEvent) => {
            const moveX = Math.min(
                Math.max(offsetX + e.clientX - downX, minLeft),
                maxLeft
            )
            const moveY = Math.min(
                Math.max(offsetY + e.clientY - downY, minTop),
                maxTop
            )

            transform = {
                offsetX: moveX,
                offsetY: moveY,
            }
            targetRef.value!.style.transform = `translate(${moveX}px, ${moveY}px)`
        }

        const onMouseup = () => {
            document.removeEventListener('mousemove', onMousemove)
            document.removeEventListener('mouseup', onMouseup)
        }

        document.addEventListener('mousemove', onMousemove)
        document.addEventListener('mouseup', onMouseup)
    }

    const onDraggable = () => {
        if (triggerRef.value && targetRef.value) {
            triggerRef.value.addEventListener('mousedown', onMousedown)
        }
    }

    const offDraggable = () => {
        if (triggerRef.value && targetRef.value) {
            triggerRef.value.removeEventListener('mousedown', onMousedown)
        }
    }

    onMounted(() => {
        watchEffect(() => {
            if (draggable.value) {
                onDraggable()
            } else {
                offDraggable()
            }
        })
    })

    onBeforeUnmount(() => {
        offDraggable()
    })
}