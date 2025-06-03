import React, { useState, useEffect } from 'react';
import NewsItem from './Newsitem';

const NewsContent = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
    const fetchNews = async () =>{
      try{
        setLoading(true);
        setError(null);
         let url = (`https://proxy.ivanirwin469.workers.dev/?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`)}&referer=http://localhost:5173&user-agent=${navigator.userAgent}`);
        const response = await fetch(url);
        if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      }catch (err){
        setError("Servers are not responding at the moment");
        setArticles([]);
      }finally {
      setLoading(false); 
    }
    };
    fetchNews();
  }, [category]);




  // useEffect(() => {
  //   const fetchNews = async () =>{
  //     try{
  //       setLoading(true);
  //       setError(null);
  //        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
  //       const response = await fetch(url);
  //       if (!response.ok){
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setArticles(data.articles);
  //     }catch (err){
  //       setError("Servers are not responding at the moment");
  //       setArticles([]);
  //     }finally {
  //     setLoading(false); // stop loading regardless of success or error
  //   }
  //   };
  //   fetchNews();
  // }, [category]);

  return (
    <div className="container mt-4">
 <h3 className="text-center mt-4 fs-2 mb-4 fw-semibold position-relative">
  Latest{" "}
  <span className="category-highlight text-uppercase text-danger d-inline-block position-relative">
    {category}
    <div className="underline-line mt-1"></div>
  </span>
  <span className="text-white ms-2" style={{ fontSize: "12px" }}>
    Updates
  </span>


</h3>



         {error && (<div className="alert alert-danger text-center" role="alert">{error}</div>)}

           {loading ? (
       <div className="text-center my-5 d-flex flex-column align-items-center">
    <div className="custom-loader " ></div>
    <p className="mt-3 text-danger fw-semibold">Fetching latest news...</p>
  </div>
      ) : (  
      <div className="row justify-content-center">
        {articles.map((news, index) => (
          <div className="col-sm-6 col-md-4 col-lg-4 mb-4" key={index}>
            <NewsItem title={news.title} description={news.description} src={news.urlToImage} url={news.url} author={news.author} content={news.content} publishedAt={news.publishedAt}/>
          </div>
        ))}
      </div>)}
    </div>
  );
};

export default NewsContent;
