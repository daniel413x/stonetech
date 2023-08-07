/* eslint-disable */

import React, {
  useContext, useEffect, useState,
} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import Context from '../../../../context/context';
import {
  handleFormDataImages, errorCatch, makeSlug, replaceIndex, removeIndex, placeholderFormFile, mapBodyToEditorBody,
} from '../../../../utils/functions';
import { createProject, fetchProject, updateProject } from '../../../../http/projectAPI';
import { ReactComponent as AddParagraph } from '../../../../assets/icons/add-paragraph.svg';
import EditorSuccessModal from '../EditorSuccessModal';
import { ReactComponent as AddImage } from '../../../../assets/icons/add-image.svg';
import Button from '../../Button';
import LoadingSpinner from '../../LoadingSpinner';
import ProjectRightCol from '../../ProjectRightCol';
import {
  BodyInEditor, FormFile, IEmployee, ProjectInfo,
} from '../../../../types/types';
import EditablePageHeader from '../EditablePageHeader';
import { EMPLOYEES_ROUTE, PROJECTS_ROUTE } from '../../../../utils/consts';
import EditedProject from './EditedProject';
import EditableLocationIcon from './EditableLocationIcon';
import useFormLoading from '../../../../hooks/useFormLoading';
import EditableBody from '../EditableBody';
import ProjectSlider from '../../project_page/Slider';

