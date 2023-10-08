'use client';
import EditForm from '@/components/editor/EditForm';
type Props = {
  params: { slug: string };
};
const EditorUpdatePage = ({ params: { slug } }: Props) => {
  console.log('update');

  console.log(slug);

  return (
    <section>
      <EditForm slug={slug} />
    </section>
  );
};

export default EditorUpdatePage;
