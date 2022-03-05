
function App(props) {
    const blogposts = ['first', 'second', 'third'];
    const blogpostsJsx = blogposts.map(
        (post) => <Blogpost title={post} key={post} />
    );
    return (
        <React.Fragment>
            <h2>{props.title}</h2>
            <ul>
                {blogpostsJsx}
            </ul>
        </React.Fragment>
    );
}

  ReactDOM.render(
    <App title = "App Component" />,
     document.querySelector('.js-app-container')
  );