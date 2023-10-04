import EditForm from '@/components/editor/EditForm';
type Props = {
  params: { slug: string };
};
const EditorUpdatePage = ({ params: { slug } }: Props) => {
  return (
    <section>
      <EditForm slug={slug} />
    </section>
  );
};

export default EditorUpdatePage;
