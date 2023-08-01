import React, {
  useContext, useEffect, useState,
} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { createBlog, fetchBlog, updateBlog } from '../../../../http/blogAPI';
import Button from '../../Button';
import { ReactComponent as AddParagraph } from '../../../../assets/icons/add-paragraph.svg';
import { ReactComponent as AddImage } from '../../../../assets/icons/add-image.svg';
import placeholderHeaderImageJpg from '../../../../assets/images/new-header-image.jpg';
import ImageControl from '../ImageControl';
import EditorSuccessModal from '../EditorSuccessModal';
import {
  errorCatch, replaceIndex, placeholderFormFile, mapBodyToEditorBody, removeIndex, handleFormDataImages, makeSlug,
} from '../../../../utils/functions';
import LoadingSpinner from '../../LoadingSpinner';
import Context from '../../../../context/context';
import EditablePageHeader from '../EditablePageHeader';
import { EMPLOYEES_ROUTE, BLOG_ROUTE } from '../../../../utils/consts';
import EditableBody from '../EditableBody';
import { BodyInEditor, FormFile } from '../../../../types/types';
import useFormLoading from '../../../../hooks/useFormLoading';

function BlogEditor() {
  const {
    modal,
  } = useContext(Context);
  const {
    initLoading,
    setInitLoading,
    formLoading,
    setFormLoading,
  } = useFormLoading();
  const navigate = useNavigate();
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est..';
  const { pathname } = useLocation();
  const [editedBlogId, setEditedBlogId] = useState<string | undefined>();
  const [title, setTitle] = useState<string>('New Blog Post Title');
  const [snippet, setSnippet] = useState<string>('Snippet');
  const [body, setBody] = useState<BodyInEditor>([]);
  const [thumbnail, setThumbnail] = useState<FormFile>({ url: placeholderHeaderImageJpg, filename: `${uuid()}.jpg` });
  const [success, setSuccess] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm();
  useEffect(() => {
    clearErrors();
  }, [title, snippet, body, thumbnail]);
  const onSubmit = async () => {
    try {
      setFormLoading(true);
      const form = new FormData();
      form.append('title', title);
      form.append('snippet', snippet);
      if (thumbnail.file) {
        form.append('files', thumbnail.file as File, thumbnail.filename);
      }
      form.append('thumbnail', thumbnail.filename);
      const slug = makeSlug(title.toString());
      form.append('slug', slug);
      handleFormDataImages(body, form, 'body');
      if (editedBlogId) {
        await updateBlog(editedBlogId, form);
      } else {
        await createBlog(form);
      }
      setTimeout(() => {
        setSuccess(true);
        setShowModal(true);
      }, 300);
    } catch (error: any) {
      modal.setErrorModalMessage(errorCatch(error));
    } finally {
      setTimeout(() => {
        setFormLoading(false);
      }, 300);
    }
  };
  const { slug: editedBlogPostSlug } = useParams();
  useEffect(() => {
    if (editedBlogPostSlug) {
      (async () => {
        try {
          const fetchedBlog = await fetchBlog(editedBlogPostSlug);
          setEditedBlogId(fetchedBlog.id);
          setBody(mapBodyToEditorBody(fetchedBlog.body!));
          setThumbnail({
            url: `${process.env.REACT_APP_API_URL}${fetchedBlog.thumbnail}`,
            filename: fetchedBlog.thumbnail,
          });
          setTitle(fetchedBlog.title);
          setSnippet(fetchedBlog.snippet || 'Snippet');
          setInitLoading(false);
        } catch (error: any) {
          modal.setErrorModalMessage(errorCatch(error));
        }
      })();
    } else {
      setInitLoading(false);
    }
  }, []);
  const routes = pathname.split(/\//).filter(Boolean);
  const breadcrumbTrails = routes.slice();
  breadcrumbTrails[breadcrumbTrails.length - 1] = 'Create';
  const handleChangeBodyImage = (file: FormFile, index: number) => {
    const newBody = replaceIndex(body, index, file);
    setBody(newBody);
  };
  const handleRemoveBodyIndex = (index: number) => {
    const newBody = removeIndex(body, index);
    setBody(newBody);
  };
  const handleAddParagraph = () => {
    setBody([...body, lorem]);
  };
  const handleAddImage = () => {
    setBody([...body, placeholderFormFile()]);
  };
  return initLoading ? null : (
    // title can not update to a fetched blog's title without initLoading
    <div id="article-page" className="editor">
      <form className="article-page-editor wrapper" onSubmit={handleSubmit(onSubmit)}>
        <EditorSuccessModal
          open={showModal}
          onClose={() => navigate(`/${EMPLOYEES_ROUTE}/${BLOG_ROUTE}`)}
          updatedTitle={title}
        />
        <div className={`faded-elements ${formLoading && 'loading'} ${success && 'success'}`}>
          <EditablePageHeader
            title={title}
            afterTitleInput={(input) => setTitle(input)}
            register={register}
            titleRegisterName="title"
            titleRegisterOptions={{ required: true }}
            snippet={snippet}
            snippetRegisterName="snippet"
            snippetRegisterOptions={{ required: true }}
            afterSnippetInput={(input) => setSnippet(input)}
            errors={errors}
          />
          <ImageControl
            register={register}
            registerName="thumbnail"
            initial={thumbnail.url}
            className="header-image"
            returnFormFile={(formFile) => setThumbnail(formFile)}
          />
          <div className={`body ${formLoading && 'formLoading'}`}>
            <EditableBody
              body={body}
              handleChangeBodyImage={handleChangeBodyImage}
              register={register}
              setBody={setBody}
              handleRemove={handleRemoveBodyIndex}
            />
            <div className="add-buttons">
              <Button buttonStyle="blank" onClick={handleAddParagraph}>
                <AddParagraph
                  className="icon"
                />
                Add Paragraph
              </Button>
              <Button buttonStyle="blank" onClick={handleAddImage}>
                <AddImage
                  className="icon"
                />
                Add Image
              </Button>
            </div>
          </div>
        </div>
        <div className="bottom-row">
          {formLoading ? <LoadingSpinner /> : ''}
          <Button className="submit-button" disabled={formLoading || success} type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}

export default observer(BlogEditor);
