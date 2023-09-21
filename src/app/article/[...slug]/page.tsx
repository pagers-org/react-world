export default function ArticlePage({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return <div>article slug 페이지입니다!</div>;
}
