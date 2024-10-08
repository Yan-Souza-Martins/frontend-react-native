import { ScrollView, StyleSheet } from 'react-native'
import Header from '../frontend-react-native/src/components/Header'
import Footer from '../frontend-react-native/src/components/Footer'
import Content from '../frontend-react-native/src/components/Content'


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