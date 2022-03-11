const e = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Naoki" };
    }

    changeName(name) {
        this.setState({ name: name });
    }

    render() {
        return (
            <div>
                <p>
                    Hello Mr.{this.state.name}
                </p>
                <button onClick={() => this.changeName('Naoki')}>
                    Naoki
                </button>
                <button onClick={() => this.changeName('Yudai')}>
                    Yudai
                </button>
            </div>
        );
    }
}

const domContainer = document.querySelector('#test_react');
ReactDOM.render(e(App), domContainer);