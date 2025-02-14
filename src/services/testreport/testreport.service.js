/*eslint no-unused-vars: "warn"*/

const { VERSIONS } = require('@asymmetrik/node-fhir-server-core').constants;
const { resolveSchema } = require('@asymmetrik/node-fhir-server-core');
const FHIRServer = require('@asymmetrik/node-fhir-server-core');
const { ObjectID } = require('mongodb');
const logger = require('@asymmetrik/node-fhir-server-core').loggers.get();

let getTestReport = (base_version) => {
  return resolveSchema(base_version, 'TestReport');
};

let getMeta = (base_version) => {
  return resolveSchema(base_version, 'Meta');
};

module.exports.searchById = (args) =>
  new Promise((resolve, reject) => {
    logger.info('TestReport >>> search');

    // Common search params
    let { base_version, _content, _format, _id, _lastUpdated, _profile, _query, _security, _tag } =
      args;

    // Search Result params
    let { _INCLUDE, _REVINCLUDE, _SORT, _COUNT, _SUMMARY, _ELEMENTS, _CONTAINED, _CONTAINEDTYPED } =
      args;

    // Resource Specific params
    let identifier = args['identifier'];
    let issued = args['issued'];
    let participant = args['participant'];
    let result = args['result'];
    let tester = args['tester'];
    let testscript = args['testscript'];

    // TODO: Build query from Parameters

    // TODO: Query database

    let TestReport = getTestReport(base_version);

    // Cast all results to TestReport Class
    let testreport_resource = new TestReport();
    // TODO: Set data with constructor or setter methods
    testreport_resource.id = 'test id';

    // Return Array
    resolve([testreport_resource]);
  });

module.exports.searchById = (args) =>
  new Promise((resolve, reject) => {
    logger.info('TestReport >>> searchById');

    let { base_version, id } = args;

    let TestReport = getTestReport(base_version);

    // TODO: Build query from Parameters

    // TODO: Query database

    // Cast result to TestReport Class
    let testreport_resource = new TestReport();
    // TODO: Set data with constructor or setter methods
    testreport_resource.id = 'test id';

    // Return resource class
    // resolve(testreport_resource);
    resolve();
  });

module.exports.create = (args, { req }) =>
  new Promise((resolve, reject) => {
    logger.info('TestReport >>> create');

    let { base_version, resource } = args;
    // Make sure to use this ID when inserting this resource
    let id = new ObjectID().toString();

    let TestReport = getTestReport(base_version);
    let Meta = getMeta(base_version);

    // TODO: determine if client/server sets ID

    // Cast resource to TestReport Class
    let testreport_resource = new TestReport(resource);
    testreport_resource.meta = new Meta();
    // TODO: set meta info

    // TODO: save record to database

    // Return Id
    resolve({ id });
  });

module.exports.update = (args, { req }) =>
  new Promise((resolve, reject) => {
    logger.info('TestReport >>> update');

    let { base_version, id, resource } = args;

    let TestReport = getTestReport(base_version);
    let Meta = getMeta(base_version);

    // Cast resource to TestReport Class
    let testreport_resource = new TestReport(resource);
    testreport_resource.meta = new Meta();
    // TODO: set meta info, increment meta ID

    // TODO: save record to database

    // Return id, if recorded was created or updated, new meta version id
    resolve({
      id: testreport_resource.id,
      created: false,
      resource_version: testreport_resource.meta.versionId,
    });
  });

module.exports.remove = (args, context) =>
  new Promise((resolve, reject) => {
    logger.info('TestReport >>> remove');

    let { id } = args;

    // TODO: delete record in database (soft/hard)

    // Return number of records deleted
    resolve({ deleted: 0 });
  });

module.exports.searchByVersionId = (args, context) =>
  new Promise((resolve, reject) => {
    logger.info('TestReport >>> searchByVersionId');

    let { base_version, id, version_id } = args;

    let TestReport = getTestReport(base_version);

    // TODO: Build query from Parameters

    // TODO: Query database

    // Cast result to TestReport Class
    let testreport_resource = new TestReport();

    // Return resource class
    resolve(testreport_resource);
  });

module.exports.history = (args, context) =>
  new Promise((resolve, reject) => {
    logger.info('TestReport >>> history');

    // Common search params
    let { base_version, _content, _format, _id, _lastUpdated, _profile, _query, _security, _tag } =
      args;

    // Search Result params
    let { _INCLUDE, _REVINCLUDE, _SORT, _COUNT, _SUMMARY, _ELEMENTS, _CONTAINED, _CONTAINEDTYPED } =
      args;

    // Resource Specific params
    let identifier = args['identifier'];
    let issued = args['issued'];
    let participant = args['participant'];
    let result = args['result'];
    let tester = args['tester'];
    let testscript = args['testscript'];

    // TODO: Build query from Parameters

    // TODO: Query database

    let TestReport = getTestReport(base_version);

    // Cast all results to TestReport Class
    let testreport_resource = new TestReport();

    // Return Array
    resolve([testreport_resource]);
  });

module.exports.historyById = (args, context) =>
  new Promise((resolve, reject) => {
    logger.info('TestReport >>> historyById');

    // Common search params
    let { base_version, _content, _format, _id, _lastUpdated, _profile, _query, _security, _tag } =
      args;

    // Search Result params
    let { _INCLUDE, _REVINCLUDE, _SORT, _COUNT, _SUMMARY, _ELEMENTS, _CONTAINED, _CONTAINEDTYPED } =
      args;

    // Resource Specific params
    let identifier = args['identifier'];
    let issued = args['issued'];
    let participant = args['participant'];
    let result = args['result'];
    let tester = args['tester'];
    let testscript = args['testscript'];

    // TODO: Build query from Parameters

    // TODO: Query database

    let TestReport = getTestReport(base_version);

    // Cast all results to TestReport Class
    let testreport_resource = new TestReport();

    // Return Array
    resolve([testreport_resource]);
  });
