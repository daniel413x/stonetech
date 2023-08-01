import { v4 as uuid } from 'uuid';
import { davidKowalski } from '../utils/consts';

export const projectOne = '22c2bbd3-3660-41c8-9f2c-57ec7d780614';
export const projectTwo = '29eb1b0b-4fa9-407c-a985-3822f2b033ab';

const massTestProjects = [];

for (let n = 2; n <= 52; n += 1) {
  const genericTestProject = {
    thumbnail: '8792842a-60c9-4e6b-b757-708d0a0ae055.jpg',
    images: ['8792842a-60c9-4e6b-b757-708d0a0ae055.jpg', '8792842a-60c9-4e6b-b757-708d0a0ae055.jpg', '8792842a-60c9-4e6b-b757-708d0a0ae055.jpg', '8792842a-60c9-4e6b-b757-708d0a0ae055.jpg', '8792842a-60c9-4e6b-b757-708d0a0ae055.jpg'],
    galleryTitle: 'Demo project',
    client: 'Private',
    fullTitle: `Demo project ${n}`,
    slug: `demo-project-${n}`,
    location: 'Washington, D.C.',
    body: ['Lorem ipsum dolor sit amet'],
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
      thumbnail: '1370e958-539c-453f-bb0b-616a2c0449bf.jpg',
      images: ['1370e958-539c-453f-bb0b-616a2c0449bf.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg'],
      galleryTitle: 'Cobblestone kitchen',
      slug: 'cobblestone-kitchen-with-ceramic-tile-panels',
      location: 'Arlington, Virginia',
      client: 'Crystal City Tavern',
      fullTitle: 'Cobblestone kitchen with ceramic tile panels',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
      info: [['Customer', 'Restaurant establishment'], ['Area', '24 m²'], ['Turnaround time', '2 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '22.7”']],
      EmployeeId: davidKowalski,
      id: projectOne,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      thumbnail: '1df1575d-55ad-433e-8ba9-710cbe5b4147.jpg',
      images: ['9619b657-5912-4b47-aec9-2a25c944395a.jpg', '1df1575d-55ad-433e-8ba9-710cbe5b4147.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg', '9619b657-5912-4b47-aec9-2a25c944395a.jpg'],
      galleryTitle: 'Chillout zone',
      slug: 'chillout-zone-for-rest-and-relaxation',
      location: 'Bethesda, Maryland',
      client: 'Private',
      fullTitle: 'Chillout zone for rest and relaxation',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', '1370e958-539c-453f-bb0b-616a2c0449bf.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', '1370e958-539c-453f-bb0b-616a2c0449bf.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', '1370e958-539c-453f-bb0b-616a2c0449bf.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', '1370e958-539c-453f-bb0b-616a2c0449bf.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
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
