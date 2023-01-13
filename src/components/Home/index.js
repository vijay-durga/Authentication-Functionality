import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="bg-cont">
    <Header />
    <h1 className="heading">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
