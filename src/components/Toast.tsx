import { FC, useEffect } from 'react'
export interface ToastProps {
  id: string
  destroy: () => void
  title: string
  content: string
  duration?: number
}
const Toast: FC<ToastProps> = props => {
  const { destroy, content, title, duration = 0, id } = props

  useEffect(() => {
    if (!duration) return

    const timer = setTimeout(() => {
      destroy()
    }, duration)

    return () => clearTimeout(timer)
  }, [destroy, duration])

  return (
    <>
      <header className={'toast-header'}>
        <div>
          {title} {id}
        </div>
        <button onClick={destroy}>X</button>
      </header>
      <main className={'toast-body'}>{content}</main>
    </>
  )
}
export default Toast
