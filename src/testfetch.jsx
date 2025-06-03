fetch(`https://proxy.ivanirwin469.workers.dev/?url=${encodeURIComponent(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`)}&referer=http://localhost:5173&user-agent=${navigator.userAgent}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
    // Process the data here
  })
  .catch(error => {
    console.error('Fetch error:', error);
    // Handle errors here
  });