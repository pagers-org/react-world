'use client';

import { useUserStore } from '@/stores/users';
import { useRouter } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { EditorFormType } from '@/app/editor/page';

import { postArticle, putArticle } from '@/api/articles';

interface Props {
  currentForm: EditorFormType;
  isEditMode: boolean;
  slug: string | null;
}

const EditorPageMain = ({ currentForm, isEditMode, slug }: Props) => {
  const router = useRouter();

  const user = useUserStore((state) => state.user);

  const [form, setForm] = useState<Props['currentForm']>(currentForm);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postNewArticle = () => {
    postArticle({
      payload: { article: { ...form } },
    }).then((res) => {
      if (res?.errors) {
        const [[error, [type]]] = Object.entries(res.errors);
        setError(`${error} ${type}`);
      } else {
        const { slug } = res.article;
        router.push(`/article/${slug}`);

        setError(null);
      }

      setIsLoading(false);
    });
  };

  const putCurrentArticle = (slug: string) => {
    putArticle({
      slug,
      payload: {
        article: { ...form },
      },
    }).then((res) => {
      if (res?.errors) {
        const [[error, [type]]] = Object.entries(res.errors);
        setError(`${error} ${type}`);
      } else {
        const { slug } = res.article;
        router.push(`/article/${slug}`);

        setError(null);
      }

      setIsLoading(false);
    });
  };

  const submitForm = () => {
    setIsLoading(true);

    if (!user.email) {
      router.push('/login');
      return;
    }

    if (!isEditMode) {
      postNewArticle();
    } else if (isEditMode && slug) {
      putCurrentArticle(slug);
    }
  };

  const handleChangeForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyUpTag = (event: KeyboardEvent<HTMLInputElement>) => {
    const {
      key,
      currentTarget: { value },
    } = event;

    if (key === 'Enter') {
      if (value.length < 1 || form.tagList.includes(value)) {
        return;
      }

      setForm((prev) => ({ ...prev, tagList: [...prev.tagList, value] }));

      event.currentTarget.value = '';
    }
  };

  const deleteTag = (deletedTag: string) => {
    const filteredTags = form.tagList.filter((tag) => tag !== deletedTag);

    setForm((prev) => ({ ...prev, tagList: filteredTags }));
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {error && (
              <ul className="error-messages">
                <li>{error}</li>
              </ul>
            )}

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    name="title"
                    value={form.title}
                    onChange={handleChangeForm}
                    autoFocus
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    name="description"
                    value={form.description}
                    onChange={handleChangeForm}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    name="body"
                    value={form.body}
                    onChange={handleChangeForm}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    onKeyUp={handleKeyUpTag}
                  />
                  <div className="tag-list">
                    {form.tagList.map((tag) => (
                      <span key={tag} className="tag-default tag-pill">
                        <i
                          className="ion-close-round"
                          onClick={() => deleteTag(tag)}
                        ></i>{' '}
                        {tag}
                      </span>
                    ))}
                  </div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  onClick={submitForm}
                  disabled={isLoading}
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPageMain;
