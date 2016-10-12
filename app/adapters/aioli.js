import DS from 'ember-data';
import UrlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(UrlTemplates, {
  namespace: 'api',
  urlTemplate: '{+host}/{+namespace}/bacons/{baconId}/aiolis{/id}',
  urlSegments: {
    baconId: function (type, id, snapshot, query) {
      console.log('Adapter, aioli, type: ', type)
      console.log('Adapter, aioli, id: ', id)
      console.log('Adapter, aioli, snapshot: ', snapshot)
      console.log('Adapter, aioli, snapshot: ', snapshot.adapterOptions.bacon_id)
      console.log('Adapter, aioli, query: ', query)
      return snapshot.adapterOptions.bacon_id;
    },
  },
});
