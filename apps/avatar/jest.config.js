module.exports = {
  name: 'avatar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/avatar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
