
// <div class='container-1 skill-container'>
// <h2></h2>
// </div>
// <div class='container-2 skill-container'>
// <h2></h2>
// </div>

export const get_skills = (technology) => {
    const python = {
        title: ['Frameworks', 'Libraries'],
        frameworks: [
            'Python',
            'Django',
            'Flask',
        ],
        libraries: [
            'pandas',
            'numpy',
            'plotly',
        ],
        icons: [
            '../img/icons/python-icon.png',
            '../img/icons/django-icon.png',
            '../img/icons/flask-icon.png',
            '../img/icons/pandas-icon.png',
            '../img/icons/numpy-icon.png',
            '../img/icons/plot_ly-icon.svg',
        ],
    };

    const web_design = {
        title: ['CSS Frameworks',],
        cssFrameworks: [
            'Bootstrap',
            'Tailwind',
        ]
    };

    const javascript = {
        title: ['Libraries', 'Other Technologies'],
        others: [
            'Node',
            'Express',
            'Svelte',
            'Vite',
        ],
        libraries: [
            'React JS',
            'Typescript',
        ],
    };

    const database = {
        title: ['SQL', 'NoSQL'],
        sqlDatabases: [
            'PostgreSQL',
        ],
        noSqlDatabases: [
            'MongoDB',
        ]
    };

    if (technology === 'Python') return python;
    if (technology === 'Javascript') return javascript;
    if (technology === 'Web Design') return web_design;
    if (technology === 'Database') return database;
}