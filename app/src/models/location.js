module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    locationId: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: 4
      }
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    name: {
      allowNull: false,
      comment: 'The location name',
      type: DataTypes.STRING(255),
      unique: false
    },
    order: {
      allowNull: false,
      comment: 'The location name',
      type: DataTypes.INTEGER,
      unique: false
    }
  }, {
    comment: 'List of all locations and timespans',
    tableName: 'silvipc_location'
  });
  Location.associate = models => {
    Location.belongsTo(models.Submission, {
      foreignKey: 'submissionId'
    });
    Location.hasOne(models.Address, {
      foreignKey: 'addressId'
    });
    Location.hasMany(models.Accommodation, {
      foreignKey: 'accommodationId'
    });
  };
  return Location;
};
