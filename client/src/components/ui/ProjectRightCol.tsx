import React from 'react';
import { IEmployee, ProjectInfo } from '../../types/types';
import List from './List';
import placeholderAvatarImage from '../../assets/images/new-avatar-image.jpg';
import DropdownMenu from './DropdownMenu';
import EmployeeDropdownItem from './employee/projects/EmployeeDropdownItem';
import { fetchEmployees } from '../../http/employeeAPI';
import EditableProjectInfo from './employee/projects/EditableProjectInfo';
import Button from './Button';

interface ProjectRightColProps {
  projectInfo: ProjectInfo;
  employee: IEmployee | undefined;
  editor?: boolean;
  handleSelectEmployee?: (employee: IEmployee) => void;
  handleAddProjectInfo?: () => void;
  handleChangeProjectInfo?: (textContent: string, index: number, keyOrValue: 0 | 1) => void;
  handleRemoveProjectInfo?: (i: number) => void;
  errors?: any;
}

function ProjectRightCol({
  editor,
  errors,
  projectInfo,
  handleAddProjectInfo,
  handleSelectEmployee,
  employee,
  handleChangeProjectInfo,
  handleRemoveProjectInfo,
}: ProjectRightColProps) {
  return (
    <div className="right-col">
      <div className="architect">
        {editor && (
          <DropdownMenu
            trigger="Senior architect"
            DropdownItem={EmployeeDropdownItem}
            fetchApi={fetchEmployees}
            onClickItem={handleSelectEmployee}
            triggerClassName={errors.employee && 'error'}
          />
        )}
        {!editor && (
        <h2>
          Meet the architect
        </h2>
        )}
        <img
          src={employee?.avatar ? `${process.env.REACT_APP_API_URL}${employee?.avatar}` : placeholderAvatarImage}
          alt="Senior architect"
          className="avatar"
        />
        <span className={`name ${!employee?.name && 'faded'}`}>
          {employee?.name || 'Employee name'}
        </span>
        <p className={`bio ${!employee?.name && 'faded'}`}>
          {employee?.bio || 'Employee bio'}
        </p>
      </div>
      <div className="info">
        <h2>
          Project information
        </h2>
        <List
          items={projectInfo}
          LastItem={editor ? <Button onClick={() => handleAddProjectInfo!()} buttonStyle="blank">+ Add info</Button> : null}
          className="pairs"
          renderAs={(info, i) => (editor ? (
            <li key={i}>
              <EditableProjectInfo
                index={i!}
                infoKey={info[0]}
                value={info[1]}
                handleChangeProjectInfo={handleChangeProjectInfo!}
                handleRemoveProjectInfo={handleRemoveProjectInfo!}
              />
            </li>
          ) : (
            <li key={i}>
              <div className="key">
                {info[0][0]}
              </div>
              <div className="divider">
                {' '}
              </div>
              <div className="value">
                {info[0][1]}
              </div>
            </li>
          ))}
        />
      </div>
    </div>
  );
}

ProjectRightCol.defaultProps = {
  editor: false,
  errors: undefined,
  handleSelectEmployee: undefined,
  handleAddProjectInfo: undefined,
  handleChangeProjectInfo: undefined,
  handleRemoveProjectInfo: undefined,
};

export default ProjectRightCol;
