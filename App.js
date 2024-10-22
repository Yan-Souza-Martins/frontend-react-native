import { ScrollView, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import Content from './src/components/Content'


export default function App() {
  return (
      <ScrollView style={styles.container}>
        
        <Header />
        <Content />
        <Footer />
      
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})