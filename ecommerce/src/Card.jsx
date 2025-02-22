import safesendImage from "./assets/image.png"

function Card({ product }) {
  return (
    <div className="card">
        <img className="safesend-image" src={safesendImage} alt="Safesend image"></img>
        <h2>SafeSend</h2>
        <p>Price: $10</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur impedit eos soluta, neque vel iure adipisci doloribus earum commodi, voluptatibus nemo sint labore placeat dolores velit tempore dolor sed. At?</p>
    </div>
  );
}

export default Card;