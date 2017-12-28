const snippet = `// Before
<Link to=\`/syllabus/\${syllabus.uuid}\` />

// After
<Link to={{ type: ‘SYLLABUS’ payload: { id: syllabus.uuid } }} >

// Even better
<Link to={syllabusRouteAction({ id: syllabus.uuid })} >
`;

export default snippet;
