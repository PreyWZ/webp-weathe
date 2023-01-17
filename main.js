const e = React.createElement;
const button=document.getElementById("button013");
const type1 = document.getElementById('type1');
const type2 = document.getElementById('type2');
const type3 = document.getElementById('type3');
const domContainer = document.querySelector('#Timer');
const root = ReactDOM.createRoot(domContainer);
button.addEventListener('click', () => {
  fetch('https://goweather.herokuapp.com/weather/Tokyo') .then(function(response){
      return response.json();
  }).then(function(json){
    type1.innerText =json['description'];
    type2.innerText =json['temperature'];
    type3.innerText =json['wind'];
  });
});

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return e(
      "div",
      null,
      "Seconds: ",
      this.state.seconds
    );
  }
}

root.render(e(Timer, null));
