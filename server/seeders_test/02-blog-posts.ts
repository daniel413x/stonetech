import { v4 as uuid } from 'uuid';

export const blogOne = 'b6e500d3-2e6f-447d-9d9c-3599cbe0fc09';

const massTestBlogs = [];

for (let n = 2; n <= 52; n += 1) {
  const genericTestBlog = {
    thumbnail: '613af1ec-e0c1-4289-8fe6-919fa7eab8b5.jpg',
    title: `Test blog ${n}`,
    slug: `test-blog-${n}`,
    snippet: 'Integer malesuada nunc vel risus commodo viverra maecenas. Sed egestas egestas fringilla phasellus faucibus scelerisque.',
    body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', '613af1ec-e0c1-4289-8fe6-919fa7eab8b5.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
    id: uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  massTestBlogs.push(genericTestBlog);
}

export default {
  up: async (queryInterface) => queryInterface.bulkInsert('BlogPost', [
    {
      thumbnail: 'aeba3deb-9de4-456d-a027-13e3b40a5038.jpg',
      snippet: 'Integer malesuada nunc vel risus commodo viverra maecenas. Sed egestas egestas fringilla phasellus faucibus scelerisque.',
      title: 'To marble or not to marble',
      slug: 'to-marble-or-not-to-marble',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', '412898aa-8c60-4aee-ab48-c0f6b625d8e5.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', '8515c69d-d38a-447b-85d2-d24f6175da88.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'Consectetur a erat nam at lectus urna duis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Amet volutpat consequat mauris nunc.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis'],
      id: blogOne,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ...massTestBlogs,
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('BlogPost', null, {}),
};
