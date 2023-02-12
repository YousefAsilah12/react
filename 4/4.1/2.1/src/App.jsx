import './App.css'
import Box_2 from './components/Box-2/Box-2'
import Box_3 from './components/Box-3/Box-3'
import Box_1 from './components/box-1/Box-1'
import Box_4 from './components/Box-4/Box-4'

function App() {

return (

  <div className="main">
  <Box_1>
    <Box_2>
      <Box_3>
        <Box_4></Box_4>
        <Box_4></Box_4>
      </Box_3>
    </Box_2>
  </Box_1>
</div>
)
}

export default App