
import axios from "axios"

const Card = (article) => {
  // TASK 5

  const card = document.createElement("div");
  const cardHeadLine = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  card.classList.add("card");
  cardHeadLine.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container");

  cardHeadLine.textContent = article.headline;
  cardImg.src = article.authorPhoto;
  cardAuthorName.textContent = article.authorName

  card.appendChild(cardHeadLine);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImgContainer);
  cardAuthor.appendChild(cardAuthorName);
  cardImgContainer.appendChild(cardImg);

  card.addEventListener("click", function (event) {
    console.log(article.headline)
  })

  return card

  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

}

const cardAppender = (selector) => {
  const entryPoint = document.querySelector(selector)
  axios.get("http://localhost:5001/api/articles")
    .then(response => {
     
      const keys = Object.keys(response.data.articles)
     
      keys.forEach(key => {
        const posts = response.data.articles[key]
        posts.forEach(post => {
          const card = Card(post)
          entryPoint.append(card)
        })
      })

    }).catch(error => {
      console.log(error)
    });

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
