module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    addressId: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: 4
      }
    },
    addressType: {
      allowNull: false,
      comment: 'Address type',
      type: DataTypes.STRING(30),
      unique: false
    },
    addressLine1: {
      allowNull: false,
      comment: 'Address line 1',
      type: DataTypes.STRING(255),
      unique: false
    },
    addressLine2: {
      allowNull: false,
      comment: 'Address line 2',
      type: DataTypes.STRING(255),
      unique: false
    },
    city: {
      allowNull: false,
      comment: 'City name',
      type: DataTypes.STRING(255),
      unique: false
    },
    province: {
      allowNull: false,
      comment: 'Province',
      type: DataTypes.STRING(30),
      unique: false
    },
    postalCode: {
      allowNull: false,
      comment: 'Postal code',
      type: DataTypes.STRING(30),
      unique: false
    }
  }, {
    comment: 'List of all addresses',
    tableName: 'silvipc_address'
  });
  Address.associate = models => {
    Address.belongsTo(models.Accommodation, {
      foreignKey: 'addressId'
    });
    Address.belongsTo(models.Business, {
      foreignKey: 'addressId'
    });
    Address.belongsTo(models.Location, {
      foreignKey: 'addressId'
    });
  };
  return Address;
};
