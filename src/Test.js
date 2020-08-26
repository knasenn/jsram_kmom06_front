import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'









class Test extends React.Component {
  constructor() {
    super()
    this.state = { text: [] }
  }

  componentDidMount() {
    var myRequest = new Request('http://localhost:8333/getchat');
    let text = [];

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        this.setState({ text: data })
      })
  }

  render() {
    return (
      <div class="chat-log">
        <h5>Chat log</h5>
        <ul>
          {this.state.text.map(movie => {
            return <li key={`movie-${movie.id}`}>{movie.chatm}<br /></li>
          })}
        </ul>
      </div>
    )
  }
}




// class Test extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       text: null
//     }
//   }
//
//
//   //SPARA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!?
//   // //hämtar fån textfil skriven i markdown
//   // componentWillMount() {
//   //   // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
//   //   fetch(readme).then((response) => response.text()).then((text) => {
//   //     this.setState({ termz: text })
//   //   })
//   // }
//
//   componentDidMount() {
//     // Simple GET request using fetch
//     // fetch('https://me-api.thisisabad.site/reports/week/1')
//     fetch('http://localhost:8333/getchat')
//         .then(response => response.json())
//         .then(data => this.setState({ text: data[0].chatm }));
//         //kanske kika på this.state och ändra. Kanske till en array eller dict?
//         //kanske kika på this.state och ändra. Kanske till en array eller dict?
//         //kanske kika på this.state och ändra. Kanske till en array eller dict?
//   }
//
//   // render() {
//   //    const data =[{"name":"test1"},{"name":"test2"}];
//   //   const listItems = data.map((d) => <li key={d.name}>{d.name}</li>;
//   //
//   //   return (
//   //     <div>
//   //     hello
//   //     </div>
//   //   );
//   // }
//
//
//
//
//
//   render() {
//     return (
//       <div className="content">
//         <h3><a href="https://github.com/knasenn/jsramverk">Github link!!</a></h3>
//         <ReactMarkdown source={ this.state.text } />
//       </div>
//     )
//   }
//
//
//
//
//
// }




export default Test
