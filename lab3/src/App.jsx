import './App.css'
import PageTitle from './components/PageTitle'
import ToDoContainer from './components/ToDoContainer'

const App = () => {
  return (
    <div>
      <PageTitle title="ToDo App" />
      <ToDoContainer />
    </div>
  )
}

export default App