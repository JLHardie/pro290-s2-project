import React from 'react'

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                <Route path="/products" component={ProductPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/profile" component={ProfilePage} />
                {/* Add more routes for other functionalities */}
                </Switch>
            </div>
            <h1>Home</h1>
            <p>
                Hello World!
            </p>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));