import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  buildURL: function(modelName, id, snapshot, requestType, query) {
    console.log('Adapter, aioli, modelName: ', modelName)
    console.log('Adapter, aioli, id: ', id)
    console.log('Adapter, aioli, snapshot: ', snapshot)
    console.log('Adapter, aioli, requestType: ', requestType)
    console.log('Adapter, aioli, query: ', query)
    var url = this._super(...arguments)
    console.log('Adapter, aioli, url (before tampering): ', url)
    var url_new = url.replace('/api', '/api/bacons/' + snapshot.adapterOptions.bacon_id)
    console.log('Adapter, aioli, url (after tampering): ', url_new)
    return url_new;
  }
});
