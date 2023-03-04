import Content from '../../components/content/Content';
import Search from '../../components/search/Search';
import './Home.css';
import { mockFoods } from './../../mock';

export function Home() {

  return (
    <div className="container">
      <h1>Popular Menu</h1>
      <div className="search">
        <Search />
      </div>
      <div className="content">
        <Content
          props={mockFoods}
          wc={false}
        />
      </div>
    </div>
  );
}
