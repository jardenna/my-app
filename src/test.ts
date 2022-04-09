import { toast } from './components/ToastManager'

const test = (title: any, content: any, duration?: any) => {
  toast.success({
    title,
    content,
    duration,
  })
}

export default test
