'use client';

import { ArticlePostRequestType } from '@/types/article';
import { produce } from 'immer';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { postArticleRegister } from '@/api/article';

const page = () => {
  const router = useRouter();

  const [formInput, setFormInput] = useState({
    title: '',
    description: '',
    body: '',
    tagList: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<null | string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const articleInfo: ArticlePostRequestType = {
      article: {
        title: formInput.title,
        description: formInput.description,
        body: formInput.body,
        tagList: formInput.tagList,
      },
    };
    console.log(articleInfo);
    submitArticle(articleInfo);
  };

  const submitArticle = async (userInfo: ArticlePostRequestType) => {
    await postArticleRegister(userInfo).then((res) => {
      if (res.errors) {
        setIsLoading(false);
        const errorText = `${Object.keys(res.errors)} ${
          Object.values(res.errors)[0]
        }`;
        setError(errorText);
      } else {
      }
    });
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      const currentValue = event.currentTarget.value;
      setFormInput(
        produce((input) => {
          input.tagList = [...input.tagList, currentValue];
        }),
      );
      event.currentTarget.value = '';
    }
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

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    value={formInput.title}
                    onChange={(e) =>
                      setFormInput(
                        produce((input) => {
                          input.title = e.target.value;
                        }),
                      )
                    }
                    name="title"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    value={formInput.description}
                    onChange={(e) =>
                      setFormInput(
                        produce((input) => {
                          input.description = e.target.value;
                        }),
                      )
                    }
                    name="description"
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    value={formInput.body}
                    onChange={(e) =>
                      setFormInput(
                        produce((input) => {
                          input.body = e.target.value;
                        }),
                      )
                    }
                    name="body"
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    onKeyUp={handleKeyUp}
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                  />
                  {formInput.tagList.length > 0 &&
                    formInput.tagList.map((tag) => (
                      <div key={tag} className="tag-list">
                        <span className="tag-default tag-pill">
                          {' '}
                          <i className="ion-close-round"></i> {tag}
                        </span>
                      </div>
                    ))}
                </fieldset>
                <button
                  onClick={handleSubmit}
                  disabled={
                    isLoading ||
                    formInput.title.length === 0 ||
                    formInput.description.length === 0 ||
                    formInput.body.length === 0
                  }
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
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

export default page;
