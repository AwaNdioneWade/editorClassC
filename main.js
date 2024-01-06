class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {  texte: ''
                    }
    }
    
    render(){
        const blob = new Blob([this.state.texte], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        return (
            <div className="container-fluid p-5 bg-dark" style={{color: '#fff', textAlign: "center"}} >
                  <h2>Markdown Editor</h2>
              <div className='row'>
                <div className='col-12 col-md-8'>
                  <Textarea texte={this.state.texte} onChange={(e) => this.setState({texte: e.target.value})} style={{backgroundColor: '#95a3b3', color: '#fff', border: 'none', width: '100%', height: '500px', borderRadius: '15px' }}  />
                </div>
                <div className='col-12 col-md-3'>
                  <Texte texte={this.state.texte} style={{backgroundColor: '#fff', width: '100%', height: '250px', borderRadius: '15px' }} />
                </div>
              </div>
        
              <div className='row mt-5' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a href = {url} download = 'texte_telecharge.txt'>
                <button style={{ width:'140px', height: '60px', backgroundColor: '#084C61', color:'#fff', border:'none'}}>Download text</button>
                </a>
              </div>
            
            </div>
          );
    }
}

class Textarea extends React.Component{
    render(){
        return (
            <div>
                <textarea value={this.props.texte} onChange={this.props.onChange} style={this.props.style} />
            </div>
          )
    }
}

class Texte extends React.Component{
    render(){
        return (
            <div>
              <p style={this.props.style}>{this.props.texte}</p>
            </div>
          )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))