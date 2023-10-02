interface IArticleDetailProps {
    params: { slug: string };
}

export default function ArticleDetail({ params }: IArticleDetailProps) {
    return <div>{params.slug}</div>;
}
