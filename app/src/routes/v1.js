const router = require('express').Router();

const keycloak = require('../components/keycloak');
const validation = require('../middleware/validation');

const emailRouter = require('./v1/email');
const ipcRouter = require('./v1/ipc');

/** Base v1 Responder */
router.get('/', (_req, res) => {
  res.status(200).json({
    endpoints: [ '/ipc']
  });
});

/** Email Router */
router.use('/email', keycloak.protect(), emailRouter);

/** IPC Router */
router.use('/ipc', validation.validateIPC, ipcRouter);

module.exports = router;
