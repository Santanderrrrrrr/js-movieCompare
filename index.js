const autoCompleteConfig = {
    
    renderOption(item){
        const imgSrc = item.Poster === 'N/A'? '' : item.Poster
        return `
            <img src="${imgSrc}"/>
            ${item.Title} (${item.Year})
        `
    },
    onOptionSelect(item, side){
        // document.querySelector('.tutorial').style.visibility = 'hidden'
        return onMovieSelect(item.imdbID, side)
    },
    inputValue(item){
        return item.Title
    }
}

createAutoComplete({
    ...autoCompleteConfig,
    root:document.querySelector('#left-autocomplete'),
    summary: '#left-summary'
})
createAutoComplete({
    ...autoCompleteConfig,
    root:document.querySelector('#right-autocomplete'),
    summary: '#right-summary'
})


 





const movieTemplate = movieDetail => {
    const dollars = parseInt(
      movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, '')
    );
    const metascore = parseInt(movieDetail.Metascore);
    const imdbRating = parseFloat(movieDetail.imdbRating);
    const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));
    const awards = movieDetail.Awards.split(' ').reduce((prev, word) => {
      const value = parseInt(word);
  
      if (isNaN(value)) {
        return prev;
      } else {
        return prev + value;
      }
    }, 0);
  
    return `
      <article class="media">
        <figure class="media-left">
          <p class="image">
            <img src="${movieDetail.Poster}" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h1>${movieDetail.Title}</h1>
            <h4>${movieDetail.Genre}</h4>
            <p>${movieDetail.Plot}</p>
          </div>
        </div>
      </article>
  
      <article data-value=${awards} class="notification is-primary">
        <p class="title">${movieDetail.Awards}</p>
        <p class="subtitle">Awards</p>
      </article>
      <article data-value=${dollars} class="notification is-primary">
        <p class="title">${movieDetail.BoxOffice}</p>
        <p class="subtitle">Box Office</p>
      </article>
      <article data-value=${metascore} class="notification is-primary">
        <p class="title">${movieDetail.Metascore}</p>
        <p class="subtitle">Metascore</p>
      </article>
      <article data-value=${imdbRating} class="notification is-primary">
        <p class="title">${movieDetail.imdbRating}</p>
        <p class="subtitle">IMDB Rating</p>
      </article>
      <article data-value=${imdbVotes} class="notification is-primary">
        <p class="title">${movieDetail.imdbVotes}</p>
        <p class="subtitle">IMDB Votes</p>
      </article>
    `;
  };


  const runComparison = () => {
    const leftSideStats = document.querySelectorAll(
      '#left-summary .notification'
    );
    const rightSideStats = document.querySelectorAll(
      '#right-summary .notification'
    );

    console.log(`${leftSideStats},${rightSideStats}`)
  
    Array.from(leftSideStats).forEach((leftStat, index) => {
      const rightStat = [...rightSideStats][index];
  
      const leftSideValue = parseInt(leftStat.dataset.value)
    const rightSideValue = parseInt(rightStat.dataset.value)
  
      if (rightSideValue > leftSideValue) {
        leftStat.classList.remove('is-primary');
        leftStat.classList.add('is-warning');
      } else {
        rightStat.classList.remove('is-primary');
        rightStat.classList.add('is-warning');
      }
    // console.log(leftStat.dataset.value)
    // console.log(Array.from(rightSideStats)[index].dataset.value)
    });
  };


