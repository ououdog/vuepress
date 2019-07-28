module.exports = {
    title: 'Hello 歐陽',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
                title: 'Group 1',
                collapsable: false,
                children: [
                    '/js/promise/note.md'
                ]
            },
            {
                title: 'Group 2',
                collapsable: false,
                children: [
                    '/oy.md',
                    '/js/promise/note.md'
                ]
            }
        ]
    }
}