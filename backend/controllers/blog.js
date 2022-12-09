import axios from 'axios'


export const getTweets = async (req ,res)=> {
    var options = {
      method: "GET",
      url: "https://twitter135.p.rapidapi.com/Search/",
      params: { q: "Elon", count: '5' },
      headers: {
        "x-rapidapi-host": "twitter135.p.rapidapi.com",
        "x-rapidapi-key": "a23f85fd8emsh381dee3ac8c81eap10d559jsn75a946447718",
      },
    };
    await axios.request(options).then((response) => {
        res.status(response.status).json(response.data);
    }).catch((err) => {
        console.error(err);
    })
}

export const getTrends = async (req, res)=> {
    const options = {
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=entertainment&pageSize=40&apiKey=${process.env.NEWS_API_KEY}`,
      params: {q: ''},
    }
    
    await axios.request(options).then((response) => {
      res.status(response.status).json(response.data.articles)
    }).catch((err) => {
      res.status(err.response.status).json({msg: "An error occured"})
    })
  
    
}