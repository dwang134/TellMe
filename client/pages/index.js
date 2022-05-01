import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Graph from '../components/Graph'

export default function Home() {
  return (
    <Layout>
    <h1 className= 'text-4xl font-bold text-center py-10'>TellMe</h1>
    <div className= 'grid xs:grid-cols-2 gap-4'>
    <Graph></Graph>
    </div>
    </Layout> 
  )
}
