module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    statusId: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: 4
      }
    },
    status: {
      allowNull: false,
      comment: 'The status',
      type: DataTypes.STRING(255),
      unique: false
    },
    notes: {
      allowNull: false,
      comment: 'Optional status notes',
      type: DataTypes.STRING(255),
      unique: false
    },
    updatedBy: {
      allowNull: false,
      comment: 'Who last updated this',
      type: DataTypes.STRING(255),
      unique: false
    },
    externalRefNumber: {
      allowNull: false,
      comment: 'External reference number',
      type: DataTypes.STRING(255),
      unique: false
    },
    externalRefLink: {
      allowNull: false,
      comment: 'External reference url link',
      type: DataTypes.STRING(255),
      unique: false
    }
  }, {
    comment: 'List of all statuses',
    tableName: 'silvipc_status'
  });
  Status.associate = models => {
    Status.belongsTo(models.Submission, {
      foreignKey: 'submissionId'
    });
  };
  return Status;
};
