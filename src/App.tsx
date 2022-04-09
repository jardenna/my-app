import './App.css'
import { toast } from './components/ToastManager'
import test from './test'
toast.success({
  id: 'my-id',
  title: 'Onload toast title',
  content: 'Onload toast body',
})

test('Toast title', 'Toast body')

function App() {
  return <div className='App'>a</div>
}

export default App
