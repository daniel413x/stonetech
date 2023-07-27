import { v4 as uuid } from 'uuid';

export const blogOne = 'b6e500d3-2e6f-447d-9d9c-3599cbe0fc09';

const massTestBlogs = [];

for (let n = 2; n <= 52; n += 1) {
  const genericTestBlog = {
    thumbnail: 'test-blog-filler.jpg',
    title: `Test blog ${n}`,
    slug: `test-blog-${n}`,
    snippet: 'Integer malesuada nunc vel risus commodo viverra maecenas. Sed egestas egestas fringilla phasellus faucibus scelerisque.',
    body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-blog-filler.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.'],
    id: uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  massTestBlogs.push(genericTestBlog);
}

export default {
  up: async (queryInterface) => queryInterface.bulkInsert('BlogPost', [
    {
      thumbnail: 'test-blog-1-1.jpg',
      snippet: 'Integer malesuada nunc vel risus commodo viverra maecenas. Sed egestas egestas fringilla phasellus faucibus scelerisque.',
      title: 'To marble or not to marble',
      slug: 'to-marble-or-not-to-marble',
      body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-blog-1-2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'test-blog-1-3.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.', 'Consectetur a erat nam at lectus urna duis convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Amet volutpat consequat mauris nunc.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Non tellus orci ac auctor. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur a erat nam at lectus urna duis convallis. Amet volutpat consequat mauris nunc. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis'],
      id: blogOne,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ...massTestBlogs,
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('BlogPost', null, {}),
};
