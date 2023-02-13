import { v4 as uuid } from 'uuid';
import { davidKowalski } from '../utils/consts';

export const projectOne = '22c2bbd3-3660-41c8-9f2c-57ec7d780614';
export const projectTwo = '29eb1b0b-4fa9-407c-a985-3822f2b033ab';

const massTestProjects = [];

for (let n = 2; n <= 52; n += 1) {
  const genericTestProject = {
    thumbnail: 'test-project-filler.jpg',
    images: ['test-project-filler.jpg', 'test-project-filler.jpg', 'test-project-filler.jpg', 'test-project-filler.jpg', 'test-project-filler.jpg'],
    galleryTitle: 'Test project',
    client: 'Private',
    fullTitle: `Test project ${n}`,
    location: 'Washington, D.C.',
    body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
    info: [['Customer', 'Private residence'], ['Area', '24 m²'], ['Turnaround time', '3 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '17.7”']],
    EmployeeId: davidKowalski,
    id: uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  massTestProjects.push(genericTestProject);
}

export default {
  up: async (queryInterface) => queryInterface.bulkInsert('Project', [
    {
      thumbnail: 'test-project-1-1.jpg',
      images: ['test-project-1-1.jpg', 'test-project-filler-2.jpg', 'test-project-filler-2.jpg', 'test-project-filler-2.jpg', 'test-project-filler-2.jpg', 'test-project-filler-2.jpg', 'test-project-filler-2.jpg', 'test-project-filler-2.jpg', 'test-project-filler-2.jpg'],
      galleryTitle: 'Cobblestone kitchen',
      location: 'Arlington, Virginia',
      client: 'Crystal City Tavern',
      fullTitle: 'Cobblestone kitchen with ceramic tile panels',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
      info: [['Customer', 'Restaurant establishment'], ['Area', '24 m²'], ['Turnaround time', '2 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '22.7”']],
      EmployeeId: davidKowalski,
      id: projectOne,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      thumbnail: 'test-project-2-1.jpg',
      images: ['test-project-filler-2.jpg', 'test-project-2-1.jpg', 'test-project-filler-2.jpg', 'test-project-filler-2.jpg', 'test-project-filler-2.jpg'],
      galleryTitle: 'Chillout zone',
      location: 'Bethesda, Maryland',
      client: 'Private',
      fullTitle: 'Chillout zone for rest and relaxation',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-2-2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-2-3.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-2-4.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-2-5.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
      info: [['Customer', 'Private residence'], ['Area', '24 m²'], ['Turnaround time', '3 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '17.7”']],
      EmployeeId: davidKowalski,
      id: projectTwo,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ...massTestProjects,
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Project', null, {}),
};
