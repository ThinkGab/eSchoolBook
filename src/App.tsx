import HTMLFlipBook from 'react-pageflip';
import './App.css';

const FlipBook = HTMLFlipBook as any;

function App() {
  return (
    <div className="app-container">
      <FlipBook width={400} height={600} size="fixed" minWidth={315} maxWidth={1000} minHeight={400} maxHeight={1533} maxShadowOpacity={0.5} showCover={true} mobileScrollSupport={true} className="flip-book">
        <div className="page page-cover" data-density="hard">
          <div className="page-content">
            <h2>I Colori Della Scuola</h2>
            <img src="/images/cover.jpg" alt="Copertina" style={{width: '100%', height: 'auto', marginTop: '2rem', borderRadius: '8px'}} />
          </div>
        </div>
        
        <div className="page">
          <div className="page-content">
            <h2 className="page-header">Capitolo 1</h2>
            <div className="page-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="page-footer">1</div>
          </div>
        </div>
        
        <div className="page">
          <div className="page-content">
            <h2 className="page-header">Il Risveglio</h2>
            <div className="page-text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
            <div className="page-footer">2</div>
          </div>
        </div>

        <div className="page">
          <div className="page-content">
            <h2 className="page-header">Avventura</h2>
            <div className="page-text">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
              </p>
            </div>
            <div className="page-footer">3</div>
          </div>
        </div>

        <div className="page page-cover" data-density="hard">
          <div className="page-content">
            <h2>Fine</h2>
          </div>
        </div>
      </FlipBook>
    </div>
  );
}

export default App;
