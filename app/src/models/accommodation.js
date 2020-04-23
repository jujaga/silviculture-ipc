module.exports = (sequelize, DataTypes) => {
  const Accommodation = sequelize.define('Accommodation', {
    accommodationId: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: 4
      }
    },
    accommodationType: {
      allowNull: true,
      comment: 'Accommodation type',
      type: DataTypes.STRING(30),
      unique: false
    }
  }, {
    comment: 'List of all accommodations',
    tableName: 'silvipc_accommodation'
  });
  Accommodation.associate = models => {
    Accommodation.belongsTo(models.Location, {
      foreignKey: 'locationId'
    });
    Accommodation.hasOne(models.Address, {
      foreignKey: 'addressId'
    });
  };
  return Accommodation;
};
