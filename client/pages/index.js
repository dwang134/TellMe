import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Graph from '../components/Graph'
import Form from '../components/Form'
import {Provider} from 'react-redux'
import {store} from '../store/store'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <Provider store = {store}>
    <div className= 'container mx-auto'>
    <Navbar></Navbar>
    <div className= 'grid md:grid-cols-2 gap-20 m-auto'>
    <Graph></Graph>
    <Form></Form>
    </div>
    </div>    
    </Provider>
  )
}
