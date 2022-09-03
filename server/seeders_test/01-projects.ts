import { davidKowalski } from './00-employees';

export const projectOne = '22c2bbd3-3660-41c8-9f2c-57ec7d780614';
export const projectTwo = '79296043-ed4c-4d7d-8ec1-67eeff4f2166';
export const projectThree = '1b9bfe13-c75d-47c3-b11f-d3e7c8ec4088';
export const projectFour = 'b7b3a033-d3aa-43ba-b441-91e0b012bf5a';
export const projectFive = '5120dee1-4d03-4fcb-a001-df9a0752e82c';
export const projectSix = '57e02646-51ed-45d7-b9b4-3b18b2166325';

export default {
  up: async (queryInterface) => queryInterface.bulkInsert('Project', [
    {
      thumbnail: 'test-project-1-1.jpg',
      images: ['test-project-1-1.jpg', 'test-project-1-2.jpg', 'test-project-1-3.jpg', 'test-project-1-4.jpg', 'test-project-1-5.jpg'],
      title: 'Cobblestone kitchen with ceramic tile panels',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-3.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-4.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-4.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
      info: [['Customer', 'Private residence'], ['Area', '24 m²'], ['Turnaround time', '3 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '17.7”']],
      EmployeeId: davidKowalski,
      id: projectOne,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      thumbnail: 'test-project-1-1.jpg',
      images: ['test-project-1-1.jpg', 'test-project-1-2.jpg', 'test-project-1-3.jpg', 'test-project-1-4.jpg', 'test-project-1-5.jpg'],
      title: 'Test blog two',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
      info: [['Customer', 'Private residence'], ['Area', '24 m²'], ['Turnaround time', '3 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '17.7”']],
      EmployeeId: davidKowalski,
      id: projectTwo,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      thumbnail: 'test-project-1-1.jpg',
      images: ['test-project-1-1.jpg', 'test-project-1-2.jpg', 'test-project-1-3.jpg', 'test-project-1-4.jpg', 'test-project-1-5.jpg'],
      title: 'Test blog three',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
      info: [['Customer', 'Private residence'], ['Area', '24 m²'], ['Turnaround time', '3 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '17.7”']],
      EmployeeId: davidKowalski,
      id: projectThree,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      thumbnail: 'test-project-1-1.jpg',
      images: ['test-project-1-1.jpg', 'test-project-1-2.jpg', 'test-project-1-3.jpg', 'test-project-1-4.jpg', 'test-project-1-5.jpg'],
      title: 'Test blog four',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
      info: [['Customer', 'Private residence'], ['Area', '24 m²'], ['Turnaround time', '3 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '17.7”']],
      EmployeeId: davidKowalski,
      id: projectFour,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      thumbnail: 'test-project-1-1.jpg',
      images: ['test-project-1-1.jpg', 'test-project-1-2.jpg', 'test-project-1-3.jpg', 'test-project-1-4.jpg', 'test-project-1-5.jpg'],
      title: 'Test blog five',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
      info: [['Customer', 'Private residence'], ['Area', '24 m²'], ['Turnaround time', '3 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '17.7”']],
      EmployeeId: davidKowalski,
      id: projectFive,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      thumbnail: 'test-project-1-1.jpg',
      images: ['test-project-1-1.jpg', 'test-project-1-2.jpg', 'test-project-1-3.jpg', 'test-project-1-4.jpg', 'test-project-1-5.jpg'],
      title: 'Test blog Six',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-project-1-2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
      info: [['Customer', 'Private residence'], ['Area', '24 m²'], ['Turnaround time', '3 weeks'], ['Ceiling height', '3 m'], ['Wall thickness', '17.7”']],
      EmployeeId: davidKowalski,
      id: projectSix,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Project', null, {}),
};
