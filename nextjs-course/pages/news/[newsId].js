import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send a request to a backend API
  // to fetch a news item with newsId

  return <h1>The News Page</h1>;
}

export default DetailPage;
