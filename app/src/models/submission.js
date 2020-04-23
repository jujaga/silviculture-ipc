module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define('Submission', {
    submissionId: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: 4
      }
    },
  }, {
    comment: 'List of all submissions',
    tableName: 'silvipc_submission'
  });
  Submission.associate = models => {
    Submission.hasOne(models.Answer, {
      foreignKey: 'answerId'
    });
    Submission.hasOne(models.Business, {
      foreignKey: 'businessId'
    });
    Submission.hasMany(models.Location, {
      foreignKey: 'LocationId'
    });
    Submission.hasMany(models.Status, {
      foreignKey: 'statusId'
    });
  };
  return Submission;
};
