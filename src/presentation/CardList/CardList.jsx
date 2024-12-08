import { Card } from "../Card/Card";
import { PureComponent } from "react";
import "./CardList.css";

export class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.loadData();
  }
  loadData = async () => {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const data = await response.json();
    console.log(data);
    this.setState({
      words: data,
    });
  };

  onForwardClick = () => {
    let { currentIndex, words } = this.state;
    let nextIndex = currentIndex + 1;

    if (nextIndex === words.length) {
      nextIndex = 0;
    }
    this.setState({ currentIndex: nextIndex });
  };

  onBackwardClick = () => {
    let { currentIndex, words } = this.state;
    let nextIndex = currentIndex - 1;

    if (nextIndex < 0) {
      nextIndex = words.length - 1;
    }
    this.setState({ currentIndex: nextIndex });
  };

  render() {
    let { words, currentIndex } = this.state;
    let card = words[currentIndex];

    if (currentIndex === words.length) {
      return "End";
    }

    if (card) {
      return (
        <div className="card-wrapper">
          <div className="card-list">
            <button className="button-left" onClick={this.onBackwardClick}>
              {"<-"}
            </button>
            <Card english={card.english} />

            <button className="button-right" onClick={this.onForwardClick}>
              {"->"}
            </button>
          </div>
          <div className="progress">Количество слов: {currentIndex + 1}</div>
        </div>
      );
    }
    return "Loading...";
  }
}
