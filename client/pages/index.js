import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Graph from '../components/Graph'
import Form from '../components/Form'
import {Provider} from 'react-redux'
import {store} from '../store/store'

export default function Home() {
  return (
    <Provider store = {store}>
    <Layout>
    <Graph></Graph>
    <Form></Form>
    </Layout> 
    </Provider>
  )
}