function ProjectEditor() {
  const {
    modal,
  } = useContext(Context);
  const {
    initLoading,
    setInitLoading,
    formLoading,
    setFormLoading,
  } = useFormLoading();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est..';
  const [images, setImages] = useState<FormFile[]>([placeholderFormFile()]);
  const [employee, setEmployee] = useState<IEmployee>();
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>([]);
  const { pathname } = useLocation();
  const [editedProjectId, setEditedProjectId] = useState<string | undefined>();
  const [fullTitle, setFullTitle] = useState<string>('Project title');
  const [body, setBody] = useState<BodyInEditor>([]);
  const [location, setLocation] = useState<string>('Arlington, Virginia');
  const [client, setClient] = useState<string>('Project client');
  const [galleryTitle, setGalleryTitle] = useState<string>('Title for the Project Gallery');
  const [thumbnail, setThumbnail] = useState<number>(0);
  useEffect(() => {
    if (!images[thumbnail]) {
      setThumbnail(images.length - 1);
    }
  }, [images]);
  useEffect(() => {
    clearErrors();
  }, [images, employee, projectInfo, fullTitle, body, location, client, galleryTitle, thumbnail]);
  const [success, setSuccess] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const onSubmit = async () => {
    try {
      setFormLoading(true);
      const form = new FormData();
      handleFormDataImages(images, form, 'images');
      handleFormDataImages(body, form, 'body');
      form.append('EmployeeId', employee!.id);
      form.append('info', JSON.stringify(projectInfo));
      const appendedThumbnail = images[thumbnail].filename;
      form.append('thumbnail', appendedThumbnail);
      const slug = makeSlug(fullTitle);
      form.append('slug', slug);
      form.append('galleryTitle', galleryTitle);
      form.append('fullTitle', fullTitle);
      form.append('client', client);
      form.append('location', location);
      if (editedProjectId) {
        await updateProject(editedProjectId, form);
      } else {
        await createProject(form);
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
  // edit mode only
  const { slug: editedProjectSlug } = useParams();
  useEffect(() => {
    if (editedProjectSlug) {
      (async () => {
        try {
          const fetchedProject = await fetchProject(editedProjectSlug);
          const {
            images: fetchedImages,
          } = fetchedProject;
          setImages(fetchedImages.map((image: string) => ({
            url: `${process.env.REACT_APP_API_URL}${image}`,
            filename: image,
          })));
          setFullTitle(fetchedProject.fullTitle);
          setBody(mapBodyToEditorBody(fetchedProject.body!));
          setGalleryTitle(fetchedProject.galleryTitle);
          setClient(fetchedProject.client);
          setLocation(fetchedProject.location);
          setProjectInfo(fetchedProject.info);
          setEditedProjectId(fetchedProject.id);
          setEmployee(fetchedProject.employee);
          const fetchedThumbnail = fetchedProject.images.findIndex((img) => img === fetchedProject.thumbnail);
          setThumbnail(fetchedThumbnail!);
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
  const handleAddBodyParagraph = () => {
    setBody([...body, lorem]);
  };
  const handleAddBodyImage = () => {
    setBody([...body, placeholderFormFile()]);
  };
  const handleChangeBodyImage = (file: FormFile, index: number) => {
    const newBody = replaceIndex(body, index, file);
    setBody(newBody);
  };
  const handleRemoveBodyIndex = (index: number) => {
    const newBody = removeIndex(body, index);
    setBody(newBody);
  };
  const handleAddSliderImage = () => {
    setImages([...images, placeholderFormFile()]);
  };
  const handleChangeSliderImage = (file: FormFile, index: number) => {
    const newImages = replaceIndex(images, index, file);
    setImages(newImages);
  };
  const handleRemoveSliderImage = (index: number) => {
    const newImages = images.slice(0, index).concat(images.slice(index! + 1));
    setImages(newImages);
  };
  const handleSelectEmployee = (selectedEmployee: IEmployee) => {
    setEmployee(selectedEmployee);
  };
  const handleSelectThumbnail = (selectedThumbnail: number) => {
    setThumbnail(selectedThumbnail);
  };
  const handleAddProjectInfo = () => {
    setProjectInfo!([...projectInfo, ['Key', 'Value']]);
  };
  const handleChangeProjectInfo = (textContent: string, index: number, keyOrValue: 0 | 1) => {
    const newProjectInfo = [...projectInfo];
    newProjectInfo[index][keyOrValue] = textContent;
    setProjectInfo(newProjectInfo);
  };
  const handleRemoveProjectInfo = (i: number) => {
    const newProjectInfo = removeIndex(projectInfo, i);
    setProjectInfo(newProjectInfo);
  };
  return initLoading ? null : (
    <div id="project-page" className="editor">
      <form className="project-editor editor wrapper" onSubmit={handleSubmit(onSubmit)}>
        <EditorSuccessModal
          open={showModal}
          onClose={() => navigate(`/${EMPLOYEES_ROUTE}/${PROJECTS_ROUTE}`)}
          updatedTitle={fullTitle}
        />
        <div className={`faded-elements ${formLoading && 'loading'} ${success && 'success'}`}>
          <ProjectSlider
            editorImages={images}
            handleAddImage={handleAddSliderImage}
            editedProjectId={editedProjectId}
            selectedThumbnail={thumbnail}
            handleSelectThumbnail={handleSelectThumbnail}
            handleChangeImage={handleChangeSliderImage}
            handleRemoveImage={handleRemoveSliderImage}
            register={register}
          />
          <EditablePageHeader
            title={fullTitle}
            afterTitleInput={(input) => setFullTitle(input)}
            register={register}
            titleRegisterName="fullTitle"
            titleRegisterOptions={{ required: true }}
            errors={errors}
          />
          <div className="lower-row">
            <div className={`left-col ${formLoading && 'loading'}`}>
              <EditableBody
                body={body}
                handleChangeBodyImage={handleChangeBodyImage}
                handleRemove={handleRemoveBodyIndex}
                register={register}
                setBody={setBody}
              />
              <div className="add-buttons">
                <Button buttonStyle="blank" onClick={handleAddBodyParagraph}>
                  <AddParagraph
                    className="icon"
                  />
                  Add Paragraph
                </Button>
                <Button buttonStyle="blank" onClick={handleAddBodyImage}>
                  <AddImage
                    className="icon"
                  />
                  Add Image
                </Button>
              </div>
              <div className="other-fields">
                <div className="col">
                  <h3>
                    Gallery card:
                  </h3>
                  <EditedProject
                    thumbnail={images[thumbnail]?.url}
                    client={client}
                    galleryTitle={galleryTitle}
                    setGalleryTitle={setGalleryTitle}
                    setClient={setClient}
                    errors={errors}
                    register={register}
                  />
                </div>
                <div className="col">
                  <h3>
                    Project location:
                  </h3>
                  <EditableLocationIcon
                    location={location}
                    register={register}
                    setLocation={setLocation}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="bottom-row">
                {formLoading ? <LoadingSpinner /> : ''}
                <Button className="submit-button" disabled={formLoading || success} type="submit">Save</Button>
              </div>
            </div>
            <ProjectRightCol
              handleSelectEmployee={handleSelectEmployee}
              employee={employee}
              editor
              handleAddProjectInfo={handleAddProjectInfo}
              projectInfo={projectInfo}
              handleChangeProjectInfo={handleChangeProjectInfo}
              handleRemoveProjectInfo={handleRemoveProjectInfo}
              errors={errors}
            />
            <input type="hidden" {...register('employee', { required: !employee })} value={employee?.id || ''} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default observer(ProjectEditor);
