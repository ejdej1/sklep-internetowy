
import './styles/App.css';
import Header from './Header';
import TopPage from './TopPage';
import MiddlePage from './middlePage';
import MiddlePage2 from './middlePage2';
import VideoPage from './videoPage';
import InspirationPage from './inspirationPage';
import SpecificationPage from './specificationPage';

function App() {
  return (
    <div>
    <Header></Header>
    <TopPage></TopPage>
    <VideoPage></VideoPage>
    <MiddlePage></MiddlePage>
    <MiddlePage2></MiddlePage2>
    <MiddlePage></MiddlePage>
    <InspirationPage></InspirationPage>
    <SpecificationPage></SpecificationPage>
    </div>
  );
}

export default App;
