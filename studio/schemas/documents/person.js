export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Job Title'
    },
    {
      name: 'hierarchyRank',
      type: 'number',
      title: 'Hierarchy Rank',
      description: 'This controls the hierarchy level this person will be displayed at on the People page. e.g. 1 will be placed higher than 2 etc.'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
