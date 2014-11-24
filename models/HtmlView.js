module.exports = {
  name: 'HtmlView',
  label: 'Html View',
  schema: {
    docType: {type: String, required:true, default: 'HtmlView'},
  	controller: String
  },

  initSchema: function(schema) {
    schema.index({docType: 1, slug: 1, year: -1}, {unique: true});

	  schema.pre('save', function(next) {
      next();
    });
  },

  parentModel: web.cms.conf.models.Document,

  editables: [{"name": "name", "type": "text", "label": "Name", "required": true},
  {"name": "controller", "type": "text", "label": "Controller"},
  {"name": "content", "type": "file", "label": "Content"}  
    ]

}