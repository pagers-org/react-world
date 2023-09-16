import { Button } from "components/shared/ui/button";
import { Form } from "components/shared/ui/form";

export const CommentForm = () => {
  return (
    <Form.Root>
      <Form.Label label="Comment">
        <Form.Textarea placeholder="Write a comment ..." />
      </Form.Label>

      <div className="flex justify-end">
        <Button size="lg">Post</Button>
      </div>
    </Form.Root>
  );
};
