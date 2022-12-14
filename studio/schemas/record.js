export default {
  name: 'record',
  title: 'Record',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'remaining',
      title: 'Remaining',
      type: 'number',
    },
    {
      name: 'userId',
      title: 'User Id',
      type: 'string',
    },
    {
      name: 'userTel',
      title: 'User Tel',
      type: 'string',
    }
  ],

  preview: {
    select: {
      title: 'title',
      type: 'type',
      category: 'category',
      amount: 'amount',
      remaining: 'remaining',
    },
    prepare(selection) {
      const {amount, category, remaining, type} = selection
      return Object.assign({}, selection, {
        subtitle: amount && remaining &&  `${category} - ${type}, ${amount} - ${remaining}`
      })
    }
  }
}