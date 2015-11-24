Package.describe({
  name: 'universe:react-flipcard',
  version: '0.1.2',
  // Brief, one-line summary of the package.
  summary: 'React flip card component',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vazco/universe-react-flipcard',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'universe:modules@0.6.1',
    'universe:utilities-react@0.5.3'
  ]);

  api.addFiles('flip-card.css', 'client');
  api.addFiles('index.import.jsx');

});