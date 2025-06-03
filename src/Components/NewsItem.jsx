const NewsItem = ({ title, description, src, url, author, publishedAt }) => {
  return (
    <div
      className="news-card card bg-dark text-white rounded-4 border-0 shadow-sm p-3 h-100"
      style={{ maxHeight: '480px' }}
    >
      <img
        src={src ? src : '/error_img.png'}
        className="card-img-top object-fit-cover rounded-3"
        style={{ height: '200px', objectFit: 'cover' }}
        alt="News Thumbnail"
      />
      <div className="card-body d-flex flex-column px-2 pt-3 pb-0">
        <h5 className="card-title two-line-clamp">{title}</h5>
        <p className="card-text three-line-clamp text-secondary">
          {description ? description : (title + ' ').repeat(2)}
        </p>

        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn mt-auto rounded-pill fw-semibold">
          Read More
        </a>

        <div className="d-flex justify-content-between mt-3">
          <small className="text-muted">{author || 'Unidentified Author'}</small>
          <small className="text-muted">{publishedAt || 'Unknown Date'}</small>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
