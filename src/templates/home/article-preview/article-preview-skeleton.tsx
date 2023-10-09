import { Skeleton } from '@/components/skeletons';
import { articlePreviewSkeletonLink, articlePreviewSkeletonMeta } from './article-preview.css';

export const ArticlePreviewSkeleton = () => (
  <div class="article-preview">
    <div class="article-meta">
      <div class={articlePreviewSkeletonMeta}>
        <Skeleton height="32px" />
      </div>
      <Skeleton height="100px" />
    </div>
    <div class={articlePreviewSkeletonLink}>
      <span>Read more...</span>
      <Skeleton width="200px" />
    </div>
  </div>
);
