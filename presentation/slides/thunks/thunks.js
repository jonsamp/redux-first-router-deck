const snippet = `const routesMap = {
  'location/HOME': '/',
  'location/SYLLABI': { path: '/syllabi', thunk: syllabiThunk },
  'location/SYLLABUS': { path: '/syllabi/:id', thunk: syllabusThunk },
  'location/SYLLABUS_EDIT': { path: '/syllabi/:id/edit', thunk: syllabusThunk }'
}
`;

export default snippet;
